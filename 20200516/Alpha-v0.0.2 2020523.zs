import mods.thaumcraft.Infusion;
import mods.thaumcraft.ArcaneWorkbench;
import thaumcraft.aspect.CTAspectStack;
import crafttweaker.item.IItemTransformer;

// 32*sixaspect = <aspect:Terra>*32, <aspect:ignis>*32, <aspect:aqua>*32, <aspect:ordo>*32, <aspect:perditio>;
//2020.5.17更新
recipes.remove(<minecraft:dirt:1>);
recipes.addShaped(<minecraft:dirt:1>*4, [[<minecraft:sand>, <ore:cobblestone>, <minecraft:gravel>], [<ore:cobblestone>, <forestry:ash>, <ore:cobblestone>], [<minecraft:gravel>, <ore:cobblestone>, <minecraft:sand>]]);
//砂土
recipes.remove(<minecraft:furnace>);
recipes.addShaped(<minecraft:furnace>, [[<minecraft:dirt:1>, <minecraft:dirt:1>, <minecraft:dirt:1>], [<minecraft:dirt:1>, <minecraft:crafting_table>, <minecraft:dirt:1>], [<minecraft:dirt:1>, <ore:cobblestone>, <minecraft:dirt:1>]]);
//熔炉
recipes.addShaped(<minecraft:crafting_table>, [[<minecraft:dirt>, <ore:plankWood>], [<minecraft:gravel>, <minecraft:sand>]]);
recipes.remove(<minecraft:crafting_table>);
//工作台
recipes.remove(<extendedcrafting:handheld_table>);
recipes.addShaped(<extendedcrafting:handheld_table>, [[null, <minecraft:crafting_table>], [<immersiveengineering:material>, null]]);
//手持工作台
recipes.remove(<ic2:crafting:1>);
recipes.addShaped(<ic2:crafting:1>*2, [[<immersiveengineering:material:20>, <immersiveengineering:material:20>, <immersiveengineering:material:20>], [<immersiveengineering:material:20>, <ore:plateIron>, <immersiveengineering:material:20>], [<ore:dustRedstone>, <ore:itemRubber>, <ore:dustRedstone>]]);
//电路板
recipes.remove(<extendedcrafting:frame>);
recipes.addShaped(<extendedcrafting:frame>*2, [[<extendedcrafting:material:3>, <enderio:block_fused_quartz>, <extendedcrafting:material:3>,], [<enderio:block_fused_quartz>, <extendedcrafting:trimmed>, <enderio:block_fused_quartz>,], [<extendedcrafting:material:3>, <enderio:block_fused_quartz>, <extendedcrafting:material:3>,]]);
//黑铁框架
recipes.remove(<thermalexpansion:frame>);
recipes.addShaped(<thermalexpansion:frame>, [[<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotConstructionAlloy>], [<appliedenergistics2:quartz_glass>, <enderio:item_material:11>, <appliedenergistics2:quartz_glass>], [<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotConstructionAlloy>]]);
//机器框架(热力)
recipes.remove(<thermalexpansion:frame:64>);
recipes.addShaped(<thermalexpansion:frame:64>, [[<ore:ingotRedstoneAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotRedstoneAlloy>], [<appliedenergistics2:quartz_glass>, <enderio:item_material:11>, <appliedenergistics2:quartz_glass>], [<ore:ingotRedstoneAlloy>, <appliedenergistics2:quartz_glass>, <ore:ingotRedstoneAlloy>]]);
//设备框架(热力)
recipes.remove(<enderio:item_material:51>);
recipes.addShaped(<enderio:item_material:51>, [[<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>], [<ic2:crafting:25>, <enderio:item_material:50>, <ic2:crafting:25>], [<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>]]);
//机器涂料
recipes.remove(<environmentaltech:void_ore_miner_cont_1>);
recipes.addShaped(<environmentaltech:void_ore_miner_cont_1>, [[<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>], [<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>], [<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>]]);
//一级虚空采矿控制器
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
//一级结构方块

