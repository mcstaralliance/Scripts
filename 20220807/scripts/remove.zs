import crafttweaker.item.IItemStack;

var remove as IItemStack[] = [
    <mekanism:basicblock:8>,
    <teslacorelib:machine_case>,
    <ic2:te:44>,
    <ic2:te:1>,
    <ic2:resource:12>,
    <ic2:te:43>,
    <ic2:te:45>
];

for myRemove in remove{
    recipes.remove(myRemove);
    myRemove.addTooltip(format.red("配方已删除。"));
}