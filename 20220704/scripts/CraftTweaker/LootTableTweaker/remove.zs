#priority 10

import crafttweaker.item.IItemStack;
import mods.ltt.LootTable;

// removeLootTable
var lootTable as string[] = [
    "minecraft:chests/abandoned_mineshaft",
    "minecraft:chests/desert_pyramid",
    "minecraft:chests/end_city_treasure",
    "minecraft:chests/igloo_chest",
    "minecraft:chests/jungle_temple",
    "minecraft:chests/jungle_temple_dispenser",
    "minecraft:chests/nether_bridge",
    "minecraft:chests/simple_dungeon",
    "minecraft:chests/spawn_bonus_chest",
    "minecraft:chests/stronghold_corridor",
    "minecraft:chests/stronghold_crossing",
    "minecraft:chests/stronghold_library",
    "minecraft:chests/village_blacksmith",
    "minecraft:chests/woodland_mansion"
];

for removeLootTable in lootTable{
    mods.ltt.LootTable.removeTable(removeLootTable);
}
