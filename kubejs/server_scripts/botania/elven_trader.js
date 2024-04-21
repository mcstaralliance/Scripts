onEvent('recipes', event => {
    event.recipes.botania.elven_trade([
        'dimdungeons:block_portal_keyhole'], 
        [Item.of('reliquary:mob_charm', '{Damage:0,entity:"minecraft:silverfish"}'),
        'draconicevolution:dislocator',
        'extendedcrafting:ender_star_block',
        'elementalcraft:pristine_air_gem',
        'dimdungeons:block_gilded_portal',
        'ae2:singularity'
    ])

    event.recipes.botania.elven_trade([
        'botania:gaia_head'], 
        ['botania:gaia_ingot',
        'minecraft:bread',
        'minecraft:tnt'
    ])
})