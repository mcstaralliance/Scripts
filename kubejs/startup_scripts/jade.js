// requires: jade

/**
 * Jade 魔力显示
 * 参考：https://www.mcmod.cn/post/3406.html
 * 协议：CC BY-NC-SA 4.0
 */

/** @type {typeof import("@package/snownee/jade/impl").$WailaClientRegistration} */
let $WailaClientRegistration;
/** @type {typeof import("@package/snownee/jade/api").$BlockAccessor} */
let $WailaBlockAccessor;
if (Platform.isClientEnvironment()) {
    $WailaClientRegistration = Java.loadClass('snownee.jade.impl.WailaClientRegistration');
    $WailaBlockAccessor = Java.loadClass('snownee.jade.api.BlockAccessor');
}

// 1.21.1 NeoForge 中，init 可以正常注册回调，postInit 不行
StartupEvents.init((event) => {
    if (!Platform.isClientEnvironment()) return;

    try {
        let registration = $WailaClientRegistration.instance();

        /**
         * @param {(
         * rootElement: import("@package/snownee/jade/api/ui").$IBoxElement,
         * accessor: import("@package/snownee/jade/api").$BlockAccessor,
         * blockEntity: import("@package/net/minecraft/world/level/block/entity").$BlockEntity)
         * => void
         * } callback
         */
        let registerTooltip = (callback) => {
            registration.addTooltipCollectedCallback(0, (rootElement, accessor) => {
                if (!(accessor instanceof $WailaBlockAccessor)) return;

                let blockEntity = accessor.getBlockEntity();
                if (!blockEntity) return;

                callback(rootElement, accessor, blockEntity);
            });
        };

        /**
         * @param {import("@package/net/minecraft/network/chat").$Component} comp
         * @param {import("@package/snownee/jade/api/ui").$IBoxElement} rootElement
         */
        let addToTooltip = (comp, rootElement) => {
            rootElement.getTooltip()['add(net.minecraft.network.chat.Component)'](comp);
        };

        // init 中还拿不到 getString，先缓存组件
        let manaInfo = Text.translate('jade.tooltip.mana');
        let notBound = Text.translate('jade.tooltip.notbound');
        let boundTo = Text.translate('jade.tooltip.boundto');

        registerTooltip((rootElement, accessor, blockEntity) => {
            if (!blockEntity.getCurrentMana || !blockEntity.getMaxMana) return;

            // 多种颜色创造魔力池
            if (accessor.block.id.includes('creative_mana_pool')) {
                addToTooltip(Text.aqua(`${manaInfo.getString()}: `).append(Text.gold('∞')), rootElement);
                return;
            }

            let mana = blockEntity.getCurrentMana();
            let cap = blockEntity.getMaxMana();
            addToTooltip(Text.aqua(`${manaInfo.getString()}: ${mana}/${cap}`), rootElement);
        });

        registerTooltip((rootElement, accessor, blockEntity) => {
            if (!blockEntity.getMana || !blockEntity.getMaxMana || !blockEntity.getBindingPos) return;

            let pos = blockEntity.getBindingPos();
            let mana = blockEntity.getMana();
            let cap = blockEntity.getMaxMana();
            // prettier-ignore
            addToTooltip(
                Text.aqua(
                    `${
                        pos == null
                            ? notBound.getString()
                            : `${boundTo.getString()} ${pos.x} ${pos.y} ${pos.z}`
                    }`
                ),
                rootElement
            );
            addToTooltip(Text.aqua(`${manaInfo.getString()}: ${mana}/${cap}`), rootElement);
        });

        registerTooltip((rootElement, accessor, blockEntity) => {
            if (accessor.block.id != 'botania:runic_altar') return;

            let mana = blockEntity.getCurrentMana();
            let cap = blockEntity.manaToGet;
            // 符文祭坛空闲时不显示
            if (cap == 0) return;
            addToTooltip(Text.aqua(`${manaInfo.getString()}: ${mana}/${cap}`), rootElement);
        });
    } catch (e) {
        console.error('Jade 回调注册失败：' + e);
    }
});
