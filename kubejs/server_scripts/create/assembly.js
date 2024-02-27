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
})

