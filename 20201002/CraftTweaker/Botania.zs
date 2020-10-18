import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

var ban as IItemStack[] = [
    <botania:rfgenerator>
];

for item in ban {
    Lib.removeAllRecipe(item);
}