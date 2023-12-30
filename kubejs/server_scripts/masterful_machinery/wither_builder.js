onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:nether_star', count: 2 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:wither_skeleton_skull', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 6000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:nether_star', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:skeleton_skull', count: 2 } },
                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 4000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:dragon_egg', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:end_crystal', count: 2 } },
                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 10000 } },
            ],
            ticks: 500,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wither_builder_1';
        recipe.controllerId = 'wither_builder';
        event.custom(recipe);
    });
});