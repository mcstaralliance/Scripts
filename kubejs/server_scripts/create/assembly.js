onEvent('recipes', event => {
    event.recipes.createSequencedAssembly([
        Item.of('create:cogwheel', 5).withChance(130.0)
    ], '#forge:stripped_logs', [
        event.recipes.createDeploying('create:cogwheel', ['create:cogwheel', 'create:shaft'])
    ]).transitionalItem('create:cogwheel').loops(1)

    event.recipes.createSequencedAssembly([
        Item.of('create:precision_mechanism', 2).withChance(130.0)
    ], 'create:sturdy_sheet', [
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:ingots/rose_gold']),
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'ae2:charged_certus_quartz_crystal']),
        event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('integrateddynamics:menril_resin', 500)])
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(2)

    event.recipes.createSequencedAssembly([
        Item.of('create_sa:heat_engine', 2).withChance(130.0)
    ], 'create:precision_mechanism', [
        event.recipes.createDeploying('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine', '#forge:gears/invar']),
        event.recipes.createDeploying('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine', 'botania:elf_glass']),
        event.recipes.createDeploying('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine', 'integrateddynamics:cable']),
        event.recipes.createFilling('kubejs:incomplete_heat_engine', ['kubejs:incomplete_heat_engine', Fluid.of('thermal:tree_oil', 200)])
    ]).transitionalItem('kubejs:incomplete_heat_engine').loops(1)

    event.recipes.createSequencedAssembly([
        Item.of('ae2:cell_component_4k', 1).withChance(130.0)
    ], 'ae2:cell_component_1k', [
        event.recipes.createDeploying('kubejs:incomplete_cell_component_4k', ['kubejs:incomplete_cell_component_4k', 'ae2:engineering_processor']),
        event.recipes.createDeploying('kubejs:incomplete_cell_component_4k', ['kubejs:incomplete_cell_component_4k', 'ae2:calculation_processor']),
        event.recipes.createDeploying('kubejs:incomplete_cell_component_4k', ['kubejs:incomplete_cell_component_4k', 'ae2:cell_component_1k']),
        event.recipes.createDeploying('kubejs:incomplete_cell_component_4k', ['kubejs:incomplete_cell_component_4k', 'lazierae2:carbonic_fluix_dust']),
        event.recipes.createFilling('kubejs:incomplete_cell_component_4k', ['kubejs:incomplete_cell_component_4k', Fluid.of('thermal:redstone', 250)])
    ]).transitionalItem('kubejs:incomplete_cell_component_4k').loops(2)

    event.recipes.createSequencedAssembly([
        Item.of('ae2:cell_component_16k', 1).withChance(130.0)
    ], 'ae2:cell_component_4k', [
        event.recipes.createDeploying('kubejs:incomplete_cell_component_16k', ['kubejs:incomplete_cell_component_16k', 'lazierae2:parallel_processor']),
        event.recipes.createDeploying('kubejs:incomplete_cell_component_16k', ['kubejs:incomplete_cell_component_16k', 'ae2:cell_component_4k']),
        event.recipes.createDeploying('kubejs:incomplete_cell_component_16k', ['kubejs:incomplete_cell_component_16k', 'ae2:fluix_pearl']),
        event.recipes.createFilling('kubejs:incomplete_cell_component_16k', ['kubejs:incomplete_cell_component_16k', Fluid.of('tconstruct:molten_signalum', 360)])
    ]).transitionalItem('kubejs:incomplete_cell_component_16k').loops(2)

    event.recipes.createSequencedAssembly([
        Item.of('mekanismgenerators:fission_reactor_casing',1).withChance(130.0)
    ],'kubejs:incomplete_fission_reactor_casing', [
        event.recipes.createFilling('kubejs:incomplete_fission_reactor_casing',['kubejs:incomplete_fission_reactor_casing',Fluid.of('mekanism:heavy_water',1000)])
    ]).transitionalItem('kubejs:incomplete_fission_reactor_casing').loops(1)
})

