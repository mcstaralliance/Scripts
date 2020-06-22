// 通量维修复原
recipes.remove(<thermalexpansion:augment:401>);
recipes.addShaped("Repair", <thermalexpansion:augment:401>, [
	[<enderio:item_material:69>, <enderio:item_xp_transfer>.marked("meta"), <enderio:item_material:69>], 
	[<immersiveengineering:material:27>, <thaumcraft:seal>.marked("xpe"), <ore:plateBronze>], 
	[<enderio:item_material:69>, <minecraft:enchanted_book>.marked("xp"), <enderio:item_material:69>]
], 
function(out, ins, cInfo) {
	var xTransfer = ins.meta.displayName;
	var xpTransfer = ins.xpe.displayName;
	var xMeta = ins.xp.displayName;
	var finalN = xTransfer + xpTransfer;
	if(finalN has ":") {
		return itemUtils.getItem(finalN,xMeta);
	}
	return <thermalexpansion:augment:401>;
}, null);

// 奥数工作台充能器
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:arcane_workbench_charger>);
recipes.addShaped("arcane_workbench_charger", <thaumcraft:arcane_workbench_charger>, [
	[null, <ore:itemWirelessDish>, null], 
	[<thaumcraft:mirrored_glass>, <appliedenergistics2:material:42>, <thaumcraft:mirrored_glass>], 
	[<thermalfoundation:material:656>, <ore:nitor>, <thermalfoundation:material:656>]
]);

// 公式处理器
recipes.addShaped("shapeDevice", <thermalexpansion:device:10>, [
	[<ore:crystalLitherite>, <immersiveengineering:mold:7>, <ore:crystalLitherite>], 
	[<ore:workbench>, <thermalexpansion:frame:64>, <ore:workbench>], 
	[<ore:crystalLitherite>, <immersiveengineering:stone_decoration:7>, <ore:crystalLitherite>]
]);

// 猪魂
recipes.addShaped("pigSoul", <draconicevolution:mob_soul>.withTag({}), [
	[null, <ore:listAllmeatraw>, null], 
	[<ore:listAllmeatraw>, <minecraft:spider_eye>, <ore:listAllmeatraw>], 
	[null, <ore:listAllmeatraw>, null]
]);

//下面是所有的食材
recipes.addShaped("", <cuisine:crops>, [
	[<ore:seedWheat>, <ore:seedWheat>, null], 
	[null, null, null], 
	[null, null, null]
]);
recipes.addShaped("0", <cuisine:crops:1>, [
	[<ore:seedWheat>, null, <ore:seedWheat>], 
	[null, null, null], 
	[null, null, null]
]);
recipes.addShaped("2", <cuisine:crops:2>, [
	[<ore:seedWheat>, null, null], 
	[<ore:seedWheat>, null, null], 
	[null, null, null]
]);
recipes.addShaped("21", <cuisine:crops:21>, [
	[<ore:seedWheat>, null, null], 
	[null, <ore:seedWheat>, null], 
	[null, null, null]
]);
recipes.addShaped("13", <cuisine:crops:13>, [
	[<ore:seedWheat>, null, null], 
	[null, null, <ore:seedWheat>], 
	[null, null, null]
]);
recipes.addShaped("14", <cuisine:crops:14>, [
	[<ore:seedWheat>, null, null], 
	[null, null, null], 
	[<ore:seedWheat>, null, null]
]);
recipes.addShaped("15", <cuisine:crops:15>, [
	[<ore:seedWheat>, null, null], 
	[null, null, null], 
	[null, <ore:seedWheat>, null]
]);
recipes.addShaped("6", <cuisine:crops:6>, [
	[<ore:seedWheat>, null, null], 
	[null, null, null], 
	[null, null, <ore:seedWheat>]
]);
recipes.addShaped("5", <cuisine:crops:5>, [
	[null, <ore:seedWheat>, <ore:seedWheat>], 
	[null, null, null], 
	[null, null, null]
]);
recipes.addShaped("4", <cuisine:crops:4>, [
	[null, <ore:seedWheat>, null], 
	[<ore:seedWheat>, null, null], 
	[null, null, null]
]);
recipes.addShaped("18", <cuisine:crops:18>, [
	[null, <ore:seedWheat>, null], 
	[null, <ore:seedWheat>, null], 
	[null, null, null]
]);
recipes.addShaped("4", <cuisine:food:4>, [
	[null, <ore:seedWheat>, null], 
	[null, null, <ore:seedWheat>], 
	[null, null, null]
]);
recipes.addShaped("3", <cuisine:crops:3>, [
	[null, <ore:seedWheat>, null], 
	[null, null, null], 
	[<ore:seedWheat>, null, null]
]);
recipes.addShaped("9", <cuisine:crops:9>, [
	[null, <ore:seedWheat>, null], 
	[null, null, null], 
	[null, <ore:seedWheat>, null]
]);
recipes.addShaped("10", <cuisine:crops:10>, [
	[null, <ore:seedWheat>, null], 
	[null, null, null], 
	[null, null, <ore:seedWheat>]
]);
recipes.addShaped("19", <cuisine:crops:19>, [
	[null, null, <ore:seedWheat>], 
	[<ore:seedWheat>, null, null], 
	[null, null, null]
]);
recipes.addShaped("12", <cuisine:crops:12>, [
	[null, null, <ore:seedWheat>], 
	[null, <ore:seedWheat>, null], 
	[null, null, null]
]);
recipes.addShaped("11", <cuisine:crops:11>, [
	[null, null, <ore:seedWheat>], 
	[null, null, <ore:seedWheat>], 
	[null, null, null]
]);
recipes.addShaped("20", <cuisine:crops:20>, [
	[null, null, <ore:seedWheat>], 
	[null, null, null], 
	[<ore:seedWheat>, null, null]
]);
recipes.addShaped("17", <cuisine:crops:17>, [
	[null, null, <ore:seedWheat>], 
	[null, null, null], 
	[null, <ore:seedWheat>, null]
]);
recipes.addShaped("16", <cuisine:crops:16>, [
	[null, null, <ore:seedWheat>], 
	[null, null, null], 
	[null, null, <ore:seedWheat>]
]);
recipes.addShaped("bamboo", <cuisine:bamboo>*32, [
	[<ore:logWood>, null, null], 
	[null, <ore:logWood>, null], 
	[null, null, null]
]);
