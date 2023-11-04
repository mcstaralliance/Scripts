// 各形状配方形状
/* const patterns = {
    crossWithCore: [
        'BAB', 
        'ACA',
        'BAB'
    ],
    surroundWithCore: [
        'AAA',
        'ABA',
        'AAA'
    ],
    fullShaped: [
        'AAA',
        'AAA',
        'AAA'
    ],
    cross: [
        'ABA',
        'BAB',
        'ABA'
    ]
}; */

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



// onEvent('recipes', event => {
//     // 传入参数是首先是 output，然后是 core(如果有core的话)，然后是 surroundA、surroundB(如果有的话)
//     addCrossWithCoreRecipe(event, 'minecraft:blast_furnace', 'minecraft:furnace', 'minecraft:iron_ingot', 'minecraft:bricks'); // 高炉
//     addCrossWithCoreRecipe(event, '6x immersiveengineering:blastbrick', 'minecraft:blast_furnace', 'minecraft:magma_block', 'minecraft:red_nether_bricks'); // 高炉砖
//     addCrossWithCoreRecipe(event, 'thermal:machine_frame', '#forge:gears/invar', 'glassential:glass_dark', 'thermal:signalum_ingot'); // 机器框架

//     addSurroundWithCoreRecipe(event, 'minecraft:furnace', '#forge:cobblestone', 'minecraft:clay'); // 熔炉

//     addFullShapedRecipe(event, 'minecraft:snow_block', 'minecraft:snowball'); // 雪块

//     addCrossRecipe(event, '12x minecraft:coarse_dirt', 'minecraft:dirt', '#forge:gravel'); // 砂土

//     event.shapeless('immersiveengineering:blastbrick_reinforced', ['immersiveengineering:blastbrick', 'botania:blaze_block', '#forge:plates/steel']); // 强化高炉砖
// });
// 