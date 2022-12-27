import mods.gregtech.recipe.RecipeMap;

// 箱子升级木->铁
assembler.recipeBuilder()
    .inputs(<ore:plankWood>, <ore:plateIron> * 8)
    .outputs(<ironchest:wood_iron_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级木->铜
assembler.recipeBuilder()
    .inputs(<ore:plankWood>, <ore:plateCopper> * 8)
    .outputs(<ironchest:wood_copper_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级铜->铁
assembler.recipeBuilder()
    .inputs(<ore:ingotCopper>, <ore:plateIron> * 4)
    .outputs(<ironchest:copper_iron_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级铜->银
assembler.recipeBuilder()
.inputs(<ore:ingotCopper>, <ore:plateSilver> * 4)
    .outputs(<ironchest:copper_silver_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级银->金
assembler.recipeBuilder()
    .inputs(<ore:ingotSilver>, <ore:plateGold> * 8)
    .outputs(<ironchest:silver_gold_chest_upgrade> * 2)
    .EUt(28)
    .duration(200)
    .buildAndRegister();

// 箱子升级铁->金
assembler.recipeBuilder()
    .inputs(<ore:ingotIron>, <ore:plateGold> * 8)
    .outputs(<ironchest:iron_gold_chest_upgrade> * 2)
    .EUt(28)
    .duration(200)
    .buildAndRegister();

// 箱子升级金->钻石
assembler.recipeBuilder()
    .inputs(<minecraft:gold_ingot>, <ore:plateDiamond> * 8)
    .fluidInputs([<liquid:water> * 1000])
    .outputs(<ironchest:gold_diamond_chest_upgrade> * 2)
    .EUt(32)
    .duration(200)
    .buildAndRegister();

print("-2");

// 树场
assembler.recipeBuilder()
    .inputs([<gregtech:machine_casing:2>, <ore:craftingFurnace> * 3, <minecraft:sapling:4>, <minecraft:sapling:1>, <minecraft:sapling:2>, <minecraft:sapling:3>, <minecraft:sapling>, <minecraft:sapling:5>, <teastory:soil_detection_meter>])
    .outputs(<cyclicmagic:block_forester>)
    .EUt(32)
    .duration(200)
    .buildAndRegister();

print("-1");

// 简易机器框架
assembler.recipeBuilder()
    .inputs(<gregtech:machine_casing:3>, <ore:dustBedrock>)
    .outputs(<enderio:item_material>)
    .EUt(128)
    .duration(400)
    .buildAndRegister();

print("0");

// 时间之瓶
assembler.recipeBuilder()
    .inputs(<minecraft:clock>, <botania:manabottle>, <minecraft:sponge>)
    .fluidInputs([<liquid:water> * 10000])
    .outputs(<randomthings:timeinabottle>.withTag({timeData: {storedTime: 0}}))
    .EUt(256)
    .duration(400)
    .buildAndRegister();

// 手术仓
assembler.recipeBuilder()
    .inputs(<ore:plateIron> * 7, <ore:craftingToolBlade>, <minecraft:iron_door>)
    .fluidInputs([<liquid:ethanol> * 1296])
    .outputs(<cyberware:surgery_chamber>)
    .EUt(64)
    .duration(400)
    .buildAndRegister();

print("1");

// 机器框架
assembler.recipeBuilder()
    .inputs(<gregtech:machine_casing>, <ore:foilSteel>)
    .outputs(<rftools:machine_frame>)
    .EUt(16)
    .duration(400)
    .buildAndRegister();

print("2");

// 机器框架(TE)
assembler.recipeBuilder()
    .inputs(<ore:paneGlass> * 4, <ore:plateIron> * 4)
    .fluidInputs([<liquid:redstone> * 648])
    .outputs(<thermalexpansion:frame>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

print("3");

// 设备框架
assembler.recipeBuilder()
    .inputs(<ore:paneGlass> * 4, <ore:plateTin> * 4)
    .fluidInputs([<liquid:redstone> * 648])
    .outputs(<thermalexpansion:frame:64>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

print("4");

// 空白扫描模块
assembler.recipeBuilder()
    .inputs(<ore:paper> * 2, <ore:nuggetGold> * 4, <ore:circuitLv>)
    .fluidInputs([<liquid:dye_green> * 288])
    .outputs(<scannable:module_blank>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

print("assembler tweak successful");