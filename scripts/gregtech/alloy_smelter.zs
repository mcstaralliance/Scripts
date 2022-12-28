import mods.gregtech.recipe.RecipeMap;

// 聚合粘土
alloy_smelter.recipeBuilder()
    .inputs(<gregtech:meta_ingot:2>, <minecraft:clay>)
    .outputs(<deepmoblearning:polymer_clay> * 16)
    .EUt(128)
    .duration(200)
    .buildAndRegister();