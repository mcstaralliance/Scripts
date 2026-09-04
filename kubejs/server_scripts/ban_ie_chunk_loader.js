const $MultiblockFormEvent = Java.loadClass('blusunrize.immersiveengineering.api.multiblocks.MultiblockHandler$MultiblockFormEvent');
const $IEServerConfig = Java.loadClass('blusunrize.immersiveengineering.common.config.IEServerConfig');
const $Integer = Java.loadClass('java.lang.Integer');

// 构造 Integer，防止 KubeJS 将 Double 传入 ConfigValue#set(Object)
const targetConsumption = $Integer.valueOf('32001');

NativeEvents.onEvent($MultiblockFormEvent, (event) => {
    const { multiblock, entity } = event;

    if (multiblock.uniqueName === 'immersiveengineering:multiblocks/chunk_loader' && entity.type === 'minecraft:player') {
        // event.setCanceled(true);
        entity.tell(Text.aqua('[小域] ').append(Text.red('已禁用')));
    }
});

// 设置耗能超过机器内部 32000 FE 缓存，使已有的区块加载器停机
ServerEvents.loaded(() => {
    const currentConsumption = $IEServerConfig.MACHINES.resonanz_observer_consumption.get();

    if (currentConsumption.intValue() !== targetConsumption.intValue()) {
        $IEServerConfig.MACHINES.resonanz_observer_consumption.set(targetConsumption);
    }
});
