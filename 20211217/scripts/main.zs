/**
 * @author 星域联盟
 * @version 22.1.13
 */

#priority 1

import crafttweaker.item.IItemStack;
import mods.touhoulittlemaid.Altar;
import mods.botaniatweaks.Agglomeration;

var myLogs = [<minecraft:log>,<minecraft:log:1>,<minecraft:log:2>,<minecraft:log:3>,<minecraft:log2>,<minecraft:log2:1>] as IItemStack[];
var myPlanks = [<minecraft:planks>,<minecraft:planks:1>,<minecraft:planks:2>,<minecraft:planks:3>,<minecraft:planks:4>,<minecraft:planks:5>] as IItemStack[];
var stoneAxe = <minecraft:stone_axe>.anyDamage().transformDamage();
var ironAxe = <minecraft:iron_axe>.anyDamage().transformDamage();
var goldenAxe = <minecraft:golden_axe>.anyDamage().transformDamage();
var diamondAxe = <minecraft:diamond_axe>.anyDamage().transformDamage();

for i, log in myLogs {
    var plank = myPlanks[i];
    recipes.remove(plank);
    plank.addTooltip("不同等级的斧头合成效果不同");
    log.addTooltip("不同等级的斧头合成效果不同");
    recipes.addShapeless(plank , [log]);
    recipes.addShapeless(plank*2,[log,stoneAxe]);
    recipes.addShapeless(plank*2,[log,goldenAxe]);
    recipes.addShapeless(plank*3,[log,ironAxe]);
    recipes.addShapeless(plank*4,[log,diamondAxe]);
    }

<contenttweaker:paimon>.addTooltip("§f最 好 的 伙 伴");
<contenttweaker:skull_block>.addTooltip("§f破坏黑色羊毛");
<botania:manaresource:4>.addTooltip("§a大约需要四分之一池魔力");
<avaritia:resource:1>.addTooltip("§a大约需要四分之一池魔力");
<ic2:resource:12>.addTooltip("§f每手搓一个框架, 世界上就会有一个新月锤消失");

// 删除配方
var remove = [
    <tconstruct:soil>,
    <botania:altar>,
    <botania:pool>,
    <forestry:ingot_bronze>,
    <botania:pylon>,
    <botania:manaresource:14>,
    <appliedenergistics2:controller>,
    <ic2:resource:12>,
    <enderio:item_material>,
    <thermalexpansion:frame>,
    <immersiveengineering:stone_decoration:1>,
    <draconicevolution:draconic_core>,
    <contenttweaker:dragon>,
    <draconicevolution:wyvern_core>,
    <environmentaltech:structure_frame_3>,
    <environmentaltech:structure_frame_4>,
    <cfm:item_log>,
    <ic2:te:45>,
    <cookingforblockheads:sink>
] as IItemStack[];
for myRemove in remove{
    recipes.remove(myRemove);
}

var removeSolarPanels = [
    <super_solar_panels:machines:1>,
    <super_solar_panels:machines:2>,
    <super_solar_panels:machines:3>,
    <super_solar_panels:machines:4>,
    <super_solar_panels:machines:5>,
    <super_solar_panels:machines:11>,
    <super_solar_panels:machines:6>,
    <super_solar_panels:machines:7>,
    <super_solar_panels:machines:8>,
    <super_solar_panels:machines:9>
] as IItemStack[];
for panels in removeSolarPanels{
    recipes.remove(panels);
    panels.addTooltip(format.red("该物品为计划删除 Mod 物品，请使用其它物品代替"));
}

// 删除女仆生成
Altar.removeRecipe("touhou_little_maid:spawn_maid");

// EnderIO 导线
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
    myEioTooltip.addTooltip("§c我们不建议玩家使用该导线, 因为大概率会引起卡服, 我们推荐使用热力膨胀 Mod 或 XNet Mod 中的导线。");
}

val commonCoin = <custommc:item961>;
commonCoin.displayName = "硬币";
commonCoin.addTooltip("价值: 10");

val advancedCoin = <custommc:item927>;
advancedCoin.displayName = "硬币";
advancedCoin.addTooltip("价值: 100");

