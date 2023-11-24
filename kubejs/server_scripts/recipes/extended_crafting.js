onEvent('recipes', event => {
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "AAAAA",
            "BCDCB",
            "EFGFE",
            "EHIHE",
            "JBBBJ"
        ],
        key:{
            A: "astralsorcery:glass_lens",
            B: "astralsorcery:marble_bricks",
            C: "extendedcrafting:redstone_ingot",
            D: "botania:terrasteel_ingot",
            E: "astralsorcery:marble_pillar",
            F: "botania:life_essence",
            G: "astralsorcery:altar_discovery",
            H: "extendedcrafting:ender_ingot",
            I: "extrabotany:aerialite",
            J: "astralsorcery:marble_chiseled"
        },
        result: 'astralsorcery:altar_attunement'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABCBA",
            "DEEED",
            "DFGHD",
            "DIJID",
            "AKBKA"
        ],
        key: {
            A: "appliedenergistics2:4k_cell_component",
            B: "buddycards:buddysteel_ingot",
            C:"astralsorcery:shifting_star",
            D: "ars_nouveau:mythical_clay",
            E: "astralsorcery:perk_seal",
            F: "extrabotany:shadowium",
            G:"astralsorcery:altar_attunement",
            H:"extrabotany:photonium",
            I:"extendedcrafting:enhanced_ender_ingot",
            J:"extrabotany:elementrune",
            K:"fluxnetworks:flux_block"
        },
        result: "astralsorcery:altar_constellation"
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABCBA",
            "BDEDB",
            "CFGFC",
            "BDDDB",
            "ABCBA"
        ],
        key: {
            A: "emendatusenigmatica:arcane_gem",
            B: "astralsorcery:well",
            C: "industrialforegoing:laser_lens3",
            D:"astralsorcery:marble_chiseled",
            E:"immersiveengineering:toolupgrade_railgun_scope",
            F:"gobber2:gobber2_ingot_nether",
            G:"astralsorcery:ritual_pedestal"
        },
        result: 'astralsorcery:attunement_altar'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 3,
        pattern: [
            "AAAAAAA",
            "ABCCCBA",
            "ADEFEDA",
            "GHIJIKG",
            "GDILIDG",
            "GBMLMBG",
            "GGGGGGG"
        ],
        key: {
            A: "astralsorcery:glass_lens",
            B: "astralsorcery:marble_runed",
            C: "extrabotany:orichalcos",
            D: "astralsorcery:marble_pillar",
            E: "astralsorcery:celestial_crystal",
            F: "astralsorcery:celestial_collector_crystal",
            G: "fluxnetworks:flux_block",
            H: "ae2extras:256k_fluid_cell_component",
            I: "astralsorcery:resonating_gem",
            J: "gobber2:dragon_star",
            K: "ae2extras:256k_cell_component",
            L: "astralsorcery:ritual_link",
            M: "endless:crystal_matrix_ingot"
        },
        result: 'astralsorcery:altar_radiance'
    })

    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABBBA",
            "ACBCA",
            "BDEDB",
            "BCBCB",
            "BFFFB"
        ],
        key:{
            A: "botania:sunny_quartz",
            B: "minecraft:gold_ingot",
            C: "ars_nouveau:mana_gem_block",
            D: "astralsorcery:illumination_powder",
            E: "botania:mana_pylon",
            F: "powah:blazing_crystal_block"
        },
        result: 'ars_nouveau:mana_condenser'
    })
})