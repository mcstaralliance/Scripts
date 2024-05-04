onEvent('recipes', event => {
	event.recipes.createFilling('mekanismgenerators:fission_reactor_casing', [
		'kubejs:incomplete_fission_reactor_casing',
		Fluid.of('mekanism:heavy_water', 250)
	])
})