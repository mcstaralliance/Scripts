import mods.thaumcraft.Infusion;
import mods.thaumcraft.ArcaneWorkbench;
import thaumcraft.aspect.CTAspectStack;
import crafttweaker.item.IItemTransformer;  
import crafttweaker.events.IEventManager;
import crafttweaker.item.IItemStack;
import crafttweaker.item.IItemStack as IItemStack;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.oredict.IOreDict;
import crafttweaker.item.IIngredient;

// 32*sixaspect = <aspect:Terra>*32, <aspect:ignis>*32, <aspect:aqua>*32, <aspect:ordo>*32, <aspect:perditio>; 

// 工作台
recipes.addShaped(<minecraft:crafting_table>, [[<minecraft:dirt>, <ore:plankWood>], [<minecraft:gravel>, <minecraft:sand>]]);
recipes.remove(<minecraft:crafting_table>);

// 手持工作台
recipes.remove(<extendedcrafting:handheld_table>);
recipes.addShaped(<extendedcrafting:handheld_table>, [[null, <minecraft:crafting_table>], [<immersiveengineering:material>, null]]);

// 电路板
recipes.remove(<ic2:crafting:1>);
recipes.addShaped(<ic2:crafting:1>*2, [[<immersiveengineering:material:20>, <immersiveengineering:material:20>, <immersiveengineering:material:20>], [<immersiveengineering:material:20>, <ore:plateIron>, <immersiveengineering:material:20>], [<ore:dustRedstone>, <ore:itemRubber>, <ore:dustRedstone>]]);

// 黑铁框架
recipes.remove(<extendedcrafting:frame>);
recipes.addShaped(<extendedcrafting:frame>*2, [[<extendedcrafting:material:3>, <enderio:block_fused_quartz>, <extendedcrafting:material:3>,], [<enderio:block_fused_quartz>, <extendedcrafting:trimmed>, <enderio:block_fused_quartz>,], [<extendedcrafting:material:3>, <enderio:block_fused_quartz>, <extendedcrafting:material:3>,]]);

// 机器框架(热力)
recipes.remove(<thermalexpansion:frame>);
recipes.addShaped(<thermalexpansion:frame>, [[<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotConstructionAlloy>], [<appliedenergistics2:quartz_glass>, <enderio:item_material:11>, <appliedenergistics2:quartz_glass>], [<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotConstructionAlloy>]]);

// 设备框架(热力)
recipes.remove(<thermalexpansion:frame:64>);
recipes.addShaped(<thermalexpansion:frame:64>, [[<ore:ingotRedstoneAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotRedstoneAlloy>], [<appliedenergistics2:quartz_glass>, <enderio:item_material:11>, <appliedenergistics2:quartz_glass>], [<ore:ingotRedstoneAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotRedstoneAlloy>]]);

// 机器涂料
recipes.remove(<enderio:item_material:51>);
recipes.addShaped(<enderio:item_material:51>, [[<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>], [<ic2:crafting:25>, <enderio:item_material:50>, <ic2:crafting:25>], [<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>]]);

// 一级结构方块
recipes.remove(<environmentaltech:structure_frame_1>);
<environmentaltech:structure_frame_1>.addTooltip("§6使用精英工作台合成此物品");
mods.extendedcrafting.TableCrafting.addShaped(0, <environmentaltech:structure_frame_1>*6, [
    [<ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>], 
    [<ore:plateBrass>, <ore:gemDiamond>, <ore:crystalLitherite>, <ore:crystalLitherite>, <ore:crystalLitherite>, <ore:gemDiamond>, <ore:plateBrass>], 
    [<ore:plateBrass>, <ore:crystalLitherite>, <minecraft:concrete_powder:15>, <minecraft:concrete_powder:15>, <minecraft:concrete_powder:15>, <ore:crystalLitherite>, <ore:plateBrass>], 
    [<ore:plateBrass>, <ore:crystalLitherite>, <minecraft:concrete_powder:15>, <ore:itemSimpleMachineChassi>, <minecraft:concrete_powder:15>, <ore:crystalLitherite>, <ore:plateBrass>], 
    [<ore:plateBrass>, <ore:crystalLitherite>, <minecraft:concrete_powder:15>, <minecraft:concrete_powder:15>, <minecraft:concrete_powder:15>, <ore:crystalLitherite>, <ore:plateBrass>], 
    [<ore:plateBrass>, <ore:gemDiamond>, <ore:crystalLitherite>, <ore:crystalLitherite>, <ore:crystalLitherite>, <ore:gemDiamond>, <ore:plateBrass>], 
    [<ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>, <ore:plateBrass>]
]);

// 二级结构方块
<environmentaltech:structure_frame_2>.addTooltip("§6请使用注魔合成");
recipes.remove(<environmentaltech:structure_frame_2>);
mods.thaumcraft.Infusion.registerRecipe("tier2", "", <environmentaltech:structure_frame_2>, 3,[<aspect:aer>*8, <aspect:ignis>*8], <environmentaltech:structure_frame_1>, [<extendedcrafting:material:9>, <extendedcrafting:material:9>, <extendedcrafting:material:9>, <thaumicenergistics:coalescence_core>, <thaumicenergistics:diffusion_core>, <thaumicenergistics:essentia_component_4k>]);

// 三级结构方块
<environmentaltech:structure_frame_3>.addTooltip("§6请使用注魔合成");
recipes.remove(<environmentaltech:structure_frame_3>);
mods.thaumcraft.Infusion.registerRecipe("tier3", "", <environmentaltech:structure_frame_3>, 5,[<aspect:aer>*32, <aspect:ignis>*32], <environmentaltech:structure_frame_2>, [<ore:blockLitherite>, <draconicevolution:particle_generator>, <minecraft:ender_eye>, <minecraft:ender_eye>, <minecraft:nether_star>, <environmentaltech:modifier_null>, <environmentaltech:structure_panel>]);

