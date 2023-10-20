const addCrossWithCoreRecipe = global.addCrossWithCore;
const addSurroundWithCoreRecipe = global.addSurroundWithCore;
const addFullShapedRecipe = global.addFullShaped;
const addCrossRecipe = global.addCross
const addHalfFullShapelessRecipe = global.addHalfFullShapeless


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



onEvent('recipes', event => {
    // 传入参数是首先是 output，然后是 core(如果有core的话)，然后是 surroundA、surroundB(如果有的话)
    addCrossWithCoreRecipe(event, 'minecraft:blast_furnace', 'minecraft:furnace', 'minecraft:iron_ingot', 'minecraft:bricks'); // 高炉

    addSurroundWithCoreRecipe(event, 'minecraft:furnace', '#forge:cobblestone', 'minecraft:clay'); // 熔炉

    addFullShapedRecipe(event, 'minecraft:snow_block', 'minecraft:snowball'); // 雪块

    addCrossRecipe(event, '12x minecraft:coarse_dirt', '#forge:dirt', '#forge:gravel'); // 砂土

});
