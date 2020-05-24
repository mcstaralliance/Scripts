import mods.thaumcraft.Infusion;
import mods.thaumcraft.ArcaneWorkbench;
import thaumcraft.aspect.CTAspectStack;
import crafttweaker.item.IItemTransformer;

// 32*sixaspect = <aspect:Terra>*32, <aspect:ignis>*32, <aspect:aqua>*32, <aspect:ordo>*32, <aspect:perditio>; 
// 2020.5.17更新 

recipes.remove(<minecraft:dirt:1>);
recipes.addShaped(<minecraft:dirt:1>*4, [[<minecraft:sand>, <ore:cobblestone>, <minecraft:gravel>], [<ore:cobblestone>, <forestry:ash>, <ore:cobblestone>], [<minecraft:gravel>, <ore:cobblestone>, <minecraft:sand>]]);
// 砂土 

recipes.remove(<minecraft:furnace>);
recipes.addShaped(<minecraft:furnace>, [[<minecraft:dirt:1>, <minecraft:dirt:1>, <minecraft:dirt:1>], [<minecraft:dirt:1>, <minecraft:crafting_table>, <minecraft:dirt:1>], [<minecraft:dirt:1>, <ore:cobblestone>, <minecraft:dirt:1>]]);
// 熔炉 

recipes.addShaped(<minecraft:crafting_table>, [[<minecraft:dirt>, <ore:plankWood>], [<minecraft:gravel>, <minecraft:sand>]]);
recipes.remove(<minecraft:crafting_table>);
// 工作台 

recipes.remove(<extendedcrafting:handheld_table>);
recipes.addShaped(<extendedcrafting:handheld_table>, [[null, <minecraft:crafting_table>], [<immersiveengineering:material>, null]]);
// 手持工作台 

recipes.remove(<ic2:crafting:1>);
recipes.addShaped(<ic2:crafting:1>*2, [[<immersiveengineering:material:20>, <immersiveengineering:material:20>, <immersiveengineering:material:20>], [<immersiveengineering:material:20>, <ore:plateIron>, <immersiveengineering:material:20>], [<ore:dustRedstone>, <ore:itemRubber>, <ore:dustRedstone>]]);
// 电路板 

recipes.remove(<extendedcrafting:frame>);
recipes.addShaped(<extendedcrafting:frame>*2, [[<extendedcrafting:material:3>, <enderio:block_fused_quartz>, <extendedcrafting:material:3>,], [<enderio:block_fused_quartz>, <extendedcrafting:trimmed>, <enderio:block_fused_quartz>,], [<extendedcrafting:material:3>, <enderio:block_fused_quartz>, <extendedcrafting:material:3>,]]);
// 黑铁框架 

recipes.remove(<thermalexpansion:frame>);
recipes.addShaped(<thermalexpansion:frame>, [[<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotConstructionAlloy>], [<appliedenergistics2:quartz_glass>, <enderio:item_material:11>, <appliedenergistics2:quartz_glass>], [<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotConstructionAlloy>]]);
// 机器框架(热力) 

recipes.remove(<thermalexpansion:frame:64>);
recipes.addShaped(<thermalexpansion:frame:64>, [[<ore:ingotRedstoneAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotRedstoneAlloy>], [<appliedenergistics2:quartz_glass>, <enderio:item_material:11>, <appliedenergistics2:quartz_glass>], [<ore:ingotRedstoneAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotRedstoneAlloy>]]);
// 设备框架(热力) 

recipes.remove(<enderio:item_material:51>);
recipes.addShaped(<enderio:item_material:51>, [[<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>], [<ic2:crafting:25>, <enderio:item_material:50>, <ic2:crafting:25>], [<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>]]);
// 机器涂料 

recipes.remove(<environmentaltech:void_ore_miner_cont_1>);
recipes.addShaped(<environmentaltech:void_ore_miner_cont_1>, [[<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>], [<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>], [<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>]]);
// 一级虚空采矿控制器 

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
// 一级结构方块 

// 2020.5.22更新↓ 

