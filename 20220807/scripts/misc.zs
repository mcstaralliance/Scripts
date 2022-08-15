import mods.botaniatweaks.Agglomeration;
import mods.buildcraft.AssemblyTable;
import crafttweaker.item.IItemStack;

 // 知识巨著
<ore:share_tome>.add(<astralsorcery:itemknowledgeshare>, <thaumadditions:knowledge_tome>);

// 活石活木
mods.botania.PureDaisy.addRecipe(<thaumcraft:stone_arcane>,<botania:livingrock>, 100);
mods.botania.PureDaisy.addRecipe(<thaumadditions:chiseled_greatwood>,<botania:livingwood>, 100);

// 植魔四符文
mods.botania.RuneAltar.addRecipe(<botania:rune>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "aqua"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <minecraft:waterlily>, <minecraft:water_bucket>, <ore:sugarcane>], 20000);
mods.botania.RuneAltar.addRecipe(<botania:rune:1>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "ignis"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <minecraft:fire_charge>, <minecraft:tnt>, <minecraft:magma_cream>], 20000);
mods.botania.RuneAltar.addRecipe(<botania:rune:2>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "terra"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <botania:grassseeds>, <minecraft:sandstone>, <minecraft:dirt>], 20000);
mods.botania.RuneAltar.addRecipe(<botania:rune:3>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <minecraft:feather>, <minecraft:wheat_seeds>, <minecraft:red_flower>], 20000);

// 荒古邪术石
mods.botania.ElvenTrade.addRecipe([<thaumcraft:stone_ancient>], [<thaumcraft:stone_arcane>, <rftools:infused_enderpearl>]);
mods.botania.ElvenTrade.addRecipe([<thaumcraft:stone_eldritch_tile>], [<thaumcraft:stone_arcane>, <thaumcraft:ingot:1>]);
mods.botania.ElvenTrade.addRecipe([<botania:gaiahead>], [<botania:manaresource:14>, <mw:mininuke>, <extraplanets:nuclear_bomb>, <cyclicmagic:dynamite_safe>, <cyclicmagic:ender_tnt_6>, <extraplanets:fire_bomb>]);

// 共鸣星杖
mods.thaumcraft.Infusion.registerRecipe("itemwand", "",<astralsorcery:itemwand>, 15, [
    <aspect:auram> * 20, <aspect:vacuos> * 50, <aspect:ordo> * 30, <aspect:praecantatio> * 30, <aspect:cognitio> * 100
    ], 
    <botania:twigwand>, [
        <minecraft:dye:4>, <quark:root_dye:1>, <minecraft:glowstone>, <astralsorcery:itemcraftingcomponent>, <astralsorcery:itemcraftingcomponent:2>, <astralsorcery:itemrockcrystalsimple>, <astralsorcery:itemcraftingcomponent>
    ]
);

// 水晶矩阵锭
mods.thaumcraft.Infusion.registerRecipe("avaritia_ingot", "",<avaritia:resource:1>, 20, [
    <aspect:metallum> * 50, <aspect:caeles> * 1
    ], 
    <thaumadditions:mithrillium_ingot>, [
        <avaritia:resource>, <minecraft:nether_star>
    ]
);

// 泰拉钢锭
Agglomeration.addRecipe(<botania:manaresource:4>, [
    <botania:manaresource:1>, <botania:manaresource:2>, <ic2:ingot:5>, <astralsorcery:itemcraftingcomponent:2>
    ], 250000, 0xFF7F50, 0xADFF2F, <botania:runealtar>, <astralsorcery:blockinfusedwood:6>, <thaumadditions:crystal_block>
);

// 精灵门核心
Agglomeration.addRecipe(<botania:alfheimportal>, [
    <botania:manaresource:4>, <botania:avatar>
    ], 250000, 0xFF7F50, 0xADFF2F, <botania:runealtar>, <astralsorcery:blockinfusedwood:6>, <thaumadditions:crystal_block>
);

