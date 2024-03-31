// priority: 1
/**调用指定函数`count`次，首个参数为从1开始的次数 */
function repeat(count, handler, thisArg) {
    for (let i = 1; i <= count; i++)
        handler.call(thisArg, i, count);
}

onEvent('item.registry', event => {
    repeat(3200, (i) => event.create('item_' + i));

    event.create("nether_passport").rarity("epic").glow(true)
})

onEvent('item.registry', event => {
    let assembledItem = [
        'incomplete_heat_engine',
        'incomplete_cell_component_4k',
        'incomplete_cell_component_16k'
    ]

    for (let i = 0; i < assembledItem.length; i++) {
        event.create(assembledItem[i])
    }
})

