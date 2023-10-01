onEvent('recipes', (event) => {
    const recipes = [
        /*{
            input: Item.of('tconstruct:grout',2),
            output: 'tconstruct:seared_brick',
            xp:'0.3',
            id: 'tconstruct:smeltery/seared/seared_brick'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});