// 符文矩阵
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("infusion_matrix", "", 200, [
    <aspect:aer>, <aspect:ignis>, <aspect:terra>, <aspect:aqua>, <aspect:ordo>, <aspect:perditio>
    ], <thaumcraft:infusion_matrix>, [
        [<thaumcraft:stone_arcane_brick>, <thaumcraft:nitor_yellow>, <thaumcraft:stone_arcane_brick>], 
        [<thaumcraft:alumentum>, <openblocks:golden_eye>, <thaumcraft:alumentum>], 
        [<thaumcraft:stone_arcane_brick>, <thaumcraft:nitor_yellow>, <thaumcraft:stone_arcane_brick>]
    ]
);

// 花药台
mods.thaumcraft.Crucible.registerRecipe("botania_altar", "", <botania:altar>, <thaumcraft:table_stone>, [<aspect:vacuos> * 20]);

// 盖亚水晶
AssemblyTable.addRecipe("botania_gaia_pylon", <botania:pylon:2>, 500000, 
[<botania:pylon:1>, <botania:manaresource:7>, <botania:manaresource:9>, <botania:manaresource:8>]);

// ME 存储外壳
AssemblyTable.addRecipe("ae2_material", <appliedenergistics2:material:39>, 50000, 
[<appliedenergistics2:quartz_vibrant_glass> * 2, <appliedenergistics2:material:52>, <ic2:crafting:3> * 2, <botania:manaresource:6>, <immersiveengineering:metal_decoration0:3>, <minecraft:repeater>]);

// 充能器
AssemblyTable.addRecipe("ae2_charger", <appliedenergistics2:charger>, 100000, 
[<appliedenergistics2:smooth_sky_stone_chest>, <mekanism:crystal:2>, <ic2:resource:8>, <appliedenergistics2:material:7> * 2, <buildcraftcore:gear_diamond>, <buildcraftsilicon:redstone_chipset> * 2, <mekanism:atomicalloy>]);

// 晶体催生器
AssemblyTable.addRecipe("ae2_growth_accelerator", <appliedenergistics2:quartz_growth_accelerator>, 100000, 
[<appliedenergistics2:quartz_vibrant_glass> * 2, <appliedenergistics2:fluix_block>, <appliedenergistics2:energy_cell>, <appliedenergistics2:quartz_block>, <appliedenergistics2:smooth_sky_stone_chest> * 2, <appliedenergistics2:quartz_fixture> * 2]);

// 无尽催化剂修复
mods.avaritia.ExtremeCrafting.remove(<avaritia:resource:5>);
mods.avaritia.ExtremeCrafting.addShaped("resource_5", <avaritia:resource:5>, [
    [<avaritia:resource:1>,<avaritia:resource>,<avaritia:resource:2>,<avaritia:resource:3>,<avaritia:resource:4>,<avaritia:resource:7>,<avaritia:endest_pearl>,<avaritia:cosmic_meatballs>,<avaritia:singularity:8>],
    [<avaritia:singularity:10>,<avaritia:singularity:7>,<avaritia:singularity:6>,<avaritia:singularity:5>,<avaritia:singularity:4>,<avaritia:singularity:3>,<avaritia:singularity:2>,<avaritia:singularity:1>,<avaritia:singularity>],
    [<enderio:block_alloy:6>,<ic2:resource:8>,<thermalfoundation:storage_alloy:7>,<avaritia:singularity:11>,<avaritia:singularity:9>, <thaumadditions:adaminite_block>, <extrabotany:blockorichalcos>, <extraplanets:tier11_items:4>],
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null]
]);

