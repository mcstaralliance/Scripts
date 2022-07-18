import scripts.utils;

// 熔炉
recipes.addShaped(<minecraft:furnace>, 
    utils.createCrossWithCore(<tfc:bloomery>, <tfc:fire_bricks>, <tfc:metal/sheet/wrought_iron>)
);

// 橡木压力板
recipes.addShaped(<minecraft:wooden_pressure_plate>, [
    [<ore:slabWood>, <ore:slabWood>, <ore:slabWood>],
    [null, null, null],
    [null, null, null]
]);

// 铁砧
recipes.addShaped(<minecraft:anvil>, [
    [<tfc:metal/double_ingot/wrought_iron>, <tfc:metal/double_ingot/wrought_iron>, <tfc:metal/double_ingot/wrought_iron>],
    [null, <tfc:metal/rod/wrought_iron>, null],
    [<tfc:metal/ingot/wrought_iron>, <tfc:metal/ingot/wrought_iron>, <tfc:metal/ingot/wrought_iron>]
]);

// 附魔台
recipes.addShaped(<minecraft:enchanting_table>, [
    [<tfc:metal/ingot/weak_blue_steel>, <minecraft:book>, <tfc:metal/ingot/weak_blue_steel>],
    [<minecraft:leather>, ULTRACOIN, <minecraft:leather>],
    [<ore:obsidian>, <ore:obsidian>, <ore:obsidian>]
]);

// 箱子
recipes.addShaped(<minecraft:chest>, 
    utils.createSurround(<ore:chestWood>, <ore:lumber>)
);

// 星之炉核心
recipes.addShaped(<contenttweaker:skull_block>, 
    utils.createSurround(<minecraft:furnace>, <ore:lumber>)
);

// 星之炉控制器
recipes.addShaped(<starcraft:ore_furnace>, 
    utils.createFull3(<tfc:ceramics/fired/fire_brick>)
);

// TR 基础机器框架
recipes.addShaped(<techreborn:machine_frame>, 
    utils.createCrossWithCore(<ore:ingotBrass>, <ore:ingotIron>, <ore:stickIron>)
);

// TR 进阶机器框架
recipes.addShaped(<techreborn:machine_frame:1>, 
    utils.createCrossWithCore(<techreborn:machine_frame>, <techreborn:cable:2>, <ore:plateAdvancedAlloy>)
);

// TE 机器框架
recipes.addShaped(<thermalexpansion:frame>, 
    utils.createSurround(<techreborn:machine_frame>, <ore:plateCarbon>)
);

// EIO 简易机器框架
recipes.addShaped(<enderio:item_material>, 
    utils.createCrossWithCore(<techreborn:machine_frame>, <ore:plateInvar>, <enderio:item_material:11>)
);

// RS 控制器
recipes.addShaped(<refinedstorage:controller>.withTag({Energy: 0}), 
    utils.createCrossWithCore(<techreborn:machine_frame:2>, <techreborn:part:41>, ULTRACOIN)
);

// CoT 注魔石
recipes.addShaped(<contenttweaker:magic_stone> * 8,
    utils.createCrossWithCore(<ore:livingrock>, <ore:dustFlux>, <ore:slimeball>)
);

// Botania 魔力池
recipes.addShaped(<botania:pool>, [
    [null, null, null],
    [<contenttweaker:magic_stone>, null, <contenttweaker:magic_stone>],
    [<contenttweaker:magic_stone>, <contenttweaker:magic_stone>, <contenttweaker:magic_stone>]
]);

// 花药台
recipes.addShaped(<botania:altar>, [
    [<tfc:metal/sheet/brass>, <botania:petal>, <tfc:metal/sheet/brass>],
    [null, <tfc:metal/sheet/bronze>, null],
    [<tfc:metal/double_sheet/wrought_iron>, <tfc:metal/double_sheet/wrought_iron>, <tfc:metal/double_sheet/wrought_iron>]
]);

// 能量输入口
recipes.addShaped(<starcraft:input_fe>, [
    [<ore:platebronze>, ADVANCEDCOIN, <ore:platebronze>],
    [<techreborn:cable:2>, <techreborn:mv_transformer>, <techreborn:cable:2>],
    [<ore:platebronze>, ADVANCEDCOIN, <ore:platebronze>]
]);

// 星力开采器II
recipes.addShaped(<starcraft:star_miner_tier2>, 
    utils.createCrossWithCore(<techreborn:computer_cube>, ULTRACOIN, <techreborn:storage2:2>)
); 

