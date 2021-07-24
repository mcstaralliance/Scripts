#priority 1

import crafttweaker.item.IItemStack;
import mods.touhoulittlemaid.Altar;
import mods.thaumcraft.Infusion;

// Mek 导线
var mekTooltip = [
    <mekanism:transmitter>,
    <mekanism:transmitter:1>,
    <mekanism:transmitter:3>,
    <mekanism:transmitter:2>
] as IItemStack[];
for myMekTooltip in mekTooltip{
    myMekTooltip.addTooltip("§c不建议使用此导线, 大概率会引起卡服、卡端, 推荐使用热力膨胀导线或 XNet 模组");
}

// EIO 导线
var eioTooltip = [
    <enderio:item_item_conduit>,
    <enderio:item_liquid_conduit>,
    <enderio:item_liquid_conduit:1>,
    <enderio:item_liquid_conduit:2>,
    <enderio:item_power_conduit>,
    <enderio:item_power_conduit:1>,
    <enderio:item_power_conduit:2>,
    <enderio:item_redstone_conduit>
] as IItemStack[];
for myEioTooltip in eioTooltip{
    myEioTooltip.addTooltip("§c不建议使用此类导线, 大概率会引起卡服, 推荐使用热力膨胀导线或 XNet 模组");
}

<contenttweaker:paimon>.addTooltip("§f最 好 的 伙 伴");

// 删除配方
var remove = [
    <forestry:ingot_bronze>,
    <ic2:resource:12>,
    <cookingforblockheads:sink>,
    <ic2:te:43>,
    <thermalexpansion:frame>,
    <mekanism:basicblock:8>,
    <mekanism:machineblock:8>,
    <botania:pool>,
    <appliedenergistics2:controller>,
    <enderio:item_material>,
    <enderio:item_material:66>,
    <draconicevolution:wyvern_core>,
    <draconicevolution:draconic_core>,
    <draconicevolution:wyvern_energy_core>,
    <draconicevolution:wyvern_helm>,
    <draconicevolution:wyvern_chest>,
    <draconicevolution:wyvern_legs>,
    <draconicevolution:wyvern_boots>,
    <techreborn:matter_fabricator>,
    <botania:altar>,
    <ic2:jetpack_electric:*>,
    <ic2:te:3>
] as IItemStack[];
for myRemove in remove{
    recipes.remove(myRemove);
}

// 删除女仆生成
Altar.removeRecipe("touhou_little_maid:spawn_maid");

// 青铜
recipes.addShapeless(<forestry:ingot_bronze> * 2, 
    [<ore:ingotTin>, <ore:ingotCopper>, 
    <ore:ingotCopper>, <ore:ingotCopper>]
);

recipes.addShapeless(<forestry:ingot_bronze> * 9, 
[
    <ore:blockBronze>
]);

// 派蒙
recipes.addShapeless(<contenttweaker:paimon> * 4, 
[
    <minecraft:wheat>, <minecraft:wheat>, 
    <minecraft:apple>, <minecraft:apple>
]);

// 基础机器框架
recipes.addShaped(<ic2:resource:12>, 
[
    [<ic2:plate:3>, <ic2:plate:8>, <ic2:plate:3>], 
    [<ic2:plate:8>, <contenttweaker:hammer>.anyDamage().transformDamage(20), <ic2:plate:8>], 
    [<ic2:plate:3>, <ic2:plate:8>, <ic2:plate:3>]
]);

// 锤子
recipes.addShaped(<contenttweaker:hammer>, 
[
    [null, <ore:ingotLead>, <ore:materialResin>], 
    [null, <tconstruct:stone_stick>, <ore:ingotLead>], 
    [<tconstruct:stone_stick>, null, null]
]);

// 水槽
recipes.addShaped(<cookingforblockheads:sink>, 
[
    [<embers:ingot_dawnstone>, <embers:ingot_dawnstone>, <embers:ingot_dawnstone>],
    [<minecraft:hardened_clay>, <thaumcraft:everfull_urn>, <minecraft:hardened_clay>],
    [<minecraft:hardened_clay>, <minecraft:hardened_clay>, <minecraft:hardened_clay>]
]);

