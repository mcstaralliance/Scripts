import scripts.utils;
import crafttweaker.item.IItemStack;

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
    [<ic2:plate:3>, <minecraft:golden_pickaxe>.transformDamage(8), <ic2:plate:3>],
    [<ic2:plate:3>, <ic2:plate:3>, <ic2:plate:3>]
]);

// 电炉
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

// 魔力销毁器
recipes.addShaped(<botania:manavoid>, [
    [<botania:livingrock>, <botania:livingrock>, <botania:livingrock>],
    [<minecraft:obsidian>, <minecraft:chorus_fruit_popped>, <minecraft:obsidian>],
    [<botania:livingrock>, <botania:livingrock>, <botania:livingrock>]
]);

// 电动马达
recipes.addShaped(<ic2:crafting:6>,
    utils.createCrossWithCore(<ore:ingotIron>, <ore:ingotTin>, <ic2:cable>.withTag({type: 0 as byte, insulation: 1 as byte}))
);

// ME 驱动器
recipes.addShaped(<appliedenergistics2:drive>, [
    [<minecraft:iron_block>, <appliedenergistics2:biometric_card>, <minecraft:iron_block>],
    [<appliedenergistics2:part:56>, <ic2:crafting:6>, <appliedenergistics2:part:56>],
    [<minecraft:iron_block>, <appliedenergistics2:biometric_card>, <minecraft:iron_block>]
]);

// ME 输入总线
recipes.addShaped(<appliedenergistics2:part:260>, [
    [<buildcrafttransport:pipe_wood_power>, <minecraft:hopper>, <buildcrafttransport:pipe_wood_power>],
    [<minecraft:tripwire_hook>, <appliedenergistics2:material:43>, <minecraft:tripwire_hook>],
    [null, <minecraft:piston>, null]
]);

// ME 液体输入总线
recipes.addShaped(<appliedenergistics2:part:260>, [
    [<buildcrafttransport:pipe_wood_power>, <minecraft:hopper>, <buildcrafttransport:pipe_wood_power>],
    [<minecraft:tripwire_hook>, <appliedenergistics2:material:44>, <minecraft:tripwire_hook>],
    [<minecraft:lapis_block>, <minecraft:sticky_piston>, <minecraft:lapis_block>]
]);

// 简易 SAG 磨粉机
recipes.addShaped(<enderio:block_simple_sag_mill>, [
    [<minecraft:comparator>, <minecraft:flint>, <minecraft:comparator>],
    [<minecraft:daylight_detector>, <thermalexpansion:frame>, <minecraft:daylight_detector>],
    [<minecraft:lapis_block>, <ic2:te:47>, <minecraft:lapis_block>]
]);

// SAG 磨粉机
recipes.addShaped(<enderio:block_sag_mill>, [
    [<enderio:item_alloy_ingot:6>, <enderio:item_alloy_ball:6>, <enderio:item_alloy_ingot:6>],
    [<minecraft:daylight_detector>, <enderio:item_material:1>, <minecraft:daylight_detector>],
    [<enderio:item_material:73>, <enderio:block_simple_sag_mill>, <enderio:item_material:73>]
]);

// 简易机器框架
recipes.addShaped(<enderio:item_material>, 
    utils.createCrossWithCore(<enderio:item_material:11>, <ore:ingotInvar>, <galacticraftcore:grating>)
);

// 冶金灌注机
recipes.addShaped(<mekanism:machineblock:8>, [
    [<mekanism:ingot:1>, <minecraft:observer>, <mekanism:ingot:1>],
    [<ic2:te:46>, <mekanism:basicblock:8>, <ic2:te:46>],
    [<mekanism:ingot:1>, <minecraft:piston>, <mekanism:ingot:1>]
]);

// 机器框架
recipes.addShaped(<thermalexpansion:frame>, 
    utils.createCrossWithCore(<ic2:resource:12>, <ore:ingotTin>, <ore:ingotSteel>)
);

// 简易合金炉
recipes.addShaped(<enderio:block_simple_alloy_smelter>, [
    [<enderio:item_basic_capacitor>, <ic2:te:44>, <enderio:item_basic_capacitor>],
    [<ic2:te:44>, <thermalexpansion:frame>, <ic2:te:44>],
    [<enderio:item_material:11>, <enderio:item_material:11>, <enderio:item_material:11>]
]);

// 工业涂料
recipes.addShapeless(<enderio:item_material:51>, [<ore:dustCoal>, <ore:dustNetherQuartz>, <ore:dustLapis>, <ore:dyeGreen>, <ore:dustGold>, <ore:dustBedrock>]);

// 锇压缩机
recipes.addShaped(<mekanism:machineblock:1>, [
    [<mekanism:enrichedalloy>, <mekanism:controlcircuit:2>, <mekanism:enrichedalloy>],
    [<mekanism:machineblock2:11>, <mekanism:basicblock:8>, <mekanism:machineblock2:11>],
    [<mekanism:enrichedalloy>, <mekanism:controlcircuit:2>, <mekanism:enrichedalloy>]
]);

