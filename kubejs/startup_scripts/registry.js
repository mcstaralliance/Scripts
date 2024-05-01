// priority: 1
/**调用指定函数`count`次，首个参数为从1开始的次数 */
function repeat(count, handler, thisArg) {
    for (let i = 1; i <= count; i++)
        handler.call(thisArg, i, count);
}

onEvent('item.registry', event => {
    repeat(1404, (i) => event.create(i+"_item"));

    event.create("nether_passport").rarity(RARITY_EPIC).maxStackSize(1)
    event.create("permanent_nether_passport").rarity(RARITY_EPIC).glow(true).maxStackSize(1)
    event.create("end_portal_frame_tool").rarity("cosmic").glow(true)
    event.create('fragment_of_patience').rarity(RARITY_EPIC).glow(true)
    event.create('starcraft_core').rarity(RARITY_EPIC).glow(true)
    event.create('patience_reward').rarity(RARITY_RARE).glow(true)
    event.create('key').rarity(RARITY_UNCOMMON)

})

onEvent('block.registry', event => {
    event.create('paimon_miner_pro').unbreakable().noDrops()
    event.create('paimon_miner_lite').unbreakable().noDrops()
    event.create('trophy').unbreakable()
    event.create('custom_chest').rarity(RARITY_EPIC)
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

