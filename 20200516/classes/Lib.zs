#priority 32767
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

zenClass Lib {
	zenConstructor() {
	}
	//获取物品ID 原版石头 minecraft:stone
	function getItemName(input as IItemStack) as string {
		val id as string = input.definition.id;
		val meta as int = input.metadata;
		if (meta == 0){
			return id;
		} else return (id + meta);
	}
	//获取物品ID 只是冒号由下划线取代 原版石头 minecraft_stone
	function getItemNameWithUnderline(input as IItemStack) as string {
		var mod as string = input.definition.owner;
		var id as string = input.definition.id.split(":")[1];
		var meta as int = input.metadata;
		if (meta == 0){
			return (mod + "_" + id);
		} else return (mod + "_" + id + "_" + meta);
	}
	
	//修改合成，先删后加，第一个参数true表有序，flase无序，需要二维数组（即使是无序）
	function recipeTweak(isShaped as bool,out as IItemStack,input as IIngredient[][]) {
		val recipeName as string = this.getItemNameWithUnderline(out);
		recipes.remove(out,true);
		if (isShaped) {
			recipes.addShaped(recipeName,out,input);
		} else {
			recipes.addShapeless(recipeName,out,input[0]);
		}
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
	//删除工作台与熔炉合成，并在JEI内隐藏
	function removeAllRecipe(input as IItemStack) as bool {
		recipes.remove(input);
		furnace.remove(input);
		furnace.setFuel(input, 0);
		mods.jei.JEI.removeAndHide(input);
		return true;
	}
	//数组复数删除
	function removeAllRecipes(input as IItemStack[]) as bool {
		for item in input {
			this.removeAllRecipe(item);
		}
		return true;
	}
	//平行数组→二维数组转化添加合成 慎用 只限物品 ID不正确或包含nbt的合成
	function addShapedFunctioned(input01 as IItemStack[],fork as IItemStack[],input02 as IItemStack[],input03 as IItemStack[],input04 as IItemStack[],input05 as IItemStack[],input06 as IItemStack[],input07 as IItemStack[],input08 as IItemStack[],recname as string,output as IItemStack[]) as bool {   //数组转换
		recipes.addShaped(recname,output,[[input01,input02,input03],[input04,fork.marked("addShapedCore"),input05],[input06,input07,input08]], function(out, ins, cInfo) {
		var metaa = ins.addShapedCore.displayName;
		if(metaa has ":") {   //检测是否含有meta值
			return itemUtils.getItem(metaa);   //修正返回空meta物品
		}
		return output;   //源合成
		}, null);
	}
}

function getLib() as Lib{
	return Lib();
}
