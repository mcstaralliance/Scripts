import mods.techreborn.chemicalReactor;

// ic2 火力发电机修复
recipes.remove(<ic2:te:3>);
recipes.addShaped(<ic2:te:3>, 
[
    [null, <ore:reBattery>, null],
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>],
    [null, <ic2:te:46>, null]
]);

// 修复 碳酸钙单元 的合成表问题
val carbonCell = <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcarbonfiber", Amount: 1000}});
val calciumCell = <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcalcium", Amount: 1000}});
val calciumcarbonateCell = <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcalciumcarbonate", Amount: 1000}});
mods.techreborn.chemicalReactor.addRecipe(calciumcarbonateCell, carbonCell * 2, calciumCell, 60, 50);

// 修复 科技重生 电路板的合成
recipes.remove(<techreborn:part:29>);
recipes.addShaped(<techreborn:part:29>, 
[
    [<techreborn:cable:5>, <techreborn:cable:5>, <techreborn:cable:5>],
    [<ore:dustRedstone>, <minecraft:iron_ingot>, <ore:dustRedstone>],
    [<techreborn:cable:5>, <techreborn:cable:5>, <techreborn:cable:5>]
]);

// 修复 能量水晶 粉碎机配方
Lib.addGrinder(<techreborn:energycrystal>,<ic2:dust:6>*3,5,2048);