import mods.gregtech.recipe.RecipeMap;

// 橡胶
extractor.recipeBuilder()
    .inputs(<gregtech:planks> * 2)
    .outputs(<gregtech:meta_dust_small:1617>)
    .fluidOutputs([<liquid:rubber> * 72])
    .EUt(16)
    .duration(40)
    .buildAndRegister();

// 小堆中子粉
extractor.recipeBuilder()
    .inputs(<avaritia:block_resource>)
    .outputs(<gregtech:meta_dust_small:127>)
    .EUt(191981)
    .duration(100)
    .buildAndRegister();