// 觉醒龙块
mods.extendedcrafting.CombinationCrafting.addRecipe(<draconicevolution:draconium_block:1> * 4, 25000, 4000, <extendedcrafting:material:10>, [<ore:blockDraconium>, <ore:blockDraconium>, <ore:blockDraconium>, <ore:blockDraconium>]);

// 注魔矩阵
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:infusion_matrix>);
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("I", "", 1, [<aspect:aqua>*16, <aspect:ignis>*16, <aspect:terra>*16, <aspect:aer>*16, <aspect:ordo>*16, <aspect:perditio>*16], <thaumcraft:infusion_matrix>, [[<thaumcraft:salis_mundus>, <thaumcraft:plate>, <thaumcraft:salis_mundus>], [<thaumcraft:plate>, <minecraft:tnt>, <thaumcraft:plate>], [<thaumcraft:salis_mundus>, <thaumcraft:plate>, <thaumcraft:salis_mundus>]]);

// ME 接口
recipes.remove(<appliedenergistics2:interface>);
recipes.addShaped(<appliedenergistics2:interface>, [[<appliedenergistics2:quartz_glass>, <thermaldynamics:duct_32>, <appliedenergistics2:quartz_glass>], [<ore:pearlFluix>, <ore:gemQuartz>, <ore:pearlFluix>], [<appliedenergistics2:quartz_glass>, <thermaldynamics:duct_32>, <appliedenergistics2:quartz_glass>]]);

// ME 控制器
recipes.remove(<appliedenergistics2:controller>);
recipes.addShaped(<appliedenergistics2:controller>, [[<ore:plateVoid>, <appliedenergistics2:material:23>, <ore:plateVoid>], [<appliedenergistics2:material:24>, <appliedenergistics2:part:140>, <appliedenergistics2:material:22>], [<ore:plateVoid>, <ore:beeComb>, <ore:plateVoid>]]);

// 激光核心
recipes.remove(<environmentaltech:laser_core>);

// 虚空采矿机控制器
<environmentaltech:void_ore_miner_cont_1>.addTooltip("§4§l仅用于合成蓝图，无法搭建虚空采矿机§6reason:§a§l激光核心已删合成");

// MK1 蓝图
mods.thaumcraft.Infusion.registerRecipe("MK1", "", <modularmachinery:itemblueprint>.withTag({dynamicmachine: "modularmachinery:tier1"}), 5, [<aspect:instrumentum>*32, <aspect:vitium>*32, <aspect:humanus>*32, <aspect:machina>*32], <environmentaltech:void_ore_miner_cont_1>, [<ore:paper>, <ore:oreGold>, <ore:oreIron>, <ore:oreCopper>, <ore:oreTin>, <ore:oreSilver>, <ore:oreNickel>, <enderio:item_material:54>, <forestry:broken_bronze_pickaxe>, <forestry:broken_bronze_shovel>]);

// 灵魂框架涂料粉
recipes.remove(<enderio:item_material:52>);
recipes.addShaped(<enderio:item_material:52>*6, [[<ic2:dust:6>, <thermalfoundation:material:1027>, <ic2:dust:6>], [<thermalfoundation:material:1027>, <ore:dustObsidian>, <thermalfoundation:material:1027>], [<ic2:dust:6>, <thermalfoundation:material:1027>, <ic2:dust:6>]]);

// 岩石
recipes.addShapeless(<thermalfoundation:material:2052>, [<appliedenergistics2:material:45>, <ore:dustObsidian>]);

// 狂风
recipes.addShapeless(<thermalfoundation:material:2050>, [<appliedenergistics2:material:45>, <ore:dustStone>]);

// 暴雪
recipes.addShapeless(<thermalfoundation:material:2048>, [<ore:blockIce>, <appliedenergistics2:material:45>]);

// 熔岩炉
recipes.remove(<thermalexpansion:machine:6>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:6>, [
    [<ore:crystalLitherite>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <ore:crystalLitherite>], 
    [<minecraft:bucket>, <minecraft:magma_cream>, <minecraft:magma_cream>, <minecraft:magma_cream>, <minecraft:bucket>], 
    [<thermalexpansion:tank>, <minecraft:magma>, <ic2:te:4>, <minecraft:magma>, <thermalexpansion:tank>], 
    [<minecraft:bucket>, <thermalexpansion:frame:64>, <minecraft:lava_bucket>, <thermalexpansion:frame>, <minecraft:bucket>], 
    [<ore:crystalLitherite>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <ore:crystalLitherite>]
]);

// 压缩机
recipes.remove(<thermalexpansion:machine:5>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:5>, [
    [<ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>], 
    [<thaumcraft:stone_arcane>, <ore:crystalLitherite>, <immersiveengineering:tool>, <ore:crystalLitherite>, <thaumcraft:stone_arcane>], 
    [<thaumcraft:stone_arcane>, <thermalexpansion:frame>, <appliedenergistics2:condenser>, <thermalexpansion:frame:64>, <thaumcraft:stone_arcane>], 
    [<thaumcraft:stone_arcane>, <ore:crystalLitherite>, <ic2:te:43>, <ore:crystalLitherite>, <thaumcraft:stone_arcane>], 
    [<ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>]
]);

// 感应炉
recipes.remove(<thermalexpansion:machine:3>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:3>, [
    [<modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>], 
    [<ore:reBattery>, <ore:crystalLitherite>, <ic2:te:46>, <ore:crystalLitherite>, <ore:reBattery>], 
    [<minecraft:lava_bucket>, <ore:crystalLitherite>, <ic2:te:54>, <ore:crystalLitherite>, <minecraft:lava_bucket>], 
    [<ore:reBattery>, <thermalexpansion:frame:64>, <ic2:te:46>, <thermalexpansion:frame>, <ore:reBattery>], 
    [<modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>]
]);