//2020.5.22更新
<environmentaltech:structure_frame_2>.addTooltip("§6请使用注魔合成");
recipes.remove(<environmentaltech:structure_frame_2>);
mods.thaumcraft.Infusion.registerRecipe("tier2", "", <environmentaltech:structure_frame_2>, 3,[<aspect:aer>*8, <aspect:ignis>*8], <environmentaltech:structure_frame_1>, [<extendedcrafting:material:9>, <extendedcrafting:material:9>, <extendedcrafting:material:9>, <thaumicenergistics:coalescence_core>, <thaumicenergistics:diffusion_core>, <thaumicenergistics:essentia_component_4k>]);
//二级结构方块
<environmentaltech:structure_frame_3>.addTooltip("§6请使用注魔合成");
recipes.remove(<environmentaltech:structure_frame_3>);
mods.thaumcraft.Infusion.registerRecipe("tier3", "", <environmentaltech:structure_frame_3>, 5,[<aspect:aer>*32, <aspect:ignis>*32], <environmentaltech:structure_frame_2>, [<ore:blockLitherite>, <draconicevolution:particle_generator>, <minecraft:ender_eye>, <minecraft:ender_eye>, <minecraft:nether_star>, <environmentaltech:modifier_null>, <environmentaltech:structure_panel>]);
//三级结构方块
mods.extendedcrafting.CombinationCrafting.addRecipe(<draconicevolution:draconium_block:1> * 4, 25000, 4000, <extendedcrafting:material:10>, [<ore:blockDraconium>, <ore:blockDraconium>, <ore:blockDraconium>, <ore:blockDraconium>]);
//觉醒龙块
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:infusion_matrix>);
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("I", "", 1, [<aspect:aqua>*16, <aspect:ignis>*16, <aspect:terra>*16, <aspect:aer>*16, <aspect:ordo>*16, <aspect:perditio>*16], <thaumcraft:infusion_matrix>, [[<thaumcraft:salis_mundus>, <thaumcraft:plate>, <thaumcraft:salis_mundus>], [<thaumcraft:plate>, <minecraft:tnt>, <thaumcraft:plate>], [<thaumcraft:salis_mundus>, <thaumcraft:plate>, <thaumcraft:salis_mundus>]]);
//注魔矩阵
recipes.remove(<appliedenergistics2:interface>);
recipes.addShaped(<appliedenergistics2:interface>, [[<appliedenergistics2:quartz_glass>, <thermaldynamics:duct_32>, <appliedenergistics2:quartz_glass>], [<ore:pearlFluix>, <ore:crystalPureNetherQuartz>, <ore:pearlFluix>], [<appliedenergistics2:quartz_glass>, <thermaldynamics:duct_32>, <appliedenergistics2:quartz_glass>]]);
//me接口
recipes.remove(<appliedenergistics2:controller>);
recipes.addShaped(<appliedenergistics2:controller>, [[<appliedenergistics2:sky_stone_block>, <appliedenergistics2:material:23>, <appliedenergistics2:sky_stone_block>], [<appliedenergistics2:material:24>, <appliedenergistics2:part:140>, <appliedenergistics2:material:22>], [<appliedenergistics2:sky_stone_block>, <ore:beeComb>, <appliedenergistics2:sky_stone_block>]]);
//me控制器
recipes.remove(<environmentaltech:laser_core>);
//激光核心
<environmentaltech:void_ore_miner_cont_1>.addTooltip("§4§l仅用于合成蓝图，无法搭建虚空采矿机§6reason:§a§l激光核心已删合成");
//激光透镜
mods.thaumcraft.Infusion.registerRecipe("MK1", "", <modularmachinery:itemblueprint>.withTag({dynamicmachine: "modularmachinery:tier1"}), 5, [<aspect:instrumentum>*32, <aspect:vitium>*32, <aspect:humanus>*32, <aspect:machina>*32], <environmentaltech:void_ore_miner_cont_1>, [<ore:paper>, <ore:oreGold>, <ore:oreIron>, <ore:oreCopper>, <ore:oreTin>, <ore:oreSilver>, <ore:oreNickel>, <enderio:item_material:54>, <forestry:broken_bronze_pickaxe>, <forestry:broken_bronze_shovel>]);
//MK1蓝图
recipes.remove(<enderio:item_material:52>);
recipes.addShaped(<enderio:item_material:52>*6, [[<ic2:dust:6>, <thermalfoundation:material:1027>, <ic2:dust:6>], [<thermalfoundation:material:1027>, <ore:dustObsidian>, <thermalfoundation:material:1027>], [<ic2:dust:6>, <thermalfoundation:material:1027>, <ic2:dust:6>]]);
//灵魂框架涂料粉
recipes.addShapeless(<thermalfoundation:material:2052>, [<ore:dustStone>, <ore:dustObsidian>]);
//岩石棒棒！
recipes.addShapeless(<thermalfoundation:material:2050>, [<ore:dustSaltpeter>, <ore:dustStone>]);
//狂风棒棒！
recipes.addShapeless(<thermalfoundation:material:2048>, [<ore:blockIce>, <ore:dustStone>]);
//暴雪棒棒！


//2020.5.23更新
