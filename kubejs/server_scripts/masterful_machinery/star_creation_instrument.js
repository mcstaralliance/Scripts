onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:iron_ore', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:gold_ore', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:lapis_ore', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:diamond_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:redstone_ore', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:emerald_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:nether_quartz_ore', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'powah:uraninite_ore_dense', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:copper_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:zinc_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:apatite_ore', count: 7 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:niter_ore', count: 7 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:sulfur_ore', count: 7 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:tin_ore', count: 7 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:lead_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:silver_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:nickel_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'buddycards:luminis_ore', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'ars_nouveau:arcane_ore', count: 5 } },
                { type: 'masterfulmachinery:items', data: { item: 'appliedenergistics2:quartz_ore', count: 5 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:ore_aluminum', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:ore_uranium', count: 6 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:starmetal_ore', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:rock_crystal_ore', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'gobber2:gobber2_ore_end', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:elementium_ore', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:dragonstone_ore', count: 4 } },
                { type: 'masterfulmachinery:fluids', data: { fluid: "industrialforegoing:ether_gas", amount: 500 }},
            ],
            inputs: [
                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 40000 } },
            ],
            ticks: 200,
        },
];

        recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'star_creation_instrument_1';
        recipe.controllerId = 'star_creation_instrument';
        event.custom(recipe);
    });
});
