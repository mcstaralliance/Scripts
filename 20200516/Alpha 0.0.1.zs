import mods.thaumcraft.Infusion;
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
//设备框架(热力)
recipes.remove(<enderio:item_material:51>);
recipes.addShaped(<enderio:item_material:51>, [[<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>], [<ic2:crafting:25>, <enderio:item_material:50>, <ic2:crafting:25>], [<ic2:dust:6>, <ic2:crafting:25>, <ic2:dust:6>]]);
// 机器涂料
recipes.remove(<environmentaltech:void_ore_miner_cont_1>);
recipes.addShaped(<environmentaltech:void_ore_miner_cont_1>, [[<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>], [<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>], [<avaritia:block_resource:1>, <avaritia:block_resource:1>, <avaritia:block_resource:1>]]);
//  一级虚空采矿控制器
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
