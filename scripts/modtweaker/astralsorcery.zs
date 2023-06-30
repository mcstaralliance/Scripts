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
Altar.addConstellationAltarRecipe("starcraft:shaped/internal/altar/upgrader3", <astralsorcery:blockaltar:3>, 2000, 1000, [
    <bloodmagic:slate:3>, <astralsorcery:itemperkseal>, <bloodmagic:slate:3>,
    <ic2:crafting:4>, <environmentaltech:structure_frame_2>, <ic2:crafting:4>,
    <appliedenergistics2:material:36>, <appliedenergistics2:material:6>, <appliedenergistics2:material:36>,
    <ore:platePlatinum>, <ore:platePlatinum>, <ore:platePlatinum>, <ore:platePlatinum>,
    <enderio:item_material:43>, <enderio:item_material:43>, <enderio:item_basic_capacitor:2>, <enderio:item_basic_capacitor:2>,
    <botania:manaresource:14>, <botania:manaresource:14>, <mahoutsukai:fae_essence>, <mahoutsukai:fae_essence>
]);

// 一级虚空采矿控制器
Altar.addDiscoveryAltarRecipe("starcraft:shaped/internal/custom/environmental_ore_miner_tier1", <environmentaltech:void_ore_miner_cont_1>, 200, 200, [
    <environmentaltech:interconnect>, <botania:storage:3>, <environmentaltech:interconnect>,
    <environmentaltech:interconnect>, <ore:netherStar>, <environmentaltech:interconnect>,
    <environmentaltech:litherite>, <ore:etLaserLens>, <environmentaltech:litherite>
]);

// 星之装配台 MK II
Altar.addAttunementAltarRecipe("starcraft:shaped/internal/custom/assemblermkii", <starcraft:assembler_mkii_controller>, 500, 300, [
    <ore:gaiaIngot>, <mets:super_circuit>, <ore:gaiaIngot>,
    <ore:gaiaIngot>, <ic2:resource:13>, <ore:gaiaIngot>,
    <environmentaltech:mica>, <environmentaltech:mica>, <environmentaltech:mica>,
    <ore:plateEnderium>, <ore:plateEnderium>, <ore:plateEnderium>, <ore:plateEnderium>, 
]);

// 星之装配台 MK III
Altar.addConstellationAltarRecipe("starcraft:shaped/internal/custom/assemblermkiii", <starcraft:assembler_mkiii_controller>, 2000, 200, [
    <thermalfoundation:upgrade:35>, <deepmoblearning:glitch_heart>, <thermalfoundation:upgrade:35>,
    <threng:material:6>, <astralsorcery:blockcelestialcollectorcrystal>, <threng:material:6>,
    <nuclearcraft:gem:1>, <deepmoblearning:glitch_heart>, <nuclearcraft:gem:1>,
    <valkyrielib:modifier_speed>, <valkyrielib:modifier_speed>, <valkyrielib:modifier_speed>, <valkyrielib:modifier_speed>,
    <threng:material:4>, <threng:material:4>, <bloodmagic:component:7>, <bloodmagic:component:7>,
    <mahoutsukai:fae_essence>, <mahoutsukai:fae_essence>, <deepmoblearning:living_matter_extraterrestrial>, <deepmoblearning:living_matter_extraterrestrial>
]);

// 双足飞龙核心
Altar.addTraitAltarRecipe("starcraft:shaped/internal/custom/wyvern_core", <draconicevolution:wyvern_core>, 4500, 400,[
    <mets:field_generator>, <cyclicmagic:soulstone>, <mets:field_generator>, 
    <cyclicmagic:soulstone>, <draconicevolution:draconic_core>, <cyclicmagic:soulstone>, 
    <mets:field_generator>, <cyclicmagic:soulstone>, <mets:field_generator>,
    <botania:pylon:2>, <botania:pylon:2>, <botania:pylon:2>, <botania:pylon:2>, 
    <projectred-core:resource_item:200>, <projectred-core:resource_item:200>, <projectred-core:resource_item:200>, <projectred-core:resource_item:200>, 
    <projectred-core:resource_item:201>, <projectred-core:resource_item:201>, <projectred-core:resource_item:201>, <projectred-core:resource_item:201>,
    <bloodmagic:slate:4>, <bloodmagic:slate:4>, <bloodmagic:slate:4>, <bloodmagic:slate:4>,
    <draconicevolution:draconium_dust>, <astralsorcery:itemcraftingcomponent:2>, <mahoutsukai:fae_essence>, <astralsorcery:itemcraftingcomponent:2>, <draconicevolution:draconium_dust>
], "astralsorcery.constellation.pelotrio");

// 飞龙能量核心
Altar.addTraitAltarRecipe("starcraft:shaped/internal/custom/wyvern_energy_core", <draconicevolution:wyvern_energy_core>, 4500, 400, [
    <astralsorcery:itemshiftingstar>.withTag({astralsorcery: {starAttunement: "astralsorcery.constellation.evorsio"}}), <draconicevolution:draconic_core>, <astralsorcery:itemshiftingstar>.withTag({astralsorcery: {starAttunement: "astralsorcery.constellation.armara"}}), 
    <draconicevolution:draconic_core>, <threng:material:14>, <draconicevolution:draconic_core>, 
    <astralsorcery:itemshiftingstar>.withTag({astralsorcery: {starAttunement: "astralsorcery.constellation.discidia"}}), <draconicevolution:draconic_core>, <astralsorcery:itemshiftingstar>.withTag({astralsorcery: {starAttunement: "astralsorcery.constellation.aevitas"}}), 
    null, null, null, null,
    <avaritia:resource:4>, <avaritia:resource:4>,
    <mets:living_circuit>, <mets:living_circuit>, 
    <mets:neutron_plate>, <mets:neutron_plate>, 
    <avaritia:resource:4>, <avaritia:resource:4>,
    <astralsorcery:itemshiftingstar>.withTag({astralsorcery: {starAttunement: "astralsorcery.constellation.vicio"}}), <thermalfoundation:coin:103>, <thermalfoundation:coin:103>, <astralsorcery:itemperkgem:2>
], "astralsorcery.constellation.horologium");