// 磨粉机
recipes.remove(<thermalexpansion:machine:1>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:1>, [
    [<ore:crystalLitherite>, <ore:crystalLitherite>, <appliedenergistics2:crank>, <ore:crystalLitherite>, <ore:crystalLitherite>], 
    [<ore:gravel>, <ore:gearEnergized>, <appliedenergistics2:grindstone>, <ore:gearEnergized>, <ore:gravel>], 
    [<ore:gravel>, <ore:itemFlint>, <ore:ic2Macerator>, <ore:itemFlint>, <ore:gravel>], 
    [<ore:sand>, <thermalexpansion:frame>, <ore:gearEnergized>, <thermalexpansion:frame:64>, <ore:sand>], 
    [<ore:sand>, <modularmachinery:itemmodularium>, <advanced_solar_panels:crafting:7>, <modularmachinery:itemmodularium>, <ore:sand>]
]);

// 红石炉
recipes.remove(<thermalexpansion:machine>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine>, [
    [<thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>], 
    [<thaumcraft:stone_arcane>, <ore:crystalLitherite>, <ore:crystalLitherite>, <ore:crystalLitherite>, <thaumcraft:stone_arcane>], 
    [<thaumcraft:stone_arcane>, <thermalexpansion:frame>, <ore:crystalLitherite>, <thermalexpansion:frame:64>, <thaumcraft:stone_arcane>], 
    [<thaumcraft:stone_arcane>, <ic2:te:46>, <ic2:te:46>, <ic2:te:46>, <thaumcraft:stone_arcane>], 
    [<thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thermalfoundation:material:513>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>]
]);

// 流体转置机
recipes.remove(<thermalexpansion:machine:8>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:8>, [
    [<ore:crystalLitherite>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <ore:crystalLitherite>], 
    [null, <thermalexpansion:tank>, <thaumcraft:stone_arcane>, <thermalexpansion:tank>, null], 
    [null, <ore:gearEnergized>, <ic2:te:42>, <ore:gearEnergized>, null], 
    [null, <thermalexpansion:frame:64>, <minecraft:cauldron>, <thermalexpansion:frame>, null], 
    [<ore:crystalLitherite>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <ore:crystalLitherite>]
]);

// 造石机
recipes.remove(<thermalexpansion:machine:15>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:15>, [
    [<ore:crystalLitherite>, <environmentaltech:litherite_slab>, <environmentaltech:litherite_slab>, <environmentaltech:litherite_slab>, <ore:crystalLitherite>], 
    [<ore:crystalLitherite>, <thermalexpansion:frame>, <minecraft:lava_bucket>, <thermalexpansion:frame:64>, <ore:crystalLitherite>], 
    [<ore:obsidian>, <ore:gearInvar>, <ore:listAllwater>, <ore:gearInvar>, <ore:obsidian>], 
    [<ore:obsidian>, <ore:obsidian>, <minecraft:cauldron>, <ore:obsidian>, <ore:obsidian>], 
    [<modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>]
]);

// VIP4
mods.extendedcrafting.TableCrafting.addShaped(0, <hydrogen:vip4>, [
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <ore:blockInfinity>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <avaritia:infinity_helmet>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <ore:blockInfinity>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <avaritia:infinity_chestplate>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <ore:blockInfinity>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <avaritia:infinity_pants>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <ore:blockInfinity>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <avaritia:infinity_boots>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>], 
    [<ore:ingotInfinity>, <avaritia:resource:5>, <draconicevolution:chaotic_core>, <ore:blockDraconiumAwakened>, <ore:blockInfinity>, <ore:blockDraconiumAwakened>, <draconicevolution:chaotic_core>, <avaritia:resource:5>, <ore:ingotInfinity>]
]);

// 机械控制器
recipes.remove(<modularmachinery:blockcontroller>);
recipes.addShaped(<modularmachinery:blockcontroller>, [[<appliedenergistics2:part:56>, <thermalexpansion:augment:432>, <appliedenergistics2:part:56>], [<modularmachinery:blockcasing>, <appliedenergistics2:controller>, <modularmachinery:blockcasing>], [<modularmachinery:blockcasing>, <modularmachinery:blockcasing>, <modularmachinery:blockcasing>]]);

// 白嫖超级物品输出入仓
mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockoutputbus:6>, [
    [<ore:chest>, <ore:blockIron>, <ore:chest>], 
    [<modularmachinery:blockcasing:4>, <ore:blockHopper>, <modularmachinery:blockcasing:4>], 
    [<modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>]
]);

// 白嫖超级物品输出入仓
mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockinputbus:6>, [
    [<ore:chest>, <ore:blockHopper>, <ore:chest>], 
    [<modularmachinery:blockcasing:4>, <ore:blockIron>, <modularmachinery:blockcasing:4>], 
    [<modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>]
]);

// 白嫖能源输出仓
mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockenergyoutputhatch:5>, [
    [<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
    [<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
    [<modularmachinery:blockcasing:4>, <appliedenergistics2:part:260>, <modularmachinery:blockcasing:4>]
]);

// 白嫖能源输入仓
mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockenergyinputhatch:7>, [
    [<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
    [<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
    [<modularmachinery:blockcasing:4>, <appliedenergistics2:part:240>, <modularmachinery:blockcasing:4>]
]);

// 石英矿机 MK1 蓝图
mods.inworldcrafting.FluidToItem.transform(<modularmachinery:itemblueprint>.withTag({dynamicmachine: "modularmachinery:quartz"}), <liquid:water>, [<minecraft:paper>, <minecraft:quartz>, <appliedenergistics2:material>, <appliedenergistics2:material:1>,], false);

// 双重压缩工作台
recipes.remove(<avaritia:double_compressed_crafting_table>);
recipes.addShaped(<avaritia:double_compressed_crafting_table>, [[<avaritia:compressed_crafting_table>, <avaritia:compressed_crafting_table>, <avaritia:compressed_crafting_table>], [<avaritia:compressed_crafting_table>, <extendedcrafting:trimmed:2>, <avaritia:compressed_crafting_table>], [<avaritia:compressed_crafting_table>, <avaritia:compressed_crafting_table>, <avaritia:compressed_crafting_table>]]);

recipes.remove(<avaritia:compressed_crafting_table>);
mods.extendedcrafting.TableCrafting.addShaped(0, <avaritia:compressed_crafting_table>, [
    [null, null, null, null, null], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, null], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, null], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, null], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, null]
]);

