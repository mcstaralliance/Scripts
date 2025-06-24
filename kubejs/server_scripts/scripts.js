// priority: 0

ServerEvents.recipes(event => {

    event.shapeless('2x create:cogwheel', ['create:andesite_alloy', '#minecraft:wooden_buttons'])
    event.shapeless('create:large_cogwheel', ['create:cogwheel', '#minecraft:wooden_slabs'])
    event.shapeless('cagedmobs:hopping_mob_cage', ['cagedmobs:mob_cage', 'productivebees:upgrade_simulator'])
    event.shapeless('2x botania:rune_water', ['starcraft:rune_blank', 'botania:manasteel_ingot', 'minecraft:sugar_cane', '#minecraft:fishes'])
    event.shapeless('2x botania:rune_fire', ['starcraft:rune_blank', 'minecraft:crying_obsidian', 'minecraft:gunpowder', 'minecraft:blaze_powder'])
    event.shapeless('2x botania:rune_earth', ['starcraft:rune_blank', 'minecraft:dirt', 'minecraft:sand', 'minecraft:gravel'])
    event.shapeless('2x botania:rune_air', ['starcraft:rune_blank', '#minecraft:flowers', 'minecraft:grass', 'minecraft:bone_meal'])
    
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

    event.shaped('6x starcraft:rune_blank',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'botania:livingrock',
        B: 'occultism:chalk_white'
    }).damageIngredient('occultism:chalk_white')

    event.shaped('2x botania:rune_mana',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'botania:mana_powder',
        B: 'starcraft:rune_blank'
    })

    event.shaped('evilcraft:environmental_accumulator',[
        'ABA',
        'CDC',
        'ACA'
    ],{
        A: 'botania:livingwood',
        B: 'evilcraft:dark_block',
        C: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:other"}'),
        D: 'naturesaura:gold_powder'
    })

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
})


