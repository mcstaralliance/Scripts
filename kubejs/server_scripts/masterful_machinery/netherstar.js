onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 36000000 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:nether_star', count: 1 } },
            ],
            ticks: 600,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 480000000 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:nether_star_block', count: 1 } },
            ],
            ticks: 300,
        }
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'netherstar_1';
        recipe.controllerId = 'netherstar';
        event.custom(recipe);
    });
});