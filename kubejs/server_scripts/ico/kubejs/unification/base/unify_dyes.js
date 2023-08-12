//priority: 900
onEvent('recipes', (event) => {
    const id_prefix = 'ico:unification/base/unify_dyes/';

    dyeSources.forEach((recipe) => {
        botania_dye_pestle_mortar(event, recipe, id_prefix);
        create_dye_milling(event, recipe, id_prefix);
        ars_nouveau_dye_crushing(event, recipe, id_prefix);
        mekanism_dye_enriching(event, recipe, id_prefix);
        mekanism_pigment_extracting(event, recipe, id_prefix);
        pedestals_dye_crushing(event, recipe, id_prefix);
        thermal_dye_centrifuge(event, recipe, id_prefix);
        shapeless_dye_crafting(event, recipe, id_prefix);
        occultism_dye_crushing(event, recipe, id_prefix);
    });
});

function botania_dye_pestle_mortar(event, recipe, id_prefix) {
    if (recipe.type == 'petal') {
        return;
    }

    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    if (recipe.primary == 'minecraft:bone_meal') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        inputs = [recipe.input, 'botania:pestle_and_mortar'];

    fallback_id(event.shapeless(output, inputs), `${id_prefix}${arguments.callee.name}/`);
}

function create_dye_milling(event, recipe, id_prefix) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    fallback_id(event.recipes.create.milling(outputs, input), `${id_prefix}${arguments.callee.name}/`);
}

function ars_nouveau_dye_crushing(event, recipe, id_prefix) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier;

    fallback_id(
        event.custom({
            type: 'ars_nouveau:crush',
            input: Ingredient.of(recipe.input).toJson(),
            output: [
                Item.of(recipe.primary).withCount(count).withChance(1.0),
                Item.of(recipe.secondary).withCount(count).withChance(0.25)
            ]
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}


function mekanism_dye_enriching(event, recipe, id_prefix) {
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        input = recipe.input;

    fallback_id(event.recipes.mekanism.enriching(output, input), `${id_prefix}${arguments.callee.name}/`);
}

function mekanism_pigment_extracting(event, recipe, id_prefix) {
    if (!recipe.primary.includes('_dye')) {
        return;
    }
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    let dye_color = recipe.primary.split(':')[1].replace('_dye', '');
    let count = baseCount * multiplier;

    fallback_id(
        event.custom({
            type: 'mekanism:pigment_extracting',
            input: { ingredient: { item: recipe.input } },
            output: { pigment: `mekanism:${dye_color}`, amount: 256 * count }
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}

function pedestals_dye_crushing(event, recipe, id_prefix) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = recipe.primary,
        input = recipe.input;

    fallback_id(
        event.custom({
            type: 'pedestals:pedestal_crushing',
            ingredient: { item: input },
            result: { item: output, count: count }
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}

function thermal_dye_centrifuge(event, recipe, id_prefix) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    fallback_id(event.recipes.thermal.centrifuge(outputs, input), `${id_prefix}${arguments.callee.name}/`);
}
function shapeless_dye_crafting(event, recipe, id_prefix) {
    if (recipe.input.split(':')[0] !== 'atum') {
        return;
    }
    var output = Item.of(recipe.primary),
        inputs = [recipe.input];

    fallback_id(event.shapeless(output, inputs), `${id_prefix}${arguments.callee.name}/`);
}

function occultism_dye_crushing(event, recipe, id_prefix) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = recipe.primary,
        input = recipe.input;

    fallback_id(
        event.custom({
            type: 'occultism:crushing',
            ingredient: { item: input },
            result: { item: output, count: count },
            crushing_time: 50
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}
