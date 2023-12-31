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
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 128 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:quartz', count: 32 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 96 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:certus_quartz_crystal', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:quartz', count: 32 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_certus_quartz_crystal', count: 128 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 48 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 48 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_certus_quartz_crystal', count: 96 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:certus_quartz_crystal', count: 48 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 48 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_fluix_crystal', count: 128 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 64 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_fluix_crystal', count: 128 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 64 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrabotany:treasurebox', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:life_essence', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'extrabotany:heromedal', count: 2 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrabotany:challengeticket', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 1000000 } },
            ],
            ticks: 200,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_advanced', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'lazierae2:speculation_core_4', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:precision_mechanism', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'arsarsenal:source_steel_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_simple', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 100000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_advanced', count: 4 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'lazierae2:speculation_core_4', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:precision_mechanism', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'arsarsenal:source_steel_ingot', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_simple', count: 4 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 200000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_supreme', count: 8 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:machine_frame_advanced', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:netherite_ingot', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:ether_gas_bucket', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 500000 } },
            ],
            ticks: 100,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:terrasteel_block', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:manasteel_block', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_diamond_block', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_pearl', count: 9 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 750000 } },
            ],
            ticks: 50,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:precision_mechanism', count: 8 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:golden_sheet', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:cogwheel', count: 24 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:iron_nugget', count: 24 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 750000 } },
            ],
            ticks: 50,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'particle_fusion_reactor_1';
        recipe.controllerId = 'particle_fusion_reactor';
        event.custom(recipe);
    });
});