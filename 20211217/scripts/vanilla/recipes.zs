#priority 2000

import crafttweaker.item.IItemStack;
import crafttweaker.oredict.IOreDictEntry;
import mods.avaritia.ExtremeCrafting;

import scripts.utils;


// defines
var uLogs as IItemStack[] = [
    <minecraft:log>,
    <minecraft:log:1>,
    <minecraft:log:2>,
    <minecraft:log:3>,
    <minecraft:log2>,
    <minecraft:log2:1>
];

var uPlanks as IItemStack[] = [
    <minecraft:planks>,
    <minecraft:planks:1>,
    <minecraft:planks:2>,
    <minecraft:planks:3>,
    <minecraft:planks:4>,
    <minecraft:planks:5>
];
var stoneAxe as IItemStack= <minecraft:stone_axe>.anyDamage().transformDamage();
var ironAxe as IItemStack= <minecraft:iron_axe>.anyDamage().transformDamage();
var goldenAxe as IItemStack= <minecraft:golden_axe>.anyDamage().transformDamage();
var diamondAxe as IItemStack= <minecraft:diamond_axe>.anyDamage().transformDamage();

// furname
// remove


// add
// 元始魔力粉
furnace.addRecipe(<thermalfoundation:material:1028> * 1, <botania:manaresource:23> * 1);



// cot items
// 派蒙
recipes.addShaped(<contenttweaker:paimon> * 16,
    utils.createSurround(<ore:cropWheat>, <ore:cropApple>)
);

// 熔炉模型
recipes.addShaped(<contenttweaker:clay_furnace> * 8,
    utils.createSurround(<minecraft:furnace>, <contenttweaker:artificialfoil>)
);

// 硅酸盐粉
recipes.addShapeless(<contenttweaker:soildust> * 4, [
    <ore:clay>, <ore:clay>, <ore:sand>, <ore:gravel>
]);

// 星
recipes.addShaped(<contenttweaker:star>, 
    utils.createCrossWithCore(<thermalfoundation:material:1028>, null, <threng:material:9>)
);


// 统一锭
for name in utils.ingotNameList {
    var item as IItemStack = itemUtils.getItem("contenttweaker:" ~ name ~ "_ingot");
    var oreDict as IOreDictEntry = oreDict.get("ingot" ~ name[0].toUpperCase() ~ name.substring(1));
    oreDict.add(item);
    recipes.addShapeless(item, [oreDict]);
}

// logs and planks
for i, log in uLogs {
    var plank = uPlanks[i];
    recipes.remove(plank);
    plank.addTooltip(game.localize("tooltip.logs_and_planks"));
    log.addTooltip(game.localize("tooltip.logs_and_planks"));
    recipes.addShapeless(plank, [log]);
    recipes.addShapeless(plank*2, [log, stoneAxe]);
    recipes.addShapeless(plank*2, [log, goldenAxe]);
    recipes.addShapeless(plank*3, [log, ironAxe]);
    recipes.addShapeless(plank*4, [log, diamondAxe]);
}

// 伪劣雪浪纸
recipes.addShaped(<contenttweaker:artificialfoil> * 4,
    utils.createSurround(<contenttweaker:paimon>, <ore:paper>)
);

// 木板
recipes.addShapeless(<minecraft:planks> * 5,
    [<minecraft:iron_axe>.anyDamage().transformDamage(5), <ore:logWood>]
);

recipes.addShapeless(<minecraft:planks> * 6,
    [<minecraft:diamond_axe>.anyDamage().transformDamage(10), <ore:logWood>]
);

// 魔力粉
recipes.addShapeless(<botania:manaresource:23>, [
    <ore:tallow>, <minecraft:dye:15>, <minecraft:glowstone_dust>, <ebwizardry:magic_crystal>
]);

// 花药台
recipes.addShaped(<botania:altar>, [
    [<minecraft:stone:6>, <thermalfoundation:geode>, <minecraft:stone:6>],
    [null, <minecraft:stone:6>, null],
    [<minecraft:stone:6>, <minecraft:stone:6>, <minecraft:stone:6>]
]);

