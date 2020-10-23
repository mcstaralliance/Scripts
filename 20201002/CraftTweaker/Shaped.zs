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
