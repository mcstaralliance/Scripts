const OVERRIDES = {
    'block.mekanism.sulfuric_acid': '液态硫酸',
    'gas.mekanism.sulfuric_acid': '气态硫酸'
};

const $HashMap = Java.loadClass('java.util.HashMap');
const $Map = Java.loadClass('java.util.Map');
const $Language = Java.loadClass('net.minecraft.locale.Language');

let renamed = false;

// 不修改或新增材质包，反射修改翻译键值的不可变 Map
ClientEvents.tick(() => {
    if (renamed) return;
    renamed = true;

    try {
        let instance = $Language.getInstance();
        let fields = instance.getClass().getDeclaredFields();

        for (let i = 0; i < fields.length; i++) {
            let field = fields[i];
            field.setAccessible(true);
            let val = field.get(instance);
            if (val instanceof $Map) {
                let newMap = new $HashMap(val);
                for (let key in OVERRIDES) {
                    newMap.put(key, OVERRIDES[key]);
                }
                field.set(instance, newMap);
                return;
            }
        }
    } catch (e) {
        console.error('KubeJS 覆盖翻译失败: ' + e);
    }
});