<environmentaltech:structure_frame_2>.addTooltip("§6请使用注魔合成");
recipes.remove(<environmentaltech:structure_frame_2>);
mods.thaumcraft.Infusion.registerRecipe("tier2", "", <environmentaltech:structure_frame_2>, 3,[<aspect:aer>*8, <aspect:ignis>*8], <environmentaltech:structure_frame_1>, [<extendedcrafting:material:9>, <extendedcrafting:material:9>, <extendedcrafting:material:9>, <thaumicenergistics:coalescence_core>, <thaumicenergistics:diffusion_core>, <thaumicenergistics:essentia_component_4k>]);
// 二级结构方块 

<environmentaltech:structure_frame_3>.addTooltip("§6请使用注魔合成");
recipes.remove(<environmentaltech:structure_frame_3>);
mods.thaumcraft.Infusion.registerRecipe("tier3", "", <environmentaltech:structure_frame_3>, 5,[<aspect:aer>*32, <aspect:ignis>*32], <environmentaltech:structure_frame_2>, [<ore:blockLitherite>, <draconicevolution:particle_generator>, <minecraft:ender_eye>, <minecraft:ender_eye>, <minecraft:nether_star>, <environmentaltech:modifier_null>, <environmentaltech:structure_panel>]);
// 三级结构方块 

mods.extendedcrafting.CombinationCrafting.addRecipe(<draconicevolution:draconium_block:1> * 4, 25000, 4000, <extendedcrafting:material:10>, [<ore:blockDraconium>, <ore:blockDraconium>, <ore:blockDraconium>, <ore:blockDraconium>]);
// 觉醒龙块 

mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:infusion_matrix>);
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("I", "", 1, [<aspect:aqua>*16, <aspect:ignis>*16, <aspect:terra>*16, <aspect:aer>*16, <aspect:ordo>*16, <aspect:perditio>*16], <thaumcraft:infusion_matrix>, [[<thaumcraft:salis_mundus>, <thaumcraft:plate>, <thaumcraft:salis_mundus>], [<thaumcraft:plate>, <minecraft:tnt>, <thaumcraft:plate>], [<thaumcraft:salis_mundus>, <thaumcraft:plate>, <thaumcraft:salis_mundus>]]);
// 注魔矩阵 

recipes.remove(<appliedenergistics2:interface>);
recipes.addShaped(<appliedenergistics2:interface>, [[<appliedenergistics2:quartz_glass>, <thermaldynamics:duct_32>, <appliedenergistics2:quartz_glass>], [<ore:pearlFluix>, <ore:gemQuartz>, <ore:pearlFluix>], [<appliedenergistics2:quartz_glass>, <thermaldynamics:duct_32>, <appliedenergistics2:quartz_glass>]]);
// me接口 

recipes.remove(<appliedenergistics2:controller>);
recipes.addShaped(<appliedenergistics2:controller>, [[<appliedenergistics2:sky_stone_block>, <appliedenergistics2:material:23>, <appliedenergistics2:sky_stone_block>], [<appliedenergistics2:material:24>, <appliedenergistics2:part:140>, <appliedenergistics2:material:22>], [<appliedenergistics2:sky_stone_block>, <ore:beeComb>, <appliedenergistics2:sky_stone_block>]]);
// me控制器 

recipes.remove(<environmentaltech:laser_core>);
// 激光核心 

<environmentaltech:void_ore_miner_cont_1>.addTooltip("§4§l仅用于合成蓝图，无法搭建虚空采矿机§6reason:§a§l激光核心已删合成");
// 激光透镜 

mods.thaumcraft.Infusion.registerRecipe("MK1", "", <modularmachinery:itemblueprint>.withTag({dynamicmachine: "modularmachinery:tier1"}), 5, [<aspect:instrumentum>*32, <aspect:vitium>*32, <aspect:humanus>*32, <aspect:machina>*32], <environmentaltech:void_ore_miner_cont_1>, [<ore:paper>, <ore:oreGold>, <ore:oreIron>, <ore:oreCopper>, <ore:oreTin>, <ore:oreSilver>, <ore:oreNickel>, <enderio:item_material:54>, <forestry:broken_bronze_pickaxe>, <forestry:broken_bronze_shovel>]);
// MK1蓝图 

