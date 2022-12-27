import mods.gregtech.recipe.RecipeMap;

// 门瑞欧结晶块
fluid_solidifier.recipeBuilder()
    .inputs(<gregtech:meta_item_1:18>)
    .fluidInputs([<liquid:menrilresin> * 1000])
    .outputs(<integrateddynamics:crystalized_menril_block>)
    .EUt(32)
    .duration(200)
    .buildAndRegister();
