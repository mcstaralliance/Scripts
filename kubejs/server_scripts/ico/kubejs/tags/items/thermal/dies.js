onEvent('item.tags', (event) => {
    thermalDies.forEach((dieName) => {
        event.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`]);
        event.add(`thermal:crafting/dies/${dieName}`, [`thermal:press_${dieName}_die`]);
    });
    event.add('thermal:crafting/casts', ['#tconstruct:casts/multi_use']);
});
