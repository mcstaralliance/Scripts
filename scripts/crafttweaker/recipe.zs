#priority 1000

import crafttweaker.item.IItemStack;
import scripts.utils;
import loottweaker.LootTweaker;
import mods.inworldcrafting.FluidToItem;
import mods.astralsorcery.Altar;
import crafttweaker.item.IItemCondition;

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

val infinitySwordPlus = <avaritia:infinity_sword>.withTag({ench: [
    {lvl: 50 as short, id: 59 as short}, 
    {lvl: 50 as short, id: 16 as short}, 
    {lvl: 50 as short, id: 60 as short}, 
    {lvl: 50 as short, id: 14 as short}, 
    {lvl: 50 as short, id: 34 as short}, 
    {lvl: 50 as short, id: 82 as short}, 
    {lvl: 50 as short, id: 74 as short}, 
    {lvl: 50 as short, id: 66 as short}, 
    {lvl: 50 as short, id: 79 as short}, 
    {lvl: 50 as short, id: 67 as short}, 
    {lvl: 50 as short, id: 54 as short}, 
    {lvl: 50 as short, id: 11 as short}, 
    {lvl: 50 as short, id: 22 as short}, 
    {lvl: 50 as short, id: 69 as short}], 
    RepairCost: 114514}
);

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
YUS_REDPACKET.addTooltip(format.gray(game.localize("tooltip.redpacket_location")));
var villageTable = LootTweaker.getTable("minecraft:chests/village_blacksmith");
var pyramidTable = LootTweaker.getTable("minecraft:chests/desert_pyramid");
var redpacketVillagePool = villageTable.addPool("redpacket", 1, 2, 0, 1);
var redpacketPyramidPool = pyramidTable.addPool("redpacket", 1, 2, 0, 1);
redpacketVillagePool.addItemEntry(YUS_REDPACKET, 5);
redpacketPyramidPool.addItemEntry(YUS_REDPACKET, 5);

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

// 存储检测器
<rftools:storage_scanner>.addTooltip(format.green(game.localize("tooltip.scanner")));

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

// 辉光粉
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/illuminationpowder");
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/illuminationpowder", <astralsorcery:itemusabledust> * 16, 200, 200, [
            <minecraft:glowstone>, YUS_APPROVAL, <minecraft:iron_ingot>,
            <minecraft:iron_ingot>, <astralsorcery:itemcraftingcomponent>, <minecraft:iron_ingot>,
            <enderio:item_material:20>, YUS_REDPACKET, <enderio:item_material:20>]);

// 小型燃煤锅炉
recipes.addShaped(<gregtech:machine:1>, [
    [<ore:plateBronze>, YUS_APPROVAL, <ore:plateBronze>],
    [<ore:plateBronze>, <thermalfoundation:wrench>.reuse(), <ore:plateBronze>],
    [<minecraft:brick_block>, <quark:blaze_lantern>, <minecraft:brick_block>]
]);

// 信标
recipes.addShaped(<minecraft:beacon>, [
    [<ore:blockGlassColorless>, <ore:blockGlassColorless>, <ore:blockGlassColorless>],
    [YUS_REDPACKET, <minecraft:nether_star>, YUS_REDPACKET],
    [<minecraft:obsidian>, <minecraft:obsidian>, <minecraft:obsidian>]
]);

// 简易太阳能锅炉
recipes.addShaped(<gregtech:machine:3>, [
    [<ore:blockGlassColorless>, <ore:blockGlassColorless>, <ore:blockGlassColorless>],
    [<ore:plateSilver>, YUS_APPROVAL, <ore:plateSilver>],
    [<gregtech:fluid_pipe_small:260>, <gregtech:steam_casing:1>, <gregtech:fluid_pipe_small:260>]
]);

// 蒸汽合金炉
recipes.addShaped(<gregtech:machine:17>, [
    [<gregtech:fluid_pipe_small:260>, <gregtech:fluid_pipe_small:260>, <gregtech:fluid_pipe_small:260>],
    [<ore:plateSilver>, <gregtech:steam_casing:1>, commonCoin],
    [<gregtech:fluid_pipe_small:260>, <gregtech:fluid_pipe_small:260>, <gregtech:fluid_pipe_small:260>]
]);

// 土高炉
recipes.addShaped(<gregtech:machine:1000>, [
    [<endreborn:tool_hammer_iron>.transformDamage(), <gregtech:meta_stick:51>, <gregtech:meta_screw:51>],
    [<ore:plateIron>, <gregtech:steam_casing:1>, commonCoin],
    [<appliedenergistics2:nether_quartz_cutting_knife>.transformDamage(), <gregtech:meta_stick:51>, <gregtech:meta_screw:51>]
]);

// 合成站
recipes.addShaped(<gregtech:machine:1647>, [
    [<ore:chestWood>, <minecraft:wooden_slab:*>, <ore:chestWood>],
    [<ore:plankWood>, <minecraft:crafting_table>, commonCoin],
    [<ore:plankWood>, <microblockcbe:saw_iron>.transformDamage(), <ore:plankWood>]
]);

