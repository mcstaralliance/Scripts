import mods.gregtech.recipe.RecipeMap;

// 龙芯
assembly_line.recipeBuilder()
    .inputs(<draconicevolution:draconium_block> * 4, <avaritia:resource:4> * 2, <gregtech:meta_item_1:637> * 2, <threng:material:4>, <botania:manaresource:14>, <astralsorcery:itemperkgem> | <astralsorcery:itemperkgem:1> | <astralsorcery:itemperkgem:2>, <gregtech:meta_item_1:631>)
    .fluidInputs([<liquid:niobium_titanium> * 648, <liquid:sodium_potassium> * 500, <liquid:samarium_iron_arsenic_oxide> * 648])
    .outputs(<draconicevolution:draconic_core> * 4)
    .EUt(8000)
    .duration(2400)
    .buildAndRegister();

// 龙套
assembly_line.recipeBuilder()
    .inputs(<gregtech:gt_armor:20>, <gregtech:machine:1230>, <draconicevolution:draconium_block> * 8, <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <gregtech:meta_item_1:635>)
    .fluidInputs([<liquid:blue_steel> * 1296, <liquid:red_steel> * 1296])
    .outputs(<draconicevolution:wyvern_helm>)
    .EUt(8000)
    .duration(3600)
    .buildAndRegister();

assembly_line.recipeBuilder()
    .inputs(<gregtech:gt_armor:21>, <gregtech:machine:1230>, <draconicevolution:draconium_block> * 8, <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <gregtech:meta_item_1:635>)
    .fluidInputs([<liquid:blue_steel> * 1296, <liquid:red_steel> * 1296])
    .outputs(<draconicevolution:wyvern_chest>)
    .EUt(8000)
    .duration(3600)
    .buildAndRegister();

assembly_line.recipeBuilder()
    .inputs(<gregtech:gt_armor:22>, <gregtech:machine:1230>, <draconicevolution:draconium_block> * 8, <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <gregtech:meta_item_1:635>)
    .fluidInputs([<liquid:blue_steel> * 1296, <liquid:red_steel> * 1296])
    .outputs(<draconicevolution:wyvern_legs>)
    .EUt(8000)
    .duration(3600)
    .buildAndRegister();

assembly_line.recipeBuilder()
    .inputs(<gregtech:gt_armor:23>, <gregtech:machine:1230>, <draconicevolution:draconium_block> * 8, <draconicevolution:wyvern_core>, <draconicevolution:wyvern_energy_core>, <gregtech:meta_item_1:635>)
    .fluidInputs([<liquid:blue_steel> * 1296, <liquid:red_steel> * 1296])
    .outputs(<draconicevolution:wyvern_boots>)
    .EUt(8000)
    .duration(3600)
    .buildAndRegister();
