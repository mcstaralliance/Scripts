#priority 1

import crafttweaker.item.IItemStack;
import mods.astralsorcery.Altar;
import mods.botania.Apothecary;

var removeRecipe as IItemStack[] = [
    <cyclicmagic:block_forester>,
    <randomthings:ingredient:12>,
    <botania:pool>,
    <draconicevolution:draconic_core>,
    <ic2:resource:12>,
    <botania:altar>,
    <tconstruct:materials:15>,
    <cookingforblockheads:sink>,
    <botania:felpumpkin>,
    <botania:runealtar>,
    <botania:manaresource:3>,
    <botania:manaresource:14>,
    <appliedenergistics2:sky_compass>,
    <botania:pool:2>,
    <botania:spreader>,
    <bloodmagic:soul_snare>,
    <bloodmagic:sentient_sword>
];

for myRemoveRecipes in removeRecipe{
    recipes.remove(myRemoveRecipes);
}

var ban as IItemStack[] = [
    <cyclicmagic:uncrafting_block>,
    <randomthings:playerinterface>,
    <randomthings:blockdestabilizer>,
    <randomthings:weatheregg:1>,
    <randomthings:weatheregg:2>,
    <randomthings:eclipsedclock>,
    <cyclicmagic:tool_push>,
    <cyclicmagic:chest_sack_empty>,
    <cyclicmagic:corrupted_chorus>,
    <cfm:item_envelope>,
    <quark:pickarang>,
    <cyclicmagic:tool_swap>,
    <armourers_workshop:item.mannequin>,
    <armourers_workshop:tile.skin-library>,
    <armourers_workshop:tile.skinning-table>,
    <armourers_workshop:tile.dye-table>,
    <armourers_workshop:tile.outfit-maker>,
    <botania:laputashard:14>,
    <botania:laputashard:19>,
    <botania:laputashard:9>,
    <botania:laputashard>,
    <botania:laputashard:4>,
    <armourers_workshop:tile.colour-mixer>,
    <appliedenergistics2:spatial_storage_cell_16_cubed>,
    <appliedenergistics2:matter_cannon>,
    <appliedenergistics2:tiny_tnt>,
    <appliedenergistics2:spatial_io_port>,
    <draconicevolution:celestial_manipulator>,
    <botania:exchangerod>,
    <botania:invisibilitycloak>,
    <botania:spawnerclaw>,
    <appliedenergistics2:spatial_pylon>,
    <appliedenergistics2:entropy_manipulator>,
    <appliedenergistics2:spatial_storage_cell_2_cubed>,
    <botania:astrolabe>,
    <enderio:block_weather_obelisk>,
    <quark:iron_rod>,
    <botania:manabomb>,
    <randomthings:endermailbox>,
    <appliedenergistics2:material:32>,
    <appliedenergistics2:material:34>,
    <appliedenergistics2:material:33>,
    <appliedenergistics2:spatial_storage_cell_128_cubed>,
    <enderio:block_powered_spawner>,
    <randomthings:enderletter>,
    <enderio:block_death_pouch>,
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:direct"}),
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:travel"}),
    <draconicevolution:draconic_spawner>,
    <enderio:item_rod_of_return>,
    <cyclicmagic:block_miner_smart>,
    <randomthings:blazeandsteel>,
    <cyclicmagic:fluid_drain>,
    <cyclicmagic:block_user>,
    <cfm:printer>,
    <armourers_workshop:tile.global-skin-library>,
    <rftools:builder>,
    <industrialforegoing:enchantment_extractor>
];

for toBan in ban{
    recipes.remove(toBan);
    toBan.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
}

var specialBan as IItemStack[] = [
    <astralsorcery:blockborehead>,
    <botania:specialflower>.withTag({type: "rannuncarpus"})
];

for toSpecialBan in specialBan{
    toSpecialBan.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
} 

furnace.remove(<variedcommodities:ingot_steel>);
Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/bore_head_liquid");
Apothecary.removeRecipe(<botania:specialflower>.withTag({type: "rannuncarpus"}));
