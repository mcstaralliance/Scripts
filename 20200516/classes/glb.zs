import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

zenClass glb {
	zenConstructor() {
	}
	
	function Trecipe(isShaped as bool,out as IItemStack,input as IIngredient[][]) {
		val recipeName as string = this.getItemNameWithUnderline(out);
		recipes.remove(out,true);
		if (isShaped) {
			recipes.addShaped(recipeName,out,input);
		} else {
			recipes.addShapeless(recipeName,out,input[0]);
		}
	}
	
	function HFJEI(input as IItemStack) as bool {
		recipes.remove(input);
		furnace.remove(input);
		furnace.setFuel(input, 0);
		mods.jei.JEI.removeAndHide(input);
		return true;
	}
	
	function IS(out, ins, forb, oitem as IItemStack, cInfo) {
	var displayName = ins.forb.displayName;
	if(displayName has ":") {
		return itemUtils.getItem(displayName);
	}
	return oitem;
	}
}