val ultraCoin = <custommc:item970>;
ultraCoin.displayName = "硬币";
ultraCoin.addTooltip("价值: 1000");

// 伪劣雪浪纸
recipes.addShaped(<contenttweaker:artificialfoil> * 4, [
    [<ore:paper>, <ore:paper>, <ore:paper>],
    [<ore:paper>, <contenttweaker:paimon>, <ore:paper>],
    [<ore:paper>, <ore:paper>, <ore:paper>]
]);

// 木板
recipes.addShapeless(<minecraft:planks> * 5,
    [<minecraft:iron_axe>.anyDamage().transformDamage(5), <ore:logWood>]
);

recipes.addShapeless(<minecraft:planks> * 6,
    [<minecraft:diamond_axe>.anyDamage().transformDamage(10), <ore:logWood>]
);

// 水泥
mods.forestry.Carpenter.addRecipe(<tconstruct:soil> * 2, [
    [<contenttweaker:soildust>, <contenttweaker:soildust>, <contenttweaker:soildust>],
    [<contenttweaker:soildust>, null, null],
    [null, null, null]], 20, <liquid:water> * 100
);

// 魔力粉
recipes.addShapeless(<botania:manaresource:23>, [
    <ore:tallow>, <minecraft:dye:15>, <minecraft:glowstone_dust>, <ebwizardry:magic_crystal>
]);

// 元始魔力粉
furnace.addRecipe(<thermalfoundation:material:1028> * 1, <botania:manaresource:23> * 1);

// 花药台
recipes.addShaped(<botania:altar>, [
    [<minecraft:stone:6>, <thermalfoundation:geode>, <minecraft:stone:6>],
    [null, <minecraft:stone:6>, null],
    [<minecraft:stone:6>, <minecraft:stone:6>, <minecraft:stone:6>]
]);

// 注魔石
recipes.addShaped(<contenttweaker:magic_stone> * 5, [
    [<minecraft:stone:4>, <minecraft:stone:4>, <minecraft:stone:4>],
    [<minecraft:stone:4>, <thermalfoundation:geode>, <minecraft:stone:4>],
    [<minecraft:stone:4>, <minecraft:stone:4>, <minecraft:stone:4>]
]);

// 魔力池
recipes.addShaped(<botania:pool>, [
    [<contenttweaker:magic_stone>, null, <contenttweaker:magic_stone>],
    [<contenttweaker:magic_stone>, <contenttweaker:magic_stone>, <contenttweaker:magic_stone>],
    [null, null, null]
]);

// 白雏菊
mods.botania.Apothecary.removeRecipe("puredaisy");
mods.botania.Apothecary.addRecipe("puredaisy", 
    [<botania:petal>, <botania:petal>, <botania:petal>, <botania:petal>, <ebwizardry:magic_crystal>]
);

// 青铜
recipes.addShapeless(<forestry:ingot_bronze> * 2, 
    [<ore:ingotTin>, <ore:ingotCopper>, 
    <ore:ingotCopper>, <ore:ingotCopper>]
);

recipes.addShapeless(<forestry:ingot_bronze> * 9, 
[
    <ore:blockBronze>
]);


// 水晶矩阵锭
Agglomeration.addRecipe(<avaritia:resource:1>,[<minecraft:ender_pearl>, <ore:ingotIron>, <thermalfoundation:geode>], 250000);

// 泰拉钢锭
Agglomeration.removeRecipe(<botania:manaresource:4>,[<botania:manaresource:2>,<botania:manaresource>,<botania:manaresource:1>]);
Agglomeration.addRecipe(<botania:manaresource:4>,[<avaritia:resource:1>, <contenttweaker:star>], 250000, 0xBCFFFF, 0x56FF0A, 
<contenttweaker:skull_block>, <botania:storage>, <contenttweaker:magic_stone>
);

// 魔力水晶
Agglomeration.addRecipe(<botania:pylon>,[<botania:manaresource> * 2, <minecraft:diamond>, <minecraft:gold_ingot> * 2], 50000);

