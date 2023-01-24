import mods.gregtech.recipe.RecipeMap;

// 碳酸氢钠粉
chemical_reactor.recipeBuilder()
    .inputs(<gregtech:meta_dust:353> * 6)
    .fluidInputs([<liquid:carbon_dioxide> * 1000, <liquid:water> * 1000])
    .outputs(<gregtech:meta_dust:366> * 12)
    .EUt(32)
    .duration(100)
    .buildAndRegister();