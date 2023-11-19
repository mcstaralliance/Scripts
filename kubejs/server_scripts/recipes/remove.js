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
    'appliedenergistics2:security_station'
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