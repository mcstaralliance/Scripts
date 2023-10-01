onEvent('recipes', (event) => {
    const recipes = [
        {
            output: '2x thermal:machine_frame',//输出物品
            pattern: [
              'DDCDD',
            'DBBBD',
            'CBABC',
            'DBBBD',
            'DDCDD'
          ],//合成表可以无限大
            key: {
                A: '#forge:gears/bronze',
                B: 'tconstruct:clear_glass',
                C: '#forge:ingots/pig_iron',
                D: '#forge:ingots/iron',
            },
            id: 'thermal:machine_frame'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});