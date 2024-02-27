onEvent('recipes', event => {
    const { casting_table, casting_basin } = event.recipes.tconstruct;
     
    casting_basin('create:andesite_alloy_block', '#forge:molten_iron', 360)
        .cast('minecraft:polished_andesite')
        .consumeCast(true)
    casting_basin('create:andesite_alloy_block', '#forge:molten_zinc', 360)
        .cast('minecraft:polished_andesite')
        .consumeCast(true)

    casting_table('create:rose_quartz', 'tinkers_reforged:molten_redstone', 100)
        .cast('#forge:gems/quartz')
        .consumeCast(true)
})