// 压缩机
recipes.addShaped(<ic2:te:43>, 
[
    [<tconstruct:seared>, <contenttweaker:hammer>.anyDamage().transformDamage(10), <tconstruct:seared>], 
    [<tconstruct:seared>, <ic2:resource:12>, <tconstruct:seared>], 
    [<tconstruct:seared>, <ic2:crafting:1>, <tconstruct:seared>]
]);
recipes.addShaped(<techreborn:compressor>, 
[
    [<tconstruct:seared>, <contenttweaker:hammer>.anyDamage().transformDamage(10), <tconstruct:seared>], 
    [<tconstruct:seared>, <techreborn:machine_casing>, <tconstruct:seared>], 
    [<tconstruct:seared>, <ic2:crafting:1>, <tconstruct:seared>]
]);

// 基础电路板
mods.mekanism.infuser.removeRecipe(<mekanism:controlcircuit>);
mods.mekanism.infuser.addRecipe("REDSTONE", 50, <ore:ingotOsmium>, <mekanism:controlcircuit>);

// 机器外壳
recipes.addShaped(<thermalexpansion:frame>, 
[
    [<ic2:crafting:3>, <botania:managlass>, <ic2:crafting:3>],
    [<tconstruct:clear_glass>, <ic2:resource:12>, <tconstruct:clear_glass>],
    [<ic2:crafting:3>, <botania:managlass>, <ic2:crafting:3>]
]);
recipes.addShaped(<thermalexpansion:frame> * 2, 
[
    [<techreborn:uumatter>, <techreborn:uumatter>, <techreborn:uumatter>],
    [<techreborn:uumatter>, <thermalexpansion:frame>, <techreborn:uumatter>],
    [<techreborn:uumatter>, <techreborn:uumatter>, <techreborn:uumatter>]
]);

// 钢制机壳
recipes.addShaped(<mekanism:basicblock:8>, 
[
    [<ore:ingotTungstensteel>, <ore:ingotTungstensteel>, <ore:ingotTungstensteel>],
    [<ore:ingotTungstensteel>, <techreborn:machine_frame:2>, <ore:ingotTungstensteel>],
    [<ore:ingotTungstensteel>, <ore:ingotTungstensteel>, <ore:ingotTungstensteel>]
]);
recipes.addShaped(<mekanism:basicblock:8> * 2, 
[
    [<techreborn:uumatter>, <techreborn:uumatter>, <techreborn:uumatter>],
    [<techreborn:uumatter>, <mekanism:basicblock:8>, <techreborn:uumatter>],
    [<techreborn:uumatter>, <techreborn:uumatter>, <techreborn:uumatter>]
]);

// 冶金灌注机
recipes.addShaped(<mekanism:machineblock:8>, 
[
    [<immersiveengineering:stone_decoration:1>, <ic2:crafting:1>, <immersiveengineering:stone_decoration:1>],
    [<embers:ingot_dawnstone>, <techreborn:iron_furnace>, <embers:ingot_dawnstone>],
    [<immersiveengineering:stone_decoration:1>, <ic2:crafting:1>, <immersiveengineering:stone_decoration:1>],
]);

// 魔力尘
recipes.addShaped(<botania:manaresource:23>, 
[
    [<ore:listAllsugar>, <ore:dustGlowstone>, <ore:listAllsugar>],
    [<ic2:dust:8>, <ore:dustLapis>, <ic2:dust:8>],
    [<ore:listAllsugar>, <ore:dustGlowstone>, <ore:listAllsugar>]
]);

// 注魔石
recipes.addShaped(<contenttweaker:magic_stone> * 8, 
[
    [<ore:stone>, <ore:stone>, <ore:stone>],
    [<ore:stone>, <botania:manaresource:23>, <ore:stone>],
    [<ore:stone>, <ore:stone>, <ore:stone>]
]);

