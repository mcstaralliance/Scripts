import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val recipeIngredient as IIngredient[][][IItemStack] = {
    <thermalexpansion:frame> : [
        [<ore:ingotConductiveIron>, <ic2:crafting:3>, <ore:ingotConductiveIron>],
        [<forestry:hardened_machine>, <ic2:resource:13>, <forestry:hardened_machine>],
        [<ore:ingotConductiveIron>, <ic2:crafting:3>, <ore:ingotConductiveIron>]
    ]
};

for out, inputs in recipeIngredient {
    Lib.recipeTweak(true, out, inputs);
}