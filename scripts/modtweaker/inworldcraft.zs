import mods.inworldcrafting.FireCrafting;
import mods.inworldcrafting.FluidToItem;

// 砖
FireCrafting.addRecipe(<minecraft:brick>, <minecraft:clay_ball> * 2, 20);

// 量子太阳能
FluidToItem.transform(<advanced_solar_panels:machines:5>, <liquid:ic2uu_matter>, [<advanced_solar_panels:machines:4> * 8, <advanced_solar_panels:crafting:13>, <appliedenergistics2:material:48>], true);

// 海晶石碎片
FluidToItem.transform(<minecraft:prismarine_shard> * 4, <liquid:water>, [<appliedenergistics2:fluix_block>], false);

// 远古海晶石
FireCrafting.addRecipe(<quark:elder_prismarine>, <minecraft:prismarine:2>, 100);