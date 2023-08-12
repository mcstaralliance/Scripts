onEvent('item.tags', (event) => {
    var items = [
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
