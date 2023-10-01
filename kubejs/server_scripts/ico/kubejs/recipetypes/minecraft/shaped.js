onEvent('recipes', (event) => {
    //id: `${id_prefix}gear/stone`
    const id_prefix = 'ico:minecraft/shaped/';
    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: [
                'CBC', 
                'BAB', 
                'CBC'
            ],
            key: {
                A: '#minecraft:coals',
                B: 'ico:stone_gear',
                C:'#forge:cobblestone'
            },
            id: 'minecraft:furnace'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
