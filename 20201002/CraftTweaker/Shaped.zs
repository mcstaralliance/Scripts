import crafttweaker.event.IBlockEvent;

var myGrey = <contenttweaker:grey_matter>;
var myBrown = <contenttweaker:brown_matter>;
var myGreen = <contenttweaker:green_matter>;
var myYellow = <contenttweaker:yellow_matter>;
var myBlue = <contenttweaker:blue_matter>;
var myRed = <contenttweaker:red_matter>;
var myBlack = <contenttweaker:black_matter>;

// 2×2合成
recipes.addShaped(<minecraft:log>, 
    [[<contenttweaker:brown_matter>, <contenttweaker:blue_matter>], 
    [<contenttweaker:blue_matter>, <contenttweaker:brown_matter>]]
);
// 橡胶树苗
recipes.addShaped(<ic2:sapling>, 
    [[<contenttweaker:grey_matter>, <contenttweaker:brown_matter>], 
    [<minecraft:sapling>, <contenttweaker:green_matter>]]
);
// 圆石
recipes.addShaped(<minecraft:cobblestone> * 2, 
    [[<ic2:dust:15>, <ic2:dust:15>], 
    [<ic2:dust:15>, <ic2:dust:15>]]
);
// 富集圆石
recipes.addShaped(<contenttweaker:enriched_cobblestone>, 
    [[myGrey, myGrey], 
    [myBrown, myGreen]]
);
// 白桦树苗
recipes.addShaped(<minecraft:sapling:2>, 
    [[<ic2:dust:15>, myGrey], 
    [myBlack, <contenttweaker:green_matter>]]
);
// 沙子
recipes.addShaped(<minecraft:sand> * 4, 
    [[<ic2:dust:15>, <minecraft:flint>], 
    [<minecraft:stone>, <minecraft:planks:2>]]
);
// 熔岩粘滑泥泞
recipes.addShaped(<tconstruct:soil:5> * 4, 
    [[<ore:gunpowder>, <ore:dustRedstone>], 
    [<minecraft:sand>, <contenttweaker:red_matter>]]
);
// 矿渣
recipes.addShaped(<immersiveengineering:material:7> * 4, 
    [[<minecraft:flint>, <contenttweaker:enriched_cobblestone>], 
    [<contenttweaker:enriched_cobblestone>, <minecraft:flint>]]
);
// 3×3合成
// 石台阶
recipes.addShaped(<minecraft:stone_slab> * 6, 
    [[null,null,null], 
    [null,null,null], 
    [<minecraft:planks:2>, <contenttweaker:enriched_cobblestone>, <minecraft:planks:2>]]
);
// 砂砾
recipes.addShaped(<minecraft:gravel> * 8, 
    [[myYellow, myBlack, myRed], 
    [myBlue, <contenttweaker:enriched_cobblestone>, myGreen], 
    [myBrown, <minecraft:planks:2>, myGrey]]
);
// 泥土
recipes.addShaped(<minecraft:dirt>, 
    [[myBrown, myBrown, myBrown], 
    [myBrown, <minecraft:gravel>, myGreen], 
    [myGreen, myGreen, myGreen]]
);
// 设备框架
recipes.remove(<thermalexpansion:frame:64>);
recipes.addShaped(<thermalexpansion:frame:64>, 
    [[<ore:ingotTin>, <tconstruct:clear_glass>, <ore:ingotTin>], 
    [<tconstruct:clear_glass>, <forestry:impregnated_casing>, <tconstruct:clear_glass>], 
    [<ore:ingotTin>, <tconstruct:clear_glass>, <ore:ingotTin>]]
);
// 灵魂协调涂抹粉末
recipes.remove(<enderio:item_material:52>);
recipes.addShaped(<enderio:item_material:52> * 2, 
    [[<ore:dyeBrown>, <ore:dustNetherQuartz>, <ore:dyeBrown>], 
    [<ore:dustNetherQuartz>, <ore:dyeBlack>, <ore:dustNetherQuartz>], 
    [<ore:dyeBrown>, <ore:dustNetherQuartz>, <ore:dyeBrown>]]
);
// 红石接收线圈
recipes.remove(<thermalfoundation:material:513>);
recipes.addShaped(<thermalfoundation:material:513> * 2, 
    [[<ore:dustRedstone>, <ic2:crafting:13>, <ore:nuggetGold>], 
    [<ic2:crafting:13>, <ore:dustRedstone>, <ic2:crafting:13>], 
    [<ore:nuggetGold>, <ic2:crafting:13>, <ore:dustRedstone>]]
);
// 彩虹发电机
recipes.remove(<extrautils2:rainbowgenerator>);
recipes.addShaped(<extrautils2:rainbowgenerator>, 
    [[<advanced_solar_panels:machines:5>, <extrautils2:rainbowgenerator:2>, <draconicevolution:chaotic_core>], 
    [<extrautils2:compressedcobblestone:7>, <extrautils2:decorativesolid:8>, <extrautils2:ingredients:16>], 
    [<cuisine:food:16>, <extrautils2:rainbowgenerator:1>, <extrautils2:opinium:8>]]
);
// 石英
recipes.addShaped(<minecraft:quartz>, 
    [[<contenttweaker:grey_matter>, <contenttweaker:grey_matter>, <contenttweaker:grey_matter>], 
    [<contenttweaker:grey_matter>, <extrautils2:decorativesolid:2>, <contenttweaker:grey_matter>], 
    [<contenttweaker:grey_matter>, <contenttweaker:grey_matter>, <contenttweaker:grey_matter>]]
);
