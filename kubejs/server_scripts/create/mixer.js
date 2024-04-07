onEvent('recipes', event => {
    event.recipes.create.mixing(Item.of('kubejs:nether_passport'),[
        Fluid.of('tconstruct:magma',1000),
        'tconstruct:lavawood',
        '4x minecraft:diamond',
        '#forge:books'
    ])

    event.recipes.create.mixing(Item.of('ae2:sky_dust'), [
        Fluid.of('tconstruct:molten_hepatizon', 360),
        '#starcraft:tag_metamorphic_stone'
    ]).heated()

    event.recipes.create.mixing(Item.of('ae2:sky_dust', 3), [
        Fluid.of('tconstruct:molten_hepatizon', 360),
        '#starcraft:tag_metamorphic_stone'
    ]).superheated()

    event.recipes.create.mixing('kubejs:permanent_nether_passport', [
        Fluid.of('tconstruct:molten_soulsteel', 1000),
        '8x kubejs:nether_passport',
        Fluid.of('tinkers_reforged:molten_proto_lava',1000),
        '16x hostilenetworks:nether_prediction'
    ]).superheated()
})
