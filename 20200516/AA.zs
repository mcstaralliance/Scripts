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
recipes.addShaped("Goldenapple", <minecraft:golden_apple:1>*8, [[GB,GB,GB],[GB,<minecraft:apple>.marked("anyapple"),GB],[GB,<minecraft:nether_star>,GB]], function(out, ins, cInfo) {
    var displayName = ins.anyapple.displayName;
    if(displayName has ":") {
        return itemUtils.getItem(displayName);
    }
    return <minecraft:golden_apple:1>*8;
}, null);
