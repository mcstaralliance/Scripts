// priority: 1

const idToRemove = [
    'cagedmobs:crafting/star_infused_netherite_ingot',
    'draconicevolution:components/wyvern_core',
    'draconicevolution:components/draconium_core'
]

const itemToRemove =[
    'avaritia:infinity_armor_helmet',
    'avaritia:infinity_armor_chestplate',
    'avaritia:infinity_armor_leggings',
    'avaritia:infinity_armor_boots',
    'avaritia:swordofthe_cosmos',
    'chunkloaders:advanced_chunk_loader',
    'chunkloaders:basic_chunk_loader',
    'chunkloaders:single_chunk_loader',
    'chunkloaders:ultimate_chunk_loader',
    'create:mechanical_drill',
    'create:mechanical_plough',
    'avaritia:infinity_catalyst'
]

const itemToBan = [
    'ae2:entropy_manipulator',
    'draconicevolution:celestial_manipulator',
    'mekanism:digital_miner',
    'ars_nouveau:glyph_lightning',
    'evilcraft:lightning_grenade',
    'evilcraft:mace_of_destruction',
    'create:schematicannon',
    'ae2:spatial_pylon',
    'ae2:tiny_tnt',
    'evilcraft:lightning_bomb',
    'thermal:lightning_charge',
    'thermal:ice_charge',
    'enderio:staff_of_travelling',
    'enderio:staff_of_levity',
    'ars_nouveau:glyph_ender_inventory',
    'create:schematic_table',
    'ae2:matter_cannon',
    'ars_nouveau:glyph_explosion',
    'industrialforegoing:infinity_nuke',
    'immersiveengineering:chemthrower',
    'botania:spawner_mover',
    'botania:rannuncarpus',
    'botania:rannuncarpus_chibi',
    'botania:floating_rannuncarpus',
    'botania:floating_rannuncarpus_chibi',
    'naturesaura:placer',
    'botania:starfield',
    'ars_nouveau:glyph_flare',
    'mekanism:cardboard_box'
]
ServerEvents.recipes(event => { 
    console.log('ban items is running');

    for (let toBan of itemToBan){
        event.remove({ output: toBan });
    }
    for (let toRemove of idToRemove){
        event.remove({ id: toRemove});
    }
    for (let toRemoveItem of itemToRemove){
        event.remove({ output: toRemoveItem});
    }

    console.log('ban items ending');
  })
