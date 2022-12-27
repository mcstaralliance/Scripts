import mods.gregtech.recipe.RecipeMap;

// 橡胶
extractor.recipeBuilder()
    .inputs(<gregtech:rubber_log>)
    .outputs(<gregtech:meta_dust_small:1617>)
    .fluidOutputs([<liquid:rubber> * 144])
    .EUt(32)
    .duration(100)
    .buildAndRegister();

print("extractor tweak successful");