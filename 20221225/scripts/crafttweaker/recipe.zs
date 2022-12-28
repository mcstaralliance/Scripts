// 扫描器
recipes.addShaped(<scannable:scanner>.withTag({energy: 5000}), [
    [<minecraft:repeater>, <minecraft:comparator>, <minecraft:repeater>],
    [<gregtech:meta_item_1:97>, <gregtech:meta_item_1:622>, <gregtech:meta_item_1:97>],
    [<ore:gemQuartz>, <ore:gemQuartz>, <ore:gemQuartz>]
]);

// 深度学习器
recipes.addShaped(<deepmoblearning:deep_learner>, [
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>], 
    [<deepmoblearning:machine_casing>, <gregtech:meta_item_1:465>, <deepmoblearning:machine_casing>],
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>]
]);

// 符文祭坛
recipes.addShaped(<botania:runealtar>, [
    [null, null, null], 
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>],
    [<ore:livingrock>, <randomthings:ingredient:2>, <ore:livingrock>]
]);

// 魔力发射器
recipes.addShaped(<botania:spreader>, [
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>],
    [<ore:ringGold>, <botania:petal:5> | <botania:petal:13>, <botania:manaresource:17>],
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>]
]);

// 盖亚魔力发射器
recipes.addShaped(<botania:spreader:3>, [
    [null, null, null],
    [<gregtech:meta_lens:311>, <botania:manaresource:5>, <botania:spreader:2>],
    [null, null, null]
]);

// 双足飞龙核心
recipes.addShaped(<draconicevolution:wyvern_core>, [
    [<gregtech:meta_ingot:125>, <draconicevolution:draconic_core>, <gregtech:meta_ingot:125>],
    [<draconicevolution:draconic_core>, <gregtech:meta_item_1:282>, <draconicevolution:draconic_core>],
    [<gregtech:meta_ingot:125>, <draconicevolution:draconic_core>, <gregtech:meta_ingot:125>]
]);