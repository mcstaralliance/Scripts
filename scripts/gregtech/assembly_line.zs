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

// LuV电动泵
assembly_line.recipeBuilder()
    .inputs(<gregtech:meta_item_1:132>, <gregtech:fluid_pipe_small:296>, <gregtech:meta_plate:2520> * 2, <gregtech:meta_screw:2520> * 8, <gregtech:meta_ring:1004> * 4, <gregtech:meta_rotor:2520>, <gregtech:cable_single:296> * 2)
    .fluidInputs([<liquid:soldering_alloy> * 144, <liquid:lubricant> * 250])
    .outputs(<gregtech:meta_item_1:147>)
    .EUt(6000)
    .duration(600)
    .buildAndRegister();

// ZPM电动泵
assembly_line.recipeBuilder()
    .inputs(<gregtech:meta_item_1:133>, <gregtech:fluid_pipe_normal:1010>, <gregtech:meta_plate:344> * 2, <gregtech:meta_screw:344> * 8, <gregtech:meta_ring:1004> * 8, <gregtech:meta_rotor:344>, <gregtech:cable_single:334> * 2)
    .fluidInputs([<liquid:soldering_alloy> * 288, <liquid:lubricant> * 500])
    .outputs(<gregtech:meta_item_1:148>)
    .EUt(24000)
    .duration(600)
    .buildAndRegister();

// UV电动泵
assembly_line.recipeBuilder()
    .inputs(<gregtech:meta_item_1:134>, <gregtech:fluid_pipe_large:124>, <gregtech:meta_plate:128> * 2, <gregtech:meta_screw:128> * 8, <gregtech:meta_ring:1004> * 16, <gregtech:meta_rotor:2042>, <gregtech:cable_single:338> * 2)
    .fluidInputs([<liquid:soldering_alloy> * 576, <liquid:lubricant> * 1000, <liquid:naquadria> * 576])
    .outputs(<gregtech:meta_item_1:149>)
    .EUt(100000)
    .duration(600)
    .buildAndRegister();
 
