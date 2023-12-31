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
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'tiab:timeinabottle', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:glass_bottle', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 200 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: "industrialforegoing:ether_gas", amount: 250 }},
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'paimon:paimon', count: 512 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:cobblestone', count: 1600 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: "minecraft:water", amount: 1000 }},
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'aquaculture:neptunium_block', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'thermal:aquachow', count: 6 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: "minecraft:water", amount: 10000 }},
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'aquaculture:neptunium_block', count: 9 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'thermal:aquachow', count: 54 } },
                { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: "minecraft:water", amount: 160000 }},
            ],
            ticks: 800,
        }
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'marine_fisher_1';
        recipe.controllerId = 'marine_fisher';
        event.custom(recipe);
    });
});