import crafttweaker.item.IItemStack as IItemStack;
import mods.jei.JEI.removeAndHide as rh;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.oredict.IOreDict;
import crafttweaker.item.IIngredient;

recipes.remove(<enderio:item_material>);

mods.extendedcrafting.TableCrafting.addShaped(0, <enderio:item_material:0>, [
	[<ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ballConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>], 
	[<ore:ingotConstructionAlloy>, <ore:gearIron>, <appliedenergistics2:quartz_vibrant_glass>, <ore:gearGold>, <ore:ingotConstructionAlloy>], 
	[<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_vibrant_glass>, <thaumcraft:mechanism_complex>, <appliedenergistics2:quartz_vibrant_glass>, <ore:ingotConstructionAlloy>], 
	[<ore:ingotConstructionAlloy>, <ore:gearTin>, <ic2:dust:6>, <ore:gearCopper>, <ore:ingotConstructionAlloy>], 
	[<ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>]
]);

mods.inworldcrafting.FluidToItem.transform(<ore:ingotConstructionAlloy>*4, <liquid:lava>, [<minecraft:iron>*4,<extendedcrafting:material:7>*16,<ore:ingotSliver>*2], false);