// 盖亚魂锭
Agglomeration.addRecipe(<botania:manaresource:14>,[<botania:manaresource:4>, <botania:manaresource:5> * 8], 500000, 0x56FF0A, 0xBAF8D7, 
<contenttweaker:skull_block>, <botania:storage>, <contenttweaker:magic_stone>
);

// ME控制器
mods.threng.Aggregator.addRecipe(<appliedenergistics2:controller>, <thermalexpansion:frame> * 1, <threng:material:6>*8, <appliedenergistics2:material:6> * 64);

// 基础机器框架
recipes.addShaped(<ic2:resource:12>, [
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>],
    [<ore:plateIron>, <thermalfoundation:wrench>, <ore:plateIron>], 
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>]
]);

// 简易机器框架
mods.tconstruct.Casting.addBasinRecipe(<enderio:item_material>, <ic2:resource:12>, <liquid:iron>, 1000, true, 100);
recipes.addShaped(<enderio:item_material>, [
    [<ic2:fence>, <enderio:item_alloy_ingot:9>, <ic2:fence>],
    [<enderio:item_alloy_ingot:9>, <enderio:item_material:20>, <enderio:item_alloy_ingot:9>],
    [<ic2:fence>, <enderio:item_alloy_ingot:9>, <ic2:fence>]
]);
recipes.addShaped(<ic2:resource:12>, [
    [null, <ore:plateIron>, null],
    [<ore:plateIron>, <appliedenergistics2:material:6>, <ore:plateIron>],
    [null, <ore:plateIron>, null]
]);

// 机器框架
recipes.addShaped(<thermalexpansion:frame>, [
    [<enderio:item_alloy_ingot:3>, <ore:blockGlass>, <enderio:item_alloy_ingot:3>],
    [<thermalfoundation:material:257>, <enderio:item_material>, <thermalfoundation:material:257>],
    [<enderio:item_alloy_ingot:3>, <ore:blockGlass>, <enderio:item_alloy_ingot:3>]
]);

// 高炉砖
recipes.addShaped(<immersiveengineering:stone_decoration:1>, [
    [<quark:charred_nether_bricks>, <minecraft:blaze_powder>, <quark:charred_nether_bricks>],
    [<minecraft:blaze_powder>, <contenttweaker:clay_furnace>, <minecraft:blaze_powder>],
    [<quark:charred_nether_bricks>, <minecraft:blaze_powder>, <quark:charred_nether_bricks>]
]);

