onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:sword_steel'
    ];

    event
        .get('forge:weapons/sword')
        .add(items)
        .add(/_sword/)
});
