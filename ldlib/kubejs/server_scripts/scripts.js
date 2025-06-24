// priority: 0

ServerEvents.recipes(event => {
    
    event.shapeless('2x create:cogwheel', ['create:andesite_alloy', '#minecraft:wooden_buttons'])
    event.shapeless('create:large_cogwheel', ['create:cogwheel', '#minecraft:wooden_slabs'])
    event.shapeless('cagedmobs:hopping_mob_cage', ['cagedmobs:mob_cage', 'productivebees:upgrade_simulator'])


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
})


