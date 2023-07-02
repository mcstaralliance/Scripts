#priority 1000

import crafttweaker.item.IItemStack;
import scripts.utils;

utils.constructCoin(commonCoin, game.localize("item.starcraft.commonCoin"), 50);
utils.constructCoin(advancedCoin, game.localize("item.starcraft.advancedCoin"), 600);
utils.constructCoin(ultraCoin, game.localize("item.starcraft.ultraCoin"), 1200);

// 花药台
recipes.addShaped(<botania:altar>, [
    [<minecraft:stone_slab>, <ore:mushroomAny>, <minecraft:stone_slab>],
    [commonCoin, <quark:polished_stone>, commonCoin],
    [<quark:polished_stone>, <quark:polished_stone>, <quark:polished_stone>]
]);

// 绢布
recipes.addShaped(<tconstruct:materials:15>, [
    [<randomthings:ingredient:12>,<randomthings:ingredient:12>,<randomthings:ingredient:12>],
    [<randomthings:ingredient:12>, advancedCoin, <randomthings:ingredient:12>],
    [<randomthings:ingredient:12>, <randomthings:ingredient:12>, <randomthings:ingredient:12>]
]);

// 水槽
recipes.addShaped(<cookingforblockheads:sink>, [
    [<cyclicmagic:beacon_potion>, ultraCoin, <cyclicmagic:beacon_potion>], 
    [<avaritia:resource:4>, <avaritia:block_resource:2>, <avaritia:resource:4>],
    [<avaritia:resource:2>, <enderio:item_basic_capacitor:1>, <avaritia:resource:2>]
]);

// 恶魔头南瓜
recipes.addShaped(<botania:felpumpkin>, [
    [<randomthings:ingredient:1>, <minecraft:string>, <minecraft:ghast_tear>],
    [<minecraft:bone>, <minecraft:pumpkin>, <minecraft:rotten_flesh>],
    [<minecraft:blaze_rod>, <minecraft:gunpowder>, <minecraft:nether_wart>]
]);

// 活木枝
recipes.addShaped(<botania:manaresource:3> * 2, [
    [null, <ore:livingwood>, null],
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>],
    [null, <ore:livingwood>, null]
]);

// 盖亚魂锭
recipes.addShaped(<botania:manaresource:14>, [
    [<ore:eternalLifeEssence>, YUS_APPROVAL, <ore:eternalLifeEssence>],
    [<ore:eternalLifeEssence>, <ore:ingotTerrasteel>, <ore:eternalLifeEssence>],
    [commonCoin, <ore:eternalLifeEssence>, commonCoin]
]);
<botania:manaresource:14>.addTooltip(format.darkGray(format.italic(game.localize("tooltip.approved_by_yu"))));

// 魔力池
recipes.addShaped(<botania:pool>, [
    [null, null, null],
    [<ore:livingrock>, <botania:pool:2>, <ore:livingrock>],
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>]
]);

// 陨石罗盘
recipes.addShaped(<appliedenergistics2:sky_compass>, [
    [commonCoin, YUS_APPROVAL, commonCoin],
    [<appliedenergistics2:material:1>, <minecraft:compass>, <appliedenergistics2:material:1>],
    [<ic2:dust:12>, <ore:ingotIron>, <ic2:dust:12>]
]);

// 基础机械外壳
recipes.addShaped(<ic2:resource:12>, [
    [<ore:plateTin>, <ore:plateIron>, <ore:plateTin>],
    [<ore:plateIron>, commonCoin, <ore:plateIron>],
    [<ore:plateTin>, <ore:plateIron>, <ore:plateTin>]
]);

// 稀释魔力池
recipes.addShaped(<botania:pool:2> * 2, [
    [<botania:livingrock:3>, null, <botania:livingrock:3>],
    [<botania:livingrock:3>, null, <botania:livingrock:3>],
    [<botania:livingrock:3>, <botania:livingrock:3>, <botania:livingrock:3>]
]);

