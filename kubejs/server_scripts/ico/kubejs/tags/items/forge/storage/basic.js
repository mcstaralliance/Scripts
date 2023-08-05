onEvent('item.tags', (event) => {
    var items = [
        'farmersdelight:basket',
        'immersiveengineering:crate',
        'immersiveengineering:minecart_reinforcedcrate',
        'immersiveengineering:minecart_woodencrate',
        'immersiveengineering:reinforced_crate',
        'minecraft:barrel',
        'minecraft:chest_minecart',
        'minecraft:dispenser',
        'minecraft:dropper',
        'rftoolsstorage:modular_storage',
    ];
    var exceptions = [
        'immersiveengineering:armor_steel_chest',
        'immersiveengineering:armor_faraday_chest',
    ];

    var tags = ['forge:storage', 'forge:storage/basic'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/chest$/)
            .add(/bedside_table/)
            .add(/cabinet/)
            .add(/cupboard/)
            .add(/shulker_box/)
            .add(/_pantry/)
            .add(/rftoolsstorage:storage_module/)
            .remove(exceptions);
    });
});
