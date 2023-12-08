// Remove crafting
const itemsToRemove = [
    'minecraft:snow_block',
    'minecraft:furnace',
    'minecraft:blast_furnace',
    'immersiveengineering:blastbrick',
    'immersiveengineering:blastbrick_reinforced',
    'minecraft:iron_nugget',
    'create:mechanical_press',
    'create:mechanical_mixer',
    'create:andesite_alloy',
    'create:encased_fan',
    'create:rose_quartz',
    'appliedenergistics2:quartz_growth_accelerator',
    'industrialforegoing:machine_frame_pity',
    'appliedenergistics2:inscriber',
    'appliedenergistics2:chest',
    'appliedenergistics2:controller',
    'appliedenergistics2:security_station',
    'create:mechanical_crafter',
    'industrialforegoing:machine_frame_advanced',
    'modularrouters:item_router',
    'woot:heart',
    'botania:apothecary_default',
    'botania:diluted_pool',
    'botania:mana_pool',
    'botania:terra_plate',
    'create:creative_blaze_cake',
    'rftoolsbase:machine_frame',
    'appliedenergistics2:crafting_unit',
    'appliedenergistics2:molecular_assembler',
    'appliedenergistics2:condenser',
    'ars_nouveau:volcanic_accumulator',
    'ars_nouveau:alchemical_sourcelink',
    'ars_nouveau:vitalic_sourcelink',
    'ars_nouveau:mycelial_sourcelink',
    'ars_nouveau:mana_condenser',
    'extendedcrafting:elite_table',
    'fluxnetworks:basic_flux_storage',
    'fluxnetworks:flux_plug',
    'fluxnetworks:herculean_flux_storage',
    'fluxnetworks:flux_point',
    'fluxnetworks:flux_block',
    'fluxnetworks:flux_controller'
];

const itemsToRemoveFurnace = [
    
]

onEvent('recipes', event => {
    for (let toRemoveItem of itemsToRemove) {
        event.remove({type: 'minecraft:crafting_shaped', output: toRemoveItem });
        event.remove({type: 'minecraft:crafting_shapeless', output: toRemoveItem});
    }
}); 

onEvent('recipes', event => {
    for (let toRemoveItemFurnace of itemsToRemoveFurnace) {
        event.remove({type: 'minecraft:smelting', output: toRemoveItemFurnace });
    }
}); 

// Ban & Remove all recipe for this item (about all recipetype)
const itemsToBan = [
    'chunkloaders:single_chunk_loader',
    'chunkloaders:basic_chunk_loader',
    'chunkloaders:advanced_chunk_loader',
    'chunkloaders:ultimate_chunk_loader',
    '@compactmachines'
];

onEvent('recipes', event => {
    for (let toBanItem of itemsToBan) {
        event.remove({output: toBanItem });
    }
});

onEvent('recipes', event => {
    event.remove({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'})
    event.remove({id: 'astralsorcery:altar/altar_attunement'})
    event.remove({id: 'astralsorcery:altar/altar_constellation'})
    event.remove({id: 'astralsorcery:altar/attunement_altar'})
    event.remove({id: 'astralsorcery:altar/altar_radiance'})
    event.remove({id: 'fluxnetworks:herculeanfluxstorage'})
})