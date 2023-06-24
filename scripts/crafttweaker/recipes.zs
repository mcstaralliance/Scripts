#priority 1000

import crafttweaker.item.IItemStack;
import scripts.utils;
import loottweaker.LootTweaker;
import mods.botaniatweaks.Agglomeration;
import mods.inworldcrafting.FireCrafting;
import mods.astralsorcery.Altar;
import mods.avaritia.ExtremeCrafting;
import mods.inworldcrafting.FluidToItem;
import mods.botania.RuneAltar;

var commonCoin = <custommc:item961>;
var advancedCoin = <custommc:item927>;
var ultraCoin = <custommc:item930>;
var YUS_APPROVAL = <custommc:item129>;
var cosmicMeatBall = <avaritia:cosmic_meatballs>;
var beefRaw = <minecraft:beef>;
var rabbitRaw = <minecraft:rabbit>;
var chickenRaw = <minecraft:chicken>;
var pigRaw = <minecraft:porkchop>;
var fishRaw = <minecraft:fish>;
var neutron = <avaritia:resource:2>;

utils.constructCoin(commonCoin, game.localize("item.starcraft.commonCoin"), 50);
utils.constructCoin(advancedCoin, game.localize("item.starcraft.advancedCoin"), 600);
utils.constructCoin(ultraCoin, game.localize("item.starcraft.ultraCoin"), 1200);

YUS_APPROVAL.displayName = game.localize("item.starcraft.yusapproval");
YUS_APPROVAL.addTooltip(format.gray(game.localize("tooltip.yusapproval")));

<akashictome:tome>.addTooltip(format.red(game.localize("tooltip.akashic_tome")));

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
recipes.addShaped(<botania:manaresource:3>, [
    [null, commonCoin, null],
    [null, <ore:livingwood>, null],
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

// 基础机械外壳
recipes.addShaped(<ic2:resource:12>, [
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>],
    [<ore:plateIron>, commonCoin, <ore:plateIron>],
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>]
]);

// ME 驱动器
recipes.addShaped(<appliedenergistics2:drive>, [
    [<ic2:ingot:5>, <appliedenergistics2:material:39>, <ic2:ingot:5>],
    [<appliedenergistics2:part:16>, advancedCoin, <appliedenergistics2:part:16>],
    [<ic2:ingot:5>, <appliedenergistics2:material:24>, <ic2:ingot:5>]
]);

// ME 安全终端
recipes.addShaped(<appliedenergistics2:security_station>, [
    [<minecraft:iron_bars>, <minecraft:trapped_chest>, <minecraft:iron_bars>],
    [<appliedenergistics2:part:140>, <quark:chain>, <appliedenergistics2:part:140>],
    [<minecraft:iron_bars>, <appliedenergistics2:part:140>, <minecraft:iron_bars>]
]);

// ME 控制器
Agglomeration.addRecipe(<appliedenergistics2:controller>,
    [<botania:manaresource:4>, <botania:manaresource:14>, <ic2:crafting:30>, <appliedenergistics2:material:24>, <advanced_solar_panels:crafting:9>, <appliedenergistics2:material:12> * 4, <appliedenergistics2:smooth_sky_stone_block> * 4], 50000);

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
recipes.addShaped(<thermalexpansion:frame>, [
    [<draconicevolution:draconium_dust>, <tconstruct:ingots:2>, <botania:manabottle>],
    [<cyclicmagic:fluid_pipe>, advancedCoin, <cyclicmagic:cable_wireless_energy>],
    [<appliedenergistics2:material:2>, <ic2:crafting:2>, <minecraft:slime_ball>]
]);

// 设备框架
recipes.addShaped(<thermalexpansion:frame:64>, [
    [<draconicevolution:draconium_dust>, <randomthings:slimecube>, <draconicevolution:draconium_block>],
    [<randomthings:spectrecoil_redstone>, advancedCoin, <thermalfoundation:storage:8>],
    [<appliedenergistics2:material:2>, <mets:super_circuit>, <minecraft:sponge>]
]);

