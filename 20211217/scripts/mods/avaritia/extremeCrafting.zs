#priority 2000

import crafttweaker.item.IItemStack;

import mods.avaritia.ExtremeCrafting;

// define
val beefRaw = <minecraft:beef>;
val rabbitRaw = <minecraft:rabbit>;
val chickenRaw = <minecraft:chicken>;
val pigRaw = <minecraft:porkchop>;
val fishRaw = <minecraft:fish>;
val neutron = <avaritia:resource:2>;
val cosmicMeatBall = <avaritia:cosmic_meatballs>;
val ultimateStew = <avaritia:ultimate_stew>;
val pumpkin = <minecraft:pumpkin>;
val brownMushRoom = <minecraft:brown_mushroom>;
val wheat = <minecraft:wheat>;
val carrot = <minecraft:carrot>;
val beetRoot = <minecraft:beetroot>;
val apple = <minecraft:apple>;
val potato = <minecraft:potato>;
val melon = <minecraft:melon>;
val cactus = <minecraft:cactus>;

// remove
var toRemove as IItemStack[] = [
    <avaritia:infinity_pickaxe>,
    <avaritia:infinity_shovel>,
    <avaritia:infinity_axe>,
    <avaritia:infinity_hoe>
];

for remove in toRemove {
    ExtremeCrafting.remove(remove);
    remove.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
}

ExtremeCrafting.remove(cosmicMeatBall);
ExtremeCrafting.remove(ultimateStew);

// add
// 龙芯
ExtremeCrafting.addShaped("Draconic", <draconicevolution:draconic_core> * 1, [
    [<ebwizardry:crystal_block:0>, null, null, null, <draconicevolution:draconium_block:0>, null, null, null, <ebwizardry:crystal_block:0>], 
    [null, <threng:material:2>, <threng:material:2>, null, <draconicevolution:draconium_ingot>, null, <threng:material:2>, <threng:material:2>, null],
    [null, <threng:material:2>, <botania:rune:15>, <draconicevolution:draconium_ingot>, <botania:storage:4>, <draconicevolution:draconium_ingot>, <botania:rune:14>, <threng:material:2>, null],
    [null, null, <draconicevolution:draconium_ingot>, <threng:material:11>, <threng:material:12>, <threng:material:11>, <draconicevolution:draconium_ingot>, null, null],
    [<draconicevolution:draconium_block:0>, <draconicevolution:draconium_ingot>, <botania:storage:4>, <threng:material:13>, <threng:material:14>, <threng:material:13>, <botania:storage:4>, <draconicevolution:draconium_ingot>, <draconicevolution:draconium_block:0>],
    [null, null, <draconicevolution:draconium_ingot>, <threng:material:11>, <threng:material:12>, <threng:material:11>, <draconicevolution:draconium_ingot>, null, null],
    [null, <threng:material:2>, <botania:rune:12>, <draconicevolution:draconium_ingot>, <botania:storage:4>, <draconicevolution:draconium_ingot>, <botania:rune:13>, <threng:material:2>, null],
    [null, <threng:material:2>, <threng:material:2>, null, <draconicevolution:draconium_ingot>, null, <threng:material:2>, <threng:material:2>, null],
    [<ebwizardry:crystal_block:0>, null, null, null, <draconicevolution:draconium_block:0>, null, null, null, <ebwizardry:crystal_block:0>]
]);

// 双足飞龙嬗变器
ExtremeCrafting.addShaped("Dragon", <contenttweaker:dragon> * 2, [
    [null, null, null, null, <super_solar_panels:crafting:28>, null, null, null, null], 
    [null, <botania:rune:8>, <super_solar_panels:crafting:0>, null, <super_solar_panels:crafting:28>, null, <super_solar_panels:crafting:0>, <botania:rune:11>, null],
    [null, <super_solar_panels:crafting:0>, <super_solar_panels:crafting:21>, <threng:material:1>, <threng:material:1>, <threng:material:1>, <super_solar_panels:crafting:21>, <super_solar_panels:crafting:0>, null],
    [null, null, <threng:material:1>, <botania:alchemycatalyst>, <draconicevolution:draconic_core>, <botania:alchemycatalyst>, <threng:material:1>, null, null],
    [<super_solar_panels:crafting:28>, <super_solar_panels:crafting:28>, <threng:material:1>, <botania:manaresource:5>, <super_solar_panels:crafting:13>, <botania:manaresource:5>, <threng:material:1>, <super_solar_panels:crafting:28>, <super_solar_panels:crafting:28>],
    [null, null, <threng:material:1>, <botania:alchemycatalyst>, <draconicevolution:draconic_core>, <botania:alchemycatalyst>, <threng:material:1>, null, null],
    [null, <super_solar_panels:crafting:0>, <super_solar_panels:crafting:21>, <threng:material:1>, <threng:material:1>, <threng:material:1>, <super_solar_panels:crafting:21>, <super_solar_panels:crafting:0>, null],
    [null, <botania:rune:9>, <super_solar_panels:crafting:0>, null, <super_solar_panels:crafting:28>, null, <super_solar_panels:crafting:0>, <botania:rune:10>, null],
    [null, null, null, null, <super_solar_panels:crafting:28>, null, null, null, null]
]);