// 注魔石
recipes.addShaped(<contenttweaker:magic_stone> * 5,
    utils.createSurround(<thermalfoundation:geode>, <minecraft:stone:4>)
);

// 魔力池
recipes.addShaped(<botania:pool>, [
    [<contenttweaker:magic_stone>, null, <contenttweaker:magic_stone>],
    [<contenttweaker:magic_stone>, <contenttweaker:magic_stone>, <contenttweaker:magic_stone>],
    [null, null, null]
]);

// 青铜
recipes.addShapeless(<forestry:ingot_bronze> * 2, 
    [<ore:ingotTin>, <ore:ingotCopper>, 
    <ore:ingotCopper>, <ore:ingotCopper>]
);

recipes.addShapeless(<forestry:ingot_bronze> * 9, [<ore:blockBronze>]);


// 基础机器框架
recipes.addShaped(<ic2:resource:12>,
    utils.createSurround(<thermalfoundation:wrench>, <ore:plateIron>)
);

recipes.addShaped(<ic2:resource:12>, 
    utils.createSurround(<appliedenergistics2:material:6>, <ore:plateIron>)
);

// 简易机器框架
recipes.addShaped(<enderio:item_material>,
    utils.createCrossWithCore(<enderio:item_material:20>, <ic2:fence>, <enderio:item_alloy_ingot:9>)
);

// 机器框架
recipes.addShaped(<thermalexpansion:frame>, [
    [<enderio:item_alloy_ingot:3>, <ore:blockGlass>, <enderio:item_alloy_ingot:3>],
    [<thermalfoundation:material:257>, <enderio:item_material>, <thermalfoundation:material:257>],
    [<enderio:item_alloy_ingot:3>, <ore:blockGlass>, <enderio:item_alloy_ingot:3>]
]);

// 高炉砖
recipes.addShaped(<immersiveengineering:stone_decoration:1>,
    utils.createCrossWithCore(<contenttweaker:clay_furnace>, <quark:charred_nether_bricks>, <minecraft:blaze_powder>)
);


// 原木条
recipes.addShapeless(<cfm:item_log> * 8, [<minecraft:log>]);

// 元始结晶
recipes.addShapeless(<thermalfoundation:geode> * 1, [
    <thermalfoundation:material:1028>, <thermalfoundation:material:1028>, <thermalfoundation:material:1028>, <thermalfoundation:material:1028>
]);

// 提取机硬币试验
recipes.addShaped(<ic2:te:45>*1, [
    [ADVANCEDCOIN,ADVANCEDCOIN,ADVANCEDCOIN],
    [<ic2:treetap>,<ic2:resource:12>,<ic2:treetap>],
    [<ic2:treetap>,<ic2:crafting:1>,<ic2:treetap>]
]);

// 水槽
recipes.addShaped(<cookingforblockheads:sink>, [
    [ADVANCEDCOIN, COMMONCOIN, ADVANCEDCOIN], 
    [ULTRACOIN, ADVANCEDCOIN, ULTRACOIN],
    [ULTRACOIN, ULTRACOIN, ULTRACOIN]
]);

// 硬币
recipes.addShapeless(COMMONCOIN * 10, [ADVANCEDCOIN]);
recipes.addShapeless(ADVANCEDCOIN * 10, [ULTRACOIN]);

// 红石炉
recipes.addShaped(<thermalexpansion:machine>, [
    [ADVANCEDCOIN, <ore:dustRedstone>, ADVANCEDCOIN], 
    [<minecraft:brick_block>, <thermalexpansion:frame>, <minecraft:brick_block>], 
    [<ore:gearCopper>, <thermalfoundation:material:513>, <ore:gearCopper>]
]);

// 磨粉机
recipes.addShaped(<thermalexpansion:machine:1>, [
    [ADVANCEDCOIN, <minecraft:piston>, ADVANCEDCOIN], 
    [<minecraft:flint>, <thermalexpansion:frame>, <minecraft:flint>], 
    [<ore:gearCopper>, <thermalfoundation:material:513>, <ore:gearCopper>]
]);