// 空白扫描模块
recipes.addShaped(<scannable:module_blank>, [
    [<astralsorcery:itemcraftingcomponent:3>, <theoneprobe:probe_goggles>, <nuclearcraft:dominos>],
    [<appliedenergistics2:material:52>, commonCoin, <packagedauto:package_component>],
    [<projectred-core:resource_item:4>, <projectred-core:resource_item:342>, <projectred-core:resource_item:4>]
]);

// 红石计划电路板
furnace.addRecipe(<projectred-core:resource_item>, <ic2:crafting:1>, 1);

// 深度学习器
recipes.addShaped(<deepmoblearning:deep_learner>, [
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>], 
    [<deepmoblearning:machine_casing>, <minecraft:nether_star>, <deepmoblearning:machine_casing>],
    [<deepmoblearning:soot_covered_plate>, <deepmoblearning:machine_casing>, <deepmoblearning:soot_covered_plate>]
]);

// 符文祭坛
recipes.addShaped(<botania:runealtar>, [
    [<ic2:crafting:3>, advancedCoin ,<ic2:crafting:3>], 
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>],
    [<ore:livingrock>, <randomthings:ingredient:2>, <ore:livingrock>]
]);

// 盖亚魔力发射器
recipes.addShaped(<botania:spreader:3>, [
    [null, advancedCoin, null],
    [<tconstruct:ingots:2>, <botania:manaresource:14>, <botania:spreader:2>],
    [null, <minecraft:nether_star>, null]
]);

// 砖
FireCrafting.addRecipe(<minecraft:brick>, <minecraft:clay_ball> * 2, 20);

// 辉光粉
Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/illuminationpowder");
Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/illuminationpowder", <astralsorcery:itemusabledust> * 16, 200, 200, [
            <minecraft:glowstone>, YUS_APPROVAL, <minecraft:iron_ingot>,
            <appliedenergistics2:material:16>, <astralsorcery:itemcraftingcomponent>, <appliedenergistics2:material:18>,
            <enderio:item_material:20>, commonCoin, <enderio:item_material:20>]);

// 高级电路板
recipes.addShaped(<ic2:crafting:2>, [
    [<appliedenergistics2:material:23>, <appliedenergistics2:material:22>, <appliedenergistics2:material:24>],
    [commonCoin, <ic2:crafting:1>, commonCoin],
    [<projectred-core:resource_item:21>, <botania:manaresource:9>, <appliedenergistics2:material:9>]
]);

// 电路板
recipes.addShaped(<ic2:crafting:1>, [
    [<appliedenergistics2:material:20>, <appliedenergistics2:material:24>, <appliedenergistics2:material:20>],
    [<ic2:cable:4>, <ic2:plate:3>, <ic2:cable:4>],
    [<ic2:cable:4>, <ic2:cable:4>, <ic2:cable:4>]
]);

// 环境控制器
recipes.addShaped(<rftools:environmental_controller>, [
    [advancedCoin, <minecraft:diamond_block>, <minecraft:ender_pearl>],
    [YUS_APPROVAL, <minecraft:nether_star>, <minecraft:beacon>],
    [<minecraft:gold_block>, <minecraft:emerald_block>, <rftools:machine_frame>]
]);

// 通量接入点
recipes.addShapeless(<fluxnetworks:fluxplug>, [<fluxnetworks:fluxplug:*>]);
recipes.addShaped(<fluxnetworks:fluxplug>, [
    [commonCoin, <fluxnetworks:fluxcore:*>, commonCoin],
    [<fluxnetworks:fluxcore:*>, <fluxnetworks:fluxblock:*>, <fluxnetworks:fluxcore:*>],
    [null, <fluxnetworks:fluxcore:*>, null]
]);