// 基础提取机
recipes.addShaped(<gregtech:machine:305>, [
    [commonCoin, <ore:circuitLv>, <minecraft:glass:*>],
    [<gregtech:meta_item_1:172>, <gregtech:machine:986>, <gregtech:meta_item_1:142>],
    [<ore:cableGtSingleTin>, <ore:circuitLv>, <ore:cableGtSingleTin>]
]);

// 环境控制器
recipes.addShaped(<rftools:environmental_controller>, [
    [advancedCoin, <minecraft:diamond_block>, <minecraft:ender_pearl>],
    [YUS_APPROVAL, YUS_REDPACKET, <minecraft:beacon>],
    [<minecraft:gold_block>, <minecraft:emerald_block>, <rftools:machine_frame>]
]);

// 模拟室
recipes.addShaped(<deepmoblearning:simulation_chamber>, [
    [YUS_REDPACKET, <cyclicmagic:block_disenchanter>, YUS_APPROVAL],
    [<botania:elementiumsword>, <deepmoblearning:machine_casing>, ultraCoin],
    [<minecraft:observer>, <minecraft:comparator>, <minecraft:sticky_piston>]
]);

// 通量接入点
recipes.addShapeless(<fluxnetworks:fluxplug>, [<fluxnetworks:fluxplug:*>]);
recipes.addShaped(<fluxnetworks:fluxplug>, [
    [commonCoin, <fluxnetworks:fluxcore:*>, expBottle],
    [<fluxnetworks:fluxcore:*>, <fluxnetworks:fluxblock:*>, <fluxnetworks:fluxcore:*>],
    [null, <fluxnetworks:fluxcore:*>, null]
]);

// 通量接出点
recipes.addShapeless(<fluxnetworks:fluxpoint>, [<fluxnetworks:fluxpoint:*>]);
recipes.addShaped(<fluxnetworks:fluxpoint>, [
    [commonCoin, <fluxnetworks:fluxcore:*>, expBottle],
    [<fluxnetworks:fluxcore:*>, <minecraft:redstone_block:*>, <fluxnetworks:fluxcore:*>],
    [null, <fluxnetworks:fluxcore:*>, null]
]);

// 花药台
recipes.addShaped(<botania:altar>, [[<ore:slabCobblestone>, <ore:petalWhite> | <ore:petalOrange> | <ore:petalMagenta> | <ore:petalLightBlue> | <ore:petalYellow> | <ore:petalLime> | <ore:petalPink> | <ore:petalGray> | <ore:petalLightGray> | <ore:petalCyan> | <ore:petalPurple> | <ore:petalBlue> | <ore:petalBrown> | <ore:petalGreen> | <ore:petalRed> | <ore:petalBlack>, <ore:slabCobblestone>], [commonCoin, <ore:cobblestone>, commonCoin], [<ore:cobblestone>, <ore:cobblestone>, <ore:cobblestone>]]);

// 大储物袋
recipes.addShaped(<cyclicmagic:storage_bag>, [
    [expBottle, advancedCoin, expBottle],
    [<minecraft:leather>, <minecraft:coal>, <minecraft:leather>],
    [<minecraft:leather>, YUS_APPROVAL, <minecraft:leather>]
]);

// 红石护甲防护板
recipes.addShaped(<redstonearsenal:material:224>, [
    [expBottle, <ore:plateElectrumFlux>, expBottle],
    [<ore:plateElectrumFlux>, <ore:gemCrystalFlux>, <ore:plateElectrumFlux>],
    [commonCoin, <ore:plateElectrumFlux>, commonCoin]
]);

// 通量充能器
recipes.addShaped(<randomthings:spectrecharger>, [
    [ultraCoin, <gregtech:machine:986>, <randomthings:ingredient:12>],
    [<gregtech:machine:986>, <randomthings:ingredient:3>, <gregtech:machine:986>],
    [<randomthings:ingredient:12>, <gregtech:machine:986>, expBottle]
]);

// 收割机
recipes.addShaped(<cyclicmagic:harvester_block>, [
    [<ore:gemEmerald>, <minecraft:dispenser:*>, <ore:gemEmerald>],
    [advancedCoin, YUS_APPROVAL, <ore:gemQuartz>],
    [<ore:obsidian>, <ore:obsidian>, <ore:obsidian>]
]);

// 红石伺服器
recipes.addShaped(<thermalfoundation:material:512>, [
    [<ore:plateGold>, <ore:dustRedstone>, <ore:plateGold>],
    [<ore:nuggetGold>, <ore:ingotIron>, <ore:nuggetGold>],
    [commonCoin, <ore:dustRedstone>, commonCoin]
]);

