onEvent('recipes', event => {
    event.recipes.create.mixing(Item.of('kubejs:nether_passport'),[
        Fluid.of('tconstruct:magma',1000),
        'tconstruct:lavawood',
        '4x minecraft:diamond',
        '#forge:books'
    ])
})