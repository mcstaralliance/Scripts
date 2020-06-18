import crafttweaker.item.IItemStack as IItemStack;
import mods.jei.JEI.removeAndHide as rh;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.oredict.IOreDict;
import crafttweaker.item.IIngredient;

recipes.remove(<enderio:item_material>);

// 机器框架模具 中间是精密奥术装置 外面铁合金
mods.extendedcrafting.TableCrafting.addShaped(0, <enderio:item_material:0>, [
    [<ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ballConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>], 
    [<ore:ingotConstructionAlloy>, <ore:gearIron>, <appliedenergistics2:quartz_vibrant_glass>, <ore:gearGold>, <ore:ingotConstructionAlloy>], 
    [<ore:ingotConstructionAlloy>, <appliedenergistics2:quartz_vibrant_glass>, <thaumcraft:mechanism_complex>, <appliedenergistics2:quartz_vibrant_glass>, <ore:ingotConstructionAlloy>], 
    [<ore:ingotConstructionAlloy>, <ore:gearTin>, <ic2:dust:6>, <ore:gearCopper>, <ore:ingotConstructionAlloy>], 
    [<ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>, <ore:ingotConstructionAlloy>]
]);

// 铁合金合成 合金锭*4 + 流明精华*16 = 4铁合金
mods.inworldcrafting.FluidToItem.transform(<ore:ingotConstructionAlloy>*4, <liquid:lava>, [<ic2:ingot>*4,<extendedcrafting:material:7>*16,<ore:ingotSliver>*2], false);
