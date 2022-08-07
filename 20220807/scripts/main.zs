import scripts.utils;

// 钢制机壳

recipes.addShaped(<mekanism:basicblock:8>, 
    utils.coreSurroundCross(<ic2:resource:13>, <ore:ingotOsmium>, <ore:ingotSteel>)
);

// 工业先锋框架
recipes.addShaped(<teslacorelib:machine_case>, 
    utils.coreSurroundCross(<thermalexpansion:frame>, <thermalfoundation:material:257>, <minecraft:redstone>)
);