mods.extendedcrafting.TableCrafting.addShaped(0, <avaritia:double_compressed_crafting_table>, [
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <ore:ingotCosmicNeutronium>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>], 
    [<extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>, <extendedcrafting:crafting_table>]
]);

// FIX 超级堡 
mods.extendedcrafting.TableCrafting.addShapeless(0, <avaritia:ultimate_stew>*4, [<ore:cropApple>, <minecraft:mushroom_stew>, <ore:bread>, <ore:listAllmeatraw>, <ore:listAllmeatcooked>, <minecraft:golden_apple>, <ore:listAllfishraw>, <ore:listAllfishraw>, <ore:listAllfishraw>, <minecraft:cake>, <ore:listAllcookie>, <ore:listAllfruit>, <ore:listAllmeatraw>, <ore:listAllmeatcooked>, <ore:listAllchickenraw>, <ore:listAllchickencooked>, <minecraft:rotten_flesh>, <minecraft:spider_eye>, <ore:listAllveggie>, <ore:listAllveggie>, <minecraft:baked_potato>, <minecraft:pumpkin_pie>, <ore:listAllmeatraw>, <ore:listAllmeatcooked>, <minecraft:beetroot_soup>, <minecraft:poisonous_potato>, <minecraft:rabbit_stew>, <ore:listAllmeatraw>, <ore:nuggetCosmicNeutronium>,<cuisine:food:5>,<cuisine:food:6>,<cuisine:food:7>,<cuisine:food:8>]);

// IC2 感应炉 
recipes.remove(<ic2:te:54>);
recipes.addShaped(<ic2:te:54>, [[<ore:blockGlass>, <ore:blockGlass>, <ore:blockGlass>], [<ic2:te:44>, <ic2:resource:13>, <ic2:te:44>], [<ore:circuitBasic>, <immersiveengineering:metal_decoration0>, <ore:circuitBasic>]]);

// IC2 压缩机 
recipes.remove(<ic2:te:43>);
recipes.addShaped(<ic2:te:43>, [[<thaumcraft:stone_arcane>, <ic2:forge_hammer>.anyDamage(), <thaumcraft:stone_arcane>], [<thaumcraft:stone_arcane>, <ic2:resource:12>, <thaumcraft:stone_arcane>], [<thaumcraft:stone_arcane>, <ic2:crafting:1>, <thaumcraft:stone_arcane>]]);

// IC2 金属手冲机
recipes.remove(<ic2:te:55>);
recipes.addShaped(<ic2:te:55>, [[<ic2:forge_hammer>.anyDamage(), <ic2:crafting:1>, <ic2:cutter>.anyDamage()], [<ic2:tool_box>, <ic2:resource:12>, <ic2:tool_box>], [<ic2:crafting:5>, <ic2:crafting:5>, <ic2:crafting:5>]]);

// IC2 打粉姬 
recipes.remove(<ic2:te:47>);
recipes.addShaped(<ic2:te:47>, [[<ore:itemFlint>, <ore:itemFlint>, <ore:itemFlint>], [<ore:stone>, <ic2:resource:12>, <ore:stone>], [<ore:gearIron>, <ic2:crafting:1>, <ore:gearIron>]]);

// 奥术基座
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:pedestal_arcane>);
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("jizuo", "", 10, [<aspect:ignis>*2, <aspect:terra>*2], <thaumcraft:pedestal_arcane>*4, [[<thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>], [<thaumcraft:stone_arcane>, <extendedcrafting:pedestal>, <thaumcraft:stone_arcane>], [<thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>]]);

// 机器框架模具
recipes.remove(<enderio:item_material>);
recipes.addShaped("enderio_material", <enderio:item_material>, [
    [<ore:plateThaumium>, <minecraft:iron_trapdoor>, <ore:plateThaumium>], 
    [<advanced_solar_panels:crafting:6>, <enderio:item_basic_capacitor>, <appliedenergistics2:material:25>], 
    [<ore:plateThaumium>, <minecraft:iron_trapdoor>, <ore:plateThaumium>]
]);

// 硝
recipes.addShapeless("NO2", <immersiveengineering:material:24>, [<thaumadditions:salt_essence>]);

// 模块化合金
recipes.remove(<modularmachinery:itemmodularium>);
mods.immersiveengineering.ArcFurnace.addRecipe(<modularmachinery:itemmodularium>, <ore:ingotGold>, <thermalfoundation:material:161>, 200, 2048, [<ore:ingotIron>, <minecraft:redstone>*2, <minecraft:glowstone_dust>], "Alloying");

// 公式处理器
recipes.addShaped("unpack", <thermalexpansion:device:10>, [
    [<ore:crystalLitherite>, <immersiveengineering:mold:7>, <ore:crystalLitherite>], 
    [<ore:workbench>, <thermalexpansion:frame:64>, <ore:workbench>], 
    [<ore:crystalLitherite>, <immersiveengineering:stone_decoration:7>, <ore:crystalLitherite>]
]);

// 晓汉堡
<sakura:foodset:69>
.displayName = "§2晓汉堡";
.addTooltip("§3老八蜜汁晓汉堡")
.addTooltip("§6既实惠，还管饱");