// 双足飞龙核心
ExtremeCrafting.addShaped("Core", <draconicevolution:wyvern_core> * 4, [
    [<botania:rune:15>, <botania:rune:14>, <botania:rune:13>, null, null, null, <avaritia:block_resource:2>, <super_solar_panels:crafting:0>, <appliedenergistics2:material:6>], 
    [<botania:rune:12>, <botania:rune:11>, <botania:rune:10>, null, null, null, <appliedenergistics2:material:47>, <appliedenergistics2:material:57>, <appliedenergistics2:material:38>],
    [<botania:rune:9>, <quark:rune:16>, <botania:blacklotus:0>, <vehicle:large_engine:4>, <vehicle:large_engine:4>, <vehicle:large_engine:4>, <threng:material:14>, <threng:material:13>, <threng:material:6>],
    [null, null, <vehicle:large_engine:4>, <avaritia:cosmic_meatballs>, <ebwizardry:astral_diamond>, <avaritia:resource:7>, <vehicle:electric_engine:4>, null, null],
    [null, null, <vehicle:large_engine:4>, <contenttweaker:dragon>, <draconicevolution:dragon_heart>, <contenttweaker:dragon>, <vehicle:electric_engine:4>, null, null],
    [null, null, <vehicle:large_engine:4>, <botania_tweaks:dire_crafty_crate>, <ebwizardry:astral_diamond>, <botania_tweaks:compressed_tiny_potato_6>, <vehicle:electric_engine:4>, null, null],
    [<ebwizardry:crystal_block:6>, <ebwizardry:crystal_block:3>, <avaritia:block_resource:0>, <vehicle:electric_engine:4>, <vehicle:electric_engine:4>, <vehicle:electric_engine:4>, <contenttweaker:paimon>, <contenttweaker:magic_stone:0>, <contenttweaker:soildust>],
    [<ebwizardry:crystal_block:2>, <ic2:nuclear:3>, <ebwizardry:crystal_block:4>, null, null, null, <contenttweaker:star>, <contenttweaker:skull_block:0>, <contenttweaker:artificialfoil>],
    [<ebwizardry:crystal_block:5>, <ebwizardry:crystal_block:1>, <ebwizardry:crystal_block:7>, null, null, null, <draconicevolution:infused_obsidian>, <draconicevolution:draconium_block:0>, <forestry:royal_jelly>]
]);

// 三级结构方块
ExtremeCrafting.addShaped("TierIII", <environmentaltech:structure_frame_3> * 2, [
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, <minecraft:emerald>, <super_solar_panels:crafting:1>, <minecraft:emerald>, null, null, null],
    [null, null, <minecraft:emerald>, <environmentaltech:erodium_crystal>, <environmentaltech:kyronite_crystal>, <environmentaltech:erodium_crystal>, <minecraft:emerald>, null, null],
    [null, null, <super_solar_panels:crafting:5>, <environmentaltech:kyronite_crystal>, <environmentaltech:structure_frame_2>, <environmentaltech:kyronite_crystal>, <super_solar_panels:crafting:5>, null, null],
    [null, null, <minecraft:emerald>, <environmentaltech:erodium_crystal>, <environmentaltech:kyronite_crystal>, <environmentaltech:erodium_crystal>, <minecraft:emerald>, null, null],
    [null, null, null, <minecraft:emerald>, <super_solar_panels:crafting:0>, <minecraft:emerald>, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
]);

// 四级结构方块
ExtremeCrafting.addShaped("TierIV", <environmentaltech:structure_frame_4> * 2, [
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, <super_solar_panels:crafting:20>, <super_solar_panels:crafting:20>, <super_solar_panels:crafting:20>, null, null, null],
    [null, null, <super_solar_panels:crafting:41>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <super_solar_panels:crafting:41>, null, null],
    [null, <super_solar_panels:crafting:19>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:22>, <environmentaltech:structure_frame_3>, <super_solar_panels:crafting:21>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:18>, null],
    [null, <super_solar_panels:crafting:19>, <super_solar_panels:crafting:23>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium>, <environmentaltech:pladium_crystal>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:18>, null],
    [null, <super_solar_panels:crafting:19>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:21>, <environmentaltech:structure_frame_3>, <super_solar_panels:crafting:22>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:18>, null],
    [null, null, <super_solar_panels:crafting:41>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <super_solar_panels:crafting:41>, null, null],
    [null, null, null, <super_solar_panels:crafting:7>, <super_solar_panels:crafting:7>, <super_solar_panels:crafting:7>, null, null, null],
    [null, null, null, null, null, null, null, null, null]
]);

// 寰宇肉丸
recipes.addShapeless(cosmicMeatBall,[neutron, chickenRaw, fishRaw, pigRaw, rabbitRaw, beefRaw, rabbitRaw, rabbitRaw, rabbitRaw]);

// 超级煲
recipes.addShaped(ultimateStew*9,[[pumpkin, brownMushRoom, wheat],[beetRoot, neutron, apple,],[potato, melon, cactus]]);
