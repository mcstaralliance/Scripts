ServerEvents.recipes(event => {
    event.recipes.mekanism.injecting(
        'starcraft:uranyl_nitrate', 'mekanism:yellow_cake_uranium', '1x kubejs:nitric_acid'
    )
    event.recipes.mekanism.injecting(
        'starcraft:ammonium_diuranate', 'starcraft:uranyl_nitrate', '1x kubejs:ammonia'
    )
})