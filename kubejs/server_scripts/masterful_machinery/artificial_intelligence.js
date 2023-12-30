onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'endless:infinity_ingot', count: 2 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'endless:cosmic_meatballs', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'endless:ultimate_stew', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'endless:endest_pearl', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'endless:record_fragment', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'aeadditions:item_storage_component_16384', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'aeadditions:fluid_storage_component_4096', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:singularity', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:gaia_ingot', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:starmetal', count: 1 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 1000,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 512 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone', count: 128 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 128 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:quartz', count: 128 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 512 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone', count: 128 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:certus_quartz_crystal', count: 128 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:quartz', count: 128 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_certus_quartz_crystal', count: 512 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 192 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 192 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_certus_quartz_crystal', count: 512 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:certus_quartz_crystal', count: 192 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 192 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:purified_fluix_crystal', count: 512 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:fluix_crystal', count: 192 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sand', count: 192 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 50000 } },
            ],
            ticks: 40,
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:terrasteel_block', count: 32 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'botania:manasteel_block', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_diamond_block', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_pearl', count: 288 } },
                { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 7500000 } },
            ],
            ticks: 40,
        }
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'artificial_intelligence_1';
        recipe.controllerId = 'artificial_intelligence';
        event.custom(recipe);
    });
});