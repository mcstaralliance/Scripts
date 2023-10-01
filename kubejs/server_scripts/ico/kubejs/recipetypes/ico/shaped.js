onEvent('recipes', (event) => {
    const id_prefix = 'ico:shaped/';
    const recipes = [
        {
            output: 'ico:stone_gear',
            pattern: [
                ' B ', 
                'BAB', 
                ' B '
            ],
            key: {
                A: 'appliedenergistics2:wooden_gear',
                B: Item.of('tconstruct:tool_handle', '{Material:"tconstruct:stone"}')
            },
            id: `${id_prefix}gear/stone/1`
        },
        {
            output: '8x ico:stone_gear',
            pattern: [
                ' B ', 
                'BAB', 
                ' B '
            ],
            key: {
                A: '#minecraft:logs_that_burn',
                B: Item.of('tconstruct:large_plate', '{Material:"tconstruct:stone"}')
            },
            id: `${id_prefix}gear/stone/2`
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
