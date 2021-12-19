#priority 1

import crafttweaker.item.IItemStack;
import mods.touhoulittlemaid.Altar;

var myLogs = [<minecraft:log>,<minecraft:log:1>,<minecraft:log:2>,<minecraft:log:3>,<minecraft:log2>,<minecraft:log2:1>] as IItemStack[];
var myPlanks = [<minecraft:planks>,<minecraft:planks:1>,<minecraft:planks:2>,<minecraft:planks:3>,<minecraft:planks:4>,<minecraft:planks:5>] as IItemStack[];
var stoneAxe = <minecraft:stone_axe>.anyDamage().transformDamage();
var ironAxe = <minecraft:iron_axe>.anyDamage().transformDamage();
var goldenAxe = <minecraft:golden_axe>.anyDamage().transformDamage();
var diamondAxe = <minecraft:diamond_axe>.anyDamage().transformDamage();

for i, log in myLogs {
    var plank = myPlanks[i];
    recipes.remove(plank);
    plank.addTooltip("不同等级的斧头合成效果不同");
    log.addTooltip("不同等级的斧头合成效果不同");
    recipes.addShapeless(plank , [log]);
    recipes.addShapeless(plank*2,[log,stoneAxe]);
    recipes.addShapeless(plank*2,[log,goldenAxe]);
    recipes.addShapeless(plank*3,[log,ironAxe]);
    recipes.addShapeless(plank*4,[log,diamondAxe]);
    }

<contenttweaker:paimon>.addTooltip("§f最 好 的 伙 伴");

// 删除配方
var remove = [
    <tconstruct:soil>,
    <botania:altar>,
    <botania:pool>,
    <forestry:ingot_bronze>
] as IItemStack[];
for myRemove in remove{
    recipes.remove(myRemove);
}

// 删除女仆生成
Altar.removeRecipe("touhou_little_maid:spawn_maid");

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
    myEioTooltip.addTooltip("§c我们不建议玩家使用该导线, 因为大概率会引起卡服, 我们推荐使用热力膨胀 Mod 或 XNet Mod中的导线。");
}

val commonCoin = <custommc:item970>;
commonCoin.displayName = "硬币";
commonCoin.addTooltip("Vaule: 100");

// 伪劣雪浪纸
recipes.addShaped(<contenttweaker:artificialfoil> * 4, [
    [<ore:paper>, <ore:paper>, <ore:paper>],
    [<ore:paper>, <contenttweaker:paimon>, <ore:paper>],
    [<ore:paper>, <ore:paper>, <ore:paper>]
]);

// 木板
recipes.addShapeless(<minecraft:planks> * 5,
    [<minecraft:iron_axe>.anyDamage().transformDamage(5), <ore:logWood>]
);

recipes.addShapeless(<minecraft:planks> * 6,
    [<minecraft:diamond_axe>.anyDamage().transformDamage(10), <ore:logWood>]
);

// 水泥
mods.forestry.Carpenter.addRecipe(<tconstruct:soil> * 2, [
    [<contenttweaker:soildust>, <contenttweaker:soildust>, <contenttweaker:soildust>],
    [<contenttweaker:soildust>, null, null],
    [null, null, null]], 20, <liquid:water> * 100
);

// 魔力粉
recipes.addShapeless(<botania:manaresource:23>, [
    <ore:tallow>, <minecraft:dye:15>, <minecraft:glowstone_dust>, <ebwizardry:magic_crystal>
]);

// 元始魔力粉
furnace.addRecipe(<thermalfoundation:material:1028> * 1, <botania:manaresource:23> * 4);

// 花药台
recipes.addShaped(<botania:altar>, [
    [<minecraft:stone:6>, <thermalfoundation:material:1028>, <minecraft:stone:6>],
    [null, <minecraft:stone:6>, null],
    [<minecraft:stone:6>, <minecraft:stone:6>, <minecraft:stone:6>]
]);

// 注魔石
recipes.addShaped(<contenttweaker:magic_stone> * 5, [
    [<minecraft:stone:4>, <minecraft:stone:4>, <minecraft:stone:4>],
    [<minecraft:stone:4>, <thermalfoundation:material:1028>, <minecraft:stone:4>],
    [<minecraft:stone:4>, <minecraft:stone:4>, <minecraft:stone:4>]
]);

// 魔力池
recipes.addShaped(<botania:pool>, [
    [<contenttweaker:magic_stone>, null, <contenttweaker:magic_stone>],
    [<contenttweaker:magic_stone>, <contenttweaker:magic_stone>, <contenttweaker:magic_stone>],
    [null, null, null]
]);

// 白雏菊
mods.botania.Apothecary.removeRecipe("puredaisy");
mods.botania.Apothecary.addRecipe("puredaisy", 
    [<botania:petal>, <botania:petal>, <botania:petal>, <botania:petal>, <ebwizardry:magic_crystal>]
);

// 青铜
recipes.addShapeless(<forestry:ingot_bronze> * 2, 
    [<ore:ingotTin>, <ore:ingotCopper>, 
    <ore:ingotCopper>, <ore:ingotCopper>]
);

recipes.addShapeless(<forestry:ingot_bronze> * 9, 
[
    <ore:blockBronze>
]);