recipes.addShaped("老⑧汉堡", <sakura:foodset:69>, [
    [null, <ore:bread>, null], 
    [<ore:listAllgrain>, <ore:cropLemon>, <cuisine:material:4>], 
    [null, <ore:bread>, null]
]);

// 设置 GB 为金块
val GB = <minecraft:gold_block>;
// 函数添加附魔金苹果
recipes.addShaped("Goldenapplerecipes", <minecraft:golden_apple:1>*8, [[GB,GB,GB],[GB,<minecraft:apple>.marked("anyapple"),GB],[GB,<minecraft:nether_star>,GB]], function(out, ins, cInfo) {
    var displayName = ins.anyapple.displayName;
    if(displayName has ":") {
        return itemUtils.getItem(displayName);
    }
    return <minecraft:golden_apple:1>*8;
}, null);

// 修改了 ME 存储总线的合成
recipes.remove(<appliedenergistics2:part:220>);
val icp = <enderio:item_conduit_probe>.anyDamage().transformDamage();
mods.extendedcrafting.TableCrafting.addShaped(0, <appliedenergistics2:part:220>, [
    [null, null, <ore:ingotVibrantAlloy>, <ore:itemChassiParts>, null], 
    [null, <ore:itemChassiParts>, <ore:itemChassiParts>, <thermalexpansion:cache>, null], 
    [<ore:itemChassiParts>, icp, <enderio:block_end_iron_bars>, <thermalexpansion:cache>, null], 
    [null, <ore:itemChassiParts>, <ore:itemChassiParts>, <thermalexpansion:cache>, null], 
    [null, null, <ore:ingotVibrantAlloy>, <ore:itemChassiParts>, null]
]);

// 通量维修复原
recipes.remove(<thermalexpansion:augment:401>);
recipes.addShaped("Repair", <thermalexpansion:augment:401>, [
    [<enderio:item_material:69>, <enderio:item_xp_transfer>.marked("meta"), <enderio:item_material:69>], 
    [<immersiveengineering:material:27>, <thaumcraft:salis_mundus>.marked("xpe"), <ore:plateBronze>], 
    [<enderio:item_material:69>, <minecraft:enchanted_book>.marked("xp"), <enderio:item_material:69>]
], 
function(out, ins, cInfo) {
    var xTransfer = ins.meta.displayName;
    var xpTransfer = ins.xpe.displayName;
    var xMeta = ins.xp.displayName;
    var finalN = xTransfer + xpTransfer;
    if (finalN has ":") {
        return itemUtils.getItem(finalN, xMeta);
    }
    return <thermalexpansion:augment:401>;
}, null);

// 奥数工作台充能器
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:arcane_workbench_charger>);
recipes.addShaped("arcane_workbench_charger", <thaumcraft:arcane_workbench_charger>, [
    [null, <ore:itemWirelessDish>, null], 
    [<thaumcraft:mirrored_glass>, <appliedenergistics2:material:42>, <thaumcraft:mirrored_glass>], 
    [<thermalfoundation:material:656>, <ore:nitor>, <thermalfoundation:material:656>]
]);

// 公式处理器
recipes.addShaped("shapeDevice", <thermalexpansion:device:10>, [
    [<ore:crystalLitherite>, <immersiveengineering:mold:7>, <ore:crystalLitherite>], 
    [<ore:workbench>, <thermalexpansion:frame:64>, <ore:workbench>], 
    [<ore:crystalLitherite>, <immersiveengineering:stone_decoration:7>, <ore:crystalLitherite>]
]);

// 猪魂
recipes.addShaped("pigSoul", <draconicevolution:mob_soul>.withTag({}), [
    [null, <ore:listAllmeatraw>, null], 
    [<ore:listAllmeatraw>, <minecraft:spider_eye>, <ore:listAllmeatraw>], 
    [null, <ore:listAllmeatraw>, null]
]);

