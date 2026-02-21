// requires: inventoryprofilesnext

const $HintsManagerNG = Java.loadClass(
    'org.anti_ad.mc.ipnext.integration.HintsManagerNG'
);

ForgeEvents.onEvent(
    'net.minecraftforge.client.event.ScreenEvent$Init$Pre',
    (event) => {
        global.ipnIgnore(event);
    }
);

// 在 Mek 和集成动力模组的机器 GUI 中自动隐藏 IPN
global.ipnIgnore = (event) => {
    let screen = event.getScreen();
    let className = screen.getClass().getName();

    if (
        !className.startsWith('mekanism') &&
        !className.startsWith('org.cyclops.integrateddynamics')
    ) {
        return;
    }

    try {
        let hints = $HintsManagerNG.INSTANCE.getHints(screen.getClass());
        hints.setIgnore(true);
    } catch (e) {
        console.error('IPN 忽略失败：' + e);
    }
};
