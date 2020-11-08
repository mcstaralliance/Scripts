recipes.addShaped(<modularmachinery:blockcasing:3>, 
    [[<appliedenergistics2:crank>, <appliedenergistics2:crank>, <appliedenergistics2:crank>], 
    [<appliedenergistics2:crank>, <extrautils2:ingredients:1>, <appliedenergistics2:crank>],
    [<appliedenergistics2:crank>, <appliedenergistics2:crank>, <appliedenergistics2:crank>]]
);

recipes.addShaped(<modularmachinery:blockcasing:1>, 
    [[<modularmachinery:blockcasing>, <tconstruct:shard>.withTag({Material: "paper"}), <modularmachinery:blockcasing>], 
    [<tconstruct:shard>.withTag({Material: "paper"}), <tconstruct:shard>.withTag({Material: "paper"}), <tconstruct:shard>.withTag({Material: "paper"})],
    [<modularmachinery:blockcasing>, <tconstruct:shard>.withTag({Material: "paper"}), <modularmachinery:blockcasing>]]
);

recipes.addShaped(<modularmachinery:blockfluidoutputhatch:2>, 
    [[<modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>, <modularmachinery:itemmodularium>], 
    [<modularmachinery:itemmodularium>, <minecraft:bucket>, <modularmachinery:itemmodularium>],
    [<modularmachinery:itemmodularium>, null, <modularmachinery:itemmodularium>]]
);

mods.modularmachinery.RecipeBuilder.newBuilder("Lava_stove", "alloy_stove", 6000)
    .addFluidOutput(<liquid:lava>*1000)
    .addItemInput(<contenttweaker:grey_matter>*4)
    .build();

recipes.remove(<modularmachinery:itemmodularium>);
recipes.addShaped(<modularmachinery:itemmodularium>, 
    [[<ore:ingotGold>, <ore:ingotGold>, <ore:ingotGold>], 
    [<ore:ingotGold>, null, <minecraft:redstone>], 
    [<minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>]]
);
