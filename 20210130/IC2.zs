import crafttweaker.item.IItemStack as IItemStack;

var remove = [
    <super_solar_panels:machines:10>
] as IItemStack[];
for myRemove in remove{
    recipes.remove(myRemove);
}

recipes.addShaped(<super_solar_panels:machines:10>, [
    [<extrabotany:material:3>, <super_solar_panels:crafting:0>, <extrabotany:material:3>], 
    [<super_solar_panels:crafting:44>, <extrabotany:natureorb>, <super_solar_panels:crafting:44>], 
    [<extrabotany:material:3>, <super_solar_panels:crafting:0>, <extrabotany:material:3>]
]);
