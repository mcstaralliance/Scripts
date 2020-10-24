
recipes.addShaped(<modularmachinery:blockcasing:3>, 
    [[<appliedenergistics2:crank>, <appliedenergistics2:crank>, <appliedenergistics2:crank>], 
    [<appliedenergistics2:crank>, <extrautils2:ingredients:1>, <appliedenergistics2:crank>],
    [<appliedenergistics2:crank>, <appliedenergistics2:crank>, <appliedenergistics2:crank>]]
);

mods.modularmachinery.RecipeBuilder.newBuilder("Lava_stove", "alloy_stove", 6000)
    .addFluidOutput(<liquid:lava>*1000)
    .addItemInput(<contenttweaker:grey_matter>*4)
    .build();