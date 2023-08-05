onEvent('item.tags', (event) => {
    event.add('forge:mushroom_colonies', ['#forge:mushroom_colonies/brown', '#forge:mushroom_colonies/red']);
    event.add('forge:mushroom_colonies/brown', ['farmersdelight:brown_mushroom_colony']);
    event.add('forge:mushroom_colonies/red', ['farmersdelight:red_mushroom_colony']);
});
