onEvent('item.tags', (event) => {
    var items = [
        'rftoolsutility:tank',
        'thermal:fluid_cell',
        'industrialforegoing:black_hole_controller',
        'mekanism:dynamic_valve'
    ];
    var exceptions = [
        'immersivepetroleum:upgrade_tank',
        'mekanism:scuba_tank',
        'mekanism:basic_chemical_tank',
        'mekanism:advanced_chemical_tank',
        'mekanism:elite_chemical_tank',
        'mekanism:ultimate_chemical_tank',
        'mekanism:creative_chemical_tank'
    ];
    var tags = ['forge:storage', 'forge:storage/liquid', 'forge:storage/fluid'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_tank/)
            .add(/fluid_storage/)
            .add(/extrastorage:\w+_fluid/)
            .remove(exceptions);
    });
});
