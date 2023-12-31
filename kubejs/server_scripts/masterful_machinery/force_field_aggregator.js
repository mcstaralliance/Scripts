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
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:exotic_a', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:slaughter_3', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'woot:machine_casing', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 400,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:exotic_b', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:looting_3', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'woot:machine_casing', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 400,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:exotic_c', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:efficiency_3', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'woot:machine_casing', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 400,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:exotic_d', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:rate_3', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'woot:machine_casing', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 400,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:exotic_e', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:mass_3', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'woot:machine_casing', count: 8 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 400,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 48 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:quartz', count: 16 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 32 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:certus_quartz_crystal', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:quartz', count: 16 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_certus_quartz_crystal', count: 48 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 16 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_certus_quartz_crystal', count: 32 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:certus_quartz_crystal', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 16 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_fluix_crystal', count: 32 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 16 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:dice', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:life_essence', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'extrabotany:rewardbagb', count: 4 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:gaia_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 16 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'buddycards:zylex', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:emerald', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:chorus_fruit', count: 1 } },
            ],
            ticks: 20,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:si_plate', count: 9 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'woot:si_ingot', count: 9 } },
            ],
            ticks: 180,
        }
];
        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'force_field_aggregator_1';
        recipe.controllerId = 'force_field_aggregator';
        event.custom(recipe);
    });
});