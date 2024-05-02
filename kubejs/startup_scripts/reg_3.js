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
