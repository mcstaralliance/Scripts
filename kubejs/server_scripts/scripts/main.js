
ServerEvents.recipes(event => {

    // 工作台
    event.shaped(
        '2x minecraft:crafting_table', [
            'AA',
            'BB',
        ],{
            A: 'minecraft:flint',
            B: '#minecraft:planks'
        }
    );
    
    // 箱子
    event.shaped(
        '4x minecraft:chest', [
            'ABA',
            'BCB',
            'ABA'
        ],{
            A: '#minecraft:planks',
            B: '#minecraft:logs',
            C: 'minecraft:flint'
        }
    );

    // 无瑕的赛特斯石英母岩
    event.shaped(
        '2x ae2:flawless_budding_quartz', [
            'ABA',
            'BCB',
            'ADA'
        ],{
            A: 'ae2:flawed_budding_quartz',
            B: 'ae2:not_so_mysterious_cube',
            C: 'industrialforegoing:machine_frame_simple',
            D: 'ae2:condenser'
        }
    )

    // // 灌注室
    // event.shaped(
    //     'ars_nouveau:imbuement_chamber', [
    //         'ABA',
    //         'ACA',
    //         'ABA'
    //     ],{
    //         A: 'botania:livingwood',
    //         B: '#forge:ingots/electrum',
    //         C: 'botania:terrasteel_ingot'
    //     }
    // )

    // // 魔源罐
    // event.shaped(
    //     'ars_nouveau:source_jar', [
    //         'ABA',
    //         'BCB',
    //         'ABA'
    //     ],{
    //         A: 'botania:livingrock',
    //         B: 'botania:elf_glass',
    //         C: 'ars_nouveau:source_gem'
    //     }
    // )

    // // 魔源中继器
    // event.shaped(
    //     'ars_nouveau:relay', [
    //         'CAC',
    //         'CBC',
    //         'CAC'
    //     ],{
    //         A: '#forge:plates/gold',
    //         B: 'ars_nouveau:source_gem_block',
    //         C: '#forge:wires/gold'
    //     }
    // )

    // // 魔源石
    // event.shaped(
    //     'ars_nouveau:sourcestone', [
    //         'CAC',
    //         'ABA',
    //         'CAC'
    //     ],{
    //         A: 'botania:livingrock',
    //         B: 'ars_nouveau:source_gem',
    //         C: 'minecraft:smooth_stone'
    //     }
    // )

    // // 奥术核心
    // event.shaped(
    //     'ars_nouveau:arcane_core', [
    //         'ABA',
    //         'BCB',
    //         'ABA'
    //     ],{
    //         A: 'tconstruct:rose_gold_ingot',
    //         B: 'ars_nouveau:source_gem',
    //         C: 'botania:alfheim_portal'
    //     }
    // )

    // // 植物盆
    // event.shaped(
    //     '2x botanypots:terracotta_botany_pot', [
    //         '   ',
    //         'ABA',
    //         'CDC'
    //     ],{
    //         A: '#minecraft:terracotta',
    //         B: 'minecraft:flower_pot',
    //         C: 'goety:overgrown_roots',
    //         D: 'ae2:growth_accelerator'
    //     }
    // )

    // 环境储存器
    event.shaped('evilcraft:environmental_accumulator',[
        'ABA',
        'CDC',
        'AEA'
    ],{
        A: 'botania:livingwood',
        B: 'evilcraft:dark_block',
        C: 'rainbowcompound:rainbow_compound',
        D: 'evilcraft:environmental_accumulation_core',
        E: 'minecraft:nether_star'
    })

    // 无限水方块
    event.shaped(
        'evilcraft:eternal_water', [
            'ABA',
            'CDC',
            'AEA'
        ],{
            A: 'rainbowcompound:obsidianite_ingot',
            B: 'ae2:condenser',
            C: 'industrialforegoing:water_condensator',
            D: 'evilcraft:weather_container[evilcraft:weather_container_type="RAIN"]',
            E: 'cookingforblockheads:sink'
        }
    )

    // 生物笼
    event.shaped('cagedmobs:mob_cage', [
        'ABA',
        'ACA',
        'DED'
    ],{
        A: 'create:shadow_steel',
        B: 'ae2:spatial_pylon',
        C: 'industrialforegoing:machine_frame_advanced',
        D: 'extendedcrafting:enhanced_ender_ingot',
        E: 'ftbmaterials:netherite_gear'
    })

    // 笼升级 II
    event.shaped('cagedmobs:speed_ii_upgrade', [
        'ABA',
        'CDC',
        'EFE'
    ],{
        A: 'minecraft:netherite_block',
        B: 'functionalstorage:diamond_upgrade',
        C: 'minecraft:netherite_upgrade_smithing_template',
        D: 'botania:sunny_quartz',
        E: 'avaritia:crystal_matrix_ingot',
        F: 'cagedmobs:warden_receptor'
    })

    // 笼升级 III
    event.shaped('2x cagedmobs:speed_iii_upgrade', [
        'ABA',
        'CDC',
        'BEB'
    ],{
        A: 'avaritia:neutron_ingot',
        B: 'functionalstorage:netherite_upgrade',
        C: 'cagedmobs:speed_ii_upgrade',
        D: 'mekanism:pellet_antimatter',
        E: 'cagedmobs:star_infused_netherite_block'
    }),

    // 抢夺升级
    event.shaped('cagedmobs:looting_upgrade', [
        ' E ',
        'AB ',
        'CDA'
    ],{
        A: 'ae2cs:purified_ender_quartz',
        B: 'botania:mana_diamond_block',
        C: 'minecraft:enchanting_table',
        D: 'botania:mana_quartz',
        E: 'extendedcrafting:flux_star'
    })
    
    // 冶金灌注机
    event.shaped('mekanism:metallurgic_infuser', [
        'ABA',
        'CDC',
        'AEA'
    ],{
        A: '#c:ingots/steel',
        B: 'integrateddynamics:mechanical_squeezer',
        C: 'pneumaticcraft:reinforced_stone',
        D: 'industrialforegoing:machine_frame_simple',
        E: 'ars_nouveau:fire_essence'
    })
    
    // 高炉砖
    event.shaped('immersiveengineering:blastbrick',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:nether_brick',
        B:'minecraft:brick',
        C:'ars_nouveau:fire_essence'
    })
    
    //钢制机壳
    event.shaped("mekanism:steel_casing",[
        "ABA",
        "BCB",
        "ABA"
    ],{
        A:'#c:ingots/steel',
        B:'pneumaticcraft:plastic',
        C:'mekanism:basic_control_circuit'
    })
    // 
    //缺陷机器框架
    event.shaped('2x industrialforegoing:machine_frame_pity',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'immersiveengineering:treated_wood_horizontal',
        B:'immersiveengineering:component_iron',
        C:'immersiveengineering:heavy_engineering'
    })

    //网络控制器
    event.shaped('beyonddimensions:net_control',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:iron_ingot',
        B:'beyonddimensions:space_time_stable_frame',
        C:'beyonddimensions:net_creater'
    }).replaceIngredient({ item: 'beyonddimensions:net_creater' }, Item.of('beyonddimensions:net_creater'))
   
    //网络接口
    event.shaped('beyonddimensions:net_interface',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'beyonddimensions:space_time_bar',
        B:'beyonddimensions:space_time_stable_frame',
        C:'ae2:interface'
    })

    //维度网络通道
    event.shaped('beyonddimensions:net_pathway',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'beyonddimensions:space_time_bar',
        B:'beyonddimensions:space_time_stable_frame',
        C:'ae2:quantum_ring'
    })
    
    //维度连接方块
    event.shaped('beyonddimensions:dimensional_connect_block',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'beyonddimensions:space_time_bar',
        B:'beyonddimensions:space_time_stable_frame',
        C:'ae2:quantum_link'
    })
    
    //维度熔炉
    event.shaped('beyonddimensions:net_furnace_block',[
        'ADA',
        'BCB',
        'ABA'
    ],{
      A:'beyonddimensions:space_time_bar',
      B:'beyonddimensions:space_time_stable_frame', 
      C:'beyonddimensions:dimensional_connect_block',
      D:'mekanism:ultimate_smelting_factory'
    })
    
    //维度泵
    event.shaped('beyonddimensions:net_pump_block',[
        'ADA',
        'BCB',
        'ABA'
    ],{
      A:'beyonddimensions:space_time_bar',
      B:'beyonddimensions:space_time_stable_frame', 
      C:'beyonddimensions:dimensional_connect_block',
      D:'mekanism:electric_pump'
    })
     
    //维度漏斗
    event.shaped('beyonddimensions:net_hopper_block',[
        'ADA',
        'BCB',
        'ABA'
    ],{
      A:'beyonddimensions:space_time_bar',
      B:'beyonddimensions:space_time_stable_frame', 
      C:'beyonddimensions:dimensional_connect_block',
      D:'modularrouters:vacuum_module'
    })
    
    // 能源接收器
    event.shaped('ae2:energy_acceptor', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'immersiveengineering:sheetmetal_nickel',
        B: 'mekanism:elite_universal_cable',
        C: 'industrialforegoing:machine_frame_simple'
    })
    
    // ME 控制器
    event.shaped('ae2:controller', [
        'ABC',
        'DEF',
        'GHG'
    ],{
        A: 'ae2:calculation_processor',
        B: 'ae2:energy_acceptor',
        C: 'ae2:logic_processor',
        D: 'rainbowcompound:strange_colored_ingot',
        E: 'industrialforegoing:machine_frame_advanced',
        F: 'rainbowcompound:obsidianite_ingot',
        G: 'mekanism:elite_control_circuit',
        H: 'ae2:engineering_processor'
    })

    // ME 驱动器
    event.shaped('ae2:drive', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'rainbowcompound:obsidianite_ingot',
        B: 'mekanism:ultimate_control_circuit',
        C: 'ae2:item_cell_housing',
        D: 'ae2cs:pattern_provider_upgrade'
    })

    // 1k 存储原件
    event.shaped('2x ae2:cell_component_1k', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'ae2:charged_certus_quartz_crystal',
        B: 'ae2:logic_processor',
        C: 'ae2:quartz_vibrant_glass',
        D: 'mekanism:hdpe_pellet'
    })

    // 4k 存储元件
    event.shaped('ae2:cell_component_4k', [
        'ABA',
        'CDC',
        'ACA'
    ],{
        A: 'ae2:charged_certus_quartz_crystal',
        B: 'mekanism:alloy_infused',
        C: 'ae2:cell_component_1k',
        D: 'mekanism:advanced_control_circuit'
    })

    // 16k 存储元件
    event.shaped('ae2:cell_component_16k', [
        'ABA',
        'CDC',
        'ACA'
    ],{
        A: 'ae2:charged_certus_quartz_crystal',
        B: 'mekanism:alloy_reinforced',
        C: 'ae2:cell_component_4k',
        D: 'mekanism:elite_control_circuit'
    })

    // 64k 存储元件
    event.shaped('ae2:cell_component_64k', [
        'ABA',
        'CDC',
        'ACA'
    ],{
        A: 'ae2:charged_certus_quartz_crystal',
        B: 'mekanism:alloy_atomic',
        C: 'ae2:cell_component_16k',
        D: 'mekanism:ultimate_control_circuit'
    })

    // 焦炉砖
    event.shaped('immersiveengineering:cokebrick',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:clay',
        B:'minecraft:brick',
        C:'ars_nouveau:earth_essence'
    })

    // 紫水晶母岩
    event.shaped('minecraft:budding_amethyst',[
        'ABA',
        'CDC',
        'ACA'
    ],{
        A:'minecraft:amethyst_block',
        B:'ars_nouveau:dominion_wand',
        C:'ars_nouveau:source_gem_block',
        D:'ars_nouveau:earth_essence'
    }).replaceIngredient({ item:'ars_nouveau:dominion_wand' }, Item.of('ars_nouveau:dominion_wand'))

    // 空白样板
    event.shaped('16x ae2:blank_pattern',[
        'ABA',
        'BCB',
        'DDD'
    ],{
        A:'ae2:quartz_glass',
        B:'pneumaticcraft:plastic',
        C:'immersiveengineering:logic_circuit',
        D:'minecraft:iron_ingot'
    })
    
    // ME 接口
    event.shaped('ae2:interface',[
        'ABA',
        'CDE',
        'ABA'
    ],{
        A: 'rainbowcompound:obsidianite_ingot',
        B: 'mekanism:elite_control_circuit',
        C: 'ae2:import_bus',
        D: 'mekanism:steel_casing',
        E: 'ae2:export_bus'
    })

    // ME 样板供应器
    event.shaped('ae2:pattern_provider',[
        'ABA',
        'CDE',
        'ABA'
    ],{
        A: 'ae2cs:purified_rose_quartz',
        B: 'ae2:blank_pattern',
        C: 'ae2:import_bus',
        D: 'mekanism:steel_casing',
        E: 'ae2:export_bus'
    })

    // ME 量子链接仓
    event.shaped('2x ae2:quantum_link',[
        'ABA',
        'C D',
        'ABA'
    ],{
        A:'ae2:quartz_glass',
        B:'ae2:fluix_pearl',
        C:'ae2:formation_core',
        D:'ae2:annihilation_core'
    })
    
    // 合成单元
    event.shaped('ae2:crafting_unit', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'ae2:calculation_processor',
        B: 'ae2:crafting_card',
        C: 'rainbowcompound:integrated_circuit',
        D: 'ae2:energy_cell'
    })

    // 存储总线
    event.shaped('2x ae2:storage_bus', [
        'A  ',
        'BCD',
        'E  '   
    ],{
        A: 'ae2:capacity_card',
        B: 'ae2:memory_card',
        C: 'ae2:interface',
        D: 'ae2:me_p2p_tunnel',
        E: 'ae2:equal_distribution_card'
    })

    // 输入总线
    event.shaped('ae2:import_bus', [
        '   ',
        'ABC',
        '   '
    ],{
        A: 'mekanism:logistical_sorter',
        B: 'ae2:me_p2p_tunnel',
        C: 'ae2:annihilation_core'
    })

    // 输出总线
    event.shaped('ae2:export_bus', [
        '   ',
        'ABC',
        '   '
    ],{
        A: 'mekanism:logistical_sorter',
        B: 'ae2:me_p2p_tunnel',
        C: 'ae2:formation_core'
    })

    // 分子装配室
    event.shaped('2x ae2:molecular_assembler', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'extendedae:assembler_matrix_wall',
        B: 'ae2:quartz_vibrant_glass',
        C: 'integrateddynamics:logic_programmer'
    })

    // 通量核心
    event.shaped('4x fluxnetworks:flux_core', [
        ' A ',
        'ABA',
        ' A '
    ],{
        A: 'fluxnetworks:flux_dust',
        B: 'fluxnetworks:flux_core'
    })

    // 不锈钢粉
    event.shapeless('9x ftbmaterials:stainless_steel_dust', [
        '#c:dusts/iron',
        '#c:dusts/iron',
        '#c:dusts/iron',
        '#c:dusts/iron',
        '#c:dusts/nickel',
        '#c:dusts/nickel',
        'ae2cs:resonating_crystal_dust',
        'immersiveengineering:dust_hop_graphite',
        ])

    //ME 无线连接器
    event.shaped('2x extendedae:wireless_connect',[
        'ABA',
        'CDC',
        'EBE'
    ],{
        A:'botania:elementium_ingot',
        B:'ae2:wireless_receiver',
        C:'#ae2:smart_cable',
        D:'ae2:quantum_link',
        E:'botania:corporea_spark'
    })

    //ME 无线连接工具
    event.shaped('extendedae:wireless_tool',[
        'ABA',
        'CDC',
        'AEA'
    ],{
        A:'botania:master_corporea_spark',
        B:'ars_nouveau:dominion_wand',
        C:'botania:elementium_ingot',
        D:'ae2:quantum_link',
        E:'ae2:wireless_receiver'
    })
    
    // 装配线外壳
    event.shaped('2x kubejs:assembly_line',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'ftbmaterials:stainless_steel_rod',
        B: 'ftbmaterials:stainless_steel_plate',
        C: 'mekanism:reprocessed_fissile_fragment'
    })

    // 装配线齿轮箱
    event.shaped('kubejs:assembly_line_gearbox',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'ftbmaterials:stainless_steel_plate',
        B: 'ftbmaterials:stainless_steel_gear',
        C: 'ftbmaterials:obsidian_gear'
    })

    // 装配线格栅
    event.shaped('2x kubejs:assembly_line_grating',[
        'AAA',
        'BCB',
        'AAA'
    ],{
        A: 'ftbmaterials:stainless_steel_ingot',
        B: 'ftbmaterials:stainless_steel_rod',
        C: 'botania:dragonstone'
    })

    // 输出接口
    event.shaped('kubejs:item_output', [
        'A ',
        'B '
    ],{
        A: 'kubejs:assembly_line',
        B: 'extendedae:interface_upgrade'
    })
    event.shapeless('kubejs:item_output','kubejs:item_input')
    event.shapeless('kubejs:item_input','kubejs:item_output')

    // 输入接口
    event.shaped('kubejs:item_input', [
        'B ',
        'A '
    ],{
        A: 'kubejs:assembly_line',
        B: 'extendedae:interface_upgrade'
    })
    
    // 流体输出接口
    event.shaped('kubejs:fluid_output',[
        'ABC',
        '   ',
        '   '
    ],{
        A: 'functionalstorage:fluid_1',
        B: 'functionalstorage:pusher_upgrade',
        C: 'mekanism:elite_control_circuit'
    })
    event.shapeless('kubejs:fluid_output', 'kubejs:fluid_input')

    // 流体输入接口
    event.shaped('kubejs:fluid_input',[
        'ABC',
        '   ',
        '   '
    ],{
        A: 'functionalstorage:fluid_1',
        B: 'functionalstorage:puller_upgrade',
        C: 'mekanism:elite_control_circuit'
    })
    event.shapeless('kubejs:fluid_input', 'kubejs:fluid_output')
    
    // 能量输入口
    event.shaped('starcraft:energy_input',[
        'AB',
        '  '
    ],{
        A: 'mekanism:ultimate_energy_cube',
        B: 'industrialforegoing:machine_frame_advanced'
    })

    // 谐振仓
    event.shaped('ae2:vibration_chamber',[
        'ABA',
        'CDC',
        'CEC'
    ],{
        A:'ae2:fluix_pearl',
        B:'industrialforegoing:resourceful_furnace',
        C:'botania:elementium_ingot',
        D:'ae2:quantum_link',
        E:'ae2:energy_acceptor'
    })
    
    //模块化路由器
    event.shaped('modularrouters:modular_router',[
        'ABA',
        'CDE',
        'ABA'
    ],{
        A:'botania:elementium_ingot',
        B:'integrateddynamics:part_connector_omni_directional',
        C:'mekanism:ultimate_logistical_transporter',
        D:'industrialforegoing:machine_frame_supreme',
        E:'mekanism:ultimate_mechanical_pipe'
    })
    
    //没那么神秘的的方块
    event.shaped('2x ae2:not_so_mysterious_cube',[
        'ABA',
        'CDE',
        'AFA'
    ],{
        A:'ae2:smooth_sky_stone_block',
        B:'ae2:logic_processor_press',
        C:'ae2:calculation_processor_press',
        D:'ae2:energy_acceptor',
        E:'ae2:engineering_processor_press',
        F:'ae2:silicon_press'
    })
    
    // 水槽
    event.shaped(
        'cookingforblockheads:sink', [
            'AAA',
            'BCB',
            'BBB'
        ],{
            A: 'kubejs:starcraft_ultracoin',
            B: 'minecraft:name_tag',
            C: 'minecraft:water_bucket'
        }
    )

    //盖亚钢块
    event.shaped('starcraft:block_of_gaia',[
        'AAA',
        'AAA',
        'AAA'
    ],{
        A:'botania:gaia_ingot'
    })
    
    //盖亚钢锭
    event.shapeless('9x botania:gaia_ingot',['starcraft:block_of_gaia'])

    //ME 样板供应器
    event.shapeless('ae2:pattern_provider',['ae2:cable_pattern_provider'])
    //龙芯
     event.shaped('draconicevolution:draconium_core',[
        'ABA',
        'BBB',
        'AAA'
    ],{
        A:'draconicevolution:draconium_ingot',
        B:'starcraft:biological_control_circuit'
    })
    //高级蜂箱
     event.shaped('productivebees:advanced_oak_beehive',[
        'AAA',
        'DBD',
        'CAC'
    ],{
        A:'ftbmaterials:stainless_steel_plate',
        B:'minecraft:beehive',
        C:'industrialforegoing:plastic',
        D:'starcraft:biological_control_circuit'
    })
    //离心机
    event.shaped('productivebees:centrifuge',[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'ftbmaterials:stainless_steel_plate',
        B:'starcraft:biological_control_circuit',
        C:'occultism:spirit_grindstone'
    })
    //装瓶机
    event.shaped('productivebees:bottler',[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'ftbmaterials:stainless_steel_plate',
        B:'starcraft:biological_control_circuit',
        C:'botania:alfglass'
    })
    //基因分离
    event.shaped('productivebees:catcher',[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'ftbmaterials:stainless_steel_plate',
        B:'starcraft:biological_control_circuit',
        C:'botania:gaia_mana_spreader'
    })
    //培育机
    event.shaped('productivebees:incubator',[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'ftbmaterials:stainless_steel_plate',
        B:'starcraft:biological_control_circuit',
        C:'pneumaticcraft:universal_sensor'
    })
    //基因检索器
    event.shaped('productivebees:gene_indexer',[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'ftbmaterials:stainless_steel_plate',
        B:'starcraft:biological_control_circuit',
        C:'extendedcrafting:basic_auto_table'
    })
    //繁殖箱
     event.shaped('productivebees:breeding_chamber',[
        'ABA',
        'ACA',
        'AAA'
    ],{
        A:'ftbmaterials:stainless_steel_plate',
        B:'starcraft:biological_control_circuit',
        C:'productivelib:upgrade_child'
    })
    //蜜蜂刷怪蛋
    event.shaped('minecraft:bee_spawn_egg',[
        'ABA',
        'CDC',
        'ABA'
    ],{
        A:'minecraft:sugar',
        B:'ars_nouveau:manipulation_essence',
        C: 'ars_nouveau:conjuration_essence',
        D:'minecraft:egg'
    })
    //磁铁矿
    event.shaped('create_new_age:magnetite_block',[
        'AAA',
        'A B',
        'BBB'
    ],{
        A:'#c:raw_materials/iron',
        B:'#c:raw_materials/gold'
    }),
    //神秘方块
    event.shaped('ae2:mysterious_cube',
        ['ABA',
         'BAB',
         'ABA'],
         {
            A:'ae2:certus_quartz_crystal',
            B:'xycraft_world:kivi'
         }
    )
})

