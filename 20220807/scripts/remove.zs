import crafttweaker.item.IItemStack;

var remove as IItemStack[] = [
    <mekanism:basicblock:8>,
    <teslacorelib:machine_case>
];

for myRemove in remove{
    recipes.remove(myRemove);
}