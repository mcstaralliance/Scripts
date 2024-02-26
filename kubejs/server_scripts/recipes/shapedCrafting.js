onEvent('recipes', event => {
	const recipesShaped = [
        {
            output: 'tconstruct:seared_melter',
            pattern: ['AAA', 'BCB', 'BBB'],
            key: {
                A: '#forge:glass',
                B: 'tconstruct:seared_brick',
                C: 'tconstruct:seared_ingot_gauge'
            }
        },
        {
            output: 'tconstruct:smeltery_controller',
            pattern: ['AAA', 'BCD', 'AAA'],
            key: {
                A: 'tconstruct:seared_bricks', 
                B: 'tconstruct:seared_melter',
                C: 'create:andesite_scaffolding',
                D: 'tconstruct:scorched_alloyer'
            }
        },
        {
            output: 'tconstruct:scorched_alloyer',
            pattern: ['AAA', 'BCB', 'BBB'],
            key: {
                A: '#forge:gems/quartz',
                B: 'tconstruct:scorched_brick',
                C: 'tconstruct:scorched_ingot_gauge'
            }
        },
        {
            output: 'minecraft:stonecutter',
            pattern: ['AAA','BBB','BBB'],
            key: {
                A: '#forge:plates/iron',
                B: 'minecraft:smooth_stone'
            }
        },
        {
            output: 'create:empty_blaze_burner',
            pattern: patterns.crossWithCore,
            key: {
                A: '#forge:netherrack',
                B: 'create:brass_sheet',
                C: 'minecraft:air'
            }
        },
        {
            output: '6x create:shaft',
            pattern: [' A ', ' A ', ' A '],
            key: {
                A: 'create:andesite_alloy'
            }
        },
        {
            output: '3x create:belt_connector',
            pattern: ['   ', 'ABA', '   '],
            key: {
                A: 'farmersdelight:rope',
                B: 'tconstruct:silky_cloth'
            }
        },
        {
            output: 'create:windmill_bearing',
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'create:linear_chassis',
                B: 'create:brass_casing',
                C: 'create:gearbox'
            }
        },
        {
            output: '8x extendedcrafting:luminessence',
            pattern: patterns.crossWithCore,
            key: {
                A: Item.of('mysticalagriculture:infusion_crystal', '{Damage:0}'),
                B: '#forge:gunpowder',
                C: '#forge:dusts/glowstone'
            }
        },
        {
            output: 'elementalcraft:contained_crystal',
            pattern: patterns.crossWithCore,
            key: {
                A: 'elementalcraft:inert_crystal',
                B: 'extendedcrafting:luminessence',
                C: 'minecraft:air'
            }
        },
        {
            output: '2x extendedcrafting:luminessence_block',
            pattern: patterns.surroundWithCore,
            key: {
                A: 'mekanism:ingot_refined_glowstone',
                B: '#forge:dusts/sulfur',
            }
        },
        {
            output: 'elementalcraft:extractor',
            pattern: ['ABC', 'DEF', 'EBE'],
            key: {
                A: 'botania:rune_water',
                B: 'elementalcraft:contained_crystal',
                C: 'botania:rune_water',
                D: 'botania:rune_fire',
                E: 'minecraft:iron_ingot',
                F: 'botania:rune_air'
            }
        },
        {
            output: 'psi:cad_assembler',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'mysticalagriculture:tertium_essence',
                B: 'elementalcraft:aircrystal',
                C: 'elementalcraft:earthcrystal',
                D: 'elementalcraft:drenched_iron_block',
                E: 'elementalcraft:firecrystal',
                F: 'elementalcraft:watercrystal'
            }
        },
        {
            output: 'psi:programmer',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'fluxnetworks:flux_dust',
                B: 'integrateddynamics:part_display_panel',
                C: '#psi:psidust',
                D: 'elementalcraft:drenched_iron_block'
            }
        },
        {
            output: 'elementalcraft:binder',
            pattern: ['AAA', 'BCB', 'EDE'],
            key: {
                A: 'botania:terrasteel_ingot',
                B: '#forge:ingots/drenched_iron',
                C: 'botania:runic_altar',
                D: 'elementalcraft:contained_crystal',
                E: 'elementalcraft:whiterock'
            }
        }
    ]

    recipesShaped.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key)
    })
})