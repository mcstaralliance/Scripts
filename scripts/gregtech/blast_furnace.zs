import mods.gregtech.recipe.RecipeMap;

// 基岩粉
electric_blast_furnace.recipeBuilder()
    .inputs(<ore:dustObsidian>, <gregtech:meta_item_1:461>.withTag({Configuration: 6}))
    .fluidInputs([<liquid:astralsorcery.liquidstarlight> * 250])
    .outputs(<enderio:item_material:20> * 2)
    .duration(200)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 通量控制器
electric_blast_furnace.recipeBuilder()
    .inputs(<fluxnetworks:fluxblock>, <fluxnetworks:fluxcore>, <gregtech:meta_item_1:281>)
    .fluidInputs([<liquid:titanium_tetrachloride> * 500])
    .outputs(<fluxnetworks:fluxcontroller> * 4)
    .duration(200)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();
