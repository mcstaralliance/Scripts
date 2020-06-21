import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

zenClass glb {
	zenConstructor() {
	}
	
	function tRecipe(isShaped as bool,out as IItemStack,input as IIngredient[][]) {
		val recipeName as string = this.getItemNameWithUnderline(out);
		recipes.remove(out,true);
		if (isShaped) {
			recipes.addShaped(recipeName,out,input);
		} else {
			recipes.addShapeless(recipeName,out,input[0]);
		}
	}
	// 删除合成并添加合成 需要提供二维数组
	
	function hideFromJEI(input as IItemStack) as bool {
		recipes.remove(input);
		furnace.remove(input);
		furnace.setFuel(input, 0);
		mods.jei.JEI.removeAndHide(input);
		return true;
	}
	// 删除合成并隐藏 JEI
	
	function iS(out, ins, forb, oitem as IItemStack, cInfo) {
	var displayName = ins.forb.displayName;
	if(displayName has ":") {
		return itemUtils.getItem(displayName);
	}
	return oitem;
	}
	// 删除合成并添加合成 需要提供二维数组 物品钩子 物品原输出 物品输入
}
