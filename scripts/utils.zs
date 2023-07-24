#priority 10000

import crafttweaker.item.IIngredient;
import crafttweaker.item.IItemStack;

global commonCoin as IItemStack = <custommc:item961>;
global advancedCoin as IItemStack = <custommc:item927>;
global ultraCoin as IItemStack = <custommc:item930>;
global YUS_APPROVAL as IItemStack = <custommc:item129>;
global cosmicMeatBall as IItemStack = <avaritia:cosmic_meatballs>;
global beefRaw as IItemStack = <minecraft:beef>;
global rabbitRaw as IItemStack = <minecraft:rabbit>;
global chickenRaw as IItemStack = <minecraft:chicken>;
global pigRaw as IItemStack = <minecraft:porkchop>;
global fishRaw as IItemStack = <minecraft:fish>;
global neutron as IItemStack = <avaritia:resource:2>;

YUS_APPROVAL.displayName = game.localize("item.starcraft.yusapproval");
YUS_APPROVAL.addTooltip(format.gray(game.localize("tooltip.yusapproval")));
<custommc:item461>.displayName = "\u5927\u767D\u7684\u8BA4\u53EF";
<akashictome:tome>.addTooltip(format.red(game.localize("tooltip.akashic_tome")));

function constructCoin(mat as IItemStack, name as string, value as string){
    mat.displayName = name;
    mat.addTooltip(game.localize("tooltip.coin_value") + value);
}

// 引用自 https://github.com/friendlyhj/GrassUtils/blob/master/main/RecipeUtils.zs，遵循 MIT 许可证

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
