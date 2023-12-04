onEvent('recipes', event => {
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'AAAAA',
            'BCDCB',
            'EFGFE',
            'EHIHE',
            'JBBBJ'
        ],
        key:{
            A: 'astralsorcery:glass_lens',
            B: 'astralsorcery:marble_bricks',
            C: 'extendedcrafting:redstone_ingot',
            D: 'botania:terrasteel_ingot',
            E: 'astralsorcery:marble_pillar',
            F: 'botania:life_essence',
            G: 'astralsorcery:altar_discovery',
            H: 'extendedcrafting:ender_ingot',
            I: 'extrabotany:aerialite',
            J: 'astralsorcery:marble_chiseled'
        },
        result: 'astralsorcery:altar_attunement'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'ABCBA',
            'DEEED',
            'DFGHD',
            'DIJID',
            'AKBKA'
        ],
        key: {
            A: 'appliedenergistics2:4k_cell_component',
            B: 'buddycards:buddysteel_ingot',
            C:'astralsorcery:shifting_star',
            D: 'ars_nouveau:mythical_clay',
            E: 'astralsorcery:perk_seal',
            F: 'extrabotany:shadowium',
            G:'astralsorcery:altar_attunement',
            H:'extrabotany:photonium',
            I:'extendedcrafting:enhanced_ender_ingot',
            J:'extrabotany:elementrune',
            K:'fluxnetworks:flux_block'
        },
        result: 'astralsorcery:altar_constellation'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            'ABCBA',
            'BDEDB',
            'CFGFC',
            'BDDDB',
            'ABCBA'
        ],
        key: {
            A: 'emendatusenigmatica:arcane_gem',
            B: 'astralsorcery:well',
            C: 'industrialforegoing:laser_lens3',
            D:'astralsorcery:marble_chiseled',
            E:'immersiveengineering:toolupgrade_railgun_scope',
            F:'gobber2:gobber2_ingot_nether',
            G:'astralsorcery:ritual_pedestal'
        },
        result: 'astralsorcery:attunement_altar'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            'AAAAAAA',
            'ABCCCBA',
            'ADEFEDA',
            'GHIJIKG',
            'GDILIDG',
            'GBMLMBG',
            'GGGGGGG'
        ],
        key: {
            A: 'astralsorcery:glass_lens',
            B: 'astralsorcery:marble_runed',
            C: 'extrabotany:orichalcos',
            D: 'astralsorcery:marble_pillar',
            E: 'astralsorcery:celestial_crystal',
            F: 'astralsorcery:celestial_collector_crystal',
            G: 'fluxnetworks:flux_block',
            H: 'ae2extras:256k_fluid_cell_component',
            I: 'astralsorcery:resonating_gem',
            J: 'gobber2:dragon_star',
            K: 'ae2extras:256k_cell_component',
            L: 'astralsorcery:ritual_link',
            M: 'endless:crystal_matrix_ingot'
        },
        result: 'astralsorcery:altar_radiance'
    })

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
            D: 'astralsorcery:illumination_powder',
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
            A: 'aquaculture:neptunium_block',
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
            B: 'astralsorcery:starmetal',
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
        tier: 3,
        pattern:[
            'AAABAAA',
            'ACDBDCA',
            'ADEFEDA',
            'BBFBFBB',
            'ADEFEDA',
            'ACDBDCA',
            'AAABAAA'
        ],
        key: {
            A: 'minecraft:gold_ingot',
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
            H: 'astralsorcery:fountain',
            I: 'minecraft:coal'
        },
        result: 'masterfulmachinery:star_creation_instrument_controller'
    })
})