onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'endless:neutronium_ingot', count: 48 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:cobblestone', count: 1 } },
            ],
            ticks: 250,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'neutronium_collector_1';
        recipe.controllerId = 'neutronium_collector';
        event.custom(recipe);
    });
});