// 魔力发射器
recipes.addShaped(<botania:spreader>, [
    [<botania:livingwood:5>, <botania:livingwood:5>, <botania:livingwood:5>],
    [<thermalfoundation:material:161>, <deepmoblearning:soot_covered_redstone>, ],
    [<botania:livingwood:5>, <botania:livingwood:5>, <botania:livingwood:5>]
]);

// 原始投网
recipes.addShaped(<bloodmagic:soul_snare>, [
    [<botania:manaresource:16>, <quark:soul_powder>, <botania:manaresource:16>],
    [<randomthings:ingredient:2>, <quark:soul_powder>, <randomthings:ingredient:2>],
    [<botania:manaresource:16>, <randomthings:ingredient:2>, <botania:manaresource:16>]
]);

// 增生之种
recipes.addShapeless(<botania:overgrowthseed> * 2, [
    <botania:grassseeds>, <botania:cosmetic:16>, <randomthings:pitcherplant>
]);

// ME 驱动器
recipes.addShaped(<appliedenergistics2:drive>, [
    [<ore:ingotSteel>, <appliedenergistics2:material:39>, <ore:ingotSteel>],
    [<appliedenergistics2:part:16>, advancedCoin, <appliedenergistics2:part:16>],
    [<ore:ingotSteel>, <appliedenergistics2:material:24>, <ore:ingotSteel>]
]);

// ME 安全终端
recipes.addShaped(<appliedenergistics2:security_station>, [
    [<minecraft:iron_bars>, <minecraft:trapped_chest>, <minecraft:iron_bars>],
    [<appliedenergistics2:part:140>, <quark:chain>, <appliedenergistics2:part:140>],
    [<minecraft:iron_bars>, <appliedenergistics2:part:140>, <minecraft:iron_bars>]
]);


// 1k-ME 存储组件
recipes.addShaped(<appliedenergistics2:material:35>, [
    [<appliedenergistics2:material:22>, <appliedenergistics2:material:22>, <appliedenergistics2:material:22>],
    [<minecraft:redstone>, <appliedenergistics2:material:2>, <appliedenergistics2:material:2>],
    [<appliedenergistics2:material:2>, commonCoin, <minecraft:soul_sand>]
]);

// 1k-ME 流体存储组件
recipes.addShaped(<appliedenergistics2:material:54>, [
    [<appliedenergistics2:material:22>, <appliedenergistics2:material:22>, <appliedenergistics2:material:22>],
    [<minecraft:dye:4>, <appliedenergistics2:material:2>, <appliedenergistics2:material:2>],
    [<appliedenergistics2:material:2>, commonCoin, <minecraft:slime_ball>]
]);

// 机器框架
recipes.addShaped(<thermalexpansion:frame>, 
    (utils.coreSurroundCross(<ic2:resource:12>, <tconstruct:shard>.withTag({Material: "conductive_iron"}), <ore:plateGold>))
);

// 设备框架
recipes.addShaped(<thermalexpansion:frame:64>, 
    (utils.coreSurroundCross(<ic2:resource:12>, <tconstruct:shard>.withTag({Material: "vibrant_alloy"}), <ore:plateSilver>))
);

// 空白扫描模块
recipes.addShaped(<scannable:module_blank> * 3, [
    [<theoneprobe:probe_goggles>, <custommc:item927>, <theoneprobe:probe_goggles>],
    [<projectred-core:resource_item:4>, <projectred-core:resource_item:4>, <projectred-core:resource_item:4>],
    [<astralsorcery:itemcraftingcomponent:3>, <custommc:item927>, <astralsorcery:itemcraftingcomponent:3>]
]);

// 深度学习器
recipes.addShaped(<deepmoblearning:deep_learner>, [
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>], 
    [<deepmoblearning:machine_casing>, <minecraft:nether_star>, <deepmoblearning:machine_casing>],
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>]
]);

// 符文祭坛
recipes.addShaped(<botania:runealtar>, [
    [<enderio:item_material:20>, advancedCoin ,<enderio:item_material:20>], 
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>],
    [<ore:livingrock>, <randomthings:ingredient:2>, <ore:livingrock>]
]);

