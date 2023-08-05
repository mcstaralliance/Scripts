onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:armor_faraday_feet',
        'immersiveengineering:armor_steel_feet',
        'mekanism:free_runners',
    ];

    var tags = ['forge:armor', 'forge:armor/boots'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_boots/)
    });
});
