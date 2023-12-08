onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_table', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_table', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_catalyst', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 20000 } },
            ],
            ticks: 2000,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:basic_flux_storage', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_block', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:obsidian_glass', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 2000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:herculean_flux_storage', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_block', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_star', count: 4 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 2000 } },
            ],
            ticks: 500,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_plug', count: 4 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_block', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone_block', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
            ],
            ticks: 1000,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'particle_fusion_reactor_1';
        recipe.controllerId = 'particle_fusion_reactor';
        event.custom(recipe);
    });
});