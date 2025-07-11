// priority: 0

ServerEvents.recipes(event => {

    event.shapeless('2x create:cogwheel', ['create:andesite_alloy', '#minecraft:wooden_buttons'])
    event.shapeless('create:large_cogwheel', ['create:cogwheel', '#minecraft:wooden_slabs'])
    event.shapeless('cagedmobs:hopping_mob_cage', ['cagedmobs:mob_cage', 'productivebees:upgrade_simulator'])
    event.shapeless('2x botania:rune_water', ['starcraft:rune_blank', 'botania:manasteel_ingot', 'minecraft:sugar_cane', '#minecraft:fishes'])
    event.shapeless('2x botania:rune_fire', ['starcraft:rune_blank', 'minecraft:crying_obsidian', 'minecraft:gunpowder', 'minecraft:blaze_powder'])
    event.shapeless('2x botania:rune_earth', ['starcraft:rune_blank', 'minecraft:dirt', 'minecraft:sand', 'minecraft:gravel'])
    event.shapeless('2x botania:rune_air', ['starcraft:rune_blank', '#minecraft:flowers', 'minecraft:grass', 'minecraft:bone_meal'])
    event.shapeless('starcraft:stress_input', ['createaddition:electric_motor']);

    // 生物笼
    event.shaped('cagedmobs:mob_cage', [
        'AAA',
        'ABA',
        'CDC'
    ],{
        'A': 'minecraft:iron_bars',
        'B': 'create:blaze_burner',
        'C': 'pneumaticcraft:compressed_iron_block',
        'D': 'compressedcreativity:compressed_iron_casing'
    })
    // 网络控制器
    event.shaped('beyonddimensions:net_control',[
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'beyonddimensions:space_time_bar',
        B: 'beyonddimensions:stable_space_time_fragment',
        C: 'ae2:controller',
        D: 'beyonddimensions:space_time_stable_frame'
    })

    // 网络接口
    event.shaped('beyonddimensions:net_interface',[
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'beyonddimensions:space_time_bar',
        B: 'beyonddimensions:stable_space_time_fragment',
        C: 'ae2:interface',
        D: 'beyonddimensions:space_time_stable_frame'
    })
    // 维度网络通道
    event.shaped('beyonddimensions:net_pathway', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'beyonddimensions:net_interface',
        B: 'beyonddimensions:space_time_stable_frame',
        C: 'botania:ender_eye_block',
        D: '#ae2:p2p_attunements/item_p2p_tunnel'
    })
    
    // 空白符文
    event.shaped('6x starcraft:rune_blank',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'botania:livingrock',
        B: 'occultism:chalk_white'
    }).damageIngredient('occultism:chalk_white')

    // 魔力符文
    event.shaped('2x botania:rune_mana',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'botania:mana_powder',
        B: 'starcraft:rune_blank'
    })

    // 环境储存器
    event.shaped('evilcraft:environmental_accumulator',[
        'ABA',
        'CDC',
        'ACA'
    ],{
        A: 'botania:livingwood',
        B: 'evilcraft:dark_block',
        C: 'enderio:grains_of_infinity',
        D: 'naturesaura:gold_powder'
    })

    // 暮色森林传送水晶
    event.shaped('starcraft:twilightforest_potral_item',[
        'ABA',
        'ACA',
        'ADA'
    ],{
        A: 'evilcraft:dull_dust',
        B: 'evilcraft:dark_power_gem',
        C: 'occultism:spirit_attuned_gem',
        D: 'occultism:spirit_lantern'
    })
    
    // 魔法祭坛
    event.shaped('botania:runic_altar',[
        'ABA',
        'COD',
        'EGF'
    ],{
        A: 'botania:livingrock',
        B: 'botania:mana_diamond',
        C: 'botania:rune_water',
        D: 'botania:rune_fire',
        E: 'botania:rune_earth',
        F: 'botania:rune_air',
        G: 'botania:rune_mana',
        O: 'kubejs:starcraft_advancedcoin'
    })

    // 模块化路由器
    event.shaped('2x modularrouters:modular_router',[
        'FAF',
        'BCD',
        'FEF'
    ],{
        A: 'actuallyadditions:phantom_itemface',
        B: 'actuallyadditions:phantom_liquiface',
        C: 'actuallyadditions:player_interface',
        D: 'actuallyadditions:phantom_energyface',
        E: '#forge:chests',
        F: 'mekanism:enriched_iron'
    })

    // 钢制机壳
    event.shaped('mekanism:steel_casing',[
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'actuallyadditions:void_crystal',
        B: '#forge:ingots/steel',
        C: 'mekanism:advanced_control_circuit',
        D: 'industrialforegoing:machine_frame_simple',
    })

    // 水槽
    event.shaped('cookingforblockheads:sink',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: '#minecraft:terracotta',
        B: 'kubejs:starcraft_ultracoin',
        C: 'naturesaura:spring'
    })

    // 永恒水方块
    event.shaped('2x evilcraft:eternal_water', [
        ' A ',
        'BCB',
        ' D '
    ],{
        A: 'evilcraft:bucket_eternal_water',
        B: 'actuallyadditions:phantom_liquiface',
        C: 'cookingforblockheads:sink',
        D: 'evilcraft:lightning_grenade'
    })

    // 造石机
    event.shaped('thermal:device_rock_gen', [
        'AAA',
        'BCB',
        'DDD'
    ],{
        A: 'minecraft:obsidian',
        B: 'xycraft_machines:extractor',
        C: 'thermal:machine_frame',
        D: 'minecraft:smooth_stone'
    })

    // pipez 流体管道
    event.shaped('12x pipez:fluid_pipe', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'minecraft:lapis_lazuli',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:bucket',
        D: 'minecraft:redstone_block'
    })

    // pipez 物品管道
    event.shaped('12x pipez:item_pipe', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'mekanism:enriched_iron',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:dropper',
        D: 'minecraft:redstone_block'
    })

    // 基础机械管道
    event.shaped('6x mekanism:basic_mechanical_pipe', [
        'ABA',
        'CBC',
        'ABA'
    ],{
        A: 'actuallyadditions:palis_crystal',
        B: 'pipez:fluid_pipe',
        C: 'mekanism:enriched_iron'
    })

    // 基础物流管道
        event.shaped('6x mekanism:basic_logistical_transporter', [
        'ABA',
        'CBC',
        'ABA'
    ],{
        A: 'actuallyadditions:enori_crystal',
        B: 'pipez:item_pipe',
        C: 'mekanism:enriched_iron'
    })

    // 基础加压管道
    event.shaped('6x mekanism:basic_pressurized_tube', [
        'ABA',
        'CBC',
        'ABA'
    ],{
        A: 'actuallyadditions:emeradic_crystal',
        B: 'pipez:gas_pipe',
        C: 'mekanism:enriched_iron'
    })

    // 基础通用线缆
    event.shaped('6x mekanism:basic_universal_cable', [
        'ABA',
        'CBC',
        'ABA'
    ],{
        A: 'actuallyadditions:restonia_crystal',
        B: 'pipez:energy_pipe',
        C: 'mekanism:enriched_iron'
    })
    
    // 热力机器框架
    event.shaped('thermal:machine_frame', [
        'ABA',
        'CDC',
        'ABA'
    ],{
        A: 'actuallyadditions:enori_crystal',
        B: 'actuallyadditions:restonia_crystal',
        C: 'minecraft:glass',
        D: '#forge:gears/tin'
    })

    // 铝矿物
    event.shaped('xycraft_world:aluminum_ore_stone', [
        'AA ',
        'AA ',
        '   '
    ],{
        A: 'exdeorum:aluminum_ore_chunk'
    })

    //蜂箱框架
    event.shaped('starcraft:beehive_frame',[
        'AAA',
        'BCB',
        'AAA'
    ],{
        A:'minecraft:stick',
        B:'minecraft:string',
        C:'minecraft:slime_ball'
    })

    //蜂箱
    event.shaped('minecraft:beehive',[
        'AAA',
        'BBB',
        'AAA'
    ],{
        A:'#minecraft:planks',
        B:'starcraft:beehive_frame'
    })

    // 物品输入口
    event.shaped('starcraft:item_input', [
        "ABA",
        "ACA",
        "AAA"
    ],{
            A: 'minecraft:iron_ingot',
            B: 'minecraft:dispenser',
            C: 'minecraft:hopper'    
    })

    // 物品输出口
    event.shaped('starcraft:item_output', [
        "AAA",
        "ABA",
        "ACA"
    ],{
            A: 'minecraft:iron_ingot',
            B: 'minecraft:dispenser',
            C: 'minecraft:hopper'
    })

    // 魔力输出口
    event.shaped('starcraft:mana_output', [
        "AAA",
        "ABA",
        "ACA"
    ],{
        A: 'minecraft:lapis_block',
        B: 'botania:elven_spreader',
        C: 'botania:mana_pylon'
    })
    //转化粉
    event.shaped('16x twilightforest:transformation_powder',[
        "ABA",
        "BCB",
        "DBD"
    
    ],{
        A:'twilightforest:twilight_oak_leaves',
        B:'twilightforest:borer_essence',
        C:'twilightforest:torchberries',
        D:'twilightforest:canopy_leaves'
    })
    //蜂巢头盔
    event.shaped('productivebees:bee_nest_diamond_helmet',[
        "AB"
    ],{
        A:'minecraft:diamond_helmet',
        B:'minecraft:beehive'
    })
    //钟
    event.shaped('minecraft:bell',[
        "AAA",
        "B B",
        "B B"
    ],{
        A:'#minecraft:planks',
        B:'minecraft:gold_ingot'
    })
})
