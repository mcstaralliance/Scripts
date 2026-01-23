ServerEvents.recipes(event => {
    event.recipes.mekanism.chemical_infusing(
        'kubejs:nitrogen_dioxide', 'kubejs:nitrogen_monoxide', 'mekanism:oxygen'
    )

    event.recipes.mekanism.chemical_infusing(
        'kubejs:nitric_acid', 'kubejs:nitrogen_dioxide', 'mekanism:oxygen'
    )

    // 四氟化铀
    event.recipes.mekanism.chemical_infusing(
        'kubejs:uranium_tetrafluoride',
        'mekanism:hydrofluoric_acid',
        'mekanism:uranium_oxide'
    )

})