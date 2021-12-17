#priority 1

import crafttweaker.item.IItemStack;

var myLogs = 
[<minecraft:log>,<minecraft:log:1>,<minecraft:log:2>,<minecraft:log:3>,<minecraft:log2>,<minecraft:log2:1>] as IItemStack[];
var myPlanks = 
[<minecraft:planks>,<minecraft:planks:1>,<minecraft:planks:2>,<minecraft:planks:3>,<minecraft:planks:4>,<minecraft:planks:5>] as IItemStack[];

for i, log in myLogs {
    var plank = myPlanks[i];
    recipes.remove(plank);
    recipes.addShapeless(plank * 3,[log]);
    }

// EnderIO 导线
var eioTooltip = [
    <enderio:item_item_conduit>,
    <enderio:item_liquid_conduit>,
    <enderio:item_liquid_conduit:1>,
    <enderio:item_liquid_conduit:2>,
    <enderio:item_power_conduit>,
    <enderio:item_power_conduit:1>,
    <enderio:item_power_conduit:2>,
    <enderio:item_redstone_conduit>
] as IItemStack[];
for myEioTooltip in eioTooltip{
    myEioTooltip.addTooltip("§c不建议使用此类导线, 大概率会引起卡服, 推荐使用热力膨胀导线或 XNet 模组");
}

val commonCoin = <custommc:item970>;
commonCoin.displayName = "硬币";
commonCoin.addTooltip("Vaule: 100");