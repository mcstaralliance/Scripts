#priority 1

import crafttweaker.item.IItemStack;
import mods.touhoulittlemaid.Altar;
import mods.botania.Apothecary;
import mods.thermalexpansion.Factorizer;
import mods.thermalexpansion.Transposer;

var removeRecipe as IItemStack[] = [
    <cyclicmagic:block_forester>,
    <enderio:item_material:51>,
    <enderio:item_material>,
    <minecraft:clock>,
    <randomthings:timeinabottle>,
    <cyberware:surgery_chamber>,
    <scannable:scanner>,
    <thermalexpansion:frame:64>,
    <thermalexpansion:frame>,
    <enderio:item_material:20>,
    <rftools:machine_frame>,
    <scannable:module_blank>,
    <fluxnetworks:fluxcontroller>,
    <deepmoblearning:deep_learner>,
    <apotheosis:hellshelf>,
    <botania:runealtar>,
    <botania:spreader>,
    <botania:spreader:3>,
    <deepmoblearning:extraction_chamber>,
    <threng:big_assembler:1>,
    <appliedenergistics2:material:35>,
    <appliedenergistics2:material:54>,
    <draconicevolution:draconic_core>,
    <draconicevolution:wyvern_core>,
    <draconicevolution:wyvern_energy_core>,
    <draconicevolution:wyvern_helm>,
    <draconicevolution:wyvern_chest>,
    <draconicevolution:wyvern_legs>,
    <draconicevolution:wyvern_boots>,
    <deepmoblearning:polymer_clay>,
    <minecraft:brick>,
    <minecraft:experience_bottle>,
    <minecraft:enchanting_table>,
    <roost:breeder>,
    <draconicevolution:draconic_energy_core>,
    <appliedenergistics2:controller>,
    <minecraft:beacon>,
    <gregtech:machine:1>,
    <gregtech:machine:3>,
    <gregtech:machine:17>,
    <gregtech:machine:1000>,
    <gregtech:machine:1647>,
    <gregtech:machine:305>,
    <rftools:environmental_controller>,
    <cookingforblockheads:sink>,
    <deepmoblearning:simulation_chamber>,
    <fluxnetworks:fluxplug>,
    <fluxnetworks:fluxpoint>,
    <botania:altar>,
    <cyclicmagic:storage_bag>,
    <redstonearsenal:material:224>,
    <randomthings:spectrecharger>,
    <cyclicmagic:harvester_block>,
    <thermalfoundation:material:512>,
    <redstonearsenal:material:193>,
    <cyclicmagic:peat_generator>,
    <minecraft:tripwire_hook>,
    <cyclicmagic:beacon_potion>
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
    <endreborn:entropy_user>,
    <cyclicmagic:block_user>,
    <cfm:printer>,
    <gregtech:machine:1390>,
    <gregtech:machine:1391>,
    <gregtech:machine:1392>,
    <gregtech:machine:1393>,
    <gregtech:machine:1394>,
    <gregtech:machine:1395>,
    <gregtech:machine:1396>,
    <gregtech:machine:1397>,
    <armourers_workshop:tile.global-skin-library>,
    <rftools:builder>
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

mods.botania.PureDaisy.removeRecipe(<botania:livingwood>);

Altar.removeRecipe("touhou_little_maid:spawn_maid");
Altar.removeRecipe("touhou_little_maid:reborn_maid");
Altar.removeRecipe("touhou_little_maid:craft_break_guide");

Apothecary.removeRecipe("rannuncarpus");
<botania:specialflower>.withTag({type: "rannuncarpus"}).addTooltip(format.red(game.localize("tooltip.recipe_deleted")));

<ore:ingotTungsten>.remove(<endreborn:item_ingot_wolframium>);

Factorizer.removeRecipeSplit(<minecraft:clay>);
Transposer.removeFillRecipe(<minecraft:glass_bottle>, <liquid:xpjuice>);
Transposer.removeFillRecipe(<minecraft:glass_bottle>, <liquid:experience>);