// 龙芯
mods.avaritia.ExtremeCrafting.addShaped("Draconic", <draconicevolution:draconic_core> * 1, [
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
mods.avaritia.ExtremeCrafting.addShaped("Dragon", <contenttweaker:dragon> * 2, [
    [null, null, null, null, <super_solar_panels:crafting:29>, null, null, null, null], 
    [null, <botania:rune:8>, <super_solar_panels:crafting:0>, null, <super_solar_panels:crafting:29>, null, <super_solar_panels:crafting:0>, <botania:rune:11>, null],
    [null, <super_solar_panels:crafting:0>, <super_solar_panels:crafting:21>, <threng:material:1>, <threng:material:1>, <threng:material:1>, <super_solar_panels:crafting:21>, <super_solar_panels:crafting:0>, null],
    [null, null, <threng:material:1>, <botania:alchemycatalyst>, <draconicevolution:draconic_core>, <botania:alchemycatalyst>, <threng:material:1>, null, null],
    [<super_solar_panels:crafting:29>, <super_solar_panels:crafting:29>, <threng:material:1>, <botania:manaresource:5>, <super_solar_panels:crafting:13>, <botania:manaresource:5>, <threng:material:1>, <super_solar_panels:crafting:29>, <super_solar_panels:crafting:29>],
    [null, null, <threng:material:1>, <botania:alchemycatalyst>, <draconicevolution:draconic_core>, <botania:alchemycatalyst>, <threng:material:1>, null, null],
    [null, <super_solar_panels:crafting:0>, <super_solar_panels:crafting:21>, <threng:material:1>, <threng:material:1>, <threng:material:1>, <super_solar_panels:crafting:21>, <super_solar_panels:crafting:0>, null],
    [null, <botania:rune:9>, <super_solar_panels:crafting:0>, null, <super_solar_panels:crafting:29>, null, <super_solar_panels:crafting:0>, <botania:rune:10>, null],
    [null, null, null, null, <super_solar_panels:crafting:29>, null, null, null, null]
]);

// 双足飞龙核心
mods.avaritia.ExtremeCrafting.addShaped("Core", <draconicevolution:wyvern_core> * 4, [
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
mods.avaritia.ExtremeCrafting.addShaped("TierIII", <environmentaltech:structure_frame_3> * 2, [
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, <minecraft:emerald>, <super_solar_panels:crafting:1>, <minecraft:emerald>, null, null, null],
    [null, null, <minecraft:emerald>, <environmentaltech:erodium_crystal>, <environmentaltech:kyronite_crystal>, <environmentaltech:erodium_crystal>, <minecraft:emerald>, null, null],
    [null, null, <super_solar_panels:crafting:5>, <environmentaltech:kyronite_crystal>, <environmentaltech:structure_frame_2>, <environmentaltech:kyronite_crystal>, <super_solar_panels:crafting:5>, null, null],
    [null, null, <minecraft:emerald>, <environmentaltech:erodium_crystal>, <environmentaltech:kyronite_crystal>, <environmentaltech:erodium_crystal>, <minecraft:emerald>, null, null],
    [null, null, null, <minecraft:emerald>, <super_solar_panels:crafting:0>, <minecraft:emerald>, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]]);

// 四级结构方块
mods.avaritia.ExtremeCrafting.addShaped("TierIV", <environmentaltech:structure_frame_4> * 2, [
    [null, null, null, null, null, null, null, null, null], 
    [null, null, null, <super_solar_panels:crafting:20>, <super_solar_panels:crafting:20>, <super_solar_panels:crafting:20>, null, null, null],
    [null, null, <super_solar_panels:crafting:41>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <super_solar_panels:crafting:41>, null, null],
    [null, <super_solar_panels:crafting:19>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:22>, <environmentaltech:structure_frame_3>, <super_solar_panels:crafting:21>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:18>, null],
    [null, <super_solar_panels:crafting:19>, <super_solar_panels:crafting:23>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium>, <environmentaltech:pladium_crystal>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:18>, null],
    [null, <super_solar_panels:crafting:19>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:21>, <environmentaltech:structure_frame_3>, <super_solar_panels:crafting:22>, <super_solar_panels:crafting:23>, <super_solar_panels:crafting:18>, null],
    [null, null, <super_solar_panels:crafting:41>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <environmentaltech:pladium_crystal>, <super_solar_panels:crafting:41>, null, null],
    [null, null, null, <super_solar_panels:crafting:7>, <super_solar_panels:crafting:7>, <super_solar_panels:crafting:7>, null, null, null],
    [null, null, null, null, null, null, null, null, null]]);

// 原木条
recipes.addShapeless(<cfm:item_log> * 8, [<minecraft:log>]);

// 元始结晶
recipes.addShapeless(<thermalfoundation:geode> * 1, [<thermalfoundation:material:1028>, <thermalfoundation:material:1028>, <thermalfoundation:material:1028>, <thermalfoundation:material:1028>]);

// 提取机硬币试验
recipes.addShaped(<ic2:te:45>*1,[[<custommc:item927>,<custommc:item927>,<custommc:item927>],[<ic2:treetap>,<ic2:resource:12>,<ic2:treetap>],[<ic2:treetap>,<ic2:crafting:1>,<ic2:treetap>]]);

// 水槽
recipes.addShaped(<cookingforblockheads:sink>, [
    [<custommc:item927>, <custommc:item961>, <custommc:item927>], 
    [<custommc:item970>, <custommc:item927>, <custommc:item970>],
    [<custommc:item970>, <custommc:item970>, <custommc:item970>]
]);

// 硬币
recipes.addShapeless(<custommc:item961> * 10, [<custommc:item927>]);
recipes.addShapeless(<custommc:item927> * 10, [<custommc:item970>]);
