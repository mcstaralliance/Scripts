onEvent('recipes', (event) => {
    const id_prefix = 'ico:tconstruct/shaped/';
    const recipes = [
        {
            output: '8x tconstruct:pattern',
            pattern: [
                'CBC', 
                'BAB', 
                'CBC'
            ],
            key: {
                A: '#minecraft:logs_that_burn',
                B: 'minecraft:stick',
                C: 'farmersdelight:rope'
            },
            id: 'tconstruct:tables/pattern'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
