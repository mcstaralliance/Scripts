onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:armor_faraday_legs',
        'immersiveengineering:armor_steel_legs',
        'mekanism:hazmat_pants',
        'mekanism:mekasuit_pants',
    ];


    var tags = ['forge:armor', 'forge:armor/leggings'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_leggings/)
    });
});
