import mods.gregtech.recipe.RecipeMap;

// 工业涂料
mixer.recipeBuilder()
    .inputs(<ore:dustLapis> * 4, <gregtech:meta_dust:339> * 4)
    .fluidInputs([<liquid:dye_black> * 288])
    .outputs(<enderio:item_material:51> * 8)
    .EUt(32)
    .duration(100)
    .buildAndRegister();
