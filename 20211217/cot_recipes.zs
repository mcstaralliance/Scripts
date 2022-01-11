import crafttweaker.item.IItemStack;

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

// 统一锭
var ingotTooltip = [
    <contenttweaker:lead_ingot>,
    <contenttweaker:uranium_ingot>,
    <contenttweaker:silver_ingot>,
    <contenttweaker:iridium_ingot>,
    <contenttweaker:aluminium_ingot>,
    <contenttweaker:nickel_ingot>,
    <contenttweaker:copper_ingot>,
    <contenttweaker:platinum_ingot>,
    <contenttweaker:tin_ingot>
] as IItemStack[];
for myIngotTooltip in ingotTooltip{
    myIngotTooltip.addTooltip("§bUniIngot of Starcraft");
}

<ore:ingotNickel>.add(<contenttweaker:nickel_ingot>);
recipes.addShapeless(<contenttweaker:nickel_ingot>, [<ore:ingotNickel>]);

<ore:ingotCopper>.add(<contenttweaker:copper_ingot>);
recipes.removeShapeless(<contenttweaker:copper_ingot>, [<ore:ingotCopper>]);

<ore:ingotTin>.add(<contenttweaker:tin_ingot>);
recipes.addShapeless(<contenttweaker:tin_ingot>, [<ore:ingotTin>]);

<ore:ingotAluminum>.add(<contenttweaker:aluminium_ingot>);
recipes.addShapeless(<contenttweaker:aluminium_ingot>, [<ore:ingotAluminum>]);

<ore:ingotLead>.add(<contenttweaker:lead_ingot>);
recipes.addShapeless(<contenttweaker:lead_ingot>, [<ore:ingotLead>]); 

<ore:ingotSilver>.add(<contenttweaker:silver_ingot>);
recipes.addShapeless(<contenttweaker:silver_ingot>, [<ore:ingotSilver>]); 

<ore:ingotUranium>.add(<contenttweaker:uranium_ingot>);
recipes.addShapeless(<contenttweaker:uranium_ingot>, [<ore:ingotUranium>]); 

<ore:ingotIridium>.add(<contenttweaker:iridium_ingot>);
recipes.addShapeless(<contenttweaker:iridium_ingot>, [<ore:ingotIridium>]); 

<ore:ingotPlatinum>.add(<contenttweaker:platinum_ingot>);
recipes.addShapeless(<contenttweaker:platinum_ingot>, [<ore:ingotPlatinum>]); 
