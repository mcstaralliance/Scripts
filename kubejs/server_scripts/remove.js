// priority: 1
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
    'ars_nouveau:glyph_flare'
]
ServerEvents.recipes(event => { 
    console.log('ban items is running');

    for (let toBan of itemToBan){
        event.remove({ output: toBan });
    }
    
    console.log('ban items ending');
  })