// 压缩机
recipes.addShaped(<thermalexpansion:machine:5>, [
    [ADVANCEDCOIN, <minecraft:piston>, ADVANCEDCOIN], 
    [<ore:ingotBronze>, <thermalexpansion:frame>, <ore:ingotBronze>], 
    [<ore:gearCopper>, <thermalfoundation:material:513>, <ore:gearCopper>]
]);

// 熔岩炉
recipes.addShaped(<thermalexpansion:machine:6>, [
    [ADVANCEDCOIN, <ore:blockGlassHardened>, ADVANCEDCOIN], 
    [<minecraft:nether_brick>, <thermalexpansion:frame>, <minecraft:nether_brick>], 
    [<ore:gearCopper>, <thermalfoundation:material:513>, <ore:gearCopper>]
]);

// 流体转置机
recipes.addShaped(<thermalexpansion:machine:8>, [
    [ADVANCEDCOIN, <minecraft:bucket>, ADVANCEDCOIN], 
    [<ore:blockGlass>, <thermalexpansion:frame>, <ore:blockGlass>], 
    [<ore:gearCopper>, <thermalfoundation:material:513>, <ore:gearCopper>]
]);

// 头颅装配机
recipes.addShaped(<enderio:block_slice_and_splice>, [
    [<ore:ingotSoularium>, <ore:itemSkull>, <ore:ingotSoularium>], 
    [<ore:ingotSoularium>, <ore:itemSoulMachineChassi>, <ore:ingotSoularium>], 
    [<ore:gearEnergized>, ULTRACOIN, <ore:gearEnergized>]
]);

// 强化合金炉
recipes.addShaped(<enderio:block_enhanced_alloy_smelter>, [
    [ADVANCEDCOIN, ULTRACOIN, ADVANCEDCOIN],
    [<ore:ingotEndSteel>, <enderio:block_alloy_smelter>, <ore:ingotEndSteel>], 
    [<ore:gearVibrant>, <ore:itemEnhancedMachineChassi>, <ore:gearVibrant>]
]);

// 强化 SAG 磨粉机
recipes.addShaped(<enderio:block_enhanced_sag_mill>, [
    [ADVANCEDCOIN, ULTRACOIN, ADVANCEDCOIN],
    [<ore:ingotEndSteel>, <enderio:block_sag_mill>, <ore:ingotEndSteel>], 
    [<ore:gearVibrant>, <ore:itemEnhancedMachineChassi>, <ore:gearVibrant>]
]);

// 激光核心
recipes.addShaped(<environmentaltech:laser_core>, [
    [ULTRACOIN, ULTRACOIN, ULTRACOIN],
    [ADVANCEDCOIN, ULTRACOIN, ADVANCEDCOIN],
    [ADVANCEDCOIN, ULTRACOIN, ADVANCEDCOIN]
]);

// 末影锭涡轮机
recipes.addShaped(<advgenerators:turbine_enderium>, [
    [ADVANCEDCOIN, <advgenerators:iron_tubing>, ADVANCEDCOIN], 
    [<advgenerators:iron_wiring>, <advgenerators:turbine_rotor_enderium>, <advgenerators:iron_wiring>], 
    [ADVANCEDCOIN, <advgenerators:iron_tubing>, ADVANCEDCOIN]
]);

// 玛玉灵涡轮机
recipes.addShaped(<advgenerators:turbine_manyullyn>, [
    [ULTRACOIN, <advgenerators:iron_tubing>, ADVANCEDCOIN], 
    [<advgenerators:iron_wiring>, <advgenerators:turbine_rotor_manyullyn>, <advgenerators:iron_wiring>], 
    [ULTRACOIN, <advgenerators:iron_tubing>, ADVANCEDCOIN]
]);

// 高级合金涡轮机
recipes.addShaped(<advgenerators:turbine_adv_alloy>,
    utils.createCrossWithCore(<advgenerators:turbine_rotor_adv_alloy:*>, ADVANCEDCOIN, <advgenerators:iron_tubing:*>)
);

// ME 驱动器
recipes.addShaped(<appliedenergistics2:drive>,
    utils.createCrossWithCore(ULTRACOIN, <ore:ingotIron>, <appliedenergistics2:material:24>)
);