// 魔力池
recipes.addShaped(<botania:pool>, 
[
    [null, null, null],
    [<contenttweaker:magic_stone>, null, <contenttweaker:magic_stone>],
    [<contenttweaker:magic_stone>, <contenttweaker:magic_stone>, <contenttweaker:magic_stone>]
]);

// ME控制器
recipes.addShaped(<appliedenergistics2:controller>, 
[
    [<appliedenergistics2:sky_stone_brick>, <techreborn:cable:4>, <appliedenergistics2:sky_stone_brick>],
    [<threng:material:6>, <techreborn:machine_frame:1>, <threng:material:14>],
    [<appliedenergistics2:sky_stone_brick>, <techreborn:cable:4>, <appliedenergistics2:sky_stone_brick>]
]);

// 基础外壳框架
recipes.addShaped(<enderio:item_material>, 
[
    [<ore:barsIron>, <ore:ingotSteel>, <ore:barsIron>],
    [<enderio:item_material:20>, <enderio:item_material:20>, <enderio:item_material:20>],
    [<ore:barsIron>, <ore:ingotSteel>, <ore:barsIron>]
]);

// 末影钢外壳
mods.tconstruct.Casting.addTableRecipe(<enderio:item_material:66>, <enderio:item_material>, <liquid:end_steel>, 2000, true, 1000);

// 龙芯
recipes.addShaped(<draconicevolution:draconic_core>, 
[
    [<draconicevolution:draconium_ingot>, <techreborn:ingot:22>, <draconicevolution:draconium_ingot>],
    [<techreborn:ingot:22>, <ic2:crafting:19>, <techreborn:ingot:22>],
    [<draconicevolution:draconium_ingot>, <techreborn:ingot:22>, <draconicevolution:draconium_ingot>]
]);

// 双足飞龙核心
recipes.addShaped(<draconicevolution:wyvern_core> * 2, 
[
    [<draconicevolution:draconium_block>, <mekanism:controlcircuit:3>, <draconicevolution:draconium_block>],
    [<techreborn:ingot:25>, <contenttweaker:dragon>, <techreborn:ingot:25>],
    [<thaumadditions:mithrillium_ingot>, <super_solar_panels:crafting>, <thaumadditions:mithrillium_ingot>]
]);

// 双足飞龙嬗变器
recipes.addShaped(<contenttweaker:dragon> * 2, 
[
    [<embers:wildfire_core>, <mekanism:atomicalloy>, <embers:wildfire_core>],
    [<mekanism:atomicalloy>, <thaumicaugmentation:material:3>, <mekanism:atomicalloy>],
    [<embers:wildfire_core>, <mekanism:atomicalloy>, <embers:wildfire_core>]
]);

//双足飞龙能量核心
recipes.addShaped(<draconicevolution:wyvern_energy_core>, 
[
    [<gravisuite:crafting>, <draconicevolution:draconium_block>, <gravisuite:crafting>],
    [<draconicevolution:draconium_block>, <mekanism:basicblock2:3>.withTag({tier: 2}), <draconicevolution:draconium_block>],
    [<gravisuite:crafting>, <draconicevolution:draconium_block>, <gravisuite:crafting>]
]);

// 双足飞龙套
recipes.addShaped(<draconicevolution:wyvern_helm>, 
[
    [<embers:wildfire_core>, <forestry:royal_jelly>, <embers:wildfire_core>],
    [<draconicevolution:wyvern_core>, <botania:terrasteelhelm>, <draconicevolution:wyvern_core>],
    [<draconicevolution:wyvern_energy_core>, <super_solar_panels:crafting:21>, <draconicevolution:wyvern_energy_core>]
]);
recipes.addShaped(<draconicevolution:wyvern_chest>, 
[
    [<embers:wildfire_core>, <forestry:royal_jelly>, <embers:wildfire_core>],
    [<draconicevolution:wyvern_core>, <botania:terrasteelchest>, <draconicevolution:wyvern_core>],
    [<draconicevolution:wyvern_energy_core>, <super_solar_panels:crafting:21>, <draconicevolution:wyvern_energy_core>]
]);
recipes.addShaped(<draconicevolution:wyvern_legs>, 
[
    [<embers:wildfire_core>, <forestry:royal_jelly>, <embers:wildfire_core>],
    [<draconicevolution:wyvern_core>, <botania:terrasteellegs>, <draconicevolution:wyvern_core>],
    [<draconicevolution:wyvern_energy_core>, <super_solar_panels:crafting:21>, <draconicevolution:wyvern_energy_core>]
]);
recipes.addShaped(<draconicevolution:wyvern_boots>, 
[
    [<embers:wildfire_core>, <forestry:royal_jelly>, <embers:wildfire_core>],
    [<draconicevolution:wyvern_core>, <botania:terrasteelboots>, <draconicevolution:wyvern_core>],
    [<draconicevolution:wyvern_energy_core>, <super_solar_panels:crafting:21>, <draconicevolution:wyvern_energy_core>]
]);


