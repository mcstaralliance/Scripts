onEvent("recipes", event => {
    event.recipes.botania.terra_plate('integrateddynamics:crystalized_menril_block', [
        'botania:mana_diamond_block', 
        'elementalcraft:watercrystal',
        'mysticalagriculture:prosperity_ingot_block'
    ], 300000)

    event.recipes.botania.terra_plate('dimdungeons:item_blank_build_key', [
        'dimdungeons:item_portal_key', 
        'dimdungeons:item_homeward_pearl',
        'ae2:spatial_cell_component_128',
        'ae2:quantum_entangled_singularity',
        'hostilenetworks:overworld_prediction',
        'botania:world_seed'
    ], 1000000)
})