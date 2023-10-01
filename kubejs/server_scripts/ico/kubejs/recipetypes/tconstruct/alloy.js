onEvent('recipes', (event) => {
    const id_prefix = 'ico:tconstruct/alloy/';
    const recipes = [
        {
            inputs: [
                { fluid: 'tconstruct:molten_iron', amount: 144 },
                { tag: 'forge:molten_coal', amount: 576 }
            ],
            result: { fluid: 'tconstruct:molten_steel', amount: 144 },
            temperature: 1499,
            id: `${id_prefix}molten_steel`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
