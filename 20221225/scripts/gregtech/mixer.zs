import mods.gregtech.recipe.RecipeMap;

// 工业涂料
mixer.recipeBuilder()
    .inputs(<ore:dustLapis> * 4, <gregtech:meta_dust:339> * 4)
    .fluidInputs([<liquid:dye_black> * 288])
    .outputs(<enderio:item_material:51> * 8)
    .EUt(32)
    .duration(100)
    .buildAndRegister();

// 炼狱书架
mixer.recipeBuilder()
    .inputs(<ore:bookshelf>, <botania:rune:8>, <botania:blacklotus>, <botania:manaresource:4>, <touhou_little_maid:power_point> * 8)
    .fluidInputs([<liquid:xpjuice> * 2000])
    .outputs(<apotheosis:hellshelf>)
    .EUt(128)
    .duration(400)
    .buildAndRegister();