
// Remove crafting
const itemsToRemove = [
    'minecraft:snow_block',
    'minecraft:furnace',
    'minecraft:blast_furnace',
    'immersiveengineering:blastbrick',
    'immersiveengineering:blastbrick_reinforced',
    'ftbic:fluid_cell',
    'ftbic:fuse',
    'minecraft:iron_nugget'
];

const itemsToRemoveFurnace = [
    'ftbic:industrial_grade_metal',
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
    'chunkloaders:ultimate_chunk_loader'
];

onEvent('recipes', event => {
    for (let toBanItem of itemsToBan) {
        event.remove({output: toBanItem });
    }
});