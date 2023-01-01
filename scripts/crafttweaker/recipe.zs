#priority 1000

import crafttweaker.item.IItemStack;
import scripts.utils;
import loottweaker.LootTweaker;
import mods.inworldcrafting.FluidToItem;

var commonCoin = <custommc:item961>;
var advancedCoin = <custommc:item927>;
var ultraCoin = <custommc:item930>;
var YUS_REDPACKET =<custommc:item102>;
var YUS_APPROVAL = <custommc:item129>;
var expBottle = <minecraft:experience_bottle>;
var hayDiamond = <custommc:item997>;
// don't use val or global there.
var sink = <cookingforblockheads:sink>;
var sinkCore = <custommc:item75>;

YUS_REDPACKET.displayName = game.localize("item.starcraft.yusredpacket");
YUS_REDPACKET.addTooltip(format.gray(game.localize("tooltip.redpacket_in_blacksmith")));
var villageTable = LootTweaker.getTable("minecraft:chests/village_blacksmith");
var redpacketPool = villageTable.addPool("redpacket", 1, 2, 0, 1);
redpacketPool.addItemEntry(YUS_REDPACKET, 5);

YUS_APPROVAL.displayName = game.localize("item.starcraft.yusapproval");
YUS_APPROVAL.addTooltip(format.gray(game.localize("tooltip.yusapproval")));

utils.constructCoin(commonCoin, game.localize("item.starcraft.commonCoin"), 50);
utils.constructCoin(advancedCoin, game.localize("item.starcraft.advancedCoin"), 600);
utils.constructCoin(ultraCoin, game.localize("item.starcraft.ultraCoin"), 1200);

hayDiamond.displayName = game.localize("item.starcraft.haydiamond");
// don't try to add colorful displayname.
hayDiamond.addTooltip(format.gray(game.localize("tooltip.haydiamond")));
hayDiamond.addTooltip(format.gray(game.localize("tooltip.haydiamond_2")));
FluidToItem.transform(hayDiamond, <liquid:water>, [<minecraft:hay_block> * 4], true);

sinkCore.displayName = game.localize("item.starcraft.sinkcore");

// 扫描器
recipes.addShaped(<scannable:scanner>.withTag({energy: 5000}), [
    [<minecraft:repeater>, <minecraft:comparator>, <minecraft:repeater>],
    [<gregtech:meta_item_1:97>, <gregtech:meta_item_1:622>, <gregtech:meta_item_1:97>],
    [<ore:gemQuartz>, <ore:gemQuartz>, <ore:gemQuartz>]
]);

// 深度学习器
recipes.addShaped(<deepmoblearning:deep_learner>, [
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>], 
    [<deepmoblearning:machine_casing>, <gregtech:meta_item_1:465>, <deepmoblearning:machine_casing>],
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>]
]);

// 符文祭坛
recipes.addShaped(<botania:runealtar>, [
    [commonCoin,commonCoin,commonCoin], 
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>],
    [<ore:livingrock>, <randomthings:ingredient:2>, <ore:livingrock>]
]);

// 魔力发射器
recipes.addShaped(<botania:spreader>, [
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>],
    [<ore:ringGold>, <botania:petal:5> | <botania:petal:13>, <botania:manaresource:17>],
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>]
]);

// 盖亚魔力发射器
recipes.addShaped(<botania:spreader:3>, [
    [commonCoin, YUS_REDPACKET, commonCoin],
    [<gregtech:meta_lens:311>, <botania:manaresource:5>, <botania:spreader:2>],
    [commonCoin, expBottle, commonCoin]
]);

// 双足飞龙核心
recipes.addShaped(<draconicevolution:wyvern_core>, [
    [<gregtech:meta_ingot:125>, <draconicevolution:draconic_core>, <gregtech:meta_ingot:125>],
    [<draconicevolution:draconic_core>, <gregtech:meta_item_1:282>, <draconicevolution:draconic_core>],
    [<gregtech:meta_ingot:125>, <draconicevolution:draconic_core>, <gregtech:meta_ingot:125>]
]);

mods.inworldcrafting.FireCrafting.addRecipe(<minecraft:brick>, <minecraft:clay_ball> * 2, 20);
<contenttweaker:paimon>.addTooltip(format.gray(game.localize("tooltip.best_friend")));

// 鸡繁殖箱
recipes.addShaped(<roost:breeder>, [
    [hayDiamond, expBottle, hayDiamond],
    [<minecraft:sapling>, ultraCoin, <minecraft:sapling:1>],
    [<minecraft:sapling:2>, <minecraft:cake>, <minecraft:sapling:5>]
]);

// 派蒙
recipes.addShaped(<contenttweaker:paimon>, [
    [hayDiamond, <minecraft:apple>, null],
    [<minecraft:apple>, null, null],
    [null, null, null]
]);

// 水槽核心
recipes.addShaped(sinkCore, [
    [expBottle, <thermaldynamics:duct_0>, expBottle],
    [<minecraft:concrete_powder:12>, <minecraft:beacon>, <minecraft:concrete_powder:12>],
    [<minecraft:concrete_powder:12>, <quark:blaze_lantern>, <minecraft:concrete_powder:12>]
]);

// 水槽
recipes.addShaped(sink, 
    utils.coreSurroundCross(sinkCore, advancedCoin, expBottle)
);
