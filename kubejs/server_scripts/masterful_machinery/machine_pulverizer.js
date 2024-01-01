onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'lazierae2:coal_dust', count: 9 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:coal_block', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:iron_nugget', count: 81 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:iron_block', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
            ],
            ticks: 20,
        },
                {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:sky_dust', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:sky_stone_block', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_dust', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_dust', count: 4 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_block', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
            ],
            ticks: 40,
        }
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'machine_pulverizer_1';
        recipe.controllerId = 'machine_pulverizer';
        event.custom(recipe);
    });
});
