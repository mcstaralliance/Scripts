#loader contenttweaker
#priority 2000

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.Block;
import mods.contenttweaker.Item;
import mods.contenttweaker.ItemFood;

val starCraftCrativeTab as CreativeTab = VanillaFactory.createCreativeTab("tab", <item:minecraft:nether_star>);
starCraftCrativeTab.register();

function blockBuilder(name as string, toolClass as string) {
    var block as Block = VanillaFactory.createBlock(name, <blockmaterial:wood>);
    block.creativeTab = <creativetab:tab>;
    block.blockSoundType = <soundtype:wood>;
    block.toolClass = toolClass;
    block.toolLevel = 1.0;
    block.fullBlock = true;
    block.register();   
}

function itemBuilder(name as string, maxStackSize as int, maxDamage as int, glowing as bool) {
    var item as Item = VanillaFactory.createItem(name);
    item.creativeTab = <creativetab:tab>;
    item.maxStackSize = maxStackSize;
    item.maxDamage = maxDamage;
    item.glowing = glowing;
    item.register();
}

var myPaiMon as ItemFood = VanillaFactory.createItemFood("paimon", 4);
myPaiMon.maxStackSize = 16;
myPaiMon.wolfFood = true;
myPaiMon.healAmount = 4;
myPaiMon.alwaysEdible = true;
myPaiMon.creativeTab = <creativetab:tab>;
myPaiMon.register();

blockBuilder("magic_log", "axe");
blockBuilder("skull_block", "pickaxe");
blockBuilder("magic_stone", "pickaxe");

itemBuilder("xiangyu", 10, -1, false);
itemBuilder("jiuchan", 10, -1, false);
itemBuilder("dragon", 8, -1, true);
itemBuilder("wooden_shears", 1, 233, false);
itemBuilder("clay_furnace", 16, -1, false);
itemBuilder("hammer", 1, 1000, false);
itemBuilder("processor", 64, -1, true);

val itemNames as string[] = [
    "star", "primogem", "artificialfoil", "soildust", "aluminium_ingot",
    "copper_ingot", "iridium_ingot", "lead_ingot", "tin_ingot",
    "uranium_ingot", "silver_ingot", "platinum_ingot", "nickel_ingot"
];

for itemName in itemNames {
    itemBuilder(itemName, 64, -1, false);
}
