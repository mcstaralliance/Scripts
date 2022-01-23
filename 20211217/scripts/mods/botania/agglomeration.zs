#priority 2000
import mods.botaniatweaks.Agglomeration;

// 水晶矩阵锭
Agglomeration.addRecipe(<avaritia:resource:1>,
    [<minecraft:ender_pearl>, <ore:ingotIron>, <thermalfoundation:geode>],
    250000
);

// 泰拉钢锭
Agglomeration.removeRecipe(<botania:manaresource:4>,
    [<botania:manaresource:2>,<botania:manaresource>,<botania:manaresource:1>]
);

Agglomeration.addRecipe(<botania:manaresource:4>,
    [<avaritia:resource:1>, <contenttweaker:star>],
    250000, 0xBCFFFF, 0x56FF0A, 
    <contenttweaker:skull_block>, <botania:storage>, <contenttweaker:magic_stone>
);

// 魔力水晶
Agglomeration.addRecipe(<botania:pylon>,
    [<botania:manaresource> * 2, <minecraft:diamond>, <minecraft:gold_ingot> * 2],
    50000
);

// 盖亚魂锭
Agglomeration.addRecipe(<botania:manaresource:14>, [<botania:manaresource:4>, <botania:manaresource:5> * 8],
    500000, 0x56FF0A, 0xBAF8D7, 
    <contenttweaker:skull_block>, <botania:storage>, <contenttweaker:magic_stone>
);
