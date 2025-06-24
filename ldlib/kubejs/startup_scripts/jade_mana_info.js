// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// Code From:https://www.mcmod.cn/post/3406.html
// Code Under  CC BY-NC-SA 

let $WailaClientRegistration;
let $WailaBlockAccessor;
if (Platform.isClientEnvironment()) {
    $WailaClientRegistration = Java.loadClass('snownee.jade.impl.WailaClientRegistration');
    $WailaBlockAccessor = Java.loadClass('snownee.jade.api.BlockAccessor');
}
 
StartupEvents.postInit(event => {
    if (!Platform.isClientEnvironment()) return;
 
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        if (accessor.getBlockEntity() == null) return;
        if (accessor.getBlockEntity().getCurrentMana == null || accessor.getBlockEntity().getMaxMana == null) return;
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        let mana = accessor.getBlockEntity().getCurrentMana();
        let cap = accessor.getBlockEntity().getMaxMana();
        addToTooltip(Text.aqua(`${Text.translate('jade.tooltip.mana').getString()}: ${mana}/${cap}`));
    });
 
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        if (accessor.getBlockEntity() == null) return;
        let blockEntity = accessor.getBlockEntity();
        if (blockEntity.getMana == null || blockEntity.getMaxMana == null || blockEntity.getBindingPos == null) return;
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        let pos = blockEntity.getBindingPos();
        let mana = blockEntity.getMana();
        let cap = blockEntity.getMaxMana();
        addToTooltip(
            Text.aqua(
                `${
                    pos == null
                        ? Text.translate('jade.tooltip.notbound').getString()
                        : `${Text.translate('jade.tooltip.boundto').getString()} ${pos.x} ${pos.y} ${pos.z}`
                }`
            )
        );
        addToTooltip(Text.aqua(`${Text.translate('jade.tooltip.mana').getString()}: ${mana}/${cap}`));
    });
 
    $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
        if (!(accessor instanceof $WailaBlockAccessor)) return;
        if (accessor.block.id != 'botania:runic_altar') return;
        let addToTooltip = comp => tooltip['add(net.minecraft.network.chat.Component)'](comp);
        let mana = accessor.getBlockEntity().getCurrentMana();
        let cap = accessor.getBlockEntity().manaToGet;
        addToTooltip(Text.aqua(`${Text.translate('jade.tooltip.mana').getString()}: ${mana}/${cap}`));
    });
});