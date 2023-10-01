onEvent('recipes', (event) => {
    const id_prefix = 'ico:interactio/item_fluid_transform/';
    const recipes = [
        {
            inputs: ['2x eidolon:enchanted_ash', '#forge:clay', '#forge:dusts/mana', '#forge:dusts/lapis'],
            fluid: { fluid: 'water' },
            output: {
                entries: [{ result: { item: 'ars_nouveau:magic_clay', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0,
            id: 'ars_nouveau:magic_clay'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_fluid_transform';
        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
