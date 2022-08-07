#priority 114514

import crafttweaker.item.IIngredient;

function coreSurroundCross(core as IIngredient, a as IIngredient, b as IIngredient) as IIngredient[][] {
    return [
        [b, a, b],
        [a, core, a],
        [b, a, b]
    ];
}

function createSurround(core as IIngredient,surrounded as IIngredient) as IIngredient[][] {
    return [[surrounded,surrounded,surrounded],
    [surrounded,core,surrounded],
    [surrounded,surrounded,surrounded]];
}

function createFull3(input as IIngredient) as IIngredient[][] {
    return [[input,input,input],
    [input,input,input],
    [input,input,input]];
}

function createFull2(input as IIngredient) as IIngredient[][] {
    return [[input,input],[input,input]];
}

function createCross(five as IIngredient, four as IIngredient) as IIngredient[][] {
    return [[five, four, five],
    [four, five, four],
    [five, four, five]];
}

function createCrossWithCore(core as IIngredient, a as IIngredient, b as IIngredient) as IIngredient[][] {
    return [[a, b, a],
    [b, core, b],
    [a, b, a]];
}

function createLeftSlash(input as IIngredient) as IIngredient[][] {
    return [[input, null, null],
    [null, input, null],
    [null, null, input]];
}

function createRightSlash(input as IIngredient) as IIngredient[][] {
    return [[null, null, input],
    [null, input, null],
    [input, null, null]];
}

function createSpecialRecipe(core as IIngredient, a as IIngredient, b as IIngredient, c as IIngredient, d as IIngredient) as IIngredient[][]{
    return [
        [a, a, a],
        [b, core, b],
        [c, d, c]
    ];
}