// 盖亚魔力发射器
recipes.addShaped(<botania:spreader:3>, [
    [null, advancedCoin, null],
    [<tconstruct:ingots:2>, <botania:manaresource:14>, <botania:spreader:2>],
    [null, <minecraft:nether_star>, null]
]);

// 电路板
recipes.addShaped(<ic2:crafting:1>, [
    [<appliedenergistics2:material:20>, <appliedenergistics2:material:17>, <appliedenergistics2:material:20>],
    [<ic2:cable:4>.withTag({type: 4 as byte, insulation: 0 as byte}), <ic2:plate:3>, <ic2:cable:4>.withTag({type: 4 as byte, insulation: 0 as byte})],
    [<ic2:cable:4>.withTag({type: 4 as byte, insulation: 0 as byte}), <ic2:cable:4>.withTag({type: 4 as byte, insulation: 0 as byte}), <ic2:cable:4>.withTag({type: 4 as byte, insulation: 0 as byte})]
]);

// 环境控制器
recipes.addShaped(<rftools:environmental_controller>, [
    [ultraCoin, <minecraft:diamond_block>, <bloodmagic:component:16>],
    [YUS_APPROVAL, <minecraft:nether_star>, <cyclicmagic:beacon_potion>],
    [<minecraft:gold_block>, <minecraft:emerald_block>, <rftools:machine_frame>]
]);

// 通量接入点
recipes.addShapeless(<fluxnetworks:fluxplug>, [<fluxnetworks:fluxplug:*>]);
recipes.addShaped(<fluxnetworks:fluxplug>, [
    [commonCoin, <fluxnetworks:fluxcore:*>, commonCoin],
    [<fluxnetworks:fluxcore:*>, <fluxnetworks:fluxblock:*>, <fluxnetworks:fluxcore:*>],
    [<cyclicmagic:cable_wireless_energy>, <fluxnetworks:fluxcore:*>, <cyclicmagic:cable_wireless_energy>]
]);

// 通量接出点
recipes.addShapeless(<fluxnetworks:fluxpoint>, [<fluxnetworks:fluxpoint:*>]);
recipes.addShaped(<fluxnetworks:fluxpoint>, [
    [commonCoin, <fluxnetworks:fluxcore:*>, commonCoin],
    [<fluxnetworks:fluxcore:*>, <minecraft:redstone_block:*>, <fluxnetworks:fluxcore:*>],
    [<cyclicmagic:cable_wireless_energy>, <fluxnetworks:fluxcore:*>, <cyclicmagic:cable_wireless_energy>]
]);

// 大储物袋
recipes.addShaped(<cyclicmagic:storage_bag>, [
    [commonCoin, advancedCoin, commonCoin],
    [<ic2:crafting:1>, <minecraft:coal>, <ic2:crafting:1>],
    [<minecraft:leather>, YUS_APPROVAL, <minecraft:leather>]
]);

// 收割机
recipes.addShaped(<cyclicmagic:harvester_block>, [
    [<ore:gemEmerald>, advancedCoin, <ore:gemEmerald>],
    [<teastory:sickle>, <minecraft:nether_star>, <minecraft:dispenser>],
    [<ore:obsidian>, <ic2:crafting:2>, <ore:obsidian>]
]);

// 药水信标
recipes.addShaped(<cyclicmagic:beacon_potion>, [
    [<minecraft:end_stone:*>, <minecraft:elytra>, <minecraft:end_stone:*>],
    [<minecraft:end_stone:*>, <minecraft:beacon>, <minecraft:end_stone:*>],
    [<ore:blockEmerald>, <ore:blockEmerald>, <ore:blockEmerald>]
]);

// 存储检测器
<rftools:storage_scanner>.addTooltip(format.green(game.localize("tooltip.scanner")));

