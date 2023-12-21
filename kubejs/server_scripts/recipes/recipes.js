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
            id: 'starcraft:minecraft_blast_furnace'
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
            id: 'starcraft:immersiveengineering_blastbrick'
        },

        // 熔炉
        {
            output: 'minecraft:furnace',
            pattern: patterns.surroundWithCore,
            key: {
                A: 'minecraft:clay',
                B: '#forge:cobblestone'
            },
            id: 'starcraft:minecraft_furnace'
        },

        // 雪块
        {
            output: 'minecraft:snow_block',
            pattern: patterns.fullShaped,
            key: {
                A: 'minecraft:snowball'
            },
            id: 'starcraft:minecraft_snow_block'
        },

        // 砂土
        {
            output: '12x minecraft:coarse_dirt',
            pattern: patterns.cross,
            key: {
                A: 'minecraft:dirt',
                B: '#forge:gravel'
            },
            id: 'starcraft:minecraft_coarse_dirt'
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
            id: 'starcraft:thermal_machine_frame'
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
            id: 'starcraft:create_mechanical_press'
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
            id: 'starcraft:appliedenergistics2_quartz_growth_accelerator'
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
            id: 'starcraft:appliedenergistics2_inscriber'
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
            id: 'starcraft:industrialforegoing_machine_frame_pity'
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
            id: 'starcraft:appliedenergistics2_chest'
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
            id: 'starcraft:appliedenergistics2_controller'
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
            id: 'starcraft:appliedenergistics2_security_station'
        },

        // 传送带
        {
            output: '12x create:belt_connector',
            pattern: ['   ', 'AAA', 'AAA'],
            key: {A: 'minecraft:dried_kelp_block'},
            id: 'starcraft:create_belt_connector'
        },
        {
            output: '12x create:belt_connector',
            pattern: ['   ', 'AAA', '   '],
            key: {A: 'immersiveengineering:hemp_fabric'},
            id: 'starcraft:create_belt_connector_tier2'
        },

        // 动力合成器
        {
            output: '2x create:mechanical_crafter',
            pattern: patterns.crossWithCore,
            key: {
                A: 'create:brass_casing',
                B: 'create:electron_tube',
                C: 'create:chromatic_compound'
            },
            id: 'starcraft:create_mechanical_crafter'
        },

        // 生物工厂控制器
        {
            output: 'woot:heart', 
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: 'botania:gaia_ingot',
                B: 'ars_nouveau:drygmy_charm',
                C: 'woot:machine_casing'
            },
            id: 'starcraft:woot_heart'
        },

        // 物品路由器
        {
            output: 'modularrouters:item_router',
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'immersiveengineering:sorter',
                B: 'pipez:universal_pipe',
                C: 'xnet:controller',
                D: 'immersiveengineering:fluid_sorter'
            },
            id: 'starcraft:modularrouters_item_router'
        },

        // 花药台
        {
            output: 'botania:apothecary_default',
            pattern: ['ABA', 'DCD', 'CCC'],
            key: {
                A: '#minecraft:slabs',
                B: 'botania:manasteel_ingot',
                C: 'minecraft:smooth_stone',
                D: 'industrialforegoing:fertilizer'
            },
            id: 'starcraft:botania_apothecary_default'
        },

        // 稀释魔力池
        {
            output: 'botania:diluted_pool',
            pattern: ['   ', 'A A', 'AAA'],
            key: { A: 'minecraft:smooth_stone'},
            id: 'starcraft:botania_diluted_pool'
        },

        // 魔力池
        {
            output: 'botania:mana_pool',
            pattern: ['   ', 'A A', 'AAA'],
            key: { A: 'botania:livingrock'},
            id: 'starcraft:botania_mana_pool'
        },

        // 泰拉凝聚板
        {
            output: 'botania:terra_plate',
            pattern: ['ABC', 'DEF', 'GHI'],
            key: {
                A: 'botania:alchemy_catalyst',
                B: 'minecraft:lapis_block',
                C: 'extrabotany:dimensioncatalyst',
                D: 'botania:rune_water',
                E: 'botania:manasteel_block',
                F: 'botania:rune_mana',
                G: 'botania:rune_fire',
                H: 'botania:rune_earth',
                I: 'botania:rune_air'
            },
            id: 'starcraft:botania_terra_plate'
        },

        // 创造烈焰蛋糕
        {
            output: 'create:creative_blaze_cake',
            pattern:patterns.crossWithCore,
            key: {
                A: 'create:blaze_cake',
                B: 'astralsorcery:colored_lens_regeneration',
                C:'minecraft:totem_of_undying'
            },
            id: 'starcraft:create_creative_blaze_cake'
        },

        // RFTOOLS 机器框架
        {
            output: 'rftoolsbase:machine_frame',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'minecraft:iron_ingot',
                B: 'woot:blue_dyeplate',
                C: 'minecraft:gold_nugget',
                D: 'industrialforegoing:machine_frame_pity'
            },
            id: 'starcraft:rftoolsbase_machine_frame'
        },

        // 合成单元
        {
            output: 'appliedenergistics2:crafting_unit',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'extendedcrafting:advanced_catalyst',
                B: 'appliedenergistics2:calculation_processor',
                C: 'appliedenergistics2:fluix_glass_cable',
                D: 'appliedenergistics2:fluix_glass_cable',
            },
            id: 'starcraft:appliedenergistics2_crafting_unit'
        },

        // 分子装配室
        {
            output: 'appliedenergistics2:molecular_assembler',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: 'extendedcrafting:redstone_catalyst',
                B: 'appliedenergistics2:quartz_glass',
                C: 'appliedenergistics2:annihilation_core',
                D: 'industrialforegoing:machine_frame_pity',
                E: 'appliedenergistics2:formation_core',
            },
            id: 'starcraft:appliedenergistics2_molecular_assembler'
        },

        // 物质聚合器
        {
            output: 'appliedenergistics2:condenser',
            pattern:patterns.cross,
            key: {
                A: 'botania:black_hole_talisman',
                B: 'lazierae2:fluix_steel_ingot'
            },
            id: 'starcraft:appliedenergistics2_condenser'
        },

        // 模块化中子素收集器
        {
            output: 'masterfulmachinery:neutronium_collector_controller',
            pattern:patterns.crossWithCore,
            key: {
                A: 'endless:densest_neutronium_collector',
                B: 'endless:neutronium_gear',
                C: 'endless:neutronium_block'
            },
            id: 'starcraft:masterfulmachinery.neutronium_collector_controller'
        },

        // 量子位计算器
        {
            output: 'kubejs:block_2',
            pattern:['AAA', 'BCB', 'AAA'],
            key:{
                A: 'kubejs:block_1',
                B: 'jecalculation:item_calculator_math',
                C: 'rftoolscontrol:cpu_core_2000'
            },
            id: 'starcraft:kubejs.block_2'
        },

        // 星辰之耀线圈
        {
            output: 'kubejs:block_3',
            pattern:['AAA', 'ABC', 'CCC'],
            key:{
                A: 'astralsorcery:stardust',
                B: 'kubejs:block_21',
                C: 'botania:mana_powder'
            },
            id: 'starcraft:kubejs.block_3'
        },

        // 维度外壳
        {
            output: 'kubejs:block_4',
            pattern:[' A ', 'ABA', ' A '],
            key:{
                A: 'rftoolsbase:dimensionalshard',
                B: 'kubejs:block_1'
            },
            id: 'starcraft:kubejs.block_4'
        },

        // 星域计算力场方块
        {
            output: '3x kubejs:block_5',
            pattern:patterns.crossWithCore,
            key:{
                A: 'kubejs:block_1',
                B: 'extrabotany:powerframe',
                C: 'botania:piston_relay'
            },
            id: 'starcraft:kubejs.block_5'
        },

        // 源质钢机械方块
        {
            output: 'kubejs:block_6',
            pattern:patterns.crossWithCore,
            key:{
                A: 'kubejs:block_10',
                B: '#forge:gears/signalum',
                C: 'botania:elementium_ingot'
            },
            id: 'starcraft:kubejs.block_6'
        },

        // 下界合金包层铝传输通道
        {
            output: 'kubejs:block_7',
            pattern:['AAA', 'BBB', 'AAA'],
            key:{
                A: 'minecraft:netherite_ingot',
                B: '#forge:storage_blocks/aluminum'
            },
            id: 'starcraft:kubejs.block_7'
        },

        // 排气扇
        {
            output: 'kubejs:block_30',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'create:propeller', 
                B: '#forge:ingots/invar'
            },
            id: 'starcraft:kubejs:block_30'
        },
        
        // 高级排气扇
        {
            output: '4x kubejs:block_9',
            pattern:patterns.crossWithCore,
            key:{
                A: 'kubejs:block_30',
                B: 'woot:factory_upgrade',
                C: 'xnet:connector_upgrade'
            },
            id: 'starcraft:kubejs.block_9'
        },

        // 机械外壳
        {
            output: 'kubejs:block_10',
            pattern:patterns.surroundWithCore,
            key:{
                A: '#forge:gears/steel',
                B: '#forge:ingots/steel'
            },
            id: 'starcraft:kubejs.block_10'
        },

        // 星钢机械方块
        {
            output: 'kubejs:block_44',
            pattern:patterns.cross,
            key:{
                A: 'astralsorcery:starmetal_ingot',
                B: 'powah:steel_energized'
            },
            id: 'starcraft:kubejs.block_44'
        },

        // 星钢散热器
        {
            output: 'kubejs:block_39',
            pattern:patterns.crossWithCore,
            key:{
                A: 'immersiveengineering:radiator',
                B: 'astralsorcery:starmetal_ingot',
                C: 'powah:steel_energized',
            },
            id: 'starcraft:kubejs.block_39'
        },

        // 星钢钻杆方块
        {
            output: '3x kubejs:block_27',
            pattern:['ABA', 'ACA', 'ABA'],
            key:{
                A: 'kubejs:block_44',
                B: 'create:piston_extension_pole',
                C: 'create:shaft'
            },
            id: 'starcraft:kubejs:block_27'
        },
        
        // 星钢钻头稳定器
        {
            output: '4x kubejs:block_14',
            pattern:patterns.cross,
            key:{
                A: 'kubejs:block_39',
                B: 'thermal:lightning_tnt'
            },
            id: 'starcraft:kubejs.block_14'
        },

        // 精灵钢机械方块
        {
            output: '2x kubejs:block_17',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'kubejs:block_17',
                B: 'mythicbotany:alfsteel_ingot'
            },
            id: 'starcraft:kubejs.block_17'
        },

        // 下界之星能量块
        {
            output: '2x kubejs:block_19',
            pattern: ['ABA', 'BBB', 'ABA'],
            key:{
                A: 'rftoolspower:power_core3',
                B: 'minecraft:nether_star'
            },
            id: 'starcraft:kubejs.block_19'
        },

        // 源质钢线圈
        {
            output: 'kubejs:block_21',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'immersiveengineering:coil_lv',
                B: '#forge:ingots/elementium'
            },
            id: 'starcraft:kubejs.block_21'
        },

        // 精灵钢线圈
        {
            output: 'kubejs:block_22',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'immersiveengineering:coil_mv',
                B: 'mythicbotany:alfsteel_ingot'
            },
            id: 'starcraft:kubejs.block_22'
        },

        // 星灵中子机械方块
        {
            output: '5x kubejs:block_35',
            pattern:patterns.crossWithCore,
            key:{
                A: 'kubejs:block_44',
                B: 'kubejs:block_19',
                C: 'endless:neutronium_block'
            },
            id: 'starcraft:kubejs.block_35'
        },

        // 星灵中子响应器
        {
            output: '3x kubejs:block_29',
            pattern:['AAA', 'BCB', 'AAA'],
            key:{
                A: 'kubejs:block_35',
                B: 'appliedenergistics2:toggle_bus',
                C: 'rftoolsutility:sensor'
            },
            id: 'starcraft:kubejs.block_29'
        },

        // 星灵中子聚合器
        {
            output: 'kubejs:block_23',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'appliedenergistics2:condenser',
                B: 'kubejs:block_35'
            },
            id: 'starcraft:kubejs.block_23'
        },

        // 质量压力容器
        {
            output: '2x kubejs:block_24',
            pattern:['ABA', 'BBB', 'ABA'],
            key:{
                A: '#forge:plates/steel',
                B: 'immersivepetroleum:asphalt'
            },
            id: 'starcraft:kubejs.block_24'
        },

        // 中子素质量通道
        {
            output: '3x kubejs:block_38',
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: 'endless:neutronium_block',
                B: 'endless:neutronium_ingot'
            },
            id: 'starcraft:kubejs.block_38'
        },

        // 中子素连接固化器
        {
            output: 'kubejs:block_28',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'kubejs:block_38',
                B: 'appliedenergistics2:matter_ball'
            },
            id: 'starcraft:kubejs.block_28'
        },

        // 夸克级承重方块
        {
            output: '3x kubejs:block_34',
            pattern:[' A ', ' A ', ' A '],
            key:{
                A: 'kubejs:block_5',
            },
            id: 'starcraft:kubejs.block_34'
        },

        // 中子素反应堆外壳
        {
            output: '4x kubejs:block_36',
            pattern:patterns.crossWithCore,
            key:{
                A: 'powah:reactor_nitro',
                B: 'endless:neutronium_block',
                C: 'thermal:lead_plate'
            },
            id: 'starcraft:kubejs.block_36'
        },

        // 黑曜石反应堆基底
        {
            output: '3x kubejs:block_46',
            pattern:['AAA', 'ABA', 'CCC'],
            key:{
                A: '#forge:plates/lead',
                B: '#forge:storage_blocks/uraninite',
                C: '#forge:obsidian'
            },
            id: 'starcraft:kubejs:block_46'
        },

        // 下界合金机械方块
        {
            output: '2x kubejs:block_37',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'kubejs:block_10',
                B: '#forge:ingots/netherite'
            },
            id: 'starcraft:kubejs.block_37'
        },

        // 聚变外壳
        {
            output: '4x kubejs:block_43',
            pattern:patterns.crossWithCore,
            key:{
                A: 'powah:energized_steel_block',
                B: 'extendedcrafting:ender_ingot',
                C: 'immersiveengineering:ingot_hop_graphite'
            },
            id: 'starcraft:kubejs.block_43'
        },

        // 星辉界能量汲取器
        {
            output: '2x kubejs:block_51',
            pattern:patterns.crossWithCore,
            key:{
                A: 'kubejs:block_51',
                B: 'appliedenergistics2:energy_acceptor',
                C: 'astralsorcery:starmetal'
            },
            id: 'starcraft:kubejs.block_51'
        },

        // 量子位结构外壳
        {
            output: '24x kubejs:block_53',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'kubejs:block_53',
                B: 'appliedenergistics2:quantum_link'
            },
            id: 'starcraft:kubejs.block_53'
        },

        // 泰拉钢机械方块
        {
            output: '64x kubejs:block_54',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'kubejs:block_10',
                B: '#forge:ingots/terrasteel'
            },
            id: 'starcraft:kubejs.block_54'
        },

        // 终极锭
        {
            output: 'extendedcrafting:the_ultimate_ingot',
            pattern:patterns.surroundWithCore,
            key:{
                A: 'extendedcrafting:ultimate_singularity',
                B: 'extendedcrafting:crystaltine_ingot'
            },
            id: 'starcraft:extendedcrafting.the_ultimate_ingot'
        }
    ]

    recipesShaped.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })

    event.shapeless('create:mechanical_mixer', ['create:mechanical_press', 'create:whisk']).replaceIngredient('create:mechanical_press', 'create:mechanical_piston')  // 动力搅拌机
    event.shapeless(Item.of('botania:terra_sword', '{Damage:2000}'), ['gobber2:gobber2_sword', 'create_stuff_additions:blazing_cleaver', 'create_stuff_additions:copper_sword']) // 泰拉刃
    event.shapeless('botania:aura_ring', ['gobber2:gobber2_ring', 'minecraft:player_head']) // 光环之戒
    event.shapeless(Item.of('astralsorcery:knowledge_share', '{astralsorce:{creativeKnowledge:1b}}'), ['minecraft:writable_book', 'astralsorcery:altar_discovery']) // 知识全解卷轴
    event.shapeless('fluxnetworks:flux_plug', ['fluxnetworks:flux_point'])
    event.shapeless('fluxnetworks:flux_point', ['fluxnetworks:flux_plug'])


    event.smithing('ars_nouveau:volcanic_accumulator', 'ars_nouveau:mana_condenser', 'minecraft:lava_bucket') // 火山魔源通道
    event.smithing('ars_nouveau:alchemical_sourcelink', 'ars_nouveau:mana_condenser', 'minecraft:brewing_stand') // 炼金魔源通道
    event.smithing('ars_nouveau:vitalic_sourcelink', 'ars_nouveau:mana_condenser', 'minecraft:glistering_melon_slice') // 生死魔源通道
    event.smithing('ars_nouveau:mycelial_sourcelink', 'ars_nouveau:mana_condenser', 'minecraft:mushroom_stew') // 菌丝魔源通道
    event.smithing('4x create:andesite_alloy', 'minecraft:iron_nugget', 'minecraft:andesite')  // 安山合金
    event.smithing('create:encased_fan', 'create:gearshift', 'create:propeller')  // 鼓风机
})
