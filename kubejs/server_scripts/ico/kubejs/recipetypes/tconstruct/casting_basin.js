onEvent('recipes', (event) => {
    const id_prefix = 'ico:tconstruct/casting_basin/';
    var data = {
        recipes: [
            {
                fluid: 'tconstruct:molten_iron',
                fluid_amount: 144,
                casts: [{ item: 'minecraft:andesite' }],
                cast_consumed: true,
                output: 'create:andesite_alloy',
                cooling_time: 40,
                id: `tconstruct:compat/create/andesite_alloy_iron`
            },
            {
                fluid: 'tconstruct:molten_zinc',
                fluid_amount: 72,
                casts: [{ item: 'minecraft:andesite' }],
                cast_consumed: true,
                output: 'create:andesite_alloy',
                cooling_time: 20,
                id: `tconstruct:compat/create/andesite_alloy_zinc`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'mantle:intersection',
                ingredients: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
