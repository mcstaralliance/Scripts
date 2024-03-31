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
})
