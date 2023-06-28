import mods.nuclearcraft.manufactory;
import mods.nuclearcraft.alloy_furnace;

// 机器框架
alloy_furnace.addRecipe([<nuclearcraft:alloy:1> * 5, <ore:ingotLead> * 4, <nuclearcraft:part:10>]);

// 1-4 级基板
alloy_furnace.addRecipe([<ic2:crafting:3>, <ore:dustGraphite>, <nuclearcraft:part>]);
alloy_furnace.addRecipe([<nuclearcraft:part>, <nuclearcraft:alloy:1> * 4, <nuclearcraft:part:1>]);
alloy_furnace.addRecipe([<ore:ingotUranium238> * 4, <nuclearcraft:part:1>, <nuclearcraft:part:2>]);
alloy_furnace.addRecipe([<nuclearcraft:part:2>, <nuclearcraft:compound:1> * 4, <nuclearcraft:part:3>]);

// 钢制框架
alloy_furnace.addRecipe([<nuclearcraft:part:10>, <nuclearcraft:alloy:1> * 8, <nuclearcraft:part:12>]);