// 替身地藏
mods.thaumcraft.Infusion.registerRecipe("tsdz", "", 
<touhou_little_maid:substitute_jizo>, 
2, [<aspect:caeles> * 30, <aspect:victus> * 50], 
    <thaumadditions:mithminite_block>, 
    [<thaumcraft:charm_undying>, 
    <thaumcraft:charm_undying>, 
    <thaumcraft:charm_undying>, 
    <thaumcraft:charm_undying>, 
    <thaumcraft:charm_undying>, 
    <thaumcraft:charm_undying>, 
    <thaumcraft:charm_undying>, 
    <thaumcraft:charm_undying>
]); 

// 物质生成机
recipes.addShaped(<techreborn:matter_fabricator>, 
[
    [<techreborn:part>, <threng:material:13>, <techreborn:part>],
    [<techreborn:cable:8>, <mekanism:basicblock:8>, <techreborn:cable:8>],
    [<draconicevolution:wyvern_core>, <techreborn:lapotronicorb>.withTag({energy: 0}), <draconicevolution:wyvern_core>]
]);

// 高级机器框架
recipes.addShaped(<techreborn:machine_frame:2> * 2, 
[
    [<techreborn:uumatter>, <techreborn:uumatter>, <techreborn:uumatter>],
    [<techreborn:uumatter>, <techreborn:machine_frame:2>, <techreborn:uumatter>],
    [<techreborn:uumatter>, <techreborn:uumatter>, <techreborn:uumatter>]
]);

// 花药台
recipes.addShaped(<botania:altar>, 
[
    [<contenttweaker:magic_stone>, <thaumcraft:alumentum>, <contenttweaker:magic_stone>],
    [null, <contenttweaker:magic_stone>, null],
    [<contenttweaker:magic_stone>, <contenttweaker:magic_stone>, <contenttweaker:magic_stone>]
]);

// 邪术注魔柱
mods.thaumcraft.Infusion.registerRecipe("xs", "", 
<thaumcraft:pillar_eldritch>, 
2, [<aspect:praecantatio> * 50, <aspect:alienis> * 50], 
    <draconicevolution:infused_obsidian>, 
    [<thaumcraft:salis_mundus>,  
    <thaumcraft:pillar_ancient>
]); 


// 荒古注魔柱
mods.thaumcraft.Infusion.registerRecipe("hg", "", 
<thaumcraft:pillar_ancient>, 
2, [<aspect:praecantatio> * 50, <aspect:vacuos> * 50], 
    <draconicevolution:infused_obsidian>, 
    [<thaumcraft:salis_mundus>,  
    <thaumcraft:metal_thaumium>
]); 

// 电力喷气背包
recipes.addShaped(<ic2:jetpack_electric:26>,
[
    [<ic2:casing:3>, <ore:circuitAdvanced>, <ic2:casing:3>],
    [<ic2:casing:3>, <ic2:te:72>, <ic2:casing:3>],
    [<minecraft:glowstone_dust>, <minecraft:elytra>, <minecraft:glowstone_dust>]
]);

// Fix 火力发电机
recipes.addShaped(<ic2:te:3>, 
[
    [null, <ore:reBattery>, null],
    [null, <ic2:resource:12>, null],
    [null, <minecraft:furnace>, null]
]);