recipes.remove(<enderio:item_material:52>);
recipes.addShaped(<enderio:item_material:52>*6, [[<ic2:dust:6>, <thermalfoundation:material:1027>, <ic2:dust:6>], [<thermalfoundation:material:1027>, <ore:dustObsidian>, <thermalfoundation:material:1027>], [<ic2:dust:6>, <thermalfoundation:material:1027>, <ic2:dust:6>]]);
// 灵魂框架涂料粉 

recipes.addShapeless(<thermalfoundation:material:2052>, [<ore:dustStone>, <ore:dustObsidian>]);
// 岩石 

recipes.addShapeless(<thermalfoundation:material:2050>, [<ore:dustSaltpeter>, <ore:dustStone>]);
// 狂风 

recipes.addShapeless(<thermalfoundation:material:2048>, [<ore:blockIce>, <ore:dustStone>]);
// 暴雪 

// 2020.5.23更新↓ 

recipes.remove(<thermalexpansion:machine:6>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:6>, [
	[<ore:crystalLitherite>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <ore:crystalLitherite>], 
	[<minecraft:bucket>, <minecraft:magma_cream>, <minecraft:magma_cream>, <minecraft:magma_cream>, <minecraft:bucket>], 
	[<thermalexpansion:tank>, <minecraft:magma>, <ic2:te:4>, <minecraft:magma>, <thermalexpansion:tank>], 
	[<minecraft:bucket>, <thermalexpansion:frame:64>, <minecraft:lava_bucket>, <thermalexpansion:frame>, <minecraft:bucket>], 
	[<ore:crystalLitherite>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>, <ore:crystalLitherite>]
]);
// 熔岩炉 

recipes.remove(<thermalexpansion:machine:5>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:5>, [
	[<ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>], 
	[<thaumcraft:stone_arcane>, <ore:crystalLitherite>, <immersiveengineering:tool>, <ore:crystalLitherite>, <thaumcraft:stone_arcane>], 
	[<thaumcraft:stone_arcane>, <thermalexpansion:frame>, <appliedenergistics2:condenser>, <thermalexpansion:frame:64>, <thaumcraft:stone_arcane>], 
	[<thaumcraft:stone_arcane>, <ore:crystalLitherite>, <ic2:te:43>, <ore:crystalLitherite>, <thaumcraft:stone_arcane>], 
	[<ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>, <ore:stone>]
]);
// 压缩机 

recipes.remove(<thermalexpansion:machine:3>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:3>, [
	[<modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>], 
	[<ore:reBattery>, <ore:crystalLitherite>, <ic2:te:46>, <ore:crystalLitherite>, <ore:reBattery>], 
	[<minecraft:lava_bucket>, <ore:crystalLitherite>, <ic2:te:54>, <ore:crystalLitherite>, <minecraft:lava_bucket>], 
	[<ore:reBattery>, <thermalexpansion:frame:64>, <ic2:te:46>, <thermalexpansion:frame>, <ore:reBattery>], 
	[<modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>]
]);
// 感应炉 

recipes.remove(<thermalexpansion:machine:1>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:1>, [
	[<ore:crystalLitherite>, <ore:crystalLitherite>, <appliedenergistics2:crank>, <ore:crystalLitherite>, <ore:crystalLitherite>], 
	[<ore:gravel>, <ore:gearEnergized>, <appliedenergistics2:grindstone>, <ore:gearEnergized>, <ore:gravel>], 
	[<ore:gravel>, <ore:itemFlint>, <ore:ic2Macerator>, <ore:itemFlint>, <ore:gravel>], 
	[<ore:sand>, <thermalexpansion:frame>, <ore:gearEnergized>, <thermalexpansion:frame:64>, <ore:sand>], 
	[<ore:sand>, <modularmachinery:itemmodularium>, <advanced_solar_panels:crafting:7>, <modularmachinery:itemmodularium>, <ore:sand>]
]);
// 磨粉机 

