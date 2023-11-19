onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'id', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 500 }},
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'id', count: 4 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 500 }},
            ],
            ticks: 80,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'star_picker_1';
        recipe.controllerId = 'star_picker';
        event.custom(recipe);
    });
});