onEvent('recipes', event => {
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABACA",
            "DAAAE",
            "FGHIA",
            "JFFFK",
            "FLFMF"
        ],
        key: {
            A: 'botania:manasteel_ingot',
            B: 'elementalcraft:watercrystal',
            C: 'botania:rune_earth',
            D: 'elementalcraft:firecrystal',
            E: 'botania:rune_air',
            F: 'minecraft:lapis_lazuli',
            G: 'botania:rune_mana',
            H: 'botania:mana_quartz',
            I: 'elementalcraft:contained_crystal',
            J: 'botania:rune_fire',
            K: 'elementalcraft:aircrystal',
            L: 'botania:rune_water',
            M: 'elementalcraft:earthcrystal'
        },
        result: 'botania:terra_plate'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "AAAAA",
            "ABBBA",
            "CDEDC",
            "CDDDC",
            "CDCDC"
        ],
        key: {
            A: '#starcraft:tag_corundum_cluster',
            B: 'elementalcraft:whiterock_brick',
            C: 'create:golden_sheet',
            D: '#forge:glass',
            E: '#forge:plates/gold'
        },
        result: 'ars_nouveau:source_jar'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "AAAAA",
            "BBCBB",
            "DBEBD",
            "DFGFD",
            "HHHHH"
        ],
        key: {
            A: '#forge:glass',
            B: 'ars_nouveau:archwood_planks',
            C: 'elementalcraft:purecrystal',
            D: '#starcraft:tag_corundum_cluster',
            E: 'ars_nouveau:whirlisprig_shards',
            F: '#forge:plates/gold',
            G: 'elementalcraft:pureinfuser',
            H: 'minecraft:blaze_powder'
        },
        result: 'ars_nouveau:imbuement_chamber'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABCBA",
            "BDEDB",
            "FGHGF",
            "IJKJI",
            "ILMLI"
        ],
        key: {
            A: 'mekanism:alloy_atomic',
            B: 'mysticalagriculture:imperium_essence',
            C: 'integrateddynamics:logic_director',
            D: 'lazierae2:logic_unit',
            E: 'mekanism:basic_tier_installer',
            F: 'mekanism:energy_tablet',
            G: 'mekanism:steel_casing',
            H: 'thermal:energy_cell_frame',
            I: 'mekanism:enriched_redstone',
            J: 'psi:psigem',
            K: 'botanicalmachinery:mana_emerald_block',
            L: 'create:experience_nugget',
            M: 'thermal:enderium_ingot'
        },
        result: '2x mekanism:advanced_tier_installer'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            "ABBCBBA",
            "BDDEDDB",
            "CFGHGFC",
            "IFHJHFI",
            "CFEIEFC",
            "BKLMNKB",
            "ABBCBBA"
        ],
        key: {
            A: 'extendedcrafting:elite_catalyst',
            B: 'tconstruct:manyullyn_ingot',
            C: 'extendedcrafting:elite_component',
            D: 'mekanism:elite_control_circuit',
            E: 'mekanism:module_base',
            F: 'mysticalagriculture:supremium_essence',
            G: 'mekanism:elite_tier_installer',
            H: 'mekanism:alloy_atomic',
            I: 'extendedcrafting:ender_star',
            J: 'extendedcrafting:crystaltine_ingot',
            K: 'hostilenetworks:nether_prediction',
            L: 'psi:ebony_psimetal',
            M: 'elementalcraft:purerock',
            N: 'psi:ivory_psimetal'
        },
        result: '3x mekanism:elite_tier_installer'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            "ABACABA",
            "DEFEFED",
            "DGHIHGD",
            "CJKLKJC",
            "DGMIMGD",
            "DNENEND",
            "ABCBCBA"
        ],
        key: {
            A: 'draconicevolution:infused_obsidian',
            B: 'elementalcraft:fireite_ingot',
            C: 'avaritia:crystal_matrix_ingot',
            D: 'avaritia:neutronium_ingot',
            E: 'mekanism:alloy_atomic',
            F: 'mysticalagriculture:supremium_ingot',
            G: 'mekanism:ultimate_control_circuit',
            H: 'mekanism:teleportation_core',
            I: 'ae2:cell_component_64k',
            J: 'draconicevolution:draconium_core',
            K: 'mekanism:elite_tier_installer',
            L: 'dimdungeons:item_homeward_pearl',
            M: 'ae2:singularity',
            N: 'mekanism:block_refined_glowstone'
        },
        result: '2x mekanism:ultimate_tier_installer'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABCBA",
            "DEFED",
            "BGGGB",
            "DEHED",
            "ABCBA"
        ],
        key: {
            A: 'fluxnetworks:flux_block',
            B: 'mekanism:ultimate_control_circuit',
            C: 'ars_nouveau:relay_warp',
            D: 'hostilenetworks:end_prediction',
            E: 'mekanism:teleportation_core',
            F: 'mekanism:teleporter_frame',
            G: 'extendedcrafting:crystaltine_ingot',
            H: 'mekanism:teleporter'
        },
        result: 'mekanism:quantum_entangloporter'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            "AABCBAA",
            "ADEFEDA",
            "BGHIHGB",
            "CJKLKJC",
            "BGMIMGB",
            "ADNFNDA",
            "AABCBAA"
        ],
        key: {
            A: 'extendedcrafting:crystaltine_ingot',
            B: 'mekanism:enriched_refined_obsidian',
            C: 'mekanism:ultimate_control_circuit',
            D: 'fluxnetworks:flux_block',
            E: 'ae2:spatial_cell_component_128',
            F: 'mekanism:elite_tier_installer',
            G: 'mekanism:hdpe_rod',
            H: 'mysticalagriculture:supremium_gemstone_block',
            I: 'dimdungeons:item_homeward_pearl',
            J: 'rftoolspower:power_core3',
            K: 'botanicalmachinery:mana_emerald_block',
            L: 'elementalcraft:fireite_block',
            M: 'lazierae2:logic_unit',
            N: 'ae2:cell_component_64k'
        },
        result: 'draconicevolution:draconium_core'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABBBA",
            "CDEDC",
            "FDGDF",
            "HIJIH",
            "KHLHK"
        ],
        key: {
            A: 'hostilenetworks:end_prediction',
            B: 'mekanism:ultimate_control_circuit',
            C: 'alexsmobs:void_worm_mandible',
            D: 'mekanism:hdpe_sheet',
            E: 'draconicevolution:draconium_core',
            F: 'mekanismgenerators:fusion_reactor_frame',
            G: 'mysticalagriculture:supremium_helmet',
            H: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell',
            J: 'fluxnetworks:gargantuan_flux_storage',
            K: 'elementalcraft:purecrystal',
            L: 'alexsmobs:void_worm_eye',
        },
        result: 'mekanism:mekasuit_helmet'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABBBA",
            "CDEDC",
            "FDGDF",
            "HIJIH",
            "KHLHK"
        ],
        key: {
            A: 'hostilenetworks:end_prediction',
            B: 'mekanism:ultimate_control_circuit',
            C: 'alexsmobs:void_worm_mandible',
            D: 'mekanism:hdpe_sheet',
            E: 'draconicevolution:draconium_core',
            F: 'mekanismgenerators:fusion_reactor_frame',
            G: 'mysticalagriculture:supremium_chestplate',
            H: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell',
            J: 'fluxnetworks:gargantuan_flux_storage',
            K: 'elementalcraft:purecrystal',
            L: 'alexsmobs:void_worm_eye',
        },
        result: 'mekanism:mekasuit_bodyarmor'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABBBA",
            "CDEDC",
            "FDGDF",
            "HIJIH",
            "KHLHK"
        ],
        key: {
            A: 'hostilenetworks:end_prediction',
            B: 'mekanism:ultimate_control_circuit',
            C: 'alexsmobs:void_worm_mandible',
            D: 'mekanism:hdpe_sheet',
            E: 'draconicevolution:draconium_core',
            F: 'mekanismgenerators:fusion_reactor_frame',
            G: 'mysticalagriculture:supremium_leggings',
            H: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell',
            J: 'fluxnetworks:gargantuan_flux_storage',
            K: 'elementalcraft:purecrystal',
            L: 'alexsmobs:void_worm_eye',
        },
        result: 'mekanism:mekasuit_pants'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABBBA",
            "CDEDC",
            "FDGDF",
            "HIJIH",
            "KHLHK"
        ],
        key: {
            A: 'hostilenetworks:end_prediction',
            B: 'mekanism:ultimate_control_circuit',
            C: 'alexsmobs:void_worm_mandible',
            D: 'mekanism:hdpe_sheet',
            E: 'draconicevolution:draconium_core',
            F: 'mekanismgenerators:fusion_reactor_frame',
            G: 'mysticalagriculture:supremium_boots',
            H: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell',
            J: 'fluxnetworks:gargantuan_flux_storage',
            K: 'elementalcraft:purecrystal',
            L: 'alexsmobs:void_worm_eye',
        },
        result: 'mekanism:mekasuit_boots'
    })

})
