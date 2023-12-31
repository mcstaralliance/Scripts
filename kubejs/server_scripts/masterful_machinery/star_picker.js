onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:iron_ore', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:gold_ore', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:coal_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:lapis_ore', count: 5 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:diamond_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone_ore', count: 5 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:emerald_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:nether_quartz_ore', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:uraninite_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:copper_ore', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:zinc_ore', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:apatite_ore', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:cinnabar_ore', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:niter_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:sulfur_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:tin_ore', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:lead_ore', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:silver_ore', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:nickel_ore', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'buddycards:luminis_ore', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'ars_nouveau:arcane_ore', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'gobber2:gobber2_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'gobber2:gobber2_ore_nether', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:quartz_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:charged_quartz_ore', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:ore_aluminum', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:ore_uranium', count: 1 } },
            ],
            inputs: [
                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 20000 } },
            ],
            ticks: 3000,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'star_picker_1';
        recipe.controllerId = 'star_picker';
        event.custom(recipe);
    });
});