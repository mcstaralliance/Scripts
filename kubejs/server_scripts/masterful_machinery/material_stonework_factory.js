onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:cobblestone', count: 128 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'minecraft:water', amount: 250 }},
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'minecraft:lava', amount: 250 }},
            ],
            ticks: 100,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'material_stonework_factory_1';
        recipe.controllerId = 'material_stonework_factory';
        event.custom(recipe);
    });
});