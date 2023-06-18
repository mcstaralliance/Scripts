#priority 1

import crafttweaker.item.IItemStack;
import mods.astralsorcery.Altar;
import mods.botania.Apothecary;

var removeRecipe as IItemStack[] = [
    <cyclicmagic:block_forester>,
    <randomthings:ingredient:12>,
    <tconstruct:materials:15>,
    <botania:altar>,
    <cookingforblockheads:sink>,
    <botania:runealtar>,
    <botania:felpumpkin>,
    <botania:manaresource:3>,
    <botania:manaresource:14>,
    <botania:pool>,
    <draconicevolution:draconic_core>,
    <appliedenergistics2:sky_compass>,
    <ic2:resource:12>
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
    <gb:gring11>,
    <gb:gring14>,
    <gb:gring15>,
    <industrialforegoing:enchantment_extractor>
];

for toBan in ban{
    recipes.remove(toBan);
    toBan.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
}

furnace.remove(<variedcommodities:ingot_steel>);
Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/bore_head_liquid");
<astralsorcery:blockborehead>.addTooltip(format.red("已被删除配方"));
Apothecary.removeRecipe(<botania:specialflower>.withTag({type: "rannuncarpus"}));
<botania:specialflower>.withTag({type: "rannuncarpus"}).addTooltip(format.red("已被删除配方"));