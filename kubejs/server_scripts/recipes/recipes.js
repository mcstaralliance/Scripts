onEvent('recipes', (event) => {
    const recipesShaped = [
        {
            output: 'minecraft:blast_furnace',
            pattern: patterns.crossWithCore,
            key: {
                A: 'minecraft:iron_ingot',
                B: 'minecraft:bricks',
                C: 'minecraft:furnace'
            },
            id: 'minecraft:blast_furnace'
        },
        {
            output: '6x immersiveengineering:blastbrick',
            pattern: patterns.crossWithCore,
            key: {
                A: 'minecraft:red_nether_bricks',
                B: 'minecraft:magma_block',
                C: 'minecraft:blast_furnace'
            },
            id: 'immersiveengineering:blastbrick'
        }
    ]

    recipesShaped.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})
