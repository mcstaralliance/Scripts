import scripts.utils;

import crafttweaker.item.IItemStack;

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
    [<minecraft:leather>, ADVANCEDCOIN, <minecraft:leather>],
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
    utils.createCrossWithCore(<ore:ingotBrass>, <ore:ingotPigIron>, <ore:rodWroughtIron>)
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
    utils.createCrossWithCore(<techreborn:machine_frame:2>, <techreborn:part:41>, <ore:plateMagnalium>)
);

//TODO Botania & Draconic Evolution Recipe