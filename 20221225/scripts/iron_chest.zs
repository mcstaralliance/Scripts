import mods.gregtech.recipe.RecipeMap;

// 箱子升级木->铁
Assembler.recipeBuilder()
    .inputs([<ore:plankWood>, <ore:plateIron> * 8])
    .outputs(<ironchest:wood_iron_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级木->铜
Assembler.recipeBuilder()
    .inputs([<ore:plankWood>, <ore:plateCopper> * 8])
    .outputs(<ironchest:wood_copper_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级铜->铁
Assembler.recipeBuilder()
    .inputs([<ore:ingotCopper>, <ore:plateIron> * 4])
    .outputs(<ironchest:copper_iron_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级铜->银
Assembler.recipeBuilder()
    .inputs([<ore:ingotCopper>, <ore:plateSilver> * 4])
    .outputs(<ironchest:copper_silver_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级银->金
Assembler.recipeBuilder()
    .inputs([<ore:ingotSilver>, <ore:plateGold> * 8])
    .outputs(<ironchest:copper_silver_chest_upgrade> * 2)
    .EUt(28)
    .duration(200)
    .buildAndRegister();

// 箱子升级铁->金
Assembler.recipeBuilder()
    .inputs([<ore:ingotIron>, <ore:plateGold> * 8])
    .outputs(<ironchest:copper_silver_chest_upgrade> * 2)
    .EUt(28)
    .duration(200)
    .buildAndRegister();

// 箱子升级金->钻石
Assembler.recipeBuilder()
    .inputs([<minecraft:gold_ingot>, <ore:plateDiamond> * 8])
    .fluidInputs([<liquid:water> * 1000])
    .outputs(<ironchest:copper_silver_chest_upgrade> * 2)
    .EUt(32)
    .duration(200)
    .buildAndRegister();
