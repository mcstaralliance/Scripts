
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

    // 植物盆
    event.shaped(
        '2x botanypots:terracotta_botany_pot', [
            '   ',
            'ABA',
            'CDC'
        ],{
            A: '#minecraft:terracotta',
            B: 'minecraft:flower_pot',
            C: 'goety:overgrown_roots',
            D: 'ae2:growth_accelerator'
        }
    )

    // 环境储存器
    event.shaped('evilcraft:environmental_accumulator',[
        'ABA',
        'CDC',
        'AEA'
    ],{
        A: 'botania:livingwood',
        B: 'evilcraft:dark_block',
        C: 'composite_material:dungeon_steel_ingot',
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
            A: 'composite_material:allay_steel_ingot',
            B: 'ae2:condenser',
            C: 'industrialforegoing:water_condensator',
            D: Item.of('evilcraft:weather_container', '{weather:"RAIN"}'),
            E: 'cookingforblockheads:sink'
        }
    )

    // 生物笼
    event.shaped('cagedmobs:mob_cage', [
        'ABA',
        'ACA',
        'DED'
    ],{
        A: 'enderio:dark_steel_bars',
        B: 'ae2:spatial_pylon',
        C: 'industrialforegoing:machine_frame_advanced',
        D: 'goety:cursed_ingot',
        E: 'ftbmaterials:netherite_gear'
    })

    // 漏式生物笼
    event.shaped('cagedmobs:hopping_mob_cage', [
        'A  ',
        'B  ',
        'C  '
    ],{
        A: 'cagedmobs:mob_cage',
        B: 'botanypots:terracotta_botany_pot',
        C: 'minecraft:hopper'
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
        A: 'buildcraftsilicon:chipset_quartz',
        B: 'botanicalmachinery:mana_emerald_block',
        C: 'minecraft:enchanting_table',
        D: 'botania:mana_quartz',
        E: 'buildcraftsilicon:redstone_crystal'
    })
    
    // 冶金灌注机
    event.shaped('mekanism:metallurgic_infuser', [
        'ABA',
        'CDC',
        'AEA'
    ],{
        A: '#forge:ingots/steel',
        B: 'integrateddynamics:mechanical_squeezer',
        C: 'buildcraftcore:engine_stone',
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
    event.shaped('mekanism:steel_casing',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'#forge:ingots/steel',
        B:'mekanism:alloy_infused',
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
      D:'enderio:vacuum_chest'
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
        D: 'enderio:vibrant_alloy_block',
        E: 'industrialforegoing:machine_frame_advanced',
        F: 'enderio:end_steel_block',
        G: 'mekanism:elite_control_circuit',
        H: 'ae2:engineering_processor'
    })

    // ME 驱动器
    event.shaped('ae2:drive', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'enderio:dark_steel_block',
        B: 'mekanism:ultimate_control_circuit',
        C: 'ae2:item_cell_housing',
        D: 'expatternprovider:drive_upgrade'
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

    // 激光切割器
    event.shaped('starcraft:lazer', [
        'ABC',
        'DED',
        'CFA'
    ],{
        A: 'fluxnetworks:flux_block',
        B: 'mekanism:laser',
        C: 'buildcraftsilicon:charging_table',
        D: 'mekanism:ultimate_control_circuit',
        E: 'mekanismgenerators:laser_focus_matrix',
        F: 'ae2:energy_acceptor'
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

    // 简易合金炉
    event.shaped('enderio:primitive_alloy_smelter',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'immersiveengineering:alloybrick',
        B:'enderio:grains_of_infinity'
    })
    
    // 空白样板
    event.shaped('ae2:blank_pattern',[
        'ABA',
        'BCB',
        'DDD'
    ],{
        A:'ae2:quartz_glass',
        B:'mekanism:hdpe_sheet',
        C:'ae2:charged_certus_quartz_crystal',
        D:'minecraft:iron_ingot'
    })
    
    // ME 接口
    event.shaped('ae2:interface',[
        'ABA',
        'CDE',
        'ABA'
    ],{
        A: 'composite_material:obsidian_steel_ingot',
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
        A: 'buildcraftsilicon:chipset_quartz',
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
        C: 'forestry:circuit_board_intricate',
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
        A: 'expatternprovider:assembler_matrix_wall',
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

    // 反应仓
    event.shaped('advanced_ae:reaction_chamber',[
        'ABA',
        'CDC',
        'AEA'
    ],{
        A: 'ae2:fluix_block',
        B: 'ae2:singularity',
        C: 'mekanism:hdpe_stick',
        D: 'ae2:vibration_chamber',
        E:'botania:elementium_block'
    })

    // 不锈钢粉
    event.shapeless('9x ftbmaterials:stainless_steel_dust', [
        '#forge:dusts/iron',
        '#forge:dusts/iron',
        '#forge:dusts/iron',
        '#forge:dusts/iron',
        '#forge:dusts/nickel',
        '#forge:dusts/nickel',
        'advanced_ae:quantum_infused_dust',
        'immersiveengineering:dust_hop_graphite',
        'enderio:vibrant_powder'
    ])

    //ME 无线连接器
    event.shaped('2x expatternprovider:wireless_connect',[
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
    event.shaped('expatternprovider:wireless_tool',[
        'ABA',
        'CDC',
        'AEA'
    ],{
        A:'botania:corporea_spark_master',
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
        C: 'enderio:dark_bimetal_gear'
    })

    // 装配线格栅
    event.shaped('2x kubejs:assembly_line_grating',[
        'AAA',
        'BCB',
        'AAA'
    ],{
        A: 'ftbmaterials:stainless_steel_ingot',
        B: 'ftbmaterials:stainless_steel_rod',
        C: 'buildcraftsilicon:chipset_diamond'
    })

    // 输出接口
    event.shaped('starcraft:item_output', [
        'A ',
        'B '
    ],{
        A: 'kubejs:assembly_line',
        B: 'expatternprovider:interface_upgrade'
    })
    event.shapeless('starcraft:item_output','starcraft:item_input')
    event.shapeless('starcraft:item_input','starcraft:item_output')

    // 输入接口
    event.shaped('starcraft:item_input', [
        'B ',
        'A '
    ],{
        A: 'kubejs:assembly_line',
        B: 'expatternprovider:interface_upgrade'
    })
    
    // 流体输出接口
    event.shaped('starcraft:fluid_output',[
        'ABC',
        '   ',
        '   '
    ],{
        A: 'functionalstorage:fluid_1',
        B: 'functionalstorage:pusher_upgrade',
        C: 'mekanism:elite_control_circuit'
    })
    event.shapeless('starcraft:fluid_output', 'starcraft:fluid_input')

    // 流体输入接口
    event.shaped('starcraft:fluid_input',[
        'ABC',
        '   ',
        '   '
    ],{
        A: 'functionalstorage:fluid_1',
        B: 'functionalstorage:puller_upgrade',
        C: 'mekanism:elite_control_circuit'
    })
    event.shapeless('starcraft:fluid_input', 'starcraft:fluid_output')
    
    // 魔力输出口
    event.shaped('starcraft:mana_output',[
        'AEA',
        'BCD',
        'AEA'
    ],{
        A: 'botania:red_string',
        B: 'botania:elementium_block',
        C: 'botania:mana_distributor',
        D: 'botania:mana_detector',
        E: 'mekanism:teleporter_frame'
    })
    event.shapeless('starcraft:mana_output', 'starcraft:mana_input')

    // 魔力输入口
    event.shaped('starcraft:mana_input',[
        'AEA',
        'BCD',
        'AEA'
    ],{
        A: 'botania:red_string',
        B: 'botania:mana_detector',
        C: 'botania:mana_distributor',
        D: 'botania:elementium_block',
        E: 'mekanism:teleporter_frame'
    })
    event.shapeless('starcraft:mana_input', 'starcraft:mana_output')

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
        B:'enderio:ender_resonator',
        C:'botania:elementium_ingot',
        D:'ae2:quantum_link',
        E:'ae2:energy_acceptor'
    })

    // 鸡舍
    event.shaped('chicken_roost:roost',[
        'AAA',
        'BCB',
        'DDD'
    ],{
        A:'botania:gaia_ingot',
        B:'starcraft:biological_control_circuit',
        C:'industrialforegoing:machine_frame_supreme',
        D:'industrialforegoing:hydroponic_bed'
    })
    
    // 灵魂提取器
    event.shaped('chicken_roost:soul_extractor',[
        'ABA',
        'CDC',
        'EBE'
    ],{
        A:'industrialforegoing:enchantment_extractor',
        B:'mekanism:ultimate_chemical_tank',
        C:'mekanism:gauge_dropper',
        D:'chicken_roost:chicken_stick',
        E:'starcraft:biological_control_circuit'
    })
    
    // 繁殖箱
    event.shaped('chicken_roost:breeder',[
        'ABC',
        'DED',
        'FGH'
    ],{
        A:'forestry:alveary_stabiliser',
        B:'chicken_roost:c_vanilla',
        C:'forestry:alveary_swarmer',
        D:'starcraft:biological_control_circuit',
        E:'chicken_roost:roost',
        F:'forestry:alveary_heater',
        G:'chicken_roost:chicken_stick',
        H:'forestry:alveary_hygro' 
    })

    // 鸡训练器
    event.shaped('chicken_roost:trainer',[
        'ABA',
        'CCC',
        'DBD'
    ],{
        A:'farmersdelight:vegetable_soup',
        B:'starcraft:biological_control_circuit',
        C:'chicken_roost:breeder',
        D:'farmersdelight:apple_pie'
    })

    // 一级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_1',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_1',
        B:'minecraft:wheat_seeds',
        C:'minecraft:iron_ingot',
        D:'starcraft:stem_cells',
        E:'farmersdelight:cake_slice'
    })
    
     // 二级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_2',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_2',
        B:'chicken_roost:chicken_food_tier_1',
        C:'minecraft:gold_ingot',
        D:'starcraft:stem_cells',
        E:'farmersdelight:apple_pie_slice'
    })

      // 三级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_3',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_3',
        B:'chicken_roost:chicken_food_tier_2',
        C:'minecraft:diamond',
        D:'starcraft:stem_cells',
        E:'farmersdelight:kelp_roll_slice'
    })

      // 四级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_4',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_4',
        B:'chicken_roost:chicken_food_tier_3',
        C:'minecraft:netherite_ingot',
        D:'starcraft:stem_cells',
        E:'farmersdelight:dumplings'
    })

      // 五级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_5',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_5',
        B:'chicken_roost:chicken_food_tier_4',
        C:'minecraft:netherite_ingot',
        D:'starcraft:stem_cells',
        E:'farmersdelight:dumplings'
    })

      // 六级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_6',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_6',
        B:'chicken_roost:chicken_food_tier_5',
        C:'mekanism:alloy_reinforced',
        D:'starcraft:stem_cells',
        E:'farmersdelight:baked_cod_stew'
    })

      // 七级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_7',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_7',
        B:'chicken_roost:chicken_food_tier_6',
        C:'mekanism:alloy_atomic',
        D:'starcraft:stem_cells',
        E:'farmersdelight:pasta_with_meatballs'
    })
    
      // 八级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_8',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_8',
        B:'chicken_roost:chicken_food_tier_7',
        C:'forestry:royal_jelly',
        D:'starcraft:stem_cells',
        E:'farmersdelight:ratatouille'
    })
    
      // 九级鸡饲料
    event.shaped('chicken_roost:chicken_food_tier_9',[
        'ABB',
        'CCD',
        'DEE'
    ],{
        A:'chicken_roost:chicken_essence_tier_9',
        B:'chicken_roost:chicken_food_tier_8',
        C:'starcraft:biological_control_circuit',
        D:'starcraft:stem_cells',
        E:'farmersdelight:roast_chicken_block'
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
            C: 'minecraft:water_bucket',
            D: 'corn_delight:corn'
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
    event.shapeless('9x botania:gaia_ingot',['botania:gaia_ingot'])
})
