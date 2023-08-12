onEvent('jei.add.items', (event) => {
    const items = [
        'lootr:lootr_chest',
        'lootr:lootr_barrel',
        'lootr:lootr_trapped_chest'
    ];


    items.forEach((item) => event.add(item));
});

