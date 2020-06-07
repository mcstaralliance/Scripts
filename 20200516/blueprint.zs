import crafttweaker.item.IItemStack as IItemStack;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.oredict.IOreDict;
import crafttweaker.item.IIngredient;

mods.inworldcrafting.FluidToItem.transform(<modularmachinery:itemblueprint>.withTag({dynamicmachine: "modularmachinery:dragon"}), <liquid:flux_goo>, [<minecraft:paper>,<draconicevolution:awakened_core>], true);
//蓝图

mods.extendedcrafting.TableCrafting.addShaped(0, <modularmachinery:blockfluidinputhatch:7>, [
	[<ore:chest>, <ore:blockHopper>, <ore:chest>], 
	[<modularmachinery:blockcasing:4>, <ore:blockGold>, <modularmachinery:blockcasing:4>], 
	[<modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>, <modularmachinery:blockcasing:4>]
]);
//真空流体输入