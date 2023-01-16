import mods.gregtech.recipe.RecipeMap;

// 水晶石
autoclave.recipeBuilder()
    .inputs(<gregtech:meta_dust:32001> * 8)
    .fluidInputs([<liquid:air> * 5000])
    .outputs(<astralsorcery:itemrockcrystalsimple>.withTag({astralsorcery: {crystalProperties: {collectiveCapability: 35, size: 411, fract: 0, purity: 69, sizeOverride: -1}}}))
    .EUt(64)
    .duration(400)
    .buildAndRegister();

// 空气
autoclave.recipeBuilder()
    .inputs(<ore:logWood>)
    .fluidInputs([<liquid:water> * 500])
    .outputs(<gregtech:meta_dust_tiny:1617>)
    .fluidOutputs([<liquid:air> * 2500])
    .EUt(32)
    .duration(40)
    .buildAndRegister();
