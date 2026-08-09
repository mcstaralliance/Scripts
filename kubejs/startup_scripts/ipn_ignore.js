// requires: inventoryprofilesnext

const $HintsManagerNG = Java.loadClass('org.anti_ad.mc.ipnext.integration.HintsManagerNG');

// prettier-ignore
const ipnIgnoreClassPrefixes = [
    'mekanism',
    'org.cyclops.integrated'
];
const shouldIgnore = true;

NativeEvents.onEvent('net.neoforged.neoforge.client.event.ScreenEvent$Init$Pre', (event) => {
    global.ipnIgnore(event);
});

/**
 * 在 Mek 和集成动力模组的机器 GUI 中自动隐藏 IPN 按钮
 * @param {import("@package/net/neoforged/neoforge/client/event").$ScreenEvent$Init$Pre} event
 */
global.ipnIgnore = (event) => {
    try {
        let screen = event.getScreen();
        // KubeJS 7.2 ban 掉了 getClass，因此使用字符串中 @ 前面的全限定类名
        let className = String(screen).split('@')[0];

        if (!ipnIgnoreClassPrefixes.some((prefix) => className.startsWith(prefix))) {
            return;
        }

        let hints = $HintsManagerNG.INSTANCE.getHints(Java.loadClass(className));

        if (hints.getIgnore() !== shouldIgnore) {
            hints.setIgnore(shouldIgnore);
        }
    } catch (e) {
        console.error('IPN 忽略失败：' + e);
    }
};
