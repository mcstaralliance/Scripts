onEvent('recipes', (event) => {
    const recipesShaped = [
        // 高炉
        {
            output: 'minecraft:blast_furnace',
            pattern: patterns.crossWithCore,
            key: {
                A: 'minecraft:furnace',
                B: 'minecraft:bricks',
                C: 'minecraft:iron_ingot'
            },
            id: 'minecraft:blast_furnace'
        },

        // 高炉砖
        {
            output: '6x immersiveengineering:blastbrick',
            pattern: patterns.crossWithCore,
            key: {
                A: 'minecraft:blast_furnace',
                B: 'minecraft:magma_block',
                C: 'minecraft:red_nether_bricks'
            },
            id: 'immersiveengineering:blastbrick'
        },

        // 熔炉
        {
            output: 'minecraft:furnace',
            pattern: patterns.surroundWithCore,
            key: {
                A: 'minecraft:clay',
                B: '#forge:cobblestone'
            },
            id: 'minecraft:furnace'
        },

        // 雪块
        {
            output: 'minecraft:snow_block',
            pattern: patterns.fullShaped,
            key: {
                A: 'minecraft:snowball'
            },
            id: 'minecraft:snow_block'
        },

        // 砂土
        {
            output: '12x minecraft:coarse_dirt',
            pattern: patterns.cross,
            key: {
                A: 'minecraft:dirt',
                B: '#forge:gravel'
            },
            id: '12x minecraft:coarse_dirt'
        },

        // 机器框架
        {
            output: 'thermal:machine_frame',
            pattern:patterns.crossWithCore,
            key: {
                A: '#forge:gears/invar',
                B: 'glassential:glass_dark',
                C: 'thermal:signalum_ingot'
            },
            id: 'thermal:machine_frame'
        },

        // 动力辊压机
        {
            output: 'create:mechanical_press',
            pattern:['AAA','BCB','DED'],
            key: {
                A: '#forge:storage_blocks',
                B: 'create:cogwheel',
                C: 'create:andesite_casing',
                D: 'minecraft:piston',
                E: 'minecraft:iron_block'
            },
            id: 'create:mechanical_press'
        },

        // 晶体催生仓
        {
            output: 'appliedenergistics2:quartz_growth_accelerator',
            pattern:patterns.crossWithCore,
            key: {
                A: 'appliedenergistics2:fluix_block',
                B: 'appliedenergistics2:quartz_glass',
                C: 'create:polished_rose_quartz'
            },
            id: 'appliedenergistics2:quartz_growth_accelerator'
        },

        // 压印机
        {
            output: 'appliedenergistics2:inscriber',
            pattern: ['ABA', 'C A', 'ABA'],
            key: {
                A: 'create:polished_rose_quartz',
                B: 'create:mechanical_piston',
                C: '#appliedenergistics2:crystals/fluix'
            },
            id: 'appliedenergistics2:inscriber'
        },

        // 低级机器框架
        {
            output: 'industrialforegoing:machine_frame_pity',
            pattern: patterns.crossWithCore,
            key: {
                A: 'minecraft:redstone_block',
                B: '#forge:stone',
                C: '#forge:plates/iron'
            },
            id: 'industrialforegoing:machine_frame_pity'
        },

        // ME 箱子
        {
            output: 'appliedenergistics2:chest',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:glass',
                B: 'appliedenergistics2:terminal',
                C: '#appliedenergistics2:glass_cable',
                D: 'create:chromatic_compound',
                E: '#forge:plates/iron',
                F: 'emendatusenigmatica:fluix_block',
            },
            id: 'appliedenergistics2:chest'
        },

        // ME 控制器
        {
            output: 'appliedenergistics2:controller',
            pattern: patterns.crossWithCore,
            key: {
                A: 'appliedenergistics2:chest',
                B: '#forge:gems/fluix',
                C: 'appliedenergistics2:smooth_sky_stone_block',
            },
            id: 'appliedenergistics2:controller'
        },

        // 安全终端
        {
            output: 'appliedenergistics2:security_station',
            pattern: patterns.crossWithCore,
            key: {
                A: 'appliedenergistics2:engineering_processor',
                B: 'appliedenergistics2:logic_processor',
                C: 'minecraft:iron_ingot',
            },
            id: 'appliedenergistics2:security_station'
        },

        // 传送带
        {
            output: '12x create:belt_connector',
            pattern: ['   ', 'AAA', 'AAA'],
            key:{A: 'minecraft:dried_kelp_block'},
            id: '12x create:belt_connector'
        },
        {
            output: '12x create:belt_connector',
            pattern: ['   ', 'AAA', '   '],
            key:{A: 'immersiveengineering:hemp_fabric'},
            id: '12x create:belt_connector tier2'
        },

        //

    ]

    recipesShaped.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })

    event.shapeless('immersiveengineering:blastbrick_reinforced', ['immersiveengineering:blastbrick', 'botania:blaze_block', '#forge:plates/steel'])  // 强化高炉砖
    event.shapeless('create:mechanical_mixer', ['create:mechanical_press', 'create:whisk']).replaceIngredient('create:mechanical_press', 'create:mechanical_piston')  // 动力搅拌机

    event.smithing('4x create:andesite_alloy', 'minecraft:iron_nugget', 'minecraft:andesite')  // 安山合金
    event.smithing('create:encased_fan', 'create:gearshift', 'create:propeller')  // 鼓风机

})