// 充能黑曜石手柄
recipes.addShaped(<redstonearsenal:material:193>, [
    [<appliedenergistics2:material:1>, <minecraft:redstone_torch>, <ore:gemCrystalFlux>],
    [<minecraft:tripwire_hook>, <redstonearsenal:material:192>, <minecraft:stone_button>],
    [<ore:gemCrystalFlux>, commonCoin, <appliedenergistics2:material:1>]
]);

// 泥炭发电机
recipes.addShaped(<cyclicmagic:peat_generator>, [
    [<cyclicmagic:peat_fuel:*>, YUS_APPROVAL, <cyclicmagic:peat_fuel:*>],
    [<ore:blockCoal>, commonCoin, <gregtech:machine:986>],
    [<cyclicmagic:peat_fuel:*>, <minecraft:piston>, <cyclicmagic:peat_fuel:*>]
]);

// 绊线钩
recipes.addShaped(<minecraft:tripwire_hook> * 2, [
    [<ore:ingotIron>],
    [<ore:stickWood>],
    [<quark:reed_block>]
]);

// 药水信标
recipes.addShaped(<cyclicmagic:beacon_potion>, [
    [<minecraft:end_stone:*>, <minecraft:end_stone:*>, <minecraft:end_stone:*>],
    [<minecraft:end_stone:*>, <minecraft:beacon>, <minecraft:end_stone:*>],
    [<ore:blockEmerald>, <ore:blockEmerald>, <ore:blockEmerald>]
]);

// 无尽套
recipes.addShaped(<avaritia:infinity_helmet>, [
    [<gregtech:meta_ingot:432>, <avaritia:resource:5>, <gregtech:meta_ingot:432>],
    [<gregtech:meta_ingot:432>, null, <gregtech:meta_ingot:432>],
    [null, null, null]
]);

recipes.addShaped(<avaritia:infinity_chestplate>, [
    [<gregtech:meta_ingot:432>, null, <gregtech:meta_ingot:432>],
    [<gregtech:meta_ingot:432>, <avaritia:resource:5>, <gregtech:meta_ingot:432>],
    [<gregtech:meta_ingot:432>, <gregtech:meta_ingot:432>, <gregtech:meta_ingot:432>]
]);

recipes.addShaped(<avaritia:infinity_pants>, [
    [<gregtech:meta_ingot:432>, <gregtech:meta_ingot:432>, <gregtech:meta_ingot:432>],
    [<gregtech:meta_ingot:432>, <avaritia:resource:5>, <gregtech:meta_ingot:432>],
    [<gregtech:meta_ingot:432>, null, <gregtech:meta_ingot:432>]
]);

recipes.addShaped(<avaritia:infinity_boots>, [
    [<gregtech:meta_ingot:432>, null, <gregtech:meta_ingot:432>],
    [<gregtech:meta_ingot:432>, <avaritia:resource:5>, <gregtech:meta_ingot:432>],
    [null, null, null]
]);

// 寰宇支配之剑
recipes.addShapeless(infinitySwordPlus, [
    <draconicevolution:draconic_staff_of_power>.giveBack(), <gregtech:meta_item_1:753>
]);

// 毕业凭证
recipes.addShapeless(<gregtech:meta_item_1:1000>, [
    <avaritia:infinity_sword>.giveBack()
]);

furnace.addRecipe(<gregtech:meta_ingot:335>, <ore:ingotIron>);

mods.botania.PureDaisy.addRecipe(<randomthings:spectreplank>, <botania:livingwood>, 20);

<ore:crystalCertusQuartz>.add(<appliedenergistics2:material:1>);
<ore:oreAluminium>.add(<thermalfoundation:ore:4>);

// 寰宇肉丸
mods.avaritia.ExtremeCrafting.remove(cosmicMeatBall);
mods.avaritia.ExtremeCrafting.addShapeless("cosmicMeatBall", cosmicMeatBall,
[neutron, beefRaw, fishRaw, rabbitRaw, pigRaw, expBottle, expBottle, YUS_APPROVAL, YUS_REDPACKET, YUS_REDPACKET, YUS_REDPACKET, YUS_REDPACKET, YUS_REDPACKET, YUS_REDPACKET, YUS_REDPACKET, ultraCoin, <cookingforblockheads:recipe_book>, <rftoolscontrol:rftoolscontrol_manual>, <xnet:xnet_manual>, <patchouli:guide_book>.withTag({"patchouli:book": "endreborn:book"}), <patchouli:guide_book>.withTag({"patchouli:book": "sakura:sakura_guide"}), <patchouli:guide_book>.withTag({"patchouli:book": "touhou_little_maid:memorizable_gensokyo"}), <ftbquests:book>, <botania:lexicon>.withTag({}), <botania_tweaks:compressed_tiny_potato_3>, <endreborn:item_advanced_ender_pearl>, <contenttweaker:paimon>, <teastory:porkchop_rice>, <torchmaster:frozen_pearl>, <minecraft:slime>, <quark:glass_item_frame>, <minecraft:light_weighted_pressure_plate>, <cyclicmagic:beacon_potion>, <quark:cooked_crab_leg>, <quark:cooked_frog_leg>]);