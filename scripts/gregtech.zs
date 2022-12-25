import mods.gregtech.recipe.RecipeMap;

// 树场
Assembler.recipeBuilder()
    .inputs([<gregtech:machine_casing:2>, <ore:craftingFurnace> * 3, <minecraft:sapling:4>, <minecraft:sapling:1>, <minecraft:sapling:2>, <minecraft:sapling:3>, <minecraft:sapling>, <minecraft:sapling:5>, <teastory:soil_detection_meter>])
    .outputs(<cyclicmagic:block_forester>)
    .EUt(32)
    .duration(200)
    .buildAndRegister();

// 基岩粉
BlastFurnace.recipeBuilder()
    .inputs([<ore:dustObsidian>, <gregtech:meta_item_1:461>.withTag({Configuration: 6})])
    .fluidInputs([<liquid:astralsorcery.liquidstarlight> * 250])
    .outputs([<enderio:item_material:20> * 2])
    .duration(200)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 简易机器框架
Assembler.recipeBuilder()
    .inputs([<gregtech:machine_casing:3>, <ore:dustBedrock>])
    .outputs(<enderio:item_material>)
    .EUt(128)
    .duration(400)
    .buildAndRegister();

// 工业涂料
Mixer.recipeBuilder()
    .inputs([<ore:dustLapis> * 4, <gregtech:meta_dust:339> * 4])
    .fluidInputs([<liquid:dye_black> * 288])
    .outputs(<enderio:item_material:51> * 8)
    .EUt(32)
    .duration(100)
    .buildAndRegister();

// 门瑞欧结晶块
FluidSolidifier.recipeBuilder()
    .inputs([<gregtech:meta_item_1:18>])
    .fluidInputs([<liquid:menrilresin> * 1000])
    .outputs(<integrateddynamics:crystalized_menril_block>)
    .EUt(32)
    .duration(200)
    .buildAndRegister();

// 时间之瓶
Assembler.recipeBuilder()
    .inputs([<minecraft:clock>, <botania:manabottle>, <cookingforblockheads:sink>, <minecraft:sponge>])
    .outputs(<randomthings:timeinabottle>)
    .EUt(256)
    .duration(400)
    .buildAndRegister();

// 手术仓
Assembler.recipeBuilder()
    .inputs([<ore:plateIron> * 7, <ore:craftingToolBlade>, <minecraft:iron_door>])
    .fluidInputs([<liquid:ethanol> * 1296])
    .outputs(<cyberware:surgery_chamber>)
    .EUt(64)
    .duration(400)
    .buildAndRegister();

// 机器框架(RFTools)
Assembler.recipeBuilder()
    .inputs([<gregtech:machine_casing>, <gregtech:meta_foil:324>])
    .outputs(<rftools:machine_frame>)
    .EUt(16)
    .duration(400)
    .buildAndRegister();

// 通量控制器
BlastFurnace.recipeBuilder()
    .inputs([<fluxnetworks:fluxblock>, <fluxnetworks:fluxcore>, <fluxnetworks:flux>, <gregtech:meta_item_1:281>])
    .fluidInputs([<liquid:titanium_tetrachloride> * 500])
    .outputs([<enderio:item_material:20> * 2])
    .duration(200)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 机器框架(TE) <liquid:redstone>
Assembler.recipeBuilder()
    .inputs([<ore:paneGlass> * 4, <ore:plateIron> * 4])
    .fluidInputs([<liquid:redstone> * 648])
    .outputs(<thermalexpansion:frame>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

// 设备框架(TE) <liquid:redstone>
Assembler.recipeBuilder()
    .inputs([<ore:paneGlass> * 4, <ore:plateTin> * 4])
    .fluidInputs([<liquid:redstone> * 648])
    .outputs(<thermalexpansion:frame:64>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

// 空白扫描模块
Assembler.recipeBuilder()
    .inputs([<ore:paper> * 2, <ore:nuggetGold> * 4, <ore:circuitLv>])
    .fluidInputs([<liquid:dye_green> * 288])
    .outputs(<scannable:module_blank>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

// 橡胶
Extractor.recipeBuilder()
    .inputs([<gregtech:rubber_log>])
    .fluidOutputs([<liquid:rubber> * 144])
    .EUt(32)
    .duration(100)
    .buildAndRegister();