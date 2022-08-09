import scripts.utils;
import mods.buildcraft.AssemblyTable;

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
    [<ic2:plate:3>, <appliedenergistics2:smooth_sky_stone_chest>, <ic2:plate:3>],
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
    [<appliedenergistics2:smooth_sky_stone_chest>, <ic2:resource:12>, <appliedenergistics2:smooth_sky_stone_chest>],
    [<minecraft:mossy_cobblestone>, <ic2:crafting:2>, <minecraft:mossy_cobblestone>]
]);

// 提取机
recipes.addShaped(<ic2:te:45>, [
    [<quark:soul_sandstone>, <ic2:crafting:12>, <quark:soul_sandstone>],
    [<ic2:treetap>, <ic2:resource:12>, <ic2:treetap>],
    [<minecraft:pumpkin>, <ic2:crafting:2>, <minecraft:pumpkin>]
]);

// 打粉机
recipes.addShaped(<ic2:te:47>, [
    [<enderio:item_material:20>, <rftools:security_manager>, <enderio:item_material:20>],
    [<immersiveengineering:material:8>, <immersiveengineering:metal_decoration0:4>, <immersiveengineering:material:8>],
    [<immersiveengineering:wirecoil:5>, <ic2:crafting:2>, <immersiveengineering:wirecoil:5>]
]);

// 条纹管道
recipes.addShaped(<buildcrafttransport:pipe_stripes_item> * 8, [
    [<minecraft:emerald>, <minecraft:observer>, <minecraft:comparator>],
    [<buildcraftcore:gear_diamond>, <immersiveengineering:metal_decoration0:4>, <buildcraftcore:gear_diamond>],
    [<minecraft:cobblestone>, <minecraft:cobblestone>, <minecraft:cobblestone>]
]);

// ME 安全终端
recipes.addShaped(<appliedenergistics2:security_station>,
    utils.createSurround(<minecraft:trapped_chest>, <ic2:plate:12>)
);

// ME 存储外壳
mods.botania.ElvenTrade.addRecipe([<appliedenergistics2:material:39>], 
[<appliedenergistics2:quartz_vibrant_glass> * 2, <appliedenergistics2:material:52>, <ic2:crafting:3> * 2, <botania:manaresource:6>, <immersiveengineering:metal_decoration0:3>, <minecraft:repeater>]
);

// 充能器
AssemblyTable.addRecipe("ae2_charger", <appliedenergistics2:charger>, 100000, 
[<appliedenergistics2:smooth_sky_stone_chest>, <mekanism:crystal:2>, <ic2:resource:8>, <appliedenergistics2:material:7> * 2, <buildcraftcore:gear_diamond>, <buildcraftsilicon:redstone_chipset> * 2, <mekanism:atomicalloy>]);

// 晶体催生器
AssemblyTable.addRecipe("ae2_growth_accelerator", <appliedenergistics2:quartz_growth_accelerator>, 100000, 
[<appliedenergistics2:quartz_vibrant_glass> * 2, <appliedenergistics2:fluix_block>, <appliedenergistics2:energy_cell>, <appliedenergistics2:quartz_block>, <appliedenergistics2:smooth_sky_stone_chest> * 2, <appliedenergistics2:quartz_fixture> * 2]);

// 魔力销毁器
recipes.addShaped(<botania:manavoid>, [
    [<botania:livingrock>, <botania:livingrock>, <botania:livingrock>],
    [<minecraft:obsidian>, <minecraft:chorus_fruit_popped>, <minecraft:obsidian>],
    [<botania:livingrock>, <botania:livingrock>, <botania:livingrock>]
]);

// 镭射器
recipes.addShaped(<buildcraftsilicon:laser>, [
    [<ic2:single_use_battery>, <ic2:single_use_battery>, <botania:manavoid>],
    [<ic2:single_use_battery>, <avaritia:resource>, <avaritia:resource>],
    [<ic2:single_use_battery>, <ic2:single_use_battery>, <botania:manavoid>]
]);