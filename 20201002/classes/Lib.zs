#priority 32767
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

zenClass Lib {
    zenConstructor() {}
    // 获取物品 ID 原版石头 minecraft:stone
    function getItemName(input as IItemStack) as string {
        val id as string = input.definition.id;
        val meta as int = input.metadata;
        if (meta == 0){
            return id;
        } else return (id + meta);
    }
    // 获取物品 ID 只是冒号由下划线取代 原版石头 minecraft_stone
    function getItemNameWithUnderline(input as IItemStack) as string {
        var mod as string = input.definition.owner;
        var id as string = input.definition.id.split(":")[1];
        var meta as int = input.metadata;
        if (meta == 0){
            return (mod + "_" + id);
        } else return (mod + "_" + id + "_" + meta);
    }
    
    // 修改合成，先删后加，第一个参数 true 表有序，false 无序，需要二维数组（即使是无序）
    function recipeTweak(isShaped as bool,out as IItemStack,input as IIngredient[][]) {
        val recipeName as string = this.getItemNameWithUnderline(out);
        recipes.remove(out,true);
        if (isShaped) {
            recipes.addShaped(recipeName,out,input);
        } else {
            recipes.addShapeless(recipeName,out,input[0]);
        }
    }

    // BC 装配台
    function addAssemblyTableRecipe(out as IItemStack, power as int, inputs as IIngredient[]) {
        mods.buildcraft.AssemblyTable.addRecipe(getItemNameWithUnderline(out), out, power, inputs);
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
    // 删除工作台与熔炉合成，并在 JEI 内隐藏
    function removeAllRecipe(input as IItemStack) as bool {
        recipes.remove(input);
        furnace.remove(input);
        furnace.setFuel(input, 0);
        mods.jei.JEI.removeAndHide(input);
        return true;
    }
    // 数组复数删除
    function removeAllRecipes(input as IItemStack[]) as bool {
        for item in input {
            this.removeAllRecipe(item);
        }
        return true;
    }
}

function getLib() as Lib{
    return Lib();
}