// 扫描器
recipes.addShaped(<scannable:scanner>.withTag({energy: 5000}), [
    [<minecraft:repeater>, <minecraft:comparator>, <minecraft:repeater>],
    [<appliedenergistics2:material:9>, <projectred-core:resource_item>, <appliedenergistics2:material:9>],
    [<ore:gemQuartz>, advancedCoin, <ore:gemQuartz>]
]);

// 红石护甲防护板
recipes.addShaped(<redstonearsenal:material:224> * 3, [
    [commonCoin, <ore:plateElectrumFlux>, commonCoin],
    [<ore:plateElectrumFlux>, <ore:gemCrystalFlux>, <ore:plateElectrumFlux>],
    [commonCoin, <ore:plateElectrumFlux>, commonCoin]
]);

// 充能黑曜石手柄
recipes.addShaped(<redstonearsenal:material:193>, [
    [<appliedenergistics2:material:1>, <randomthings:advancedredstonetorch_on>, <ore:gemCrystalFlux>],
    [<enderio:item_material:36>, <redstonearsenal:material:192>, <minecraft:stone_button>],
    [<tconstruct:ingots:2>, commonCoin, <appliedenergistics2:material:1>]
]);

// 混合太阳能
recipes.addShaped(<advanced_solar_panels:machines:3>, [
    [<botania:manaresource:4>, commonCoin, <ic2:crafting:15>],
    [<ic2:crafting:4>, <advanced_solar_panels:crafting:4>, <ic2:crafting:4>],
    [<ic2:crafting:2>, <ic2:crafting:4>, <ic2:crafting:2>]
]);
<advanced_solar_panels:machines:3>.addTooltip(format.red(game.localize("tooltip.mixed_solar_panel")));

// 魔钢套
recipes.addShaped(<botania:manasteelhelm>, [
    [<botania:manaresource>, <botania:manaresource>, <botania:manaresource>],
    [<botania:manaresource>, <minecraft:diamond_helmet>, <botania:manaresource>],
    [<ic2:crafting:1>, commonCoin, <ic2:crafting:1>]
]);

recipes.addShaped(<botania:manasteelchest>, [
    [<botania:manaresource>, commonCoin, <botania:manaresource>],
    [<botania:manaresource>, <minecraft:diamond_chestplate>, <botania:manaresource>],
    [<botania:manaresource>, <botania:manaresource>, <botania:manaresource>]
]);

recipes.addShaped(<botania:manasteellegs>, [
    [<botania:manaresource>, <botania:manaresource>, <botania:manaresource>],
    [<botania:manaresource>, <minecraft:diamond_leggings>, <botania:manaresource>],
    [<botania:manaresource>, commonCoin, <botania:manaresource>]
]);

recipes.addShaped(<botania:manasteelboots>, [
    [<botania:manaresource>, null, <botania:manaresource>],
    [<botania:manaresource>, <minecraft:diamond_boots>, <botania:manaresource>],
    [<ic2:crafting:1>, commonCoin, <ic2:crafting:1>]
]);

// 源质钢套
recipes.addShaped(<botania:elementiumhelm>, [
    [<botania:manaresource:7>, <botania:manaresource:7>, <botania:manaresource:7>],
    [<botania:manaresource:7>, <botania:manasteelhelm>, <botania:manaresource:7>],
    [<quark:gravisand>, commonCoin, <minecraft:carrot_on_a_stick>]
]);

recipes.addShaped(<botania:elementiumchest>, [
    [<botania:manaresource:7>, commonCoin, <botania:manaresource:7>],
    [<botania:manaresource>, <botania:manasteelchest>, <botania:manaresource:7>],
    [<botania:manaresource:7>, <botania:manaresource:7>, <botania:manaresource:7>]
]);

recipes.addShaped(<botania:elementiumlegs>, [
    [<botania:manaresource:7>, <minecraft:redstone_block>, <botania:manaresource:7>],
    [<minecraft:wool:2>, <botania:manasteellegs>, <minecraft:wool:2>],
    [<botania:manaresource:7>, <minecraft:lit_pumpkin>, <botania:manaresource:7>]
]);

