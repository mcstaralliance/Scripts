const itemsToRemove = [
    'create:andesite_alloy',
    'tconstruct:seared_ingot_gauge',
    'tconstruct:seared_melter',
    'tconstruct:scorched_ingot_gauge',
    'tconstruct:scorched_alloyer',
    'minecraft:stonecutter',
    'create:empty_blaze_burner',
    'create:shaft',
    'create:belt_connector',
    'create:rose_quartz',
    'create:windmill_bearing',
    'elementalcraft:contained_crystal',
    'extendedcrafting:luminessence',
    'elementalcraft:extractor',
    'elementalcraft:infuser',
    'psi:cad_assembler',
    'psi:programmer',
    'botania:terra_plate',
    'elementalcraft:binder',
    'thermal:machine_frame',
    'thermal:energy_cell_frame',
    'thermal:machine_smelter',
    'thermal:machine_insolator',
    'thermal:machine_crucible',
    'thermal:machine_chiller',
    'thermal:machine_refinery',
    'thermal:machine_pulverizer',
    'thermal:machine_press',
    'pipez:energy_pipe',
    'pipez:fluid_pipe',
    'pipez:gas_pipe',
    'integrateddynamics:cable',
    'ae2:drive',
    'ae2:controller',
    'ae2:inscriber',
    'ae2:crafting_unit',
    'botanicalmachinery:alfheim_market',
    'botanicalmachinery:industrial_agglomeration_factory',
    'botanicalmachinery:mechanical_apothecary',
    'botanicalmachinery:mechanical_brewery',
    'botanicalmachinery:mechanical_daisy',
    'botanicalmachinery:mechanical_mana_pool',
    'botanicalmachinery:mechanical_runic_altar',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_1k',
    'ae2:crafting_accelerator',
    'ae2:interface',
    'dimdungeons:block_gilded_portal',
    'dimdungeons:block_portal_keyhole',
    'dimdungeons:item_portal_key',
    'dimdungeons:item_blank_build_key',
    'mekanism:metallurgic_infuser',
    'mekanism:steel_casing',
    'ars_nouveau:source_jar',
    'ars_nouveau:imbuement_chamber',
    'ars_nouveau:agronomic_sourcelink',
    'ars_nouveau:volcanic_sourcelink',
    'ars_nouveau:alchemical_sourcelink',
    'ars_nouveau:vitalic_sourcelink',
    'ars_nouveau:mycelial_sourcelink',
    'ars_nouveau:enchanting_apparatus',
    'mekanism:configurator',
    'ae2:molecular_assembler',
    'mekanismgenerators:solar_panel',
    'mekanism:advanced_tier_installer',
    'mekanism:basic_tier_installer',
    'mekanism:elite_tier_installer',
    'mekanism:ultimate_tier_installer',
    'mekanism:thermal_evaporation_block',
    'mekanism:thermal_evaporation_valve',
    'mekanism:thermal_evaporation_controller',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism:induction_casing',
    'mekanism:induction_port',
    'mekanism:enrichment_chamber',
    'mekanism:osmium_compressor',
    'mekanism:crusher',
    'mekanism:purification_chamber',
    'mekanism:energized_smelter',
    'mekanism:electric_pump',
    'mekanism:rotary_condensentrator',
    'mekanism:electrolytic_separator',
    'mekanism:solar_neutron_activator',
    'mekanismgenerators:fission_reactor_casing',
    'mekanismgenerators:fission_reactor_logic_adapter',
    'mekanismgenerators:fission_fuel_assembly',
    'mekanismgenerators:control_rod_assembly',
    'mekanismgenerators:fission_reactor_port',
    'mekanismgenerators:fusion_reactor_frame',
    'mekanismgenerators:fusion_reactor_logic_adapter',
    'mekanismgenerators:fusion_reactor_controller',
    'mekanismgenerators:fusion_reactor_port',
    'mekanism:quantum_entangloporter',
    'draconicevolution:basic_crafting_injector',
    'draconicevolution:module_core',
    'draconicevolution:draconium_core',
    'draconicevolution:wyvern_core',
    'draconicevolution:wyvern_energy_core',
    'fluxnetworks:flux_controller',
    'fluxnetworks:basic_flux_storage',
    'fluxnetworks:flux_point',
    'fluxnetworks:flux_plug',
    'mekanism:boiler_casing',
    'mekanism:boiler_valve',
    'mekanism:superheating_element',
    'mekanism:pressure_disperser',
    'hostilenetworks:deep_learner',
    'hostilenetworks:blank_data_model',
    'hostilenetworks:empty_prediction',
    'hostilenetworks:sim_chamber',
    'mekanism:basic_thermodynamic_conductor',
    'mekanism:basic_mechanical_pipe',
    'mekanism:basic_pressurized_tube',
    'mekanism:basic_logistical_transporter',
    'mekanism:basic_universal_cable',
    'mysticalagriculture:infusion_altar',
    'mysticalagriculture:infusion_pedestal',
    'tiab:time_in_a_bottle',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'paimonfood:paimon'
]

const itemsToBan = [
    'mekanism:dimensional_stabilizer',
    'mekanism:upgrade_anchor',
    'mekanism:cardboard_box',
    'mekanismgenerators:turbine_casing',
    'mekanismgenerators:turbine_valve',
    'mekanismgenerators:turbine_blade',
    'mekanismgenerators:turbine_vent'
]

const recipeIdToRemove = [
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'create:deploying/cogwheel',
    'ars_nouveau:novice_spell_book',
    'mekanism:energy_tablet',
    'mekanismgenerators:generator/wind',
    'mekanism:purification_chamber',
    'mekanism:rotary_condensentrator',
    'mekanism:isotopic_centrifuge',
    'fluxnetworks:fluxplug',
    'fluxnetworks:fluxpoint'
]

const factoryToRemove = [
    'smelting',
    'enriching',
    'crushing',
    'compressing',
    'combining',
    'purifying',
    'injecting',
    'infusing',
    'sawing'
]
const factoryLevel = [
    'basic',
    'advanced',
    'elite',
    'ultimate'
]
const defaultVein = [
    'coal',
    'copper',
    'diamond',
    'emerald',
    'glowstone',
    'gold',
    'hardened_diamond',
    'iron',
    'quartz',
    'redstone',
    'zinc'
]

onEvent('recipes', event => {
    for (let i = 0; i < factoryLevel.length; i++) {
        for (let j = 0; j < factoryToRemove.length; j++) {
            event.remove({id: 'mekanism:factory/'+ factoryLevel[i] + '/' + factoryToRemove[j]})            
        }
    }
})

onEvent('recipes', event => {
    for (let index = 0; index < recipeIdToRemove.length; index++) {
        event.remove({id: recipeIdToRemove[index]});
    }
})

onEvent('recipes', event => {
    for (let index = 0; index < itemsToRemove.length; index++) {
        event.remove({type: 'minecraft:crafting_shaped', output: itemsToRemove[index]});
        event.remove({type: 'minecraft:crafting_shapeless', output: itemsToRemove[index]}); 
    }
})

onEvent('recipes', event => {
    for (let BanItem of itemsToBan) {
        event.remove({type: 'minecraft:crafting_shaped', output: BanItem});
        event.remove({type: 'minecraft:crafting_shapeless', output: BanItem}); 
    }
})

onEvent('recipes', event => {
    for (let Vein of defaultVein) {
        event.remove({id: 'createoreexcavation:drilling/'+Vein})
    }
})