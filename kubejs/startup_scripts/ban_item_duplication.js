const $BeyondStorageConfig = Java.loadClass('com.example.beyondstorage.config.BeyondStorageConfig');
const $FieldUtils = Java.loadClass('org.apache.commons.lang3.reflect.FieldUtils');
const $ArrayList = Java.loadClass('java.util.ArrayList');

// 修复由 Beyond storage addon 一键存入功能和机械动力过滤器导致的刷物品漏洞
StartupEvents.postInit(() => {
    const field = 'blockedClassPrefixes';
    const prefix = 'com.simibubi.create.content.logistics.filter.AbstractFilterMenu';
    const prefixes = new $ArrayList($FieldUtils.readStaticField($BeyondStorageConfig, field, true));

    if (!prefixes.contains(prefix)) {
        prefixes.add(prefix);
        $FieldUtils.writeStaticField($BeyondStorageConfig, field, prefixes, true);
    }
});
