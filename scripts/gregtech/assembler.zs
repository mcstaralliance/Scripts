import mods.gregtech.recipe.RecipeMap;

// 箱子升级木->铁
assembler.recipeBuilder()
    .inputs(<ore:plankWood>, <ore:plateIron> * 8)
    .outputs(<ironchest:wood_iron_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级木->铜
assembler.recipeBuilder()
    .inputs(<ore:plankWood>, <ore:plateCopper> * 8)
    .outputs(<ironchest:wood_copper_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级铜->铁
assembler.recipeBuilder()
    .inputs(<ore:ingotCopper>, <ore:plateIron> * 4)
    .outputs(<ironchest:copper_iron_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级铜->银
assembler.recipeBuilder()
.inputs(<ore:ingotCopper>, <ore:plateSilver> * 4)
    .outputs(<ironchest:copper_silver_chest_upgrade> * 2)
    .EUt(16)
    .duration(200)
    .buildAndRegister();

// 箱子升级银->金
assembler.recipeBuilder()
    .inputs(<ore:ingotSilver>, <ore:plateGold> * 8)
    .outputs(<ironchest:silver_gold_chest_upgrade> * 2)
    .EUt(28)
    .duration(200)
    .buildAndRegister();

// 箱子升级铁->金
assembler.recipeBuilder()
    .inputs(<ore:ingotIron>, <ore:plateGold> * 8)
    .outputs(<ironchest:iron_gold_chest_upgrade> * 2)
    .EUt(28)
    .duration(200)
    .buildAndRegister();

// 箱子升级金->钻石
assembler.recipeBuilder()
    .inputs(<minecraft:gold_ingot>, <ore:plateDiamond> * 8)
    .fluidInputs([<liquid:water> * 1000])
    .outputs(<ironchest:gold_diamond_chest_upgrade> * 2)
    .EUt(32)
    .duration(200)
    .buildAndRegister();

// 树场
assembler.recipeBuilder()
    .inputs([<gregtech:machine_casing:2>, <ore:craftingFurnace> * 3, <minecraft:sapling:4>, <minecraft:sapling:1>, <minecraft:sapling:2>, <minecraft:sapling:3>, <minecraft:sapling>, <minecraft:sapling:5>, <teastory:soil_detection_meter>])
    .outputs(<cyclicmagic:block_forester>)
    .EUt(32)
    .duration(200)
    .buildAndRegister();

// 简易机器框架
assembler.recipeBuilder()
    .inputs(<gregtech:machine_casing:2>, <ore:dustBedrock>)
    .outputs(<enderio:item_material>)
    .EUt(128)
    .duration(400)
    .buildAndRegister();

// 时间之瓶
assembler.recipeBuilder()
    .inputs(<minecraft:clock>, <botania:manabottle>, <minecraft:sponge>)
    .fluidInputs([<liquid:water> * 10000])
    .outputs(<randomthings:timeinabottle>.withTag({timeData: {storedTime: 0}}))
    .EUt(256)
    .duration(400)
    .buildAndRegister();

// 手术仓
assembler.recipeBuilder()
    .inputs(<ore:plateIron> * 7, <ore:craftingToolBlade>, <minecraft:iron_door>)
    .fluidInputs([<liquid:ethanol> * 1296])
    .outputs(<cyberware:surgery_chamber>)
    .EUt(64)
    .duration(400)
    .buildAndRegister();

// 机器框架
assembler.recipeBuilder()
    .inputs(<gregtech:machine_casing>, <ore:foilSteel>)
    .outputs(<rftools:machine_frame>)
    .EUt(16)
    .duration(400)
    .buildAndRegister();

// 机器框架(TE)
assembler.recipeBuilder()
    .inputs(<ore:paneGlass> * 4, <ore:plateIron> * 4)
    .fluidInputs([<liquid:redstone> * 648])
    .outputs(<thermalexpansion:frame>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

// 设备框架
assembler.recipeBuilder()
    .inputs(<ore:paneGlass> * 4, <ore:plateTin> * 4)
    .fluidInputs([<liquid:redstone> * 648])
    .outputs(<thermalexpansion:frame:64>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

// 空白扫描模块
assembler.recipeBuilder()
    .inputs(<ore:paper> * 2, <ore:nuggetGold> * 4, <ore:circuitLv>)
    .fluidInputs([<liquid:dye_green> * 288])
    .outputs(<scannable:module_blank>)
    .EUt(32)
    .duration(300)
    .buildAndRegister();

// 战利品制造器
assembler.recipeBuilder()
    .inputs(<deepmoblearning:machine_casing>, <gregtech:meta_lens:1602>, <minecraft:dragon_breath>, <gregtech:meta_ring:301>)
    .outputs(<deepmoblearning:extraction_chamber>)
    .EUt(128)
    .duration(400)
    .buildAndRegister();

// ME 控制器
assembler.recipeBuilder()
    .inputs(<appliedenergistics2:sky_stone_brick> * 4, <gregtech:meta_item_1:624> * 2, <appliedenergistics2:material:12> * 2, <botania:manaresource:4>, <gregtech:meta_item_1:371>)
    .fluidInputs([<liquid:nitration_mixture> * 1000])
    .outputs(<appliedenergistics2:controller>)
    .EUt(128)
    .duration(400)
    .buildAndRegister();

// 大型分子装配室外壁
assembler.recipeBuilder()
    .inputs(<threng:big_assembler>)
    .fluidInputs([<liquid:water> * 500])
    .outputs(<threng:big_assembler:1> * 4)
    .EUt(480)
    .duration(200)
    .buildAndRegister();

// 1K-ME存储组件
assembler.recipeBuilder()
    .inputs(<appliedenergistics2:material:22> * 4, <appliedenergistics2:material:10> * 4)
    .fluidInputs([<liquid:red_alloy> * 648])
    .outputs(<appliedenergistics2:material:35> * 3)
    .EUt(120)
    .duration(200)
    .buildAndRegister();

// 1K-ME流体存储组件
assembler.recipeBuilder()
    .inputs(<appliedenergistics2:material:22> * 4, <appliedenergistics2:material:10> * 4)
    .fluidInputs([<liquid:blue_alloy> * 648])
    .outputs(<appliedenergistics2:material:54> * 3)
    .EUt(120)
    .duration(200)
    .buildAndRegister();

// 飞龙能量核心
assembler.recipeBuilder()
    .inputs(<draconicevolution:draconic_core>, <gregtech:meta_plate:117> * 4, <gregtech:meta_plate:82> * 4, <deepmoblearning:glitch_infused_ingot> * 2)
    .fluidInputs([<liquid:redstone> * 1000])
    .outputs(<draconicevolution:wyvern_energy_core>)
    .EUt(420)
    .duration(500)
    .buildAndRegister();

// 神龙能量核心
assembler.recipeBuilder()
    .inputs(<draconicevolution:wyvern_energy_core>, <gregtech:meta_item_1:639>, <draconicevolution:draconic_ingot>)
    .fluidInputs([<liquid:enriched_naquadah_trinium_europium_duranide> * 1296])
    .outputs(<draconicevolution:draconic_energy_core>)
    .EUt(7680)
    .duration(1000)
    .buildAndRegister();