recipes.addShaped(<botania:elementiumboots>, [
    [<botania:manaresource:7>, commonCoin, <botania:manaresource:7>],
    [<botania:manaresource:7>, <botania:manasteelboots>, <botania:manaresource:7>],
    [null, <ic2:sheet:1>, null]
]);

// 物质聚合器
recipes.addShaped(<appliedenergistics2:condenser>, 
    utils.createSurround(<industrialforegoing:black_hole_unit>, <appliedenergistics2:material:54>)
);

// 红石计划电路板
furnace.addRecipe(<projectred-core:resource_item>, <ic2:crafting:1>, 1);

// 机器框架 (RFTOOL)
recipes.addShaped(<rftools:machine_frame>, 
    utils.coreSurroundCross(<nuclearcraft:part:10>, <quark:root_dye>, <minecraft:gold_nugget>)
);

// 星之组装台
recipes.addShaped(<starcraft:assembler_mki_controller>, [
    [<appliedenergistics2:part:140>, <valkyrielib:modifier_component>, <appliedenergistics2:part:140>],
    [<ic2:crafting:1>, <quark:elder_sea_lantern>, <appliedenergistics2:material:46>],
    [<appliedenergistics2:part:140>, <valkyrielib:modifier_component>, <appliedenergistics2:part:140>]
]);

// 能量输入端口
recipes.addShapeless(<starcraft:energy_lamp>, [<cyclicmagic:cable_wireless_energy>, <environmentaltech:connector>, <minecraft:redstone_lamp>]);

// 物品输入仓
recipes.addShaped(<multiblocked:item_input>, [
    [null, <minecraft:hopper>, null],
    [<ore:plateIron>, <ic2:resource:12>, <ore:plateIron>],
    [<ore:chestWood>, <ore:plateIron>, <ore:chestWood>]
]);
recipes.addShapeless(<multiblocked:item_input>, [<multiblocked:item_output>]);

// 物品输出仓
recipes.addShaped(<multiblocked:item_output>, [
    [<ore:chestWood>, <minecraft:hopper>, <ore:chestWood>],
    [<ore:plateIron>, <ic2:resource:12>, <ore:plateIron>],
    [null, <ore:plateIron>, null]
]);
recipes.addShapeless(<multiblocked:item_output>, [<multiblocked:item_input>]);

// 流体输入仓
recipes.addShaped(<multiblocked:fluid_input>, [
    [null, <minecraft:hopper>, null],
    [<ore:plateIron>, <ic2:resource:12>, <ore:plateIron>],
    [<thermalexpansion:tank>, <ore:plateIron>, <thermalexpansion:tank>]
]);
recipes.addShapeless(<multiblocked:fluid_input>, [<multiblocked:fluid_output>]);

// 流体输出仓
recipes.addShaped(<multiblocked:fluid_output>, [
    [<thermalexpansion:tank>, <minecraft:hopper>, <thermalexpansion:tank>],
    [<ore:plateIron>, <ic2:resource:12>, <ore:plateIron>],
    [null, <ore:plateIron>, null]
]);
recipes.addShapeless(<multiblocked:fluid_output>, [<multiblocked:fluid_input>]);

// 农贸市场
recipes.addShaped(<farmingforblockheads:market>,[
    [<ore:woolRed>, <ore:woolRed>, <ore:woolRed>],
    [<astralsorcery:blockinfusedwood>, <ore:gemEmerald>, <astralsorcery:blockinfusedwood>],
    [<astralsorcery:blockinfusedwood>, <astralsorcery:blockinfusedwood>, <astralsorcery:blockinfusedwood>]
]);

// 硬化升级套件
recipes.addShaped(<thermalfoundation:upgrade>, 
    utils.createCrossWithCore(<thermalfoundation:material:290>, <ic2:crafting:3>, <ore:dustRedstone>)
);