// 下面是所有的食材
recipes.addShaped("", <cuisine:crops>, [
    [<ore:seedWheat>, <ore:seedWheat>, null], 
    [null, null, null], 
    [null, null, null]
]);
recipes.addShaped("0", <cuisine:crops:1>, [
    [<ore:seedWheat>, null, <ore:seedWheat>], 
    [null, null, null], 
    [null, null, null]
]);
recipes.addShaped("2", <cuisine:crops:2>, [
    [<ore:seedWheat>, null, null], 
    [<ore:seedWheat>, null, null], 
    [null, null, null]
]);
recipes.addShaped("3", <cuisine:crops:3>, [
    [<ore:seedWheat>, null, null], 
    [null, <ore:seedWheat>, null], 
    [null, null, null]
]);
recipes.addShaped("4", <cuisine:crops:4>, [
    [<ore:seedWheat>, null, null], 
    [null, null, <ore:seedWheat>], 
    [null, null, null]
]);
recipes.addShaped("5", <cuisine:crops:5>, [
    [<ore:seedWheat>, null, null], 
    [null, null, null], 
    [<ore:seedWheat>, null, null]
]);
recipes.addShaped("6", <cuisine:crops:6>, [
    [<ore:seedWheat>, null, null], 
    [null, null, null], 
    [null, <ore:seedWheat>, null]
]);
recipes.addShaped("9", <cuisine:crops:9>, [
    [<ore:seedWheat>, null, null], 
    [null, null, null], 
    [null, null, <ore:seedWheat>]
]);
recipes.addShaped("10", <cuisine:crops:10>, [
    [null, <ore:seedWheat>, <ore:seedWheat>], 
    [null, null, null], 
    [null, null, null]
]);
recipes.addShaped("11", <cuisine:crops:11>, [
    [null, <ore:seedWheat>, null], 
    [<ore:seedWheat>, null, null], 
    [null, null, null]
]);
recipes.addShaped("12", <cuisine:crops:12>, [
    [null, <ore:seedWheat>, null], 
    [null, <ore:seedWheat>, null], 
    [null, null, null]
]);
recipes.addShaped("13", <cuisine:crops:13>, [
    [null, <ore:seedWheat>, null], 
    [null, null, null], 
    [<ore:seedWheat>, null, null]
]);
recipes.addShaped("14", <cuisine:crops:14>, [
    [null, <ore:seedWheat>, null], 
    [null, null, null], 
    [null, <ore:seedWheat>, null]
]);
recipes.addShaped("15", <cuisine:crops:15>, [
    [null, <ore:seedWheat>, null], 
    [null, null, null], 
    [null, null, <ore:seedWheat>]
]);
recipes.addShaped("16", <cuisine:crops:16>, [
    [null, null, <ore:seedWheat>], 
    [<ore:seedWheat>, null, null], 
    [null, null, null]
]);
recipes.addShaped("17", <cuisine:crops:17>, [
    [null, null, <ore:seedWheat>], 
    [null, <ore:seedWheat>, null], 
    [null, null, null]
]);
recipes.addShaped("18", <cuisine:crops:18>, [
    [null, null, <ore:seedWheat>], 
    [null, null, <ore:seedWheat>], 
    [null, null, null]
]);
recipes.addShaped("19", <cuisine:crops:19>, [
    [null, null, <ore:seedWheat>], 
    [null, null, null], 
    [<ore:seedWheat>, null, null]
]);
recipes.addShaped("20", <cuisine:crops:20>, [
    [null, null, <ore:seedWheat>], 
    [null, null, null], 
    [null, <ore:seedWheat>, null]
]);
recipes.addShaped("21", <cuisine:crops:21>, [
    [null, null, <ore:seedWheat>], 
    [null, null, null], 
    [null, null, <ore:seedWheat>]
]);
recipes.addShaped("bamboo", <cuisine:bamboo>*32, [
    [<ore:logWood>, null, null], 
    [null, <ore:logWood>, null], 
    [null, null, null]
]);
recipes.addShaped("4", <cuisine:food:4>, [
    [null, <ore:seedWheat>, null], 
    [null, null, <ore:seedWheat>], 
    [null, null, null]
]);

// 打火机
recipes.addShaped("lighter", <variedcommodities:lighter>, [
    [null, null, <sakura:kitunebi>], 
    [null, <minecraft:fire_charge>, null], 
    [<cuisine:fan>, null, null]
]);

// 矿工指环
recipes.addShaped("ring", <baubles:ring>, [
    [null, <ore:ingotElectricalSteel>, null], 
    [<advanced_solar_panels:crafting:3>, <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short, id: 32 as short}]}), <ore:ingotElectrum>], 
    [null, <extendedcrafting:material:36>, null]
]);

var machineName = "dragon";
val recipesTickTime = 72000;

// 龙芯 龙锭*2 机动装置滚轴 虚空金属板 魔力油脂 花粉 发条之心
recipes.remove(<draconicevolution:draconic_core>);
recipes.addShapeless(<draconicevolution:draconic_core>,[<thaumcraft:grapple_gun_spool>,<thaumcraft:plate:3>,<thaumcraft:tallow>,<draconicevolution:draconium_ingot>*2,<forestry:pollen>,<thaumcraft:mind>]);

// 双足飞龙核心 龙芯*4 僵尸之脑*2 形态谐振器*2 下届之星*1
recipes.remove(<draconicevolution:wyvern_core>);
recipes.addShaped("WyvernCore",<draconicevolution:wyvern_core>,[[<thaumcraft:brain>,<draconicevolution:draconic_core>,<thaumcraft:morphic_resonator>],[<draconicevolution:draconic_core>,<minecraft:nether_star>,<draconicevolution:draconic_core>],[<thaumcraft:morphic_resonator>,<draconicevolution:draconic_core>,<thaumcraft:brain>]]);

// 觉醒龙芯合成 双足龙芯*5 觉醒锭*2 空白大师核心*2
recipes.addShaped("awakedcore", <draconicevolution:awakened_core>, [[<draconicevolution:draconic_ingot>, <draconicevolution:wyvern_core>, <thaumcraft:focus_3>], [<draconicevolution:wyvern_core>, <draconicevolution:wyvern_core>, <draconicevolution:wyvern_core>], [<thaumcraft:focus_3>, <draconicevolution:wyvern_core>, <draconicevolution:draconic_ingot>]]);

// 双足飞龙剑
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_sword>, [
    [null, null, null, null, null, <ore:ingotBrickNetherGlazed>, <ore:ingotBrickNetherGlazed>], 
    [null, null, null, null, <ore:ingotBrickNetherGlazed>, <ore:ingotBrickNetherGlazed>, <ic2:crafting:4>], 
    [null, null, null, <ore:ingotBrickNetherGlazed>, <ore:ingotBrickNetherGlazed>, <ic2:crafting:4>, null], 
    [null, null, <ore:ingotBrickNetherGlazed>, <draconicevolution:infused_obsidian>, <ic2:crafting:4>, null, null], 
    [<draconicevolution:wyvern_core>, <ore:ingotVibrantAlloy>, <ic2:crafting:4>, <ic2:crafting:4>, null, null, null], 
    [null, <thaumcraft:elemental_sword>, <ore:ingotVibrantAlloy>, null, null, null, null], 
    [<ore:itemNutritiousStick>, null, <ore:ingotVibrantAlloy>, null, null, null, null]
]);

