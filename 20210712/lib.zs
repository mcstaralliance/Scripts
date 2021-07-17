#priority 32767
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

import mods.techreborn.industrialGrinder;
import mods.techreborn.grinder;
import mods.appliedenergistics2.Grinder;
import mods.immersiveengineering.Crusher;

zenClass Lib {
    zenConstructor() {
    }
    // 通用粉碎机配方
    function addGrinder(input as IItemStack ,output as IItemStack ,tickTime as int ,eTick as int) as string {
        mods.techreborn.industrialGrinder.addRecipe(output, null, null, null, input, null, tickTime, eTick);
        mods.techreborn.grinder.addRecipe(output, input, tickTime, eTick);
        //Grinder.addRecipe(output, input, 3);
        mods.immersiveengineering.Crusher.addRecipe(output, input, eTick);
        mods.mekanism.crusher.addRecipe(input, output);
    }
    
}

function getLib() as Lib{
    return Lib();
}