recipes.remove(<thermalexpansion:machine>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine>, [
	[<thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>], 
	[<thaumcraft:stone_arcane>, <ore:crystalLitherite>, <ore:crystalLitherite>, <ore:crystalLitherite>, <thaumcraft:stone_arcane>], 
	[<thaumcraft:stone_arcane>, <thermalexpansion:frame>, <ore:crystalLitherite>, <thermalexpansion:frame:64>, <thaumcraft:stone_arcane>], 
	[<thaumcraft:stone_arcane>, <ic2:te:46>, <ic2:te:46>, <ic2:te:46>, <thaumcraft:stone_arcane>], 
	[<thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>, <thermalfoundation:material:513>, <thaumcraft:stone_arcane>, <thaumcraft:stone_arcane>]
]);
// 红石炉 

recipes.remove(<thermalexpansion:machine:8>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:8>, [
	[<ore:crystalLitherite>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <ore:crystalLitherite>], 
	[null, <thermalexpansion:tank>, <thaumcraft:stone_arcane>, <thermalexpansion:tank>, null], 
	[null, <ore:gearEnergized>, <ic2:te:42>, <ore:gearEnergized>, null], 
	[null, <thermalexpansion:frame:64>, <minecraft:cauldron>, <thermalexpansion:frame>, null], 
	[<ore:crystalLitherite>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <ore:crystalLitherite>]
]);
// 流体转置机 

recipes.remove(<thermalexpansion:machine:15>);
mods.extendedcrafting.TableCrafting.addShaped(0, <thermalexpansion:machine:15>, [
	[<ore:crystalLitherite>, <environmentaltech:litherite_slab>, <environmentaltech:litherite_slab>, <environmentaltech:litherite_slab>, <ore:crystalLitherite>], 
	[<ore:crystalLitherite>, <thermalexpansion:frame>, <minecraft:lava_bucket>, <thermalexpansion:frame:64>, <ore:crystalLitherite>], 
	[<ore:obsidian>, <ore:gearInvar>, <ore:listAllwater>, <ore:gearInvar>, <ore:obsidian>], 
	[<ore:obsidian>, <ore:obsidian>, <minecraft:cauldron>, <ore:obsidian>, <ore:obsidian>], 
	[<modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>]
]);
// 造石机 

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
// 白嫖 VIP4 

recipes.remove(<modularmachinery:blockcontroller>);
recipes.addShaped(<modularmachinery:blockcontroller>, [[<appliedenergistics2:part:56>, <thermalexpansion:augment:432>, <appliedenergistics2:part:56>], [<modularmachinery:blockcasing>, <appliedenergistics2:controller>, <modularmachinery:blockcasing>], [<modularmachinery:blockcasing>, <modularmachinery:blockcasing>, <modularmachinery:blockcasing>]]);
// 机械控制器 

mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockenergyoutputhatch:5>, [
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
// 白嫖超级物品输出入仓 

mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockenergyoutputhatch:5>, [
	[<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
	[<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
	[<modularmachinery:blockcasing:4>, <appliedenergistics2:part:260>, <modularmachinery:blockcasing:4>]
]);
// 白嫖能源输出仓 

mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockenergyinputhatch:7>, [
	[<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
	[<enderio:item_conduit_facade>, <ore:dustCryotheum>, <enderio:item_conduit_facade>], 
	[<modularmachinery:blockcasing:4>, <appliedenergistics2:part:240>, <modularmachinery:blockcasing:4>]
]);
// 白嫖能源输入仓 

mods.inworldcrafting.FluidToItem.transform(<modularmachinery:itemblueprint>.withTag({dynamicmachine: "modularmachinery:quartz"}), <liquid:water>, [<minecraft:paper>, <minecraft:quartz>, <appliedenergistics2:material>, <appliedenergistics2:material:1>,], false);
// 石英矿机MK1蓝图 

// 2020.5.24更新 ↓ 