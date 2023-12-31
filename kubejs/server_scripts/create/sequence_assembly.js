onEvent('recipes', event => {
    event.recipes.createSequencedAssembly([
        Item.of('industrialforegoing:machine_frame_advanced')
    ], 'industrialforegoing:machine_frame_simple', [
        event.recipes.createDeploying('kubejs:machine_frame_advanced_processing', ['kubejs:machine_frame_advanced_processing', 'lazierae2:speculation_core_4']),
        event.recipes.createDeploying('kubejs:machine_frame_advanced_processing', ['kubejs:machine_frame_advanced_processing', 'create:precision_mechanism', ]),
        event.recipes.createDeploying('kubejs:machine_frame_advanced_processing', ['kubejs:machine_frame_advanced_processing', 'botania:terrasteel_ingot']),
        event.recipes.createDeploying('kubejs:machine_frame_advanced_processing', ['kubejs:machine_frame_advanced_processing', 'arsarsenal:source_steel_ingot']),
        event.recipes.createPressing('kubejs:machine_frame_advanced_processing', 'kubejs:machine_frame_advanced_processing'),
        event.recipes.createCutting('kubejs:machine_frame_advanced_processing', 'kubejs:machine_frame_advanced_processing'),
        event.recipes.createFilling('kubejs:machine_frame_advanced_processing', ['kubejs:machine_frame_advanced_processing', Fluid.of('industrialforegoing:pink_slime', 100)]),
    ]).transitionalItem('kubejs:machine_frame_advanced_processing').loops(2)

    event.recipes.createSequencedAssembly([
        Item.of('woot:plate_die')
    ], 'woot:si_ingot', [
        event.recipes.createDeploying('woot:plate_die', ['woot:plate_die', 'minecraft:obsidian']),
        event.recipes.createDeploying('woot:plate_die', ['woot:plate_die', 'minecraft:stone_slab']),
        event.recipes.createPressing('woot:plate_die', 'woot:plate_die')
    ]).transitionalItem('woot:plate_die').loops(1)

    event.recipes.createSequencedAssembly([
        Item.of('masterfulmachinery:netherstar_controller').withChance(130.0)
    ], 'industrialforegoing:mycelial_netherstar', [
        event.recipes.createDeploying('kubejs:netherstar_controller_processing', ['kubejs:netherstar_controller_processing', 'kubejs:block_19'])
    ]).transitionalItem('kubejs:netherstar_controller_processing').loops(24)

    event.recipes.createSequencedAssembly([
        Item.of('kubejs:block_11').withChance(130.0)
    ], 'botania:terrasteel_block', [
        event.recipes.createDeploying('kubejs:block_11_processing', ['kubejs:block_11_processing', 'thermal:netherite_coin'])
    ]).transitionalItem('kubejs:block_11_processing').loops(30)
})