// ME 接口
recipes.addShaped(<appliedenergistics2:interface>, [
    [<ore:ingotIron>, <ore:blockGlass> | <ore:glass> | <minecraft:glass>, <ore:ingotIron>], 
    [<appliedenergistics2:material:44>, ADVANCEDCOIN, <appliedenergistics2:material:43>], 
    [<ore:ingotIron>, <ore:blockGlass> | <ore:glass> | <minecraft:glass>, <ore:ingotIron>]
]);

// 物质聚合器
recipes.addShaped(<appliedenergistics2:condenser>,
    utils.createCrossWithCore(ULTRACOIN, <ore:ingotIron>, ADVANCEDCOIN)
);

// 1k-ME存储组件
recipes.addShaped(<appliedenergistics2:material:35>, [
    [COMMONCOIN, <ore:crystalCertusQuartz> | <appliedenergistics2:material:1> | <appliedenergistics2:material:10>, COMMONCOIN], 
    [<ore:crystalCertusQuartz> | <appliedenergistics2:material:1> | <appliedenergistics2:material:10>, <appliedenergistics2:material:22>, <ore:crystalCertusQuartz> | <appliedenergistics2:material:1> | <appliedenergistics2:material:10>], 
    [COMMONCOIN, <ore:crystalCertusQuartz> | <appliedenergistics2:material:1> | <appliedenergistics2:material:10>, COMMONCOIN]
]);

// 64k-ME存储组件
recipes.addShaped(<appliedenergistics2:material:38>, [
    [ADVANCEDCOIN, <appliedenergistics2:material:23>, ADVANCEDCOIN], 
    [<appliedenergistics2:material:37>, <appliedenergistics2:quartz_glass>, <appliedenergistics2:material:37>], 
    [ADVANCEDCOIN, <appliedenergistics2:material:37>, ADVANCEDCOIN]
]);

// 铁质框架
recipes.addShaped(<advgenerators:iron_frame> * 2, 
    utils.createCrossWithCore(null, <ore:ingotIron>, null)
);

// 星芒宝钻
recipes.addShaped(<ebwizardry:astral_diamond>, 
    utils.createCrossWithCore(<contenttweaker:primogem>, <contenttweaker:star>, ULTRACOIN)
);

// 无尽套
recipes.addShaped(<avaritia:infinity_helmet>, 
    utils.createSpecialCross(
        <avaritia:block_resource>, 
        <eternalsingularity:eternal_singularity>, 
        <avaritia:resource:5>, 
        <draconicevolution:wyvern_helm>, 
        <avaritia:block_resource:1>, 
        <draconicevolution:chaotic_core>)
);

recipes.addShaped(<avaritia:infinity_chestplate>, 
    utils.createSpecialCross(
        <avaritia:block_resource>, 
        <eternalsingularity:eternal_singularity>, 
        <avaritia:resource:5>, 
        <draconicevolution:wyvern_chest>, 
        <avaritia:block_resource:1>, 
        <draconicevolution:chaotic_core>)
);

recipes.addShaped(<avaritia:infinity_pants>, 
    utils.createSpecialCross(
        <avaritia:block_resource>, 
        <eternalsingularity:eternal_singularity>, 
        <avaritia:resource:5>, 
        <draconicevolution:wyvern_legs>, 
        <avaritia:block_resource:1>, 
        <draconicevolution:chaotic_core>)
);

recipes.addShaped(<avaritia:infinity_boots>, 
    utils.createSpecialCross(
        <avaritia:block_resource>, 
        <eternalsingularity:eternal_singularity>, 
        <avaritia:resource:5>, 
        <draconicevolution:wyvern_boots>, 
        <avaritia:block_resource:1>, 
        <draconicevolution:chaotic_core>)
);

recipes.addShaped(<avaritia:infinity_sword>, 
    utils.createSpecialCross(
        <avaritia:block_resource>, 
        <eternalsingularity:eternal_singularity>, 
        <avaritia:resource:5>, 
        <avaritia:skullfire_sword>, 
        <avaritia:block_resource:1>, 
        <draconicevolution:chaotic_core>)
);
