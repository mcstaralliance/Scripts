#priority 1000

import crafttweaker.item.IItemStack;
import scripts.utils;
import loottweaker.LootTweaker;

var commonCoin = <custommc:item961>;
var advancedCoin = <custommc:item927>;
var ultraCoin = <custommc:item930>;
var YUS_REDPACKET =<custommc:item102>;
var YUS_APPROVAL = <custommc:item129>;

utils.constructCoin(commonCoin, game.localize("item.starcraft.commonCoin"), 50);
utils.constructCoin(advancedCoin, game.localize("item.starcraft.advancedCoin"), 600);
utils.constructCoin(ultraCoin, game.localize("item.starcraft.ultraCoin"), 1200);

YUS_REDPACKET.displayName = game.localize("item.starcraft.yusredpacket");
YUS_REDPACKET.addTooltip(format.gray(game.localize("tooltip.redpacket_location")));
var villageTable = LootTweaker.getTable("minecraft:chests/village_blacksmith");
var pyramidTable = LootTweaker.getTable("minecraft:chests/desert_pyramid");
var redpacketVillagePool = villageTable.addPool("redpacket", 1, 2, 0, 1);
var redpacketPyramidPool = pyramidTable.addPool("redpacket", 1, 2, 0, 1);
redpacketVillagePool.addItemEntry(YUS_REDPACKET, 5);
redpacketPyramidPool.addItemEntry(YUS_REDPACKET, 5);

YUS_APPROVAL.displayName = game.localize("item.starcraft.yusapproval");
YUS_APPROVAL.addTooltip(format.gray(game.localize("tooltip.yusapproval")));

// 绢布
recipes.addShaped(<tconstruct:materials:15>, [
    [<randomthings:ingredient:12>,<randomthings:ingredient:12>,<randomthings:ingredient:12>],
    [<randomthings:ingredient:12>, commonCoin, <randomthings:ingredient:12>],
    [<randomthings:ingredient:12>, <randomthings:ingredient:12>, <randomthings:ingredient:12>]
]);

// 花药台
recipes.addShaped(<botania:altar>, [
    [<ic2:crafting:20>, <ore:petalWhite> | <ore:petalOrange> | <ore:petalMagenta> | <ore:petalLightBlue> | <ore:petalYellow> | <ore:petalLime> | <ore:petalPink> | <ore:petalGray> | <ore:petalLightGray> | <ore:petalCyan> | <ore:petalPurple> | <ore:petalBlue> | <ore:petalBrown> | <ore:petalGreen> | <ore:petalRed> | <ore:petalBlack>, <ic2:crafting:20>], 
    [commonCoin, <minecraft:stone:2>, commonCoin],
    [<minecraft:lapis_block>, <minecraft:lapis_block>, <minecraft:lapis_block>]]);

// 水槽
recipes.addShaped(<cookingforblockheads:sink>, [
    [<cyclicmagic:beacon_potion>, ultraCoin, <cyclicmagic:beacon_potion>], 
    [<avaritia:resource:4>, <avaritia:block_resource:2>, <avaritia:resource:4>],
    [<avaritia:resource:2>, <enderio:item_basic_capacitor:1>, <avaritia:resource:2>]]);
<cookingforblockheads:sink>.addTooltip(format.darkGray(format.italic(game.localize("tooltip.sink"))));

// 符文祭坛
recipes.addShaped(<botania:runealtar>, [
    [<cyclicmagic:beacon_potion>, ultraCoin, <cyclicmagic:beacon_potion>], 
    [<avaritia:resource:4>, <avaritia:block_resource:2>, <avaritia:resource:4>],
    [<avaritia:resource:2>, <enderio:item_basic_capacitor:1>, <avaritia:resource:2>]]);

// 恶魔南瓜头
recipes.addShaped(<botania:felpumpkin>, [
    [<randomthings:ingredient:1>, <minecraft:string>, <minecraft:ghast_tear>],
    [<minecraft:bone>, <minecraft:pumpkin>, <minecraft:rotten_flesh>],
    [<minecraft:blaze_rod>, <minecraft:gunpowder>, <minecraft:nether_wart>]]);

// 符文祭坛
recipes.addShaped(<botania:runealtar>, [
    [<ic2:crafting:15>, <ic2:crafting:2>, <ic2:crafting:15>],
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>],
    [<ore:livingrock>, <ore:manaPearl> | <ore:manaDiamond>, <ore:livingrock>]]);

// 活木枝
recipes.addShaped(<botania:manaresource:3>, [
    [null, commonCoin, null],
    [null, <ore:livingwood>, null],
    [null, <ore:livingwood>, null]]);

// 盖亚魂锭
recipes.addShaped(<botania:manaresource:14>, [
    [<ore:eternalLifeEssence>, YUS_APPROVAL, <ore:eternalLifeEssence>],
    [<ore:eternalLifeEssence>, <ore:ingotTerrasteel>, <ore:eternalLifeEssence>],
    [YUS_REDPACKET, <ore:eternalLifeEssence>, YUS_REDPACKET]]);
<botania:manaresource:14>.addTooltip(format.darkGray(format.italic(game.localize("tooltip.approved_by_yu"))));

// 魔力池
recipes.addShaped(<botania:pool>, [
    [null, null, null],
    [<ore:livingrock>, advancedCoin, <ore:livingrock>],
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>]]);

// 龙芯
recipes.addShaped(<draconicevolution:draconic_core>, [
    [<draconicevolution:draconium_block>, <minecraft:nether_star>, <draconicevolution:draconium_block>],
    [<ic2:te:115>, ultraCoin, <ic2:te:115>],
    [<minecraft:dragon_breath>, <botania:laputashard>, <minecraft:dragon_breath>]]);

// 陨石罗盘
recipes.addShaped(<appliedenergistics2:sky_compass>, [
    [commonCoin, YUS_APPROVAL, commonCoin],
    [<appliedenergistics2:material:1>, <minecraft:compass>, <appliedenergistics2:material:1>],
    [<ic2:dust:12>, <ore:ingotIron>, <ic2:dust:12>]]);

// 基础机械外壳
recipes.addShaped(<ic2:resource:12>, [
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>],
    [<ore:plateIron>, commonCoin, <ore:plateIron>],
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>]]);

