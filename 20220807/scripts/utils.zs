#priority 114514

import crafttweaker.item.IIngredient;

function coreSurroundCross(core as IIngredient, a as IIngredient, b as IIngredient) as IIngredient[][] {
    return [
        [b, a, b],
        [a, core, a],
        [b, a, b]
    ];
}