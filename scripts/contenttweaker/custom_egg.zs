#loader contenttweaker
#priority 10000

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;

function itemBuilder(name as string, maxStackSize as int, maxDamage as int, glowing as bool) {
    var item as Item = VanillaFactory.createItem(name);
    item.creativeTab = <creativetab:materials.base>;
    item.maxStackSize = maxStackSize;
    item.maxDamage = maxDamage;
    item.glowing = glowing;
    item.register();
}

val itemNames as string[] = [
    "copper", "titanium", 
    "draconium", "richslag", 
    "slag", "iron", 
    "xp", "aluminum", 
    "wood", "gold", 
    "tin","quartz", 
    "star", "ikun", 
    "neutronium", "stainlesssteel", 
    "tungstensteel", "rhodiumplatedpalladium", 
    "radon", "soldering_alloy", 
    "specialrubber", "polymerclay"
];

for itemName in itemNames {
    itemBuilder(itemName + "_egg", 64, -1, false);
}