// 通量接出点
recipes.addShapeless(<fluxnetworks:fluxpoint>, [<fluxnetworks:fluxpoint:*>]);
recipes.addShaped(<fluxnetworks:fluxpoint>, [
    [commonCoin, <fluxnetworks:fluxcore:*>, commonCoin],
    [<fluxnetworks:fluxcore:*>, <minecraft:redstone_block:*>, <fluxnetworks:fluxcore:*>],
    [null, <fluxnetworks:fluxcore:*>, null]
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
    [null, <minecraft:nether_star>, null],
    [<ore:obsidian>, <ic2:crafting:2>, <ore:obsidian>]
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

// 寰宇肉丸
ExtremeCrafting.remove(cosmicMeatBall);
ExtremeCrafting.addShapeless("cosmicMeatBall", cosmicMeatBall,
[neutron, beefRaw, fishRaw, rabbitRaw, pigRaw, commonCoin, advancedCoin, YUS_APPROVAL, ultraCoin, <cookingforblockheads:recipe_book>, <rftoolscontrol:rftoolscontrol_manual>, <xnet:xnet_manual>, <patchouli:guide_book>.withTag({"patchouli:book": "sakura:sakura_guide"}), <patchouli:guide_book>.withTag({"patchouli:book": "touhou_little_maid:memorizable_gensokyo"}), <ftbquests:book>, <botania:lexicon>.withTag({}), <botania_tweaks:compressed_tiny_potato_3>, <rftools:infused_enderpearl>,<teastory:porkchop_rice>, <torchmaster:frozen_pearl>, <minecraft:slime>, <quark:glass_item_frame>, <minecraft:light_weighted_pressure_plate>, <cyclicmagic:beacon_potion>, <quark:cooked_crab_leg>, <quark:cooked_frog_leg>]);

// 存储检测器
<rftools:storage_scanner>.addTooltip(format.green(game.localize("tooltip.scanner")));

// 扫描器
recipes.addShaped(<scannable:scanner>.withTag({energy: 5000}), [
    [<minecraft:repeater>, <minecraft:comparator>, <minecraft:repeater>],
    [<appliedenergistics2:material:9>, <ic2:crafting:2>, <appliedenergistics2:material:9>],
    [<ore:gemQuartz>, advancedCoin, <ore:gemQuartz>]
]);

// 红石护甲防护板
recipes.addShaped(<redstonearsenal:material:224>, [
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

// 终极混合太阳能
Agglomeration.addRecipe(<advanced_solar_panels:machines:4>,
    [ultraCoin, YUS_APPROVAL, <botania:storage:1>, <tconstruct:metal:2>, <ic2:crafting:4> * 4, <ic2:crafting:2> * 4, <appliedenergistics2:material:12> * 4, <botania:manaresource:14> * 4, <appliedenergistics2:material:38>], 1000000);

// 量子太阳能
FluidToItem.transform(<advanced_solar_panels:machines:5>, <liquid:ic2uu_matter>, [<advanced_solar_panels:machines:4> * 8, <advanced_solar_panels:crafting:13>, <appliedenergistics2:material:48>], true);

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

// 纳米套
RuneAltar.addRecipe(<ic2:nano_helmet>, [<ic2:resource:13>, <ic2:nightvision_goggles>.anyDamage(), <botania:elementiumhelm>, <ic2:energy_crystal>.anyDamage(), commonCoin], 200000);
RuneAltar.addRecipe(<ic2:nano_chestplate>, [<ic2:resource:13>, <ic2:crafting:34>, <avaritia:resource>, <botania:elementiumchest>, <ic2:energy_crystal>.anyDamage(), advancedCoin], 200000);
RuneAltar.addRecipe(<ic2:nano_leggings>, [<ic2:resource:13>, <minecraft:nether_star>, <avaritia:resource>, <botania:elementiumlegs>, <ic2:energy_crystal>.anyDamage(), commonCoin], 200000);
RuneAltar.addRecipe(<ic2:nano_boots>, [<ic2:resource:13>, <minecraft:end_rod>, <avaritia:resource>, <botania:elementiumboots>, <ic2:energy_crystal>.anyDamage(), commonCoin], 200000);
