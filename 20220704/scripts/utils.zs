#priority 4000

import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.liquid.ILiquidStack;
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ItemFood;
import mods.contenttweaker.Item;
import mods.contenttweaker.Block;

global COMMONCOIN as IItemStack = <custommc:item961>;
global ADVANCEDCOIN as IItemStack = <custommc:item927>;
global ULTRACOIN as IItemStack = <custommc:item970>;

function uniBan(item as IItemStack) {
    recipes.remove(item);
    item.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
}

// the following "create" functions were quoted from
// https://github.com/friendlyhj/GrassUtils/blob/master/main/RecipeUtils.zs, under MIT License.
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

function itemBuilder(name as string, maxStackSize as int, maxDamage as int, glowing as bool) {
    var item as Item = VanillaFactory.createItem(name);
    item.creativeTab = <creativetab:tab>;
    item.maxStackSize = maxStackSize;
    item.maxDamage = maxDamage;
    item.glowing = glowing;
    item.register();
}

function blockBuilder(name as string, toolClass as string) {
    var block as Block = VanillaFactory.createBlock(name, <blockmaterial:wood>);
    block.creativeTab = <creativetab:tab>;
    block.blockSoundType = <soundtype:wood>;
    block.toolClass = toolClass;
    block.toolLevel = 1.0;
    block.fullBlock = true;
    block.register();
}
