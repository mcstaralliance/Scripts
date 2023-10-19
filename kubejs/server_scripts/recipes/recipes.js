const addCrossWithCoreRecipe = global.addCrossWithCore;
const addSurroundWithCoreRecipe = global.addSurroundWithCore;
const addFullShapedRecipe = global.addFullShaped;
const addCrossRecipe = global.addCross
const addHalfFullShapelessRecipe = global.addHalfFullShapeless

onEvent('recipes', event => {
    // ABA BCB ABA
    addCrossWithCoreRecipe(event, 'minecraft:blast_furnace', 'minecraft:furnace', 'minecraft:iron_ingot', 'minecraft:bricks'); // 高炉

    // AAA ABA AAA
    addSurroundWithCoreRecipe(event, 'minecraft:furnace', '#forge:cobblestone', 'minecraft:clay'); // 熔炉

    // AAA AAA AAA
    addFullShapedRecipe(event, 'minecraft:snow_block', 'minecraft:snowball'); // 雪块

    // ABA BAB ABA
    addCrossRecipe(event, '12x minecraft:coarse_dirt', '#forge:dirt', '#forge:gravel'); // 砂土

});
