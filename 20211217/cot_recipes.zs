// 派蒙
recipes.addShaped(<contenttweaker:paimon> * 16, [
    [<ore:cropApple>, <ore:cropApple>, <ore:cropApple>],
    [<ore:cropApple>, <ore:cropWheat>, <ore:cropApple>],
    [<ore:cropApple>, <ore:cropApple>, <ore:cropApple>]
]);

// 熔炉模型
recipes.addShaped(<contenttweaker:clay_furnace> * 8, [
    [<contenttweaker:artificialfoil>, <contenttweaker:artificialfoil>, <contenttweaker:artificialfoil>],
    [<contenttweaker:artificialfoil>, <minecraft:furnace>, <contenttweaker:artificialfoil>],
    [<contenttweaker:artificialfoil>, <contenttweaker:artificialfoil>, <contenttweaker:artificialfoil>]
]);

// 硅酸盐粉
recipes.addShapeless(<contenttweaker:soildust> * 4, [
    <ore:clay>, <ore:clay>, <ore:sand>, <ore:gravel>
]);

// 星
recipes.addShaped(<contenttweaker:star>, [
    [null, <threng:material:9>, null],
    [<threng:material:9>, <thermalfoundation:material:1028>, <threng:material:9>],
    [null, <threng:material:9>, null]
]);
