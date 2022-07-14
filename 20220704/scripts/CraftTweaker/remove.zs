import crafttweaker.item.IItemStack;
import scripts.utils.uniBan;

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
];

for removes in remove{
    recipes.remove(removes);
}

for bans in ban{
    uniBan(bans);
}