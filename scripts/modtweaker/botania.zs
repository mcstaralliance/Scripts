import mods.botaniatweaks.Agglomeration;
import mods.botania.RuneAltar;

// ME 控制器
Agglomeration.addRecipe(<appliedenergistics2:controller>,
    [<botania:manaresource:14>, <ic2:crafting:30>, <appliedenergistics2:material:24>, <advanced_solar_panels:crafting:9>, <appliedenergistics2:material:12> * 4, <appliedenergistics2:smooth_sky_stone_block> * 4], 50000);

// 终极混合太阳能
Agglomeration.addRecipe(<advanced_solar_panels:machines:4>,
    [ultraCoin, YUS_APPROVAL, <botania:storage:1>, <tconstruct:metal:2>, <ic2:crafting:4> * 4, <ic2:crafting:2> * 4, <appliedenergistics2:material:12> * 4, <botania:manaresource:14> * 4, <appliedenergistics2:material:38>], 1000000);

// 纳米套
RuneAltar.addRecipe(<ic2:nano_helmet>, [<ic2:resource:13>, <ic2:nightvision_goggles>, <botania:elementiumhelm>, <ore:energyCrystal>, commonCoin], 200000);
RuneAltar.addRecipe(<ic2:nano_chestplate>, [<ic2:resource:13>, <ic2:crafting:34>, <avaritia:resource>, <botania:elementiumchest>, <ore:energyCrystal>, advancedCoin], 200000);
RuneAltar.addRecipe(<ic2:nano_leggings>, [<ic2:resource:13>, <minecraft:nether_star>, <avaritia:resource>, <botania:elementiumlegs>, <ore:energyCrystal>, commonCoin], 200000);
RuneAltar.addRecipe(<ic2:nano_boots>, [<ic2:resource:13>, <minecraft:end_rod>, <avaritia:resource>, <botania:elementiumboots>, <ore:energyCrystal>, commonCoin], 200000);