// 星力开采器I
recipes.addShaped(<starcraft:star_miner>, 
    utils.createSurround(ULTRACOIN, <ore:plateinvar>)
);

// 龙套 createSpecialRecipe
recipes.addShaped(<draconicevolution:wyvern_helm>, 
    utils.createSpecialRecipe(<botania:terrasteelhelm>, <forestry:pollen:1>, <draconicevolution:wyvern_energy_core>, ULTRACOIN, <draconicevolution:wyvern_core>)
);
recipes.addShaped(<draconicevolution:wyvern_chest>, 
    utils.createSpecialRecipe(<botania:terrasteelchest>, <forestry:pollen:1>, <draconicevolution:wyvern_energy_core>, ULTRACOIN, <draconicevolution:wyvern_core>)
);
recipes.addShaped(<draconicevolution:wyvern_legs>, 
    utils.createSpecialRecipe(<botania:terrasteellegs>, <forestry:pollen:1>, <draconicevolution:wyvern_energy_core>, ULTRACOIN, <draconicevolution:wyvern_core>)
);
recipes.addShaped(<draconicevolution:wyvern_boots>, 
    utils.createSpecialRecipe(<botania:terrasteelboots>, <forestry:pollen:1>, <draconicevolution:wyvern_energy_core>, ULTRACOIN, <draconicevolution:wyvern_core>)
);

// 粘液球
recipes.addShaped(<minecraft:slime_ball> * 4, [
    [<minecraft:clay_ball>, <minecraft:clay_ball>, <minecraft:clay_ball>],
    [<minecraft:clay_ball>, null, <minecraft:clay_ball>],
    [<minecraft:clay_ball>, <minecraft:clay_ball>, <minecraft:clay_ball>]
]);

// 过硫酸钠
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidsodiumpersulfate", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidsodiumsulfide", Amount: 1000}}), 
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcompressedair", Amount: 1000}})
]);

// 硝基燃油
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidnitrofuel", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidoil", Amount: 1000}}), 
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidnitrogen", Amount: 1000}})
]);

// 硝基碳
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidnitrocarbon", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidnitrogen", Amount: 1000}}),
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcarbon", Amount: 1000}})
]);

// 硝基煤油
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidnitrocoalfuel", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidglyceryl", Amount: 1000}}),
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcarbon", Amount: 1000}})
]);

// 硝基柴油
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidnitrodiesel", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluiddiesel", Amount: 1000}}),
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidglyceryl", Amount: 1000}})
]);

// 硝化甘油
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidglyceryl", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "water", Amount: 1000}}), 
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidnitrocarbon", Amount: 1000}})
]);

// 硫化钠
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidsodiumsulfide", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidsulfur", Amount: 1000}}),
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidsodium", Amount: 1000}})
]);

// 甲烷单元
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidmethane", Amount: 1000}}), [
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidhydrogen", Amount: 1000}}), 
    <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcarbon", Amount: 1000}})
]);

// 水槽
recipes.addShaped(<cookingforblockheads:sink>, [
    [ADVANCEDCOIN, COMMONCOIN, ADVANCEDCOIN], 
    [ULTRACOIN, ADVANCEDCOIN, ULTRACOIN],
    [ULTRACOIN, ULTRACOIN, ULTRACOIN]
]);

// 青铜锭
recipes.addShapeless(<forestry:ingot_bronze> * 9, [<ore:blockBronze>]);

// 煤炭块
recipes.addShaped(<minecraft:coal_block>, 
    utils.createFull3(<minecraft:coal>)
);

// 工作台
recipes.addShapeless(<minecraft:crafting_table>, [<ore:workbench>]);

// 木板
recipes.addShapeless(<minecraft:planks>, [<ore:plankWood>]);

// 未加工大理岩
recipes.addShapeless(<tfc:raw/marble>, [<tfc:metal/hammer/copper>.anyDamage().transformDamage(1), <ore:cobblestone>]);

// 炼药台
recipes.addShaped(<minecraft:brewing_stand>, [
    [null, null, null],
    [null, <minecraft:blaze_rod>, null],
    [<ore:cobblestone>, <ore:cobblestone>, <ore:cobblestone>]
    
// 木鱼杆
recipes.addShaped(<minecraft:fishing_rod>, [
    [null, null, <ore:stickWood>],
    [null, <ore:stickWood>, <ore:string>],
    [<ore:stickWood>, null, <ore:string>]
]);