// 双足飞龙镐
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_pick>, [
    [null, <thermalfoundation:material:656>, <thermalfoundation:material:656>, null, null, null, null], 
    [null, null, <ore:dustCryotheum>, <draconicevolution:wyvern_core>, null, null, null], 
    [null, null, null, <ore:ingotVibrantAlloy>, <thaumcraft:elemental_pick>, null, null], 
    [null, null, null, <ore:ingotBrickNetherGlazed>, <ore:ingotVibrantAlloy>, <draconicevolution:wyvern_core>, null], 
    [null, null, <ore:ingotBrickNetherGlazed>, null, null, <ore:dustCryotheum>, <thermalfoundation:material:656>], 
    [null, <ore:ingotBrickNetherGlazed>, null, null, null, null, <thermalfoundation:material:656>], 
    [<ore:itemNutritiousStick>, null, null, null, null, null, null]
]);

// 双足飞龙斧
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_axe>), [
    [null, null, <thermalfoundation:material:657>, <thermalfoundation:material:657>, null, null, null], 
    [null, <ic2:crafting:4>, <ore:dustCryotheum>, <thermalexpansion:capacitor:3>, <ic2:block_cutting_blade:2>, null, null], 
    [null, null, <ic2:crafting:4>, <ore:dustCryotheum>, <ic2:block_cutting_blade:2>, null, null], 
    [null, null, null, <ic2:crafting:4>, <thaumcraft:elemental_axe>, <draconicevolution:infused_obsidian>, null], 
    [null, null, null, <ore:ingotVibrantAlloy>, null, <draconicevolution:wyvern_core>, null], 
    [null, null, <ore:ingotVibrantAlloy>, null, null, null, null], 
    [null, <ore:itemNutritiousStick>, null, null, null, null, null]
]);

// 双足飞龙铲
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_shovel>, [
    [null, null, null, null, <ic2:crafting:4>, <ic2:crafting:4>, <ic2:crafting:4>], 
    [null, null, null, <ic2:crafting:4>, <ic2:crafting:4>, <draconicevolution:wyvern_core>, <ic2:crafting:4>], 
    [null, null, null, <enderio:item_dark_steel_hand>, <ore:dustCryotheum>, <ic2:crafting:4>, <ic2:crafting:4>], 
    [null, null, null, <ore:ingotVibrantAlloy>, <thaumcraft:elemental_shovel>, <ic2:crafting:4>, null], 
    [null, null, <ore:ingotVibrantAlloy>, null, null, null, null], 
    [null, <ore:ingotVibrantAlloy>, null, null, null, null, null], 
    [<ore:itemNutritiousStick>, null, null, null, null, null, null]
]);

// 双足飞龙弓
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_bow>, [
    [null, <ic2:te:41>, <thaumcraft:module:1>, <ore:ingotVoid>, <ore:ingotVoid>, <ore:ingotVoid>, <ore:ingotVibrantAlloy>], 
    [<ic2:te:41>, <thermalfoundation:tool.bow_platinum>, <thaumcraft:turret:1>, <forge:bucketfilled>, null, <forestry:crafting_material:2>, null], 
    [<thaumcraft:module:1>, <thaumcraft:turret:1>, <thaumcraft:seal:14>, <draconicevolution:wyvern_core>, <forestry:crafting_material:2>, null, null], 
    [<ore:ingotVoid>, <forge:bucketfilled>, <draconicevolution:wyvern_core>, <forestry:crafting_material:2>, null, null, null], 
    [<ore:ingotVoid>, null, <forestry:crafting_material:2>, null, null, null, null], 
    [<ore:ingotVoid>, <forestry:crafting_material:2>, null, null, null, null, null], 
    [<ore:ingotVibrantAlloy>, null, null, null, null, null, null]
]);

// 双足头
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_helm>, [
    [<ore:blockRedstoneAlloy>, null, null, <minecraft:sea_lantern>, null, null, <ore:blockRedstoneAlloy>], 
    [<ore:blockRedstoneAlloy>, <ore:blockRedstoneAlloy>, <forestry:crafting_material:6>, <forestry:crafting_material:6>, <forestry:crafting_material:6>, <ore:blockRedstoneAlloy>, <ore:blockRedstoneAlloy>], 
    [null, <forestry:crafting_material:6>, <thaumcraft:module>, <ic2:quantum_helmet:26>, <thaumcraft:module>, <forestry:crafting_material:6>, null], 
    [null, <forestry:crafting_material:6>, <draconicevolution:infused_obsidian>, <thermalfoundation:material:657>, <draconicevolution:infused_obsidian>, <forestry:crafting_material:6>, null], 
    [null, <forestry:crafting_material:6>, <ore:nitor>, <draconicevolution:infused_obsidian>, <ore:nitor>, <forestry:crafting_material:6>, null], 
    [null, <ore:blockRockwool>, <thaumcraft:candle_blue>, <thaumcraft:banner_blue>, <thaumcraft:candle_blue>, <ore:blockRockwool>, null], 
    [null, <ore:blockRockwool>, <thaumcraft:candle_blue>, <thaumcraft:banner_blue>, <thaumcraft:candle_blue>, <ore:blockRockwool>, null]
]);

// 双足胸甲
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_chest>, [
    [null, null, null, null, null, null, null], 
    [null, <ore:ingotVibrantAlloy>, <ic2:crafting:4>, <draconicevolution:infused_obsidian>, <ic2:crafting:4>, <ore:ingotVibrantAlloy>, null], 
    [null, <ore:ingotVibrantAlloy>, <forestry:crafting_material:6>, <draconicevolution:infused_obsidian>, <forestry:crafting_material:6>, <ore:ingotVibrantAlloy>, null], 
    [null, <ore:ingotVibrantAlloy>, <forestry:crafting_material:6>, <ic2:quantum_chestplate:26>, <forestry:crafting_material:6>, <ore:ingotVibrantAlloy>, null], 
    [null, <ic2:crafting:4>, <ore:ingotVibrantAlloy>, <draconicevolution:wyvern_core>, <ore:ingotVibrantAlloy>, <ic2:crafting:4>, null], 
    [null, null, <ore:ingotVibrantAlloy>, <draconicevolution:wyvern_core>, <ore:ingotVibrantAlloy>, null, null], 
    [null, null, null, null, null, null, null]
]);

