onEvent('recipes', event => {
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'ABBBA',
            'ACBCA',
            'BDEDB',
            'BCBCB',
            'BFFFB'
        ],
        key:{
            A: 'botania:sunny_quartz',
            B: 'minecraft:gold_ingot',
            C: 'ars_nouveau:mana_gem_block',
            D: 'woot:anvil',
            E: 'botania:mana_pylon',
            F: 'powah:blazing_crystal_block'
        },
        result: 'ars_nouveau:mana_condenser'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3, 
        pattern: [
            'AAAAAAA',
            'ABCDCBA',
            'ACEFECA',
            'ADFGFDA',
            'ACEFECA',
            'ABCDCBA',
            'AAAAAAA'
        ],
        key: {
            A: 'botania:elementium_ingot',
            B: 'emendatusenigmatica:fluix_block',
            C: 'botania:gaia_pylon',
            D: 'minecraft:end_crystal',
            E: 'botania:elementium_block',
            F: 'industrialforegoing:machine_frame_supreme',
            G: 'ironfurnaces:million_furnace'
        },
        result: 'masterfulmachinery:elementium_furnace_controller'
    }),

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AAAAA',
            'ABCBA',
            'ACDCA',
            'ABCBA',
            'AAAAA'
        ],
        key: {
            A: 'kubejs:block_19',
            B: 'mythicbotany:alfsteel_pylon',
            C: 'mythicbotany:alfsteel_block',
            D: 'masterfulmachinery:elementium_furnace_controller'
        },
        result: 'masterfulmachinery:alfsteel_furnace_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AAAAA',
            'ABBBA',
            'ABCBA',
            'ABBBA',
            'AAAAA'
        ],
        key: {
            A: 'aquaculture:neptunium_nugget',
            B: 'woot:rate_3',
            C: 'industrialforegoing:marine_fisher'
        },
        result: 'masterfulmachinery:marine_fisher_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AAAAA',
            'ABBBA',
            'CDEFC',
            'ABBBA',
            'AAAAA'
        ],
        key: {
            A: 'thermal:black_rockwool',
            B: 'endless:neutronium_ingot',
            C: 'fluxnetworks:flux_dust',
            D: 'thermal:device_rock_gen',
            E: 'extendedcrafting:nether_star_block',
            F: 'industrialforegoing:material_stonework_factory'
        },
        result: 'masterfulmachinery:material_stonework_factory_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3,
        pattern:[
            'AAAAAAA',
            'BBBBBBB',
            'CCDDDCC',
            'CEFGFEC',
            'BHIFIHB',
            'AHJJJHA',
            'AEJJJEA'
        ],
        key: {
            A: 'botania:quartz_lavender',
            B: 'botania:gaia_ingot',
            C: 'botania:gaia_ingot',
            D: 'kubejs:block_44',
            E: 'botania:terrasteel_block',
            F: 'industrialforegoing:ore_laser_base',
            G: 'industrialforegoing:laser_drill',
            H: 'minecraft:netherite_block',
            I: 'kubejs:block_39',
            J: 'kubejs:block_27'
        },
        result: 'masterfulmachinery:star_picker_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            'AAAAA',
            'ABCDA',
            'EBCDE',
            'EBCDE',
            'FFFFF'
        ],
        key: {
            A: 'minecraft:redstone_block',
            B: 'create_stuff_additions:quartz_crusher',
            C: 'endless:neutronium_block',
            D: 'create:crushing_wheel',
            E: 'thermal:cinnabar_block',
            F: 'extendedcrafting:ender_ingot'
        },
        result: 'masterfulmachinery:machine_pulverizer_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3,
        pattern:[
            'ABBBBBA',
            'BBCCCBB',
            'BCDEDCB',
            'BCEFECB',
            'BCGDGCB',
            'BBHHHBB',
            'ABBBBBA'
        ],
        key: {
            A: 'endless:endest_pearl',
            B: 'powah:capacitor_nitro',
            C: 'minecraft:red_stained_glass',
            D: 'mythicbotany:wither_aconite',
            E: 'mob_grinding_utils:wither_muffler',
            F: 'industrialforegoing:wither_builder',
            G: 'minecraft:wither_skeleton_skull',
            H: 'immersiveengineering:tesla_coil'
        },
        result: 'masterfulmachinery:wither_builder_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            'AABAA',
            'ACCCA',
            'BCDCB',
            'ACCCA',
            'AABAA'
        ],
        key:{
            A: 'botania:elementium_ingot',
            B: 'kubejs:block_43',
            C: 'kubejs:block_10',
            D: 'kubejs:block_24'
        },
        result: 'masterfulmachinery:force_field_aggregator_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            'CDBDC',
            'DEFED',
            'BFBFB',
            'DEFED',
            'CDBDC'
        ],
        key: {
            B: 'thermal:lumium_glass',
            C: 'rftoolscontrol:cpu_core_1000',
            D: 'appliedenergistics2:crafting_unit',
            E: 'thermal:enderium_block',
            F: 'appliedenergistics2:controller'
        },
        result: 'masterfulmachinery:particle_fusion_reactor_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 4,
        pattern:[
            'ABCDEFGBA',
            'BBHIIIHBB',
            'JHHKLKHHJ',
            'JIKMLMKIJ',
            'NILLILLIO',
            'PIKMLMKIP',
            'PHHKLKHHP',
            'BBHIIIHBB',
            'ABCDEFGBA'
        ],
        key: {
            A: 'appliedenergistics2:singularity',
            B: 'extrabotany:heromedal',
            C: 'mythicbotany:asgard_rune',
            D: 'mythicbotany:vanaheim_rune',
            E: 'mythicbotany:alfheim_rune',
            F: 'mythicbotany:midgard_rune',
            G: 'mythicbotany:joetunheim_rune',
            H: 'kubejs:block_53',
            I: 'gobber2:gobber2_block_end',
            J: 'mythicbotany:niflheim_rune',
            K: 'lazierae2:speculative_processor',
            L: 'kubejs:block_4',
            M: 'rftoolsbase:infused_enderpearl',
            N: 'mythicbotany:helheim_rune',
            O: 'mythicbotany:nidavellir_rune',
            P: 'mythicbotany:muspelheim_rune'
        },
        result: 'masterfulmachinery:artificial_intelligence_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 4,
        pattern:[
            'AAABBBAAA',
            'ACDEBEDCA',
            'ADFFBFFDA',
            'BEFGHGFEB',
            'BBBHIHBBB',
            'BEFGHGFEB',
            'ADFFBFFDA',
            'ACDEBEDCA',
            'AAABBBAAA'
        ],
        key:{
            A: 'kubejs:block_19',
            B: 'kubejs:block_29',
            C: 'kubejs:block_35',
            D: 'mythicbotany:fimbultyr_tablet',
            E: 'gobber2:dragon_star',
            F: 'kubejs:block_23',
            G: 'endless:neutronium_block',
            H: 'botania:gaia_ingot',
            I: 'minecraft:coal'
        },
        result: 'masterfulmachinery:star_creation_instrument_controller'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            "ABCBA",
            "BDEDB",
            "CEFEC",
            "BDEDB",
            "ABCBA"
        ],
        key:{
            A: "extendedcrafting:crystaltine_catalyst",
            B: "lazierae2:parallel_processor",
            C: "appliedenergistics2:crafting_unit",
            D: "extrabotany:aerialite",
            E: "extendedcrafting:enhanced_ender_ingot",
            F: "buddycards:perfect_buddysteel_ingot"
        },
        result: '8x kubejs:block_1'
    }),
    
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            "AA AA",
            "AAAAA",
            "AABAA",
            "AAAAA",
            " AAA "
        ],
        key:{
            A: "endless:infinity_ingot",
            B: "extendedcrafting:nether_star_block"
        },
        result: 'endless:infinity_chestplate'
    }),
    
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            "AAAAA",
            "AAAAA",
            "AA AA",
            "BB BB",
            "AA AA"
        ],
        key:{
            A: "endless:infinity_ingot",
            B: "extendedcrafting:nether_star_block"
        },
        result: 'endless:infinity_leggings'
    }),

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            " A A ",
            " B B ",
            " B B ",
            "BB BB",
            "BB BB"
        ],
        key:{
            A: "extendedcrafting:nether_star_block",
            B: "endless:infinity_ingot"
        },
        result: 'endless:infinity_boots'
    }),

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            "AAAAA",
            "ABABA",
            "AAAAA",
            "A   A",
            "     "
        ],
        key:{
            A: "endless:infinity_ingot",
            B: "minecraft:nether_star"
        },
        result: 'endless:infinity_helmet'
    }),

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern:[
            "   AB",
            "  AAA",
            " AAA ",
            " CA  ",
            "D    "
        ],
        key:{
            A: "endless:infinity_ingot",
            B: "endless:infinity_block",
            C: "minecraft:nether_star",
            D: "pamhc2foodextended:walnutraisinbreaditem"
        },
        result: 'endless:infinity_sword'
    })
})
