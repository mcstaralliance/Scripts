AvaritiaEvents.singularity(event => {
    event.register("avaritia:pellet_antimatter", s => {
        s
            .setDisplayName("singularity.avaritia.pellet_antimatter")
            .setColors(0xc970dd, 0xc970dd) // [覆盖色, 底层色]
            .setCount(50)
            .setTimeCost(200)
            .setIngredient(Ingredient.of("mekanism:pellet_antimatter"))
            .setEnabled(true)
            .setRecipeEnabled(true)
    })
})