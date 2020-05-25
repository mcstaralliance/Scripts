import crafttweaker.events.IEventManager;
import crafttweaker.item.IItemStack;
import crafttweaker.item.IItemTransformer;
/*
events.onPlayerCrafted(function(event as crafttweaker.event.PlayerCraftedEvent){
    val itemapple = <minecraft:apple>.transformReplace(tritem);
    val tritem = itemapple.withTag({display: {Name: "xxxx"}})
    recipes.addShaped(<minecraft:golden_apple:1>,[[<minecraft:gold_block>,<minecraft:gold_block>,<minecraft:gold_block>],[<minecraft:gold_block>,itemapple,<minecraft:gold_block>],[<minecraft:gold_block>,<minecraft:gold_block>,<minecraft:gold_block>]]);
    print(itemapple.withTag({display: {Name: "xxxx"}};
    transformedItem = item.transformReplace(tritem);
});
*/

val GB = <minecraft:gold_block>;
//设置GB为金块
recipes.addShaped("Goldenapplerecipes", <minecraft:golden_apple:1>*8, [[GB,GB,GB],[GB,<minecraft:apple>.marked("anyapple"),GB],[GB,<minecraft:nether_star>,GB]], function(out, ins, cInfo) {
    var displayName = ins.anyapple.displayName;
    if(displayName has ":") {
        return itemUtils.getItem(displayName);
    }
    return <minecraft:golden_apple:1>*8;
}, null);
//函数添加附魔金苹果

recipes.remove(<appliedenergistics2:part:220>);
val icp = <enderio:item_conduit_probe>.anyDamage().transformDamage();
mods.extendedcrafting.TableCrafting.addShaped(0, <appliedenergistics2:part:220>, [
	[null, null, <ore:ingotVibrantAlloy>, <ore:itemChassiParts>, null], 
	[null, <ore:itemChassiParts>, <ore:itemChassiParts>, <thermalexpansion:cache>, null], 
	[<ore:itemChassiParts>, icp, <enderio:block_end_iron_bars>, <thermalexpansion:cache>, null], 
	[null, <ore:itemChassiParts>, <ore:itemChassiParts>, <thermalexpansion:cache>, null], 
	[null, null, <ore:ingotVibrantAlloy>, <ore:itemChassiParts>, null]
]);
//修改了ME存储总线的合成

val emer = <minecraft:emerald>;
recipes.addShaped("eioendercrystal", <enderio:item_material:16>, [[emer,emer,emer],[<minecraft:ender_pearl>,<enderio:item_material:15>.marked("enccrystal"),<minecraft:ender_pearl>],[emer,<minecraft:redstone>,emer]], function(out, ins, cInfo) {
    var displayName = ins.enccrystal.displayName;
    if(displayName has ":") {
        return itemUtils.getItem(displayName);
    }
    return <enderio:item_material:16>;
}, null);
//添加了EIO末影水晶的合成

recipes.addShaped("zombiepersonmade",<enderio:item_material:42>,[[null,<enderio:item_material:74>,null],[<enderio:item_material:16>,<enderio:item_material:41>,<enderio:item_material:16>],[null,<enderio:item_material:74>,null]],function,action);
//添加了人造僵尸的合成