// 双足裤腿
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_legs>, [
    [null, null, null, null, null, null, null], 
    [null, <forestry:crafting_material:6>, <forestry:crafting_material:6>, <thaumcraft:morphic_resonator>, <forestry:crafting_material:6>, <forestry:crafting_material:6>, null], 
    [null, <thaumcraft:tube_filter>, <ic2:upgrade>, <ic2:quantum_leggings:26>, <ic2:upgrade>, <thaumcraft:tube_filter>, null], 
    [null, <draconicevolution:wyvern_core>, <ic2:crafting:4>, <forestry:crafting_material:6>, <ic2:crafting:4>, <draconicevolution:wyvern_core>, null], 
    [null, null, <ic2:crafting:4>, <forestry:crafting_material:6>, <ic2:crafting:4>, null, null], 
    [null, null, <ic2:crafting:4>, <forestry:crafting_material:6>, <ic2:crafting:4>, null, null], 
    [null, null, null, null, null, null, null]
]);

// 双足靴子
mods.extendedcrafting.TableCrafting.addShaped(0, <draconicevolution:wyvern_boots>, [
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, <ore:ingotVibrantAlloy>, <draconicevolution:wyvern_core>, <thermaldynamics:duct_64:2>, <draconicevolution:wyvern_core>, <ore:ingotVibrantAlloy>, null], 
    [null, <ore:ingotVibrantAlloy>, <ore:quicksilver>, <thermaldynamics:duct_64:2>, <ore:quicksilver>, <ore:ingotVibrantAlloy>, null], 
    [null, null, <forestry:crafting_material:6>, <ic2:quantum_boots:26>, <forestry:crafting_material:6>, null, null], 
    [null, null, <minecraft:piston>, <ore:dustCryotheum>, <minecraft:piston>, null, null]
]);

// 龍工具
// 神龙剑 秘金板*6 高级空白核心*1 双足剑 神龙能量核心
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "sword", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_sword>)
    .addItemInput(<thaumadditions:mithminite_plate>*6)
    .addItemInput(<thaumcraft:focus_2>)
    .addItemInput(<draconicevolution:wyvern_sword>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 神龙镐 同神龙剑
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "pick", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_pick>)
    .addItemInput(<thaumadditions:mithminite_plate>*6)
    .addItemInput(<thaumcraft:focus_2>)
    .addItemInput(<draconicevolution:wyvern_pick>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 同神龙剑
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "axe", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_axe>)
    .addItemInput(<thaumadditions:mithminite_plate>*6)
    .addItemInput(<thaumcraft:focus_2>)
    .addItemInput(<draconicevolution:wyvern_axe>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 同神龙剑
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "shovel", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_shovel>)
    .addItemInput(<thaumadditions:mithminite_plate>*6)
    .addItemInput(<thaumcraft:focus_2>)
    .addItemInput(<draconicevolution:wyvern_shovel>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 龍装备合成
// 神龙头 扩展合成锡奇点*2 秘金神秘使兜帽 双足头 神龙能量核心
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "helm", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_helm>)
    .addItemInput(<extendedcrafting:singularity:18>*2)
    .addItemInput(<thaumadditions:mithminite_hood>)
    .addItemInput(<draconicevolution:wyvern_helm>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 神龙胸 损坏的铁砧 秘金神秘使法袍 双足胸 神龙能量核心
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "chest", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_chest>)
    .addItemInput(<minecraft:anvil:2>)
    .addItemInput(<thaumadditions:mithminite_robe>)
    .addItemInput(<draconicevolution:wyvern_chest>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 神龙裤 检测器 秘金神秘使腰带 双足裤 神龙能量核心
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "legs", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_legs>)
    .addItemInput(<theoneprobe:probe_goggles>)
    .addItemInput(<thaumadditions:mithminite_belt>)
    .addItemInput(<draconicevolution:wyvern_legs>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 神龙鞋 纯净之花 秘金神秘使靴子 双足鞋 神龙能量核心
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "boots", machineName, recipesTickTime)
    .addEnergyPerTickInput(1024)
    .addFluidInput(<liquid:pyrotheum>*5000)
    .addItemOutput(<draconicevolution:draconic_boots>)
    .addItemInput(<thaumadditions:puriflower>)
    .addItemInput(<thaumadditions:mithminite_boots>)
    .addItemInput(<draconicevolution:wyvern_boots>)
    .addItemInput(<draconicevolution:draconic_energy_core>)
    .build();

// 龍权
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "power", machineName, recipesTickTime)
    .addEnergyPerTickInput(4096)
    .addFluidInput(<liquid:cloud_seed_concentrated>*25000)
    .addItemOutput(<draconicevolution:draconic_staff_of_power>)
    .addItemInput(<draconicevolution:draconic_sword>)
    .addItemInput(<draconicevolution:draconic_pick>)
    .addItemInput(<draconicevolution:draconic_axe>)
    .addItemInput(<draconicevolution:draconic_shovel>)
    .build();

// 蓝图 需要白兰地流体 觉醒核心+纸
mods.inworldcrafting.FluidToItem.transform(<modularmachinery:itemblueprint>.withTag({dynamicmachine: "modularmachinery:dragon"}), <liquid:sakura.brandy>, [<minecraft:paper>,<draconicevolution:awakened_core>], true);

// 真空流体输入 漏斗金块强化机器壳子
mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockfluidinputhatch:7>, [
    [<ore:chest>, <ore:blockHopper>, <ore:chest>], 
    [<modularmachinery:blockcasing:4>, <ore:blockGold>, <modularmachinery:blockcasing:4>], 
    [<modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>]
]);
