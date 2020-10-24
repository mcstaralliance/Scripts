import crafttweaker.item.IItemStack;

var remove as IItemStack[] = [
    <tconstruct:smeltery_controller>,
    <tconstruct:soil>
];

for item in remove {
    recipes.remove(item);
}

recipes.addShaped(<tconstruct:smeltery_controller>, 
    [[<ore:ingotBrickSeared>, <ore:ingotBrickSeared>, <ore:ingotBrickSeared>], 
    [<ore:ingotBrickSeared>, <modularmachinery:blockcasing:3>, <ore:ingotBrickSeared>],
    [<ore:ingotBrickSeared>, <ore:ingotBrickSeared>, <ore:ingotBrickSeared>]]
);

recipes.addShaped(<tconstruct:soil>*8, 
    [[<minecraft:dye:15>, <ore:dustRedstone>], 
    [<ore:dustRedstone>, <minecraft:dye:15>]]
);

