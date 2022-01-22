#priority 2000

import mods.touhoulittlemaid.Altar;

// remove
var toRemove as string[] = [
    "touhou_little_maid:spawn_maid",
    "touhou_little_maid:reborn_maid",
    "touhou_little_maid:craft_break_guide"
];

for remove in toRemove{
    Altar.removeRecipe(remove);
}

// add
