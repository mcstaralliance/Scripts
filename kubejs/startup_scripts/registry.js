// priority: 1
/**调用指定函数`count`次，首个参数为从1开始的次数 */
function repeat(count, handler, thisArg) {
    for (let i = 1; i <= count; i++)
        handler.call(thisArg, i, count);
}

onEvent('item.registry', event => {
    repeat(3200, (i) => event.create('item_' + i));

    event.create("nether_passport").rarity(RARITY_EPIC)
    event.create("permanent_nether_passport").rarity(RARITY_EPIC).glow(true)
    event.create("end_portal_frame_tool").rarity("cosmic").glow(true)
    event.create('fragment_of_patience').rarity(RARITY_EPIC).glow(true)

})

onEvent('block.registry', event => {
    event.create('paimon_miner_pro').unbreakable().noDrops()
    event.create('paimon_miner_lite').unbreakable().noDrops()
})

onEvent('item.registry', event => {
    let assembledItem = [
        'incomplete_heat_engine',
        'incomplete_cell_component_4k',
        'incomplete_cell_component_16k',
        'incomplete_fission_reactor_casing'
    ]

    for (let i = 0; i < assembledItem.length; i++) {
        event.create(assembledItem[i])
    }
})