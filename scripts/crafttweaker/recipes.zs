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

// 符文祭坛
recipes.addShaped(<botania:runealtar>, [
    [<ic2:crafting:15>, <ic2:crafting:2>, <ic2:crafting:15>],
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>],
    [<ore:livingrock>, <ore:manaPearl> | <ore:manaDiamond>, <ore:livingrock>]
]);

// 活木枝
recipes.addShaped(<botania:manaresource:3>, [
    [null, commonCoin, null],
    [null, <ore:livingwood>, null],
    [null, <ore:livingwood>, null]
]);

// 盖亚魂锭
recipes.addShaped(<botania:manaresource:14>, [
    [<ore:eternalLifeEssence>, YUS_APPROVAL, <ore:eternalLifeEssence>],
    [<ore:eternalLifeEssence>, <ore:ingotTerrasteel>, <ore:eternalLifeEssence>],
    [YUS_REDPACKET, <ore:eternalLifeEssence>, YUS_REDPACKET]
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

// TODO:海晶灯作为控制器，远古海晶灯作为未工作状态，添加远古海晶石获取图鉴，添加海晶石碎片，海晶石砂砾简配方 
// TODO:汉化多方块[部件，控制器，多方块，配方名]，直接让 CoT 进行资源加载，添加部件配方，控制器配方

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

