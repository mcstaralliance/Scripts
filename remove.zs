import crafttweaker.item.IItemStack;

var removeRecipe as IItemStack[] = [
    <cyclicmagic:block_forester>,
    <ironchest:wood_iron_chest_upgrade>,
    <ironchest:wood_copper_chest_upgrade>,
    <ironchest:copper_iron_chest_upgrade>,
    <ironchest:copper_silver_chest_upgrade>,
    <ironchest:silver_gold_chest_upgrade>,
    <ironchest:iron_gold_chest_upgrade>,
    <ironchest:gold_diamond_chest_upgrade>,
    <ironchest:iron_chest>,
    <ironchest:iron_chest:1>,
    <ironchest:iron_chest:2>,
    <ironchest:iron_chest:3>,
    <ironchest:iron_chest:4>,
    <ironchest:iron_chest:5>,
    <ironchest:iron_chest:6>,
    <enderio:item_material:51>,
    <enderio:item_material>,
    <integrateddynamics:crystalized_menril_block>,
    <minecraft:clock>,
    <randomthings:timeinabottle>,
    <cyberware:surgery_chamber>
];

for myRemoveRecipes in removeRecipe{
    recipes.remove(myRemoveRecipes);
}

var ban as IItemStack[] = [
    <cyclicmagic:uncrafting_block>
];

for toBan in ban{
    recipes.remove(toBan);
    toBan.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
}

furnace.remove(<variedcommodities:ingot_steel>);

// rftools
recipes.removeShaped(<rftools:storage_module_tablet:1>, [[<rftools:storage_module_tablet>, <rftools:storage_module>]]);
recipes.removeShaped(<rftools:storage_module_tablet:1>, [[<rftools:storage_module_tablet>, <rftools:storage_module:1>]]);
recipes.removeShaped(<rftools:storage_module_tablet:1>, [[<rftools:storage_module_tablet>, <rftools:storage_module:2>]]);
<rftools:storage_module_tablet:1>.addTooltip(format.red(game.localize("tooltip.tablet_deleted")));