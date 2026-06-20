const OVERRIDES = {
    'block.mekanism.sulfuric_acid': '液态硫酸',
    'gas.mekanism.sulfuric_acid': '气态硫酸'
};

const $HashMap = Java.loadClass('java.util.HashMap');
const $Language = Java.loadClass('net.minecraft.locale.Language');
const $Minecraft = Java.loadClass('net.minecraft.client.Minecraft');

let storageField = null;
let patchedInstance = null;

// 不修改或新增材质包，反射修改翻译键值的不可变 Map
ClientEvents.tick(() => {
    let lang = $Minecraft.getInstance().options.languageCode;
    if (lang !== 'zh_cn') {
        patchedInstance = null;
        return;
    }

    let instance = $Language.getInstance();
    if (instance === patchedInstance) return;

    try {
        if (!storageField) {
            let fields = instance.getClass().getDeclaredFields();
            for (let i = 0; i < fields.length; i++) {
                if (fields[i].getType().getName() === 'java.util.Map') {
                    fields[i].setAccessible(true);
                    storageField = fields[i];
                    break;
                }
            }

            if (!storageField) return;
        }

        let oldMap = storageField.get(instance);
        let newMap = new $HashMap(oldMap);
        for (let key in OVERRIDES) {
            newMap.put(key, OVERRIDES[key]);
        }
        storageField.set(instance, newMap);
        patchedInstance = instance;

        console.log('KubeJS 覆盖翻译已注入');
    } catch (e) {
        storageField = null;
        patchedInstance = null;

        console.error('KubeJS 覆盖翻译失败：' + e);
    }
});