// 强化升级套件
recipes.addShaped(<thermalfoundation:upgrade:1>, 
    utils.createCrossWithCore(<ore:gearElectrum>, <ore:plateSilver>, <ore:blockGlassHardened>)
);

// 信素升级套件
recipes.addShaped(<thermalfoundation:upgrade:2>,
    utils.createCrossWithCore(<thermalfoundation:material:293>, <ore:plateElectrumFlux>, <ore:dustCryotheum>)
);

// 谐振升级套件
recipes.addShaped(<thermalfoundation:upgrade:3>, 
    utils.createCrossWithCore(<ore:gearEnderium>, <ore:plateLumium>, <ore:dustPyrotheum>)
);

// 高级电路板
recipes.addShaped(<ic2:crafting:2>, [
    [<appliedenergistics2:material:23>, <appliedenergistics2:material:22>, <appliedenergistics2:material:24>],
    [commonCoin, <ic2:crafting:1>, commonCoin],
    [<projectred-core:resource_item:21>, <botania:manaresource:9>, <appliedenergistics2:material:9>]
]);

// 神龙能量核心
recipes.addShaped(<draconicevolution:draconic_energy_core> * 2, 
    utils.createCrossWithCore(<draconicevolution:dragon_heart>, <draconicevolution:wyvern_energy_core>, <draconicevolution:draconic_block>)
);

// 龙粒
recipes.addShaped(<draconicevolution:nugget>, 
    utils.createCrossWithCore(<draconicevolution:draconium_ingot>, null, <draconicevolution:draconium_ingot>)
);

// 双足飞龙套
recipes.addShaped(<draconicevolution:wyvern_helm>.withTag({Energy: 4000000}), [
    [<draconicevolution:nugget>, <draconicevolution:wyvern_energy_core>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <ic2:quantum_helmet>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <draconicevolution:wyvern_core>, <draconicevolution:nugget>]
]);

recipes.addShaped(<draconicevolution:wyvern_chest>.withTag({Energy: 4000000}), [
    [<draconicevolution:nugget>, <draconicevolution:wyvern_energy_core>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <mets:heavy_quantum_chest>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <draconicevolution:wyvern_core>, <draconicevolution:nugget>]
]);

recipes.addShaped(<draconicevolution:wyvern_legs>.withTag({Energy: 4000000}), [
    [<draconicevolution:nugget>, <draconicevolution:wyvern_energy_core>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <ic2:quantum_leggings>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <draconicevolution:wyvern_core>, <draconicevolution:nugget>]
]);

recipes.addShaped(<draconicevolution:wyvern_boots>.withTag({Energy: 4000000}), [
    [<draconicevolution:nugget>, <draconicevolution:wyvern_energy_core>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <ic2:quantum_boots>, <draconicevolution:nugget>],
    [<draconicevolution:nugget>, <draconicevolution:wyvern_core>, <draconicevolution:nugget>]
]);

// 导电铁碎片
recipes.addShapeless(<tconstruct:shard>.withTag({Material: "conductive_iron"}), [
    <ore:nuggetConductiveIron>, <ore:nuggetConductiveIron>, <ore:nuggetConductiveIron>, <ore:nuggetConductiveIron>
]);

// 铜螺线管
recipes.addShaped(<nuclearcraft:part:4> * 4, 
    utils.createCrossWithCore(<immersiveengineering:metal_decoration0>, <thermalfoundation:material:515>, <ic2:crafting:5>)
);

// 地磁发电机
recipes.addShaped(<mets:te:21>, [
    [<mets:field_generator>, <nuclearcraft:fusion_core>, <mets:field_generator>],
    [<mets:field_generator>, <draconicevolution:wyvern_core>, <mets:field_generator>],
    [<environmentaltech:pladium>, <advanced_solar_panels:machines:5>, <environmentaltech:pladium>]
]);

// 地磁发电机基座
recipes.addShaped(<mets:geomagnetic_pedestal>, [
    [<mets:field_generator>, <mets:field_generator>, <mets:field_generator>],
    [<mets:living_circuit>, <industrialforegoing:laser_base>, <mets:living_circuit>],
    [<mets:titanium_block>, <mets:titanium_block>, <mets:titanium_block>]
]);

