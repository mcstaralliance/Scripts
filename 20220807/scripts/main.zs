import scripts.utils;

// 钢制机壳

recipes.addShaped(<mekanism:basicblock:8>, 
    utils.coreSurroundCross(<ic2:resource:13>, <ore:ingotOsmium>, <ore:ingotSteel>)
);

// 工业先锋框架
recipes.addShaped(<teslacorelib:machine_case>, 
    utils.coreSurroundCross(<thermalexpansion:frame>, <thermalfoundation:material:257>, <minecraft:redstone>)
);

// 电炉
recipes.addShaped(<ic2:te:44>, [
    [<minecraft:nether_wart>, <minecraft:nether_wart>, <minecraft:nether_wart>],
    [<minecraft:nether_wart>, <ore:circuitBasic>, <minecraft:nether_wart>],
    [<minecraft:redstone>, <ic2:te:46>, <minecraft:redstone>]
]);

// 基础机械外壳
recipes.addShaped(<ic2:resource:12>, [
    [<ic2:plate:3>, <thaumcraft:sapling_greatwood>, <ic2:plate:3>],
    [<ic2:plate:3>, <minecraft:golden_pickaxe>, <ic2:plate:3>],
    [<ic2:plate:3>, <ic2:plate:3>, <ic2:plate:3>]
]);

// 金属成型机
recipes.addShaped(<ic2:te:44>, [
    [<minecraft:nether_wart>, <minecraft:nether_wart>, <minecraft:nether_wart>],
    [<minecraft:nether_wart>, <ore:circuitBasic>, <minecraft:nether_wart>],
    [<minecraft:redstone>, <ic2:te:46>, <minecraft:redstone>]
]);

// 压缩机
recipes.addShaped(<ic2:te:43>, [
    [<minecraft:mossy_cobblestone>, <ic2:forge_hammer>.anyDamage(), <minecraft:mossy_cobblestone>],
    [<minecraft:mossy_cobblestone>, <ic2:resource:12>, <thaumcraft:sapling_greatwood>],
    [<minecraft:mossy_cobblestone>, <ic2:crafting:2>, <minecraft:mossy_cobblestone>]
]);

// 提取机
recipes.addShaped(<ic2:te:45>, [
    [<quark:soul_sandstone>, <ic2:crafting:12>, <quark:soul_sandstone>],
    [<ic2:treetap>, <ic2:resource:12>, <ic2:treetap>],
    [<minecraft:pumpkin>, <ic2:crafting:2>, <minecraft:pumpkin>]
]);