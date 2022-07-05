// priority: 0

onEvent('item.registry', event => {
	const addIngot = ['nickel', 'copper', 'tin', 'aluminum', 'lead', 'silver', 'uranium', 'iridium', 'platinum']
	for (i = 0; i < addIngot.length; i++) {
		event.create(addIngot[i] + '_ingot')
	}
})

onEvent('item.registry', event => {
	const addEpicItem = ['star', 'primogem', 'dragon_catalyst', 'intertwined_fate', 'acquaint_fate', 'clay_furnace', 'salis_mundus']
	for (i = 0; i < addEpicItem.length; i++) {
		event.create(addEpicItem[i])
	}
})

onEvent('item.registry', event => {
	event.create('paimon').food((food) => {
		food.hunger(2.5).saturation(1.0).effect('minecraft:saturation', 1, 2, 1)
	})
})

onEvent('block.registry', event => {
	const addBlock = ['magic_log', 'skull_block', 'magic_stone', 'pillar_ancient', 'infuser_normal', 'working_infuser']
	for (i = 0; i < addBlock.length; i++) {
		event.create(addBlock[i])
	}
})
