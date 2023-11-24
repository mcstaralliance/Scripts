onEvent('recipes', event => {
    event.recipes.createSequencedAssembly([
        Item.of('industrialforegoing:machine_frame_advanced')
    ], 'industrialforegoing:machine_frame_simple', [
        event.recipes.createDeploying('industrialforegoing:machine_frame_advanced', ['industrialforegoing:machine_frame_advanced', 'lazierae2:speculation_core_4']),
        event.recipes.createDeploying('industrialforegoing:machine_frame_advanced', ['industrialforegoing:machine_frame_advanced', 'create:precision_mechanism', ]),
        event.recipes.createDeploying('industrialforegoing:machine_frame_advanced', ['industrialforegoing:machine_frame_advanced', 'botania:terrasteel_ingot']),
        event.recipes.createDeploying('industrialforegoing:machine_frame_advanced', ['industrialforegoing:machine_frame_advanced', 'arsarsenal:source_steel_ingot']),
        event.recipes.createPressing('industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_advanced'),
        event.recipes.createCutting('industrialforegoing:machine_frame_advanced', 'industrialforegoing:machine_frame_advanced'),
        event.recipes.createFilling('industrialforegoing:machine_frame_advanced', ['industrialforegoing:machine_frame_advanced', Fluid.of('industrialforegoing:pink_slime', 100)]),
    ]).transitionalItem('industrialforegoing:machine_frame_advanced').loops(2)

    event.recipes.createSequencedAssembly([
        Item.of('woot:plate_die')
    ], 'woot:si_ingot', [
        event.recipes.createDeploying('woot:plate_die', ['woot:plate_die', 'minecraft:obsidian']),
        event.recipes.createDeploying('woot:plate_die', ['woot:plate_die', 'minecraft:stone_slab']),
        event.recipes.createPressing('woot:plate_die', 'woot:plate_die')
    ]).transitionalItem('woot:plate_die').loops(1)
})

