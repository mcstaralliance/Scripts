#loader contenttweaker
#priority 10000000

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ItemFood;
import mods.contenttweaker.Item;

function itemBuilder(name as string, maxStackSize as int, maxDamage as int, glowing as bool) {
    var item as Item = VanillaFactory.createItem(name);
    item.creativeTab = <creativetab:tab>;
    item.maxStackSize = maxStackSize;
    item.maxDamage = maxDamage;
    item.glowing = glowing;
    item.register();
}

var myPaiMon = VanillaFactory.createItemFood("paimon", 4);
myPaiMon.maxStackSize = 16;
myPaiMon.wolfFood = true;
myPaiMon.healAmount = 4;
myPaiMon.alwaysEdible = true;
myPaiMon.creativeTab = <creativetab:tab>;
myPaiMon.register();

itemBuilder("acquaint_fate", 10, -1, false);
itemBuilder("intertwined_fate", 10, -1, false);
itemBuilder("dragon", 8, -1, true);
itemBuilder("wooden_shears", 1, 233, false);
itemBuilder("clay_furnace", 16, -1, false);
itemBuilder("hammer", 1, 1000, false);
itemBuilder("processor", 64, -1, true);


val itemNames as string[] = [
    "star", "primogem", "artificialfoil", "soildust"
];

for itemName in itemNames {
    itemBuilder(itemName, 64, -1, false);
}
