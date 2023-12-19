onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:cod', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:salmon', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'aquaculture:neptunium_ingot', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sweet_berries', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 200 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'minecraft:water', amount: 2500 }},
            ],
            ticks: 200,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'marine_fisher_1';
        recipe.controllerId = 'marine_fisher';
        event.custom(recipe);
    });
});