// 龙芯
recipes.remove(<draconicevolution:draconic_core>);
mods.avaritia.ExtremeCrafting.addShaped("draconic_core", <draconicevolution:draconic_core> * 2, [
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, <appliedenergistics2:material:38>, null, null, null, null],
    [null, null, null, <thermalfoundation:coin:103>, <ic2:nuclear:3>, <thermalfoundation:coin:103>, null, null, null],
    [null, null, <thermalfoundation:coin:103>, <enderio:block_alloy:8>, <deepmoblearning:infused_ingot_block>, <enderio:block_alloy:8>, <thermalfoundation:coin:103>, null, null],
    [null, <appliedenergistics2:dense_energy_cell>, <minecraft:totem_of_undying>, <deepmoblearning:infused_ingot_block>, <extraplanets:tier11_items:0>, <deepmoblearning:infused_ingot_block>, <minecraft:totem_of_undying>, <appliedenergistics2:dense_energy_cell>, null],
    [null, null, <thermalfoundation:coin:103>, <enderio:block_alloy:8>, <deepmoblearning:infused_ingot_block>, <enderio:block_alloy:8>, <thermalfoundation:coin:103>, null, null],
    [null, null, null, <thermalfoundation:coin:103>, <mekanism:teleportationcore>, <thermalfoundation:coin:103>, null, null, null],
    [null, null, null, null, <appliedenergistics2:material:57>, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]]);

// 双足飞龙核心
mods.botania.RuneAltar.addRecipe(<draconicevolution:wyvern_core>, [
    <draconicevolution:draconic_core>, <industrialforegoing:pink_slime_ingot>, <extrabotany:material:1>, <botania:rune:12>, <botania:rune:13>, <botania:rune:14>, <botania:rune:15>, <extrabotany:material:3>
], 2000000);

// 双足飞龙能量核心
AssemblyTable.addRecipe("wyvern_core", <draconicevolution:wyvern_energy_core>, 10000000, [
    <draconicevolution:draconic_core>, <cyclicmagic:cable_wireless_energy>, <fluxnetworks:herculeanfluxstorage>, <industrialforegoing:laser_lens:10>
]);

// 双足飞龙套
mods.thaumcraft.Infusion.registerRecipe("wyvern_helm", "",<draconicevolution:wyvern_helm>, 60, [
    <aspect:draco> * 100, <aspect:caeles> * 20, <aspect:visum> * 50, <aspect:bestia> * 75, <aspect:sonus> * 25, <aspect:potentia> * 200
    ], 
    <extraplanets:tier4_space_suit_helmet:100>, [
        <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <astralsorcery:blockcelestialcollectorcrystal>, <draconicevolution:draconium_block>, <minecraft:dragon_egg>, <thaumadditions:mithminite_ingot>, <thaumadditions:mithminite_ingot>
    ]
);
mods.thaumcraft.Infusion.registerRecipe("wyvern_chest", "",<draconicevolution:wyvern_chest>, 60, [
    <aspect:draco> * 100, <aspect:caeles> * 20, <aspect:visum> * 50, <aspect:bestia> * 75, <aspect:sonus> * 25, <aspect:potentia> * 200
    ], 
    <extraplanets:tier4_space_suit_chest:100>, [
        <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <astralsorcery:blockcelestialcollectorcrystal>, <draconicevolution:draconium_block>, <minecraft:dragon_egg>, <thaumadditions:mithminite_ingot>, <thaumadditions:mithminite_ingot>
    ]
);
mods.thaumcraft.Infusion.registerRecipe("wyvern_legs", "",<draconicevolution:wyvern_legs>, 60, [
    <aspect:draco> * 100, <aspect:caeles> * 20, <aspect:visum> * 50, <aspect:bestia> * 75, <aspect:sonus> * 25, <aspect:potentia> * 200
    ], 
    <extraplanets:tier4_space_suit_legings:100>, [
        <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <astralsorcery:blockcelestialcollectorcrystal>, <draconicevolution:draconium_block>, <minecraft:dragon_egg>, <thaumadditions:mithminite_ingot>, <thaumadditions:mithminite_ingot>
    ]
);
mods.thaumcraft.Infusion.registerRecipe("wyvern_boots", "",<draconicevolution:wyvern_boots>, 60, [
    <aspect:draco> * 100, <aspect:caeles> * 20, <aspect:visum> * 50, <aspect:bestia> * 75, <aspect:sonus> * 25, <aspect:potentia> * 200
    ], 
    <extraplanets:tier4_space_suit_boots:100>, [
        <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <astralsorcery:blockcelestialcollectorcrystal>, <draconicevolution:draconium_block>, <minecraft:dragon_egg>, <thaumadditions:mithminite_ingot>, <thaumadditions:mithminite_ingot>
    ]
);