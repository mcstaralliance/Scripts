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
]);

// 木鱼杆
recipes.addShaped(<minecraft:fishing_rod>, [
    [null, null, <ore:stickWood>],
    [null, <ore:stickWood>, <ore:string>],
    [<ore:stickWood>, null, <ore:string>]
]);

// 淡水
recipes.addShapeless(<harvestcraft:freshwateritem> * 8, [<minecraft:water_bucket>]);

// 铁框架
recipes.addShaped(<advgenerators:iron_frame> * 2, [
    [null, <ore:stickIron>, null],
    [<ore:stickIron>, null, <ore:stickIron>],
    [null, <ore:stickIron>, null]
]);

// 精炼铁锭
recipes.addShapeless(<techreborn:ingot:19>, [<ore:ingotIron>, <ore:ingotIron>]);

// 海晶碎片
recipes.addShapeless(<minecraft:prismarine_shard> * 2, [<ore:gemLapis>, <ore:quartzMana>]);

// 僧侣雄蜂
val bee = <forestry:bee_drone_ge>.withTag({MaxH: 50, Health: 50, IsAnalyzed: 0 as byte, Genome: {Chromosomes: [{UID1: "forestry.speciesMonastic", UID0: "forestry.speciesMonastic", Slot: 0 as byte}, {UID1: "forestry.speedSlower", UID0: "forestry.speedSlower", Slot: 1 as byte}, {UID1: "forestry.lifespanLong", UID0: "forestry.lifespanLong", Slot: 2 as byte}, {UID1: "forestry.fertilityLow", UID0: "forestry.fertilityLow", Slot: 3 as byte}, {UID1: "forestry.toleranceBoth1", UID0: "forestry.toleranceBoth1", Slot: 4 as byte}, {UID1: "forestry.boolFalse", UID0: "forestry.boolFalse", Slot: 5 as byte}, {UID1: "forestry.toleranceBoth1", UID0: "forestry.toleranceBoth1", Slot: 6 as byte}, {UID1: "forestry.boolFalse", UID0: "forestry.boolFalse", Slot: 7 as byte}, {UID1: "forestry.boolTrue", UID0: "forestry.boolTrue", Slot: 8 as byte}, {UID1: "forestry.flowersWheat", UID0: "forestry.flowersWheat", Slot: 9 as byte}, {UID1: "forestry.floweringFaster", UID0: "forestry.floweringFaster", Slot: 10 as byte}, {UID1: "forestry.territoryAverage", UID0: "forestry.territoryAverage", Slot: 11 as byte}, {UID1: "forestry.effectNone", UID0: "forestry.effectNone", Slot: 12 as byte}]}});
recipes.addShapeless(bee, [<forestry:bee_drone_ge>, <minecraft:sand>, <minecraft:cactus>]);

// 甘蔗
recipes.addShapeless(<minecraft:reeds>, [<tfc:food/sugarcane>]);

// 活塞
recipes.addShaped(<minecraft:piston>, [
    [<ore:plankWood>, <ore:plankWood>, <ore:plankWood>],
    [<ore:cobblestone>, <ore:stickIron>, <ore:cobblestone>],
    [<ore:cobblestone>, <ore:gearBronze>, <ore:cobblestone>]
]);

// 熔炉
recipes.addShaped(<minecraft:furnace>, 
    utils.createSurround(<enderio:item_material:14>, <ore:cobblestone>)
);

// 温和蜂巢
recipes.addShapeless(<forestry:beehives:2>, [<forestry:apiary>, <forestry:bee_princess_ge>, <forestry:bee_drone_ge>, <minecraft:flint_and_steel>.anyDamage().transformDamage(1)]);

// 凛冬蜂巢
recipes.addShapeless(<forestry:beehives:5>, [<forestry:apiary>, <forestry:bee_princess_ge>, <forestry:bee_drone_ge>, <minecraft:snow>]);

// 玻璃瓶
recipes.addShaped(<minecraft:glass_bottle>, [
    [null, null, null],
    [<ore:blockGlass>, null, <ore:blockGlass>],
    [null, <ore:blockGlass>, null]
]);