// 富集仓
recipes.addShaped(<mekanism:machineblock>, [
    [<minecraft:redstone_ore>, <ore:blockGlass>, <minecraft:redstone_ore>],
    [<mekanism:ingot:1>, <mekanism:controlcircuit:3>, <mekanism:ingot:1>],
    [<minecraft:redstone_ore>, <ore:blockGlass>, <minecraft:redstone_ore>]
]);

// 融合机
recipes.addShaped(<mekanism:machineblock:2>, 
    utils.createCrossWithCore(<mekanism:basicblock:8>, <mekanism:reinforcedalloy>, <mekanism:enrichedalloy>)
);

// 反应堆框架
recipes.addShaped(<mekanismgenerators:reactor:1>, 
    utils.createCrossWithCore(<enderio:block_transceiver>, <mekanism:controlcircuit:3>, <enderio:block_infinity>)
);

// 魔力水晶
recipes.addShaped(<botania:pylon>, [
    [<botania:managlass>, <botania:manaresource>, <botania:managlass>],
    [<botania:manaresource:1>, <botania:manaresource:2>, <botania:manaresource:1>],
    [<botania:managlass>, <botania:manaresource>, <botania:managlass>]
]);

// 自然水晶
recipes.addShaped(<botania:pylon:1>, [
    [<thaumadditions:crystal_block>, <botania:manaresource:18>, <thaumadditions:crystal_block>],
    [<botania:manaresource:18>, <botania:pylon>, <botania:manaresource:18>],
    [<thaumadditions:crystal_block>, <minecraft:ender_eye>, <thaumadditions:crystal_block>]
]);

// 知识共享卷轴
recipes.addShapeless(<astralsorcery:itemknowledgeshare>, [<astralsorcery:itemcraftingcomponent:5>, <thaumadditions:adaminite_ingot>]);

// 魔力池
recipes.addShaped(<botania:pool>, [
    [<ore:ingotBrass>, null, <ore:ingotThaumium>],
    [<ore:livingrock>, null, <ore:livingrock>],
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>]
]);

// 魔力发射器
recipes.addShaped(<botania:spreader>, [
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>],
    [<ore:dustAstralStarmetal>, <astralsorcery:itemcraftingcomponent>, null],
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>]
]);

// 荒古注魔柱
recipes.addShaped(<thaumcraft:pillar_ancient>, [
    [null, <thaumcraft:stone_ancient>, null],
    [null, <thaumcraft:stone_ancient>, null],
    [null, <thaumcraft:stone_ancient>, null]
]);

// 邪术注魔柱
recipes.addShaped(<thaumcraft:pillar_eldritch>, [
    [null, <thaumcraft:stone_eldritch_tile>, null],
    [null, <thaumcraft:stone_eldritch_tile>, null],
    [null, <thaumcraft:stone_eldritch_tile>, null]
]);

// 无尽之锭
recipes.addShaped(<avaritia:resource:6>*3, 
[
    [<avaritia:resource:4>, <avaritia:resource:4>, <avaritia:resource:4>],
    [<avaritia:resource:1>, <avaritia:resource:5>, <avaritia:resource:1>],
    [<avaritia:resource:4>, <avaritia:resource:4>, <avaritia:resource:4>]
]);

// 寰宇肉丸
recipes.addShapeless(cosmicMeatBall,[neutron, chickenRaw, fishRaw, pigRaw, rabbitRaw, beefRaw]);

// 超级煲
recipes.addShaped(ultimateStew*9,[[pumpkin, brownMushRoom, wheat],[beetRoot, neutron, apple,],[potato, melon, cactus]]);

// 无尽套
recipes.addShaped(<avaritia:infinity_helmet>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_helm>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

recipes.addShaped(<avaritia:infinity_chestplate>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_chest>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

recipes.addShaped(<avaritia:infinity_pants>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_legs>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

recipes.addShaped(<avaritia:infinity_boots>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_boots>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

// 花瓣
for i in 0 to 16{
    var mysticalPetal as IItemStack = <botania:petal>.definition.makeStack(i);
    recipes.addShapeless("petal_duplication" + i, mysticalPetal * 4, [mysticalPetal, <minecraft:dye:15>]);
}

// DE 能量水晶
recipes.addShaped(<draconicevolution:energy_crystal:6>, 
    utils.createSurround(<draconicevolution:draconium_ingot>, <mekanism:transmitter>.withTag({tier: 1})
));
recipes.addShaped(<draconicevolution:energy_crystal:1>, 
    utils.createSurround(<draconicevolution:draconium_ingot>, <mekanism:transmitter>.withTag({tier: 2})
));
recipes.addShaped(<draconicevolution:energy_crystal:8>, 
    utils.createSurround(<draconicevolution:draconium_ingot>, <mekanism:transmitter>.withTag({tier: 3})
));

// 水晶绑定扳手
recipes.addShapeless(<draconicevolution:crystal_binder>, [<astralsorcery:itemwand>, <draconicevolution:draconium_ingot>]);
