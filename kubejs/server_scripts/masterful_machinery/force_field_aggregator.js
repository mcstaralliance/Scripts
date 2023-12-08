onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_block', count: 4 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_dust', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_core', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 2500 } },
            ],
            ticks: 600,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_controller', count: 4 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_core', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:elementium_ingot', count: 6 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 30000 } },
            ],
            ticks: 1000,
        },
];
        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'force_field_aggregator_1';
        recipe.controllerId = 'force_field_aggregator';
        event.custom(recipe);
    });
});