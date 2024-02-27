onEvent('recipes', event => {
    event.custom({
        'type': 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            "ABACA",
            "DAAAE",
            "FGHIA",
            "JFFFK",
            "FLFMF"
        ],
        key:{
            A: 'botania:manasteel_ingot',
            B: 'elementalcraft:watercrystal',
            C: 'botania:rune_earth',
            D: 'elementalcraft:firecrystal',
            E: 'botania:rune_air',
            F: 'minecraft:lapis_lazuli',
            G: 'botania:rune_mana',
            H: 'botania:mana_quartz',
            I: 'elementalcraft:contained_crystal',
            J: 'botania:rune_fire',
            K: 'elementalcraft:aircrystal',
            L: 'botania:rune_water',
            M: 'elementalcraft:earthcrystal'
        },
        result: 'botania:terra_plate'
    })
})
