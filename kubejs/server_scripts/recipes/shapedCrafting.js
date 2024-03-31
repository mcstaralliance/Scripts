onEvent('recipes', event => {
	const recipesShaped = [
        {
            output: 'tconstruct:seared_melter',
            pattern: ['AAA', 'BCB', 'BBB'],
            key: {
                A: '#forge:glass',
                B: 'tconstruct:seared_brick',
                C: 'tconstruct:seared_ingot_gauge'
            }
        },
        {
            output: 'tconstruct:smeltery_controller',
            pattern: ['AAA', 'BCD', 'AAA'],
            key: {
                A: 'tconstruct:seared_bricks', 
                B: 'tconstruct:seared_melter',
                C: 'create:andesite_scaffolding',
                D: 'tconstruct:scorched_alloyer'
            }
        },
        {
            output: 'tconstruct:scorched_alloyer',
            pattern: ['AAA', 'BCB', 'BBB'],
            key: {
                A: '#forge:gems/quartz',
                B: 'tconstruct:scorched_brick',
                C: 'tconstruct:scorched_ingot_gauge'
            }
        },
        {
            output: 'minecraft:stonecutter',
            pattern: ['AAA','BBB','BBB'],
            key: {
                A: '#forge:plates/iron',
                B: 'minecraft:smooth_stone'
            }
        },
        {
            output: 'create:empty_blaze_burner',
            pattern: patterns.crossWithCore,
            key: {
                A: '#forge:netherrack',
                B: 'create:brass_sheet',
                C: Item.empty
            }
        },
        {
            output: '6x create:shaft',
            pattern: [' A ', ' A ', ' A '],
            key: {
                A: 'create:andesite_alloy'
            }
        },
        {
            output: '3x create:belt_connector',
            pattern: ['   ', 'ABA', '   '],
            key: {
                A: 'farmersdelight:rope',
                B: 'tconstruct:silky_cloth'
            }
        },
        {
            output: 'create:windmill_bearing',
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'create:linear_chassis',
                B: 'create:brass_casing',
                C: 'create:gearbox'
            }
        },
        {
            output: '8x extendedcrafting:luminessence',
            pattern: patterns.crossWithCore,
            key: {
                A: Item.of('mysticalagriculture:infusion_crystal', '{Damage:0}'),
                B: '#forge:gunpowder',
                C: '#forge:dusts/glowstone'
            }
        },
        {
            output: 'elementalcraft:contained_crystal',
            pattern: patterns.crossWithCore,
            key: {
                A: 'elementalcraft:inert_crystal',
                B: 'extendedcrafting:luminessence',
                C: Item.empty
            }
        },
        {
            output: '2x extendedcrafting:luminessence_block',
            pattern: patterns.surroundWithCore,
            key: {
                A: 'mekanism:ingot_refined_glowstone',
                B: '#forge:dusts/sulfur',
            }
        },
        {
            output: 'elementalcraft:extractor',
            pattern: ['ABC', 'DEF', 'EBE'],
            key: {
                A: 'botania:rune_water',
                B: 'elementalcraft:contained_crystal',
                C: 'botania:rune_water',
                D: 'botania:rune_fire',
                E: 'minecraft:iron_ingot',
                F: 'botania:rune_air'
            }
        },
        {
            output: 'psi:cad_assembler',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'mysticalagriculture:tertium_essence',
                B: 'elementalcraft:aircrystal',
                C: 'elementalcraft:earthcrystal',
                D: 'elementalcraft:drenched_iron_block',
                E: 'elementalcraft:firecrystal',
                F: 'elementalcraft:watercrystal'
            }
        },
        {
            output: 'psi:programmer',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'fluxnetworks:flux_dust',
                B: 'integrateddynamics:part_display_panel',
                C: '#psi:psidust',
                D: 'elementalcraft:drenched_iron_block'
            }
        },
        {
            output: 'elementalcraft:binder',
            pattern: ['AAA', 'BCB', 'EDE'],
            key: {
                A: 'botania:terrasteel_ingot',
                B: '#forge:ingots/drenched_iron',
                C: 'botania:runic_altar',
                D: 'elementalcraft:contained_crystal',
                E: 'elementalcraft:whiterock'
            }
        },
        {
            output: 'thermal:machine_frame',
            pattern: patterns.crossWithCore,
            key: {
                A: 'create:precision_mechanism',
                B: '#starcraft:tag_corundum_cluster',
                C: 'create:sturdy_sheet'
            }
        },
        {
            output: 'thermal:energy_cell_frame',
            pattern: patterns.crossWithCore,
            key: {
                A: 'create_sa:heat_engine',
                B: '#forge:ingots/lead',
                C: '#forge:glass'
            }
        },
        {
            output: 'thermal:machine_smelter',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'integrateddynamics:crystalized_menril_block',
                B: 'minecraft:blast_furnace',
                C: '#forge:gears/invar',
                D: 'thermal:machine_frame',
                E: 'thermal:energy_cell_frame'
            }
        },
        {
            output: 'thermal:machine_insolator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mysticalagriculture:imperium_essence',
                B: 'mysticalagriculture:tertium_reprocessor',
                C: '#forge:gears/invar',
                D: 'thermal:machine_frame',
                E: 'thermal:energy_cell_frame'
            }
        },
        {
            output: 'thermal:machine_crucible',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:blaze_cake',
                B: 'botania:blaze_block',
                C: '#forge:gears/invar',
                D: 'thermal:machine_frame',
                E: 'thermal:energy_cell_frame'
            }
        },
        {
            output: 'thermal:machine_chiller',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'thermal:blizz_rod',
                B: 'minecraft:packed_ice',
                C: '#forge:gears/invar',
                D: 'thermal:machine_frame',
                E: 'thermal:energy_cell_frame'
            }
        },
        {
            output: 'thermal:machine_refinery',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'extendedcrafting:luminessence_block',
                B: '#forge:storage_blocks/tar',
                C: '#forge:gears/invar',
                D: 'thermal:machine_frame',
                E: 'thermal:energy_cell_frame'
            }
        },
        {
            output: 'thermal:machine_pulverizer',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: Item.of('createaddition:diamond_grit_sandpaper', '{Damage:0}'),
                B: 'create:crushing_wheel',
                C: '#forge:gears/invar',
                D: 'thermal:machine_frame',
                E: 'thermal:energy_cell_frame'
            }
        },
        {
            output: 'thermal:machine_press',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'ae2:smooth_sky_stone_block',
                B: 'create:mechanical_press',
                C: '#forge:gears/invar',
                D: 'thermal:machine_frame',
                E: 'thermal:energy_cell_frame'
            }
        },
        {
            output: '8x pipez:energy_pipe',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:glass',
                C: '#ae2:p2pattunements/energy',
                D: 'createaddition:copper_spool'
            }
        },
        {
            output: '8x pipez:fluid_pipe',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:glass',
                C: '#ae2:p2pattunements/fluid',
                D: 'createaddition:copper_spool'
            }
        },
        {
            output: '2x ae2:inscriber',
            pattern: ['ABA','C A','ABA'],
            key: {
                A: 'psi:psimetal',
                B: 'create:sticky_mechanical_piston',
                C: 'ae2:fluix_crystal'
            }
        },
        {
            output: 'ae2:crafting_unit',
            pattern: ['ABA', 'CBC', 'ABA'],
            key: {
                A: 'psi:psimetal',
                B: 'integrateddynamics:variable_transformer_input',
                C: 'create:electron_tube'
            }
        },
        {
            output: '8x pipez:gas_pipe',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'mekanism:alloy_infused',
                B: 'create:propeller',
                C: 'mekanism:basic_control_circuit',
                D: 'mekanism:basic_chemical_tank'
            }
        },
        {
            output: '2x ae2:cell_component_1k',
            pattern: patterns.crossWithCore,
            key: {
                A: 'ae2:logic_processor',
                B: 'rftoolsbase:infused_enderpearl',
                C: 'rftoolsbase:infused_diamond'
            }
        },
        {
            output: 'ae2:crafting_accelerator',
            pattern: patterns.crossWithCore,
            key: {
                A: 'ae2:crafting_unit',
                B: 'lazierae2:parallel_processor',
                C: Item.empty
            }
        },
        {
            output: '2x ae2:interface',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: 'psi:psimetal',
                B: 'create_crystal_clear:train_glass_casing',
                C: 'ae2:formation_core',
                D: 'integrateddynamics:crystalized_menril_block',
                E: 'ae2:annihilation_core'
            }
        },
        {
            output: 'dimdungeons:block_gilded_portal',
            pattern: patterns.crossWithCore,
            key: {
                A: 'elementalcraft:fireite_ingot',
                B: 'draconicevolution:infused_obsidian', 
                C: 'minecraft:gold_block'
            }
        },
        {
            output: '12x minecraft:end_portal_frame',
            pattern: ['A A','BCB', 'DDD'],
            key: {
                A: 'minecraft:end_crystal',
                B: 'alexsmobs:hemolymph_sac',
                C: 'alexsmobs:warped_muscle',
                D: 'dimdungeons:block_portal_keyhole'
            }
        },
        {
            output: 'mekanism:metallurgic_infuser',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'extendedcrafting:redstone_ingot',
                B: 'thermal:machine_bottler',
                C: 'mekanism:block_osmium',
                D: 'elementalcraft:fireblastfurnace',
                E: '#forge:storage_blocks/steel'
            }
        },
        {
            output: 'mekanism:steel_casing',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:alloy_reinforced',
                B: 'extendedcrafting:black_iron_ingot',
                C: 'extendedcrafting:ender_ingot'
            }
        },
        {
            output: 'ars_nouveau:agronomic_sourcelink',
            pattern: ['ABA','CDC', 'ABA'],
            key: {
                A: 'ars_nouveau:source_gem',
                B: 'mysticalagriculture:nature_agglomeratio',
                C: 'mysticalagriculture:mystical_fertilizer',
                D: 'ars_nouveau:arcane_core'
            }
        },
        {
            output: 'ars_nouveau:volcanic_sourcelink',
            pattern: ['ABA','CDC', 'ABA'],
            key: {
                A: 'ars_nouveau:source_gem',
                B: 'mysticalagriculture:fire_agglomeratio',
                C: 'tconstruct:blazewood',
                D: 'ars_nouveau:arcane_core'
            }
        },
        {
            output: 'ars_nouveau:alchemical_sourcelink',
            pattern: ['ABA','CDC', 'ABA'],
            key: {
                A: 'ars_nouveau:source_gem',
                B: 'mysticalagriculture:coral_agglomeratio',
                C: 'minecraft:brewing_stand',
                D: 'ars_nouveau:arcane_core'
            }
        },
        {
            output: 'ars_nouveau:vitalic_sourcelink',
            pattern: ['ABA','CDC', 'ABA'],
            key: {
                A: 'ars_nouveau:source_gem',
                B: 'mysticalagriculture:nether_agglomeratio',
                C: 'minecraft:wither_rose',
                D: 'ars_nouveau:arcane_core'
            }
        },
        {
            output: 'ars_nouveau:mycelial_sourcelink',
            pattern: ['ABA','CDC', 'ABA'],
            key: {
                A: 'ars_nouveau:source_gem',
                B: 'minecraft:red_mushroom_block',
                C: 'alexsmobs:gongylidia',
                D: 'ars_nouveau:arcane_core'
            }
        },
        {
            output: 'ars_nouveau:enchanting_apparatus',
            pattern: ['ABA','ACA','ADA'],
            key: {
                A: 'ars_nouveau:source_gem',
                B: 'ars_nouveau:source_jar',
                C: 'ars_nouveau:arcane_core',
                D: 'minecraft:enchanting_table'
            }
        },
        {
            output: 'mekanism:configurator',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'mekanism:alloy_infused',
                B: 'mekanism:basic_control_circuit',
                C: 'create:wrench'
            }
        },
        {
            output: 'mekanism:energy_tablet',
            pattern: ['ABA','CDC','ABA'],
            key: {
                A: 'mekanism:alloy_infused',
                B: 'lazierae2:resonating_crystal',
                C: 'integrateddynamics:crystalized_chorus_chunk',
                D: 'mekanism:basic_control_circuit'
            }
        },
        {
            output: 'ae2:molecular_assembler',
            pattern: ['ABA','ACA','ABA'],
            key: {
                A: 'thermal:signalum_glass',
                B: 'packagedauto:me_package_component',
                C: 'avaritia:compressed_crafting_table'
            }
        },
        {
            output: '2x mekanismgenerators:solar_panel',
            pattern: ['AAA','BCB','DDD'],
            key: {
                A: 'minecraft:daylight_detector',
                B: 'mekanism:energy_tablet',
                C: 'elementalcraft:crude_fire_gem',
                D: 'mekanism:ingot_osmium'
            }
        },
        {
            output: 'mekanismgenerators:wind_generator',
            pattern: ['ABA','CDC','EEE'],
            key: {
                A: 'mekanism:alloy_infused',
                B: 'create_sa:fan_component',
                C: 'mekanism:energy_tablet',
                D: 'elementalcraft:fine_air_gem',
                E: '#forge:ingots/osmium'
            }
        },
        {
            output: 'mekanism:basic_tier_installer',
            pattern: ['ABA','BCB','DED'],
            key: {
                A: 'ae2:advanced_card',
                B: 'mekanism:alloy_reinforced',
                C: 'integrateddynamics:crystalized_menril_block',
                D: 'psi:ivory_substance',
                E: 'ars_nouveau:manipulation_essence'
            }
        },
        {
            output: '4x mekanism:thermal_evaporation_block',
            pattern: patterns.surroundWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: 'thermal:constantan_ingot'
            }
        },
        {
            output: 'mekanism:thermal_evaporation_valve',
            pattern: patterns.crossWithCore,
            key: {
                A: 'ae2:interface',
                B: 'mekanism:thermal_evaporation_block',
                C: Item.empty
            }
        },
        {
            output: 'mekanism:thermal_evaporation_controller',
            pattern: ['ABA','CDC','CCC'],
            key: {
                A: 'mekanism:advanced_control_circuit',
                B: '#forge:glass_panes',
                C: 'mekanism:thermal_evaporation_block',
                D: 'ae2:controller'
            }
        },
        {
            output: '2x mekanism:induction_casing',
            pattern: patterns.crossWithCore,
            key: {
                A: 'integrateddynamics:energy_battery',
                B: '#mekanism:shards',
                C: 'mekanism:upgrade_energy'
            }
        },
        {
            output: '2x mekanism:induction_port',
            pattern: patterns.crossWithCore,
            key: {
                A: 'ae2:interface',
                B: 'mekanism:induction_casing',
                C: Item.empty
            }
        },
        {
            output: 'mekanism:enrichment_chamber',
            pattern: ['ABA','ACA','ADA'],
            key: {
                A: '#forge:ingots/steel',
                B: 'mekanism:advanced_control_circuit',
                C: 'mekanism:steel_casing',
                D: 'thermal:machine_insolator'
            }
        },
        {
            output: 'mekanism:osmium_compressor',
            pattern: ['ABA','ACA','ADA'],
            key: {
                A: '#forge:storage_blocks/osmium',
                B: 'mekanism:advanced_control_circuit',
                C: 'mekanism:steel_casing',
                D: 'thermal:machine_refinery'
            }
        },
        {
            output: 'mekanism:crusher',
            pattern: ['ABA','ACA','ADA'],
            key: {
                A: '#forge:ingots/refined_obsidian',
                B: 'mekanism:advanced_control_circuit',
                C: 'mekanism:steel_casing',
                D: 'thermal:machine_pulverizer'
            }
        },
        {
            output: 'mekanism:purification_chamber',
            pattern: ['ABA','ACA','ADA'],
            key: {
                A: 'mekanism:ingot_osmium',
                B: 'mekanism:advanced_control_circuit',
                C: 'mekanism:steel_casing',
                D: 'mekanism:enrichment_chamber'
            }
        },
        {
            output: 'mekanism:electric_pump',
            pattern: ['ABA','CDC','EEE'],
            key: {
                A: 'mekanism:dynamic_tank',
                B: 'thermal:device_water_gen',
                C: 'thermal:filter_attachment',
                D: 'mekanism:steel_casing',
                E: 'mekanism:advanced_control_circuit'
            }
        },
        {
            output: 'mekanism:rotary_condensentrator',
            pattern: ['ABA','CDE','ABA'],
            key: {
                A: '#c:glass',
                B: 'mekanism:advanced_control_circuit',
                C: 'pipez:gas_pipe',
                D: 'mekanism:steel_casing',
                E: 'pipez:fluid_pipe'
            }
        },
        {
            output: 'mekanism:isotopic_centrifuge',
            pattern: ['ABA','ACA','ADA'],
            key: {
                A: 'mekanism:ultimate_control_circuit',
                B: 'mekanism:ultimate_chemical_tank',
                C: 'mekanism:steel_casing',
                D: 'thermal:machine_centrifuge'
            }
        },
        {
            output: 'mekanism:electrolytic_separator',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: 'mekanism:electrolytic_core',
                C: 'mekanism:advanced_control_circuit'
            }
        },
        {
            output: 'mekanism:solar_neutron_activator',
            pattern: ['ABA','CAC','DED'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'mekanismgenerators:advanced_solar_generator',
                C: 'mekanism:alloy_reinforced',
                D: 'mekanism:elite_control_circuit',
                E: 'mekanism:steel_casing'
            }
        },
        {
            output: 'kubejs:incomplete_fission_reactor_casing',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: '#forge:storage_blocks/lead',
                C: 'mekanism:hdpe_sheet'
            }
        },
        {
            output: '2x mekanismgenerators:fission_reactor_port',
            pattern: patterns.surroundWithCore,
            key: {
                A: 'ae2:storage_bus',
                B: 'mekanismgenerators:fission_reactor_casing'
            }
        },
        {
            output: 'mekanismgenerators:fission_reactor_logic_adapter',
            pattern: patterns.surroundWithCore,
            key: {
                A: 'integrateddynamics:logic_programmer',
                B: 'mekanismgenerators:fission_reactor_casing'
            }
        },
        {
            output: 'mekanismgenerators:fission_fuel_assembly',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:elite_chemical_tank',
                B: 'avaritia:neutron_pile',
                C: '#forge:ingots/lead'
            }
        },
        {
            output: '4x mekanismgenerators:control_rod_assembly',
            pattern: patterns.crossWithCore,
            key: {
                A: 'ae2:controller',
                B: 'mekanismgenerators:fission_fuel_assembly',
                C: 'mekanism:ultimate_control_circuit'
            }
        },
        {
            output: 'mekanismgenerators:fusion_reactor_frame',
            pattern:patterns.crossWithCore,
            key: {
                A: 'mekanismgenerators:fission_reactor_casing',
                B: 'mekanism:pellet_polonium',
                C: 'mekanism:ultimate_control_circuit'
            }
        },
        {
            output: 'mekanismgenerators:fusion_reactor_logic_adapter',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanismgenerators:fission_reactor_logic_adapter',
                B: 'mekanismgenerators:fusion_reactor_frame',
                C: Item.empty
            }
        },
        {
            output: 'mekanismgenerators:fusion_reactor_controller',
            pattern: ['ABA','CDC','CCC'],
            key: {
                A: 'mekanism:ultimate_control_circuit',
                B: 'mekanism:pellet_polonium',
                C: 'mekanismgenerators:fusion_reactor_frame',
                D: 'ae2:controller'
            }
        },
        {
            output: 'mekanismgenerators:fusion_reactor_port',
            pattern: patterns.crossWithCore,
            key: {
                A: 'ae2:interface',
                B: 'mekanismgenerators:fusion_reactor_frame',
                C: Item.empty
            }
        },
        {
            output: 'draconicevolution:basic_crafting_injector',
            pattern: ['ABA','CCC','CCC'],
            key: {
                A: 'draconicevolution:basic_crafting_injector',
                B: 'draconicevolution:draconium_core',
                C: 'draconicevolution:draconium_core'
            }
        },
        {
            output: 'draconicevolution:module_core',
            pattern: patterns.crossWithCore,
            key: {
                A: 'draconicevolution:draconium_core',
                B: 'lazierae2:universal_press',
                C: 'lazierae2:parallel_processor'
            }
        },
        {
            output: 'draconicevolution:wyvern_core',
            pattern: patterns.cross,
            key: {
                A: 'extendedcrafting:ender_star_block',
                B: 'draconicevolution:draconium_core'
            }
        },
        {
            output: 'draconicevolution:wyvern_energy_core',
            pattern: patterns.crossWithCore,
            key: {
                A: 'avaritia:redstone_singularity',
                B: 'draconicevolution:draconium_core',
                C: 'ae2:controller'
            }
        },
        {
            output: 'fluxnetworks:flux_controller',
            pattern: ['ABA','CDC','AAA'],
            key: {
                A: 'fluxnetworks:flux_block',
                B: 'fluxnetworks:flux_core',
                C: 'fluxnetworks:flux_dust',
                D: 'mekanism:steel_casing'
            }
        },
        {
            output: 'fluxnetworks:basic_flux_storage',
            pattern: ['AAA','BCB','AAA'],
            key: {
                A: 'fluxnetworks:flux_block',
                B: 'mekanismgenerators:reactor_glass',
                C: 'mekanism:steel_casing'
            }
        },
        {
            output: 'fluxnetworks:flux_plug',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: 'fluxnetworks:flux_core',
                C: 'fluxnetworks:flux_block'
            }
        },
        {
            output: 'fluxnetworks:flux_point',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: 'fluxnetworks:flux_core',
                C: '#forge:storage_blocks/redstone'
            }
        },
        {
            output: '4x mekanism:boiler_casing',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: 'extendedcrafting:black_iron_ingot',
                C: 'mekanism:bio_fuel'
            }
        },
        {
            output: 'mekanism:superheating_element',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: 'createaddition:copper_wire',
                C: 'extendedcrafting:redstone_ingot'
            }
        },
        {
            output: 'mekanism:pressure_disperser',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mekanism:steel_casing',
                B: 'create_sa:hydraulic_engine',
                C: 'create_sa:heat_engine'
            }
        },
        {
            output: 'hostilenetworks:deep_learner',
            pattern: ['ABA','CBC','ABA'],
            key: {
                A: 'fluxnetworks:flux_block',
                B: '#mekanism:crystals',
                C: 'fluxnetworks:flux_plug'
            }
        },
        {
            output: 'hostilenetworks:sim_chamber',
            pattern: ['ABA','CDC','ABA'],
            key: {
                A: 'fluxnetworks:flux_block',
                B: 'mekanismgenerators:control_rod_assembly',
                C: 'integrateddynamics:part_display_panel',
                D: 'lazierae2:growth_core'
            }
        },
        {
            output: 'integrateddynamics:part_display_panel',
            pattern: patterns.crossWithCore,
            key: {
                A: 'mysticalagriculture:supremium_growth_accelerator',
                B: 'hostilenetworks:nether_prediction',
                C: '#forge:storage_blocks/netherite'
            }
        },
        {
            output: '8x mekanism:basic_thermodynamic_conductor',
            pattern: ['AAA','BCB','AAA'],
            key: {
                A: '#forge:ingots/constantan',
                B: 'mekanism:basic_control_circuit',
                C: 'rftoolspower:blazing_rod'
            }
        },
        {
            output: '8x mekanism:basic_mechanical_pipe',
            pattern: ['AAA','BCB','AAA'],
            key: {
                A: 'pipez:fluid_pipe',
                B: 'mekanism:basic_control_circuit',
                C: 'create:smart_fluid_pipe'
            }
        },
        {
            output: '8x mekanism:basic_pressurized_tube',
            pattern: ['AAA','BCB','AAA'],
            key: {
                A: 'pipez:gas_pipe',
                B: 'mekanism:basic_control_circuit',
                C: '#forge:glass'
            }
        },
        {
            output: '8x mekanism:basic_logistical_transporter',
            pattern: ['AAA','BCB','AAA'],
            key: {
                A: 'pipez:item_pipe',
                B: 'mekanism:basic_control_circuit',
                C: 'itemfilters:always_true'
            }
        },
        {
            output: '8x mekanism:basic_universal_cable',
            pattern: ['AAA','BCB','AAA'],
            key: {
                A: 'pipez:energy_pipe',
                B: 'mekanism:basic_control_circuit',
                C: '#forge:storage_blocks/redstone'
            }
        },
        {
            output: 'mysticalagriculture:infusion_altar',
            pattern: ['ABA','ACA','CCC'],
            key: {
                A: 'elementalcraft:swift_alloy_block',
                B: 'dimdungeons:block_gilded_portal',
                C: 'mekanismgenerators:fusion_reactor_frame'
            }
        },
        {
            output: 'mysticalagriculture:infusion_pedestal',
            pattern: ['ABA',' C ',' C '],
            key: {
                A: 'dimdungeons:block_gilded_portal',
                B: 'mekanismgenerators:fusion_reactor_port',
                C: 'elementalcraft:swift_alloy_block'
            }
        },
        {
            output: 'kubejs:end_portal_frame_tool',
            pattern: [' AB',' CA','C  '],
            key: {
                A: 'avaritia:neutronium_ingot',
                B: 'minecraft:end_crystal',
                C: 'mekanism:hdpe_stick'
            }
        },
        {
            output: 'starcraft:input_bus',
            pattern: patterns.crossWithCore,
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'pipez:item_pipe',
                C: 'integrateddynamics:portable_logic_programmer'
            }
        },
        {
            output: 'starcraft:energy_input_bus',
            pattern: ['AAA','BCB','AAA'],
            key: {
                A: 'rftoolspower:power_core3',
                B: 'pipez:energy_pipe',
                C: 'extendedcrafting:redstone_catalyst'
            }
        },
        {
            output: 'starcraft:portal_gate',
            pattern: ['ABA','CDC','ABA'],
            key: {
                A: 'thermal:enderium_ingot',
                B: 'botania:gaia_ingot',
                C: 'botania:natura_pylon',
                D: 'botania:gaia_pylon'
            }
        },
        {
            output: 'starcraft:stress_creator',
            pattern: ['ABA','BCB','ADA'],
            key: {
                A: 'create:steam_engine',
                B: 'create_sa:heat_engine',
                C: 'mekanism:thermal_evaporation_controller',
                D: 'create:blaze_burner'
            }
        },
        {
            output: 'starcraft:electric_stress_creator',
            pattern: ['ABA','BCB','ADA'],
            key: {
                A: 'mekanism:induction_casing',
                B: 'mekanism:advanced_induction_cell',
                C: 'mekanism:advanced_induction_provider',
                D: 'create:flywheel'
            }
        }
    ]

    recipesShaped.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key)
    })
})