import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val recipeIngredient as IIngredient[][][IItemStack] = {
    <enderio:item_material> : [
        [<ore:ingotIron>|<enderio:item_alloy_ingot:9>, <enderio:item_material:20>, <ore:ingotIron>|<enderio:item_alloy_ingot:9>],
        [<enderio:item_material:20>, <ic2:resource:12>, <enderio:item_material:20>],
        [<ore:ingotIron>|<enderio:item_alloy_ingot:9>, <enderio:item_material:20>, <ore:ingotIron>|<enderio:item_alloy_ingot:9>]
    ]
};

for out, inputs in recipeIngredient {
    Lib.recipeTweak(true, out, inputs);
}