// 地磁发电机天线
recipes.addShaped(<mets:geomagnetic_antenna>, [
    [<randomthings:spectrecoil_ender>, <nuclearcraft:turbine_dynamo_coil:5>, <randomthings:spectrecoil_ender>],
    [<mets:living_circuit>, <immersiveengineering:metal_device1:8>, <mets:living_circuit>],
    [<immersiveengineering:metal_device1:8>, <nuclearcraft:turbine_dynamo_coil:5>, <immersiveengineering:metal_device1:8>]
]);

// 镭射钻
recipes.addShapeless(<industrialforegoing:laser_drill>, [<environmentaltech:void_ore_miner_cont_1>, <ic2:resource:13>]);

// 镭射钻基座
recipes.addShapeless(<industrialforegoing:laser_base>, [<environmentaltech:structure_frame_1>, <industrialforegoing:pink_slime_ingot>]);

// 时间之瓶
recipes.addShapeless(<randomthings:timeinabottle>, [
    <minecraft:sponge>, <enderio:block_infinity:2>
]);

// 量子套
recipes.addShaped(<ic2:quantum_helmet>, [
    [<ic2:glass>, <botania:terrasteelhelm>, <ic2:glass>],
    [<ic2:crafting:4>, <ic2:lapotron_crystal:26>, <ic2:crafting:4>],
    [<ic2:crafting:2>, <ic2:hazmat_helmet>, <ic2:crafting:2>]
]);

recipes.addShaped(<ic2:quantum_chestplate>, [
    [<ic2:glass>, <botania:terrasteelchest>, <ic2:glass>],
    [<ic2:crafting:4>, <ic2:lapotron_crystal:26>, <ic2:crafting:4>],
    [<ic2:crafting:2>, <ic2:hazmat_helmet>, <ic2:crafting:2>]
]);

recipes.addShaped(<ic2:quantum_leggings>, [
    [<ic2:glass>, <botania:terrasteellegs>, <ic2:glass>],
    [<ic2:crafting:4>, <ic2:lapotron_crystal:26>, <ic2:crafting:4>],
    [<ic2:crafting:2>, <ic2:hazmat_helmet>, <ic2:crafting:2>]
]);

recipes.addShaped(<ic2:quantum_boots>, [
    [<ic2:glass>, <botania:terrasteelboots>, <ic2:glass>],
    [<ic2:crafting:4>, <ic2:lapotron_crystal:26>, <ic2:crafting:4>],
    [<ic2:crafting:2>, <ic2:hazmat_helmet>, <ic2:crafting:2>]
]);

// 速度强化版部件
recipes.addShaped(<environmentaltech:modifier_speed>, [
    [<ore:blockRedstone>, <environmentaltech:erodium_crystal>, <ore:blockRedstone>], 
    [<environmentaltech:mica>, <environmentaltech:modifier_null>, <environmentaltech:mica>], 
    [<ore:blockRedstone>, <ic2:upgrade>, <ore:blockRedstone>]
]);

// 精度强化部件
recipes.addShaped(<environmentaltech:modifier_accuracy>, [
    [<ore:blockDiamond>, <environmentaltech:pladium_crystal>, <ore:blockDiamond>], 
    [<environmentaltech:mica>, <environmentaltech:modifier_null>, <environmentaltech:mica>], 
    [<ore:blockDiamond>, <environmentaltech:litherite>, <ore:blockDiamond>]
]);

// 幸运强化部件
recipes.addShaped(<environmentaltech:modifier_luck>, [
    [<minecraft:enchanting_table>, <environmentaltech:pladium_crystal>, <minecraft:enchanting_table>], 
    [<environmentaltech:mica>, <environmentaltech:modifier_null>, <environmentaltech:mica>], 
    [<minecraft:enchanting_table>, <botania:cosmetic:16>, <minecraft:enchanting_table>]
]);
