import mods.astralsorcery.Altar;

var starLight = <forge:bucketfilled>.withTag({FluidName: "astralsorcery.liquidstarlight", Amount: 1000});

// 辉光粉
Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/illuminationpowder", <astralsorcery:itemusabledust> * 16, 200, 200, [
    <minecraft:glowstone>, YUS_APPROVAL, <minecraft:iron_ingot>,
    <appliedenergistics2:material:16>, <astralsorcery:itemcraftingcomponent>, <appliedenergistics2:material:18>,
    <enderio:item_material:20>, commonCoin, <enderio:item_material:20>
]);

// 星辉祭坛
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("starcraft:shaped/internal/altar/upgrader1", <astralsorcery:blockaltar:1>, 200, 200, [
    starLight, <astralsorcery:itemcraftingcomponent:2>, starLight,
    <projectred-core:resource_item>, <botania:storage>, <projectred-core:resource_item>,
    <astralsorcery:blockmarble:6>, <astralsorcery:itemrockcrystalsimple>, <astralsorcery:blockmarble:6>]
);

// 天辉祭坛
mods.astralsorcery.Altar.addAttunementAltarRecipe("starcraft:shaped/internal/altar/upgrader2", <astralsorcery:blockaltar:2>, 500, 300, [
    <astralsorcery:itemusabledust>, <astralsorcery:itemshiftingstar>, <astralsorcery:itemusabledust>, 
    <ic2:crafting:2>, <botania:storage:1>, <ic2:crafting:2>,
    <enderio:item_alloy_ingot:6>, <astralsorcery:itemperkgem>, <enderio:item_alloy_ingot:6>,
    <tconstruct:large_plate>.withTag({Material: "manyullyn"}), <tconstruct:large_plate>.withTag({Material: "manyullyn"}), <immersiveengineering:material:27>, <immersiveengineering:material:27>
]);

// 共鸣祭坛
mods.astralsorcery.Altar.addAttunementAltarRecipe("starcraft:shaped/internal/altar/attunementaltar", <astralsorcery:blockattunementaltar>, 500, 300, [
    <astralsorcery:itemcraftingcomponent:3>, <botania:lens:21>.withTag({compositeLens: {ForgeCaps: {"customnpcs:itemscripteddata": {}}, id: "botania:lens", Count: 1 as byte, tag: {}, Damage: 9 as short}}), <astralsorcery:itemcraftingcomponent:3>,
    <astralsorcery:itemrockcrystalsimple>, <bloodmagic:slate>, <astralsorcery:itemrockcrystalsimple>,
    <astralsorcery:blockattunementrelay>, <astralsorcery:blockattunementrelay>, <astralsorcery:blockattunementrelay>,
    <ore:circuitAdvanced>, <ore:circuitAdvanced>, <ore:circuitAdvanced>, <ore:circuitAdvanced>
]);

// 五彩祭坛
mods.astralsorcery.Altar.addAttunementAltarRecipe("starcraft:shaped/internal/altar/upgrader3", <astralsorcery:blockaltar:3>, 2000, 1000, [
    <bloodmagic:slate:3>, <astralsorcery:itemperkseal>, <bloodmagic:slate:3>,
    <ic2:crafting:4>, <environmentaltech:structure_frame_2>, <ic2:crafting:4>,
    <appliedenergistics2:material:36>, <appliedenergistics2:material:6>, <appliedenergistics2:material:36>,
    <ore:platePlatinum>, <ore:platePlatinum>, <ore:platePlatinum>, <ore:platePlatinum>,
    <enderio:item_material:43>, <enderio:item_material:43>, <enderio:item_basic_capacitor:2>, <enderio:item_basic_capacitor:2>,
    <botania:manaresource:14>, <botania:manaresource:14>, <mahoutsukai:fae_essence>, <mahoutsukai:fae_essence>
]);
