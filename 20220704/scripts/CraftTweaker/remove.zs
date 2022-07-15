import crafttweaker.item.IItemStack;
import scripts.utils.uniBan;
import scripts.utils.techBan;
import mods.techreborn.centrifuge;
import mods.touhoulittlemaid.Altar;
import mods.immersiveengineering.Mixer;
import mods.forestry.Carpenter;
import mods.botania.Apothecary;

var remove as IItemStack[] = [
    <minecraft:chest>,
    <techreborn:machine_frame>,
    <techreborn:machine_frame:1>,
    <thermalexpansion:frame>,
    <enderio:item_material>,
    <refinedstorage:controller>,
    <botania:pool>,
    <botania:altar>,
    <draconicevolution:wyvern_helm>,
    <draconicevolution:wyvern_chest>,
    <draconicevolution:wyvern_legs>,
    <draconicevolution:wyvern_boots>,
    <draconicevolution:wyvern_core>,
    <draconicevolution:draconic_core>
];

var ban as IItemStack[] = [
    // prefab
    <prefab:item_start_house>,
    <prefab:item_instant_bridge>,
    <prefab:item_moderate_house>,
    <prefab:item_bulldozer>,
    <prefab:item_creative_bulldozer>,
    <prefab:item_structure_part>,
    <prefab:item_advanced_chicken_coop>,
    <prefab:item_advanced_horse_stable>,
    <prefab:item_barn>,
    <prefab:item_machinery_tower>,
    <prefab:item_defense_bunker>,
    <prefab:item_mineshaft_entrance>,
    <prefab:item_ender_gateway>,
    <prefab:item_aqua_base>,
    <prefab:item_grassy_plain>,
    <prefab:item_magic_temple>,
    <prefab:item_green_house>,
    <prefab:item_watch_tower>,
    <prefab:item_welcome_center>,
    <prefab:item_jail>,
    <prefab:item_saloon>,
    <prefab:item_nether_gate>,
    <prefab:item_warehouse>,
    <prefab:item_fish_pond>,
    <prefab:item_advanced_warehouse>,
    <prefab:item_monster_masher>,
    <prefab:item_horse_stable>,
    <prefab:item_villager_houses>,
    <prefab:item_chicken_coop>,
    <prefab:item_produce_farm>,
    <prefab:item_tree_farm>,
    <prefab:block_boundary>,
    
    // thermalexpansion
    <thermalexpansion:morb>,
    <thermalexpansion:morb:1>,
    <thermalexpansion:reservoir>,

    // armourer
    <armourers_workshop:tile.skin-library>,
    <armourers_workshop:tile.global-skin-library>,
    <armourers_workshop:tile.armourer>,
    <armourers_workshop:tile.hologram-projector>,
    <armourers_workshop:tile.colour-mixer>,
    <armourers_workshop:tile.dye-table>,
    <armourers_workshop:tile.skinning-table>,

    // draconic
    <draconicevolution:draconic_spawner>,
    <draconicevolution:diss_enchanter>,
    <draconicevolution:celestial_manipulator>,
    <draconicevolution:reactor_component>,
    <draconicevolution:reactor_component:1>,
    <draconicevolution:generator>,
    <draconicevolution:dislocator>,
    <draconicevolution:magnet>,
    <draconicevolution:magnet:1>,
    <draconicevolution:dislocator_bound:1>,
    <draconicevolution:dislocator_bound:2>,
    <draconicevolution:dislocator_pedestal>,
    <draconicevolution:dislocator_receptacle>,

    // EnderIO
    <enderio:block_weather_obelisk>,
    <enderio:item_rod_of_return>,
    <enderio:item_travel_staff>,
    <enderio:block_killer_joe>,
    <enderio:item_dark_steel_helmet>,
    <enderio:item_dark_steel_chestplate>,
    <enderio:item_dark_steel_leggings>,
    <enderio:item_dark_steel_boots>,
    <enderio:item_end_steel_helmet>,
    <enderio:item_end_steel_chestplate>,
    <enderio:item_end_steel_leggings>,
    <enderio:item_end_steel_boots>,
    <enderio:block_powered_spawner>,
    <enderio:item_dark_steel_sword>,
    <enderio:block_tele_pad>,
    <enderio:item_soul_vial>,
    <enderio:block_crafter>,
    <enderio:block_enchanter>,
    <enderio:block_travel_anchor>,
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:travel"}),
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt2"}),
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt3"}),
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt4"}),
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv"}),
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv1"}),
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv2"}),

    // forestry
    <forestry:mailbox>,
    <forestry:trade_station>,
    <forestry:stamp_collector>,
    <forestry:rainmaker>,
    <forestry:letters>,
    
    // immersiveengineering
    <immersiveengineering:revolver>,
    <immersiveengineering:railgun>,
    <immersiveengineering:chemthrower>,
    <immersiveengineering:toolbox>,
    
    // botania
    <botania:enderhand>,
    <botania:starfield>,
    <botania:manabomb>,
    <botania:laputashard>,
    <botania:spawnermover>,
    <botania:astrolabe>,
    <botania:waterrod>,
    <botania:exchangerod>,
    <botania:blackholetalisman>,
    <botania:lens:7>,
    
    // sakura
    <sakura:samurai_helmet>,
    <sakura:samurai_chest>,
    <sakura:samurai_pants>,
    <sakura:samurai_shoes>,
    
    // quark
    <quark:pickarang>,
    
    // cfm
    <cfm:item_package>,
    <cfm:present>,
    
    // rftools
    <rftools:builder>,
    <rftools:spawner>,
 
    // techreborn
    <techreborn:chunk_loader>,
    <techreborn:fluid_replicator>,
    <techreborn:rolling_machine>,
    <techreborn:wire_mill>,
    <techreborn:chemical_reactor>,
    <techreborn:nuke>,
    
    // tfc
    <tfc:powderkeg>
];

var banTech as IItemStack[] = [
    <techreborn:dynamiccell>*16,
    <techreborn:dynamiccell>*16,
    <techreborn:dynamiccell>*16,
    <techreborn:dynamiccell>*4,
    <techreborn:dynamiccell>*4,
    <techreborn:dynamiccell>*1,
    <techreborn:dynamiccell>*1
];

var banTouhou as string[] = [
    "touhou_little_maid:spawn_maid",
    "touhou_little_maid:reborn_maid",
    "touhou_little_maid:craft_break_guide"
];

for removes in remove{
    recipes.remove(removes);
}

for bans in ban{
    uniBan(bans);
}

for tech in banTech{
    techBan(tech);
}

for touhou in banTouhou{
    Altar.removeRecipe(touhou);
}

// banIE
Mixer.removeRecipe(<liquid:concrete>);
var concreteBuckets = <forge:bucketfilled>.withTag({FluidName: "concrete", Amount: 1000});
concreteBuckets.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));

// banForestry
Carpenter.removeRecipe(<forestry:letters>);

// banBotania
Apothecary.removeRecipe("rannuncarpus");
<botania:specialflower>.withTag({type: "rannuncarpus"}).addTooltip(format.red(game.localize("tooltip.recipe_deleted")));