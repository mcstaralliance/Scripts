
// Remove crafting
const itemsToRemove = [
    'minecraft:snow_block',
    'minecraft:furnace',
    'minecraft:blast_furnace'
];

onEvent('recipes', event => {

    for (let toRemoveItem of itemsToRemove) {
        event.remove({type: 'minecraft:crafting_shaped', output: toRemoveItem });
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