#priority 2000
import mods.forestry.Carpenter;

// remove
Carpenter.removeRecipe(<forestry:letters>);
<forestry:letters>.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));


// add
// 水泥
Carpenter.addRecipe(<tconstruct:soil> * 2, [
    [<contenttweaker:soildust>, <contenttweaker:soildust>, <contenttweaker:soildust>],
    [<contenttweaker:soildust>, null, null],
    [null, null, null]
    ], 20, <liquid:water> * 100
);