// 原木配方
recipes.addShapeless(<minecraft:planks> * 4, [<minecraft:log>]);
recipes.addShapeless(<minecraft:planks:1> * 4, [<minecraft:log:1>]);
recipes.addShapeless(<minecraft:planks:2> * 4, [<minecraft:log:2>]);
recipes.addShapeless(<minecraft:planks:3> * 4, [<minecraft:log:3>]);
recipes.addShapeless(<minecraft:planks:4> * 4, [<minecraft:log2>]);
recipes.addShapeless(<minecraft:planks:5> * 4, [<minecraft:log2:1>]);

// 流体复制机
recipes.addShaped(<techreborn:fluid_replicator>, [
    [<techreborn:plates:33>, <techreborn:part>, <techreborn:plates:33>],
    [<techreborn:part>, <techreborn:machine_frame:2>, <techreborn:part>],
    [<refinedstorage:fluid_storage_part:2>, <techreborn:part:17>, <refinedstorage:fluid_storage_part:2>]
]);

// 钻石工具
recipes.addShaped(<minecraft:diamond_sword>, [
    [null, <ore:gemDiamond>, null],
    [null, <ore:gemDiamond>, null],
    [null, <ore:stickWood>, null]
]);
recipes.addShaped(<minecraft:diamond_shovel>, [
    [null, <ore:gemDiamond>, null],
    [null, <ore:stickWood>, null],
    [null, <ore:stickWood>, null]
]);
recipes.addShaped(<minecraft:diamond_pickaxe>, [
    [<ore:gemDiamond>, <ore:gemDiamond>, <ore:gemDiamond>],
    [null, <ore:stickWood>, null],
    [null, <ore:stickWood>, null]
]);
recipes.addShaped(<minecraft:diamond_axe>, [
    [null, <ore:gemDiamond>, <ore:gemDiamond>],
    [null, <ore:stickWood>, <ore:gemDiamond>],
    [null, <ore:stickWood>, null]
]);
recipes.addShaped(<minecraft:diamond_hoe>, [
    [null, <ore:gemDiamond>, <ore:gemDiamond>],
    [null, <ore:stickWood>, null],
    [null, <ore:stickWood>, null]
]);

// 高级加压阀门
recipes.addShapeless(<advgenerators:advanced_pressure_valve>, [<advgenerators:pressure_valve>, <thermalfoundation:upgrade:35>]);

// 空间传送器
recipes.addShaped(<enderio:block_transceiver>, [
    [<enderio:item_alloy_ingot>, <enderio:item_material:43>, <enderio:item_alloy_ingot>],
    [<ore:blockGlassHardened>, <enderio:item_material:15>, <ore:blockGlassHardened>],
    [<enderio:item_alloy_ingot>, <enderio:item_basic_capacitor:2>, <enderio:item_alloy_ingot>]
]);

// 酿造台
recipes.addShaped(<minecraft:brewing_stand>, [
    [null, null, null],
    [null, <ore:rodBlaze>, null],
    [<ore:cobblestone>, <ore:cobblestone>, <ore:cobblestone>]
]);

// 科技复兴线圈
recipes.addShaped(<techreborn:part:13> * 3,
    utils.createCrossWithCore(null, <ore:ingotNickel>, <forestry:ingot_copper>)
);
recipes.addShaped(<techreborn:part:14> * 3,
    utils.createCrossWithCore(null, <ore:ingotNickel>, <ore:ingotChrome>)
);
recipes.addShaped(<techreborn:part:15> * 3,
    utils.createCrossWithCore(<ore:ingotAluminum>, <ore:ingotChrome>, <ore:ingotRefinedIron>)
);

// 桶
recipes.addShaped(<minecraft:bucket>, [
    [<ore:plateIron>, null, <ore:plateIron>],
    [<ore:plateIron>, null, <ore:plateIron>],
    [null, <ore:plateIron>, null]
]);

// 氘单元
recipes.addShapeless(<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluiddeuterium", Amount: 1000}}), [<techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidhydrogen", Amount: 1000}})]);
