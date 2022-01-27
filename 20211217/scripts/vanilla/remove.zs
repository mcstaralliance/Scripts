#priority 3000

import crafttweaker.item.IItemStack;

import scripts.utils.uniBan;

var toBan as IItemStack[] = [
    // Prefab
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

    // ic2
    <ic2:te:1>,
    <ic2:te:2>,
    <ic2:te:40>,
    <ic2:te:57>,
    <ic2:te:60>,
    <ic2:te:62>,
    <ic2:te:63>,
    <ic2:te:64>,
    <ic2:te:82>,
    <ic2:te:89>,

    // thermalexpansion
    <thermalexpansion:morb>,
    <thermalexpansion:morb:1>,
    <thermalexpansion:reservoir>,

    // appliedenergistics2
    <appliedenergistics2:spatial_io_port>,
    <appliedenergistics2:spatial_pylon>,
    <appliedenergistics2:part:302>,
    <appliedenergistics2:entropy_manipulator>,
    <appliedenergistics2:matter_cannon>,
    <appliedenergistics2:network_tool>,
    <appliedenergistics2:part:321>,
    <appliedenergistics2:part:320>,
    <appliedenergistics2:tiny_tnt>,

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

    // eio
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

    // extracells
    <extracells:part.base:5>,
    <extracells:part.base:6>,
    <extracells:part.base:12>,

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

    // sakura
    <sakura:samurai_helmet>,
    <sakura:samurai_chest>,
    <sakura:samurai_pants>,
    <sakura:samurai_shoes>,

    // tconstruct
    <tconstruct:throwball>,
    
    // conarm
    <conarm:travel_sack>
];

// remove
var toRemove as IItemStack[] = [
    // appliedenergistics2
    <appliedenergistics2:drive>,
    <appliedenergistics2:interface>,
    <appliedenergistics2:condenser>,
    <appliedenergistics2:material:35>,
    <appliedenergistics2:material:38>,
    <appliedenergistics2:controller>,

    // botania
    <botania:altar>,
    <botania:pool>,
    <botania:pylon>,
    <botania:manaresource:14>,

    // tconstruct
    <tconstruct:soil>,

    // forestry
    <forestry:ingot_bronze>,
    
    // ic2
    <ic2:resource:12>,
    <ic2:te:45>,

    // enderio
    <enderio:item_material>,
    <enderio:block_slice_and_splice>,
    <enderio:block_enhanced_alloy_smelter>,

    // thermalexpansion
    <thermalexpansion:frame>,
    <thermalexpansion:machine>,
    <thermalexpansion:machine:1>,
    <thermalexpansion:machine:5>,
    <thermalexpansion:machine:6>,
    <thermalexpansion:machine:8>,

    // immersiveengineering
    <immersiveengineering:stone_decoration:1>,

    // contenttweaker
    <contenttweaker:dragon>,

    // draconicevolution
    <draconicevolution:wyvern_core>,
    <draconicevolution:draconic_core>,

    // environmentaltech
    <environmentaltech:structure_frame_3>,
    <environmentaltech:structure_frame_4>,
    <environmentaltech:laser_core>,

    // cfm
    <cfm:item_log>,
    <cfm:printer>,

    // cookingforblockheads
    <cookingforblockheads:sink>,

    // advgenerators
    <advgenerators:turbine_enderium>,
    <advgenerators:turbine_manyullyn>,
    <advgenerators:turbine_adv_alloy>,
    <advgenerators:iron_frame>
    
];

for ban in toBan {
    uniBan(ban);
}

for remove in toRemove{
    recipes.remove(remove);
}
