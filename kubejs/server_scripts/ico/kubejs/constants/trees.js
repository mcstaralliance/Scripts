//priority: 1000

const treeRegistry = [
    {
        type: 'tree',
        trees: [
            {
                sapling: 'ars_nouveau:blue_archwood_sapling',
                trunk: 'ars_nouveau:blue_archwood_log',
                leaf: 'ars_nouveau:blue_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:green_archwood_sapling',
                trunk: 'ars_nouveau:green_archwood_log',
                leaf: 'ars_nouveau:green_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:purple_archwood_sapling',
                trunk: 'ars_nouveau:purple_archwood_log',
                leaf: 'ars_nouveau:purple_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'ars_nouveau:red_archwood_sapling',
                trunk: 'ars_nouveau:red_archwood_log',
                leaf: 'ars_nouveau:red_archwood_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:acacia_sapling',
                trunk: 'minecraft:acacia_log',
                leaf: 'minecraft:acacia_leaves',
                fruit: 'alexsmobs:acacia_blossom',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 75, dead: 8 }
            },
            {
                sapling: 'minecraft:birch_sapling',
                trunk: 'minecraft:birch_log',
                leaf: 'minecraft:birch_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                trunk: 'minecraft:dark_oak_log',
                leaf: 'minecraft:dark_oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                trunk: 'minecraft:jungle_log',
                leaf: 'minecraft:jungle_leaves',
                fruit: 'alexsmobs:banana',
                substrate: 'dirt',
                sap: 'industrialforegoing:latex',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'minecraft:oak_sapling',
                trunk: 'minecraft:oak_log',
                leaf: 'minecraft:oak_leaves',
                fruit: 'minecraft:apple',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'minecraft:spruce_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:blue_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:blue_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:lavender_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:lavender_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:orange_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:orange_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:pink_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:pink_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:red_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:red_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'quark:yellow_blossom_sapling',
                trunk: 'minecraft:spruce_log',
                leaf: 'quark:yellow_blossom_leaves',
                substrate: 'dirt',
                sap: 'thermal:resin',
                rate: { living: 50, dead: 6 }
            },
            {
                sapling: 'integrateddynamics:menril_sapling',
                trunk: 'integrateddynamics:menril_log',
                leaf: 'integrateddynamics:menril_leaves',
                fruit: 'integrateddynamics:menril_berries',
                substrate: 'dirt',
                sap: 'integrateddynamics:menril_resin',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:earth_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:earth_slime_leaves',
                fruit: 'minecraft:slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:earth_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:sky_slime_sapling',
                trunk: 'tconstruct:skyroot_log',
                leaf: 'tconstruct:sky_slime_leaves',
                fruit: 'tconstruct:sky_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:sky_slime',
                rate: { living: 25, dead: 4 }
            },
            {
                sapling: 'tconstruct:ender_slime_sapling',
                trunk: 'tconstruct:greenheart_log',
                leaf: 'tconstruct:ender_slime_leaves',
                fruit: 'tconstruct:ender_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:earth_slime',
                rate: { living: 25, dead: 4 }
            }
        ]
    },
    {
        type: 'tree_shroom',
        trees: [
            {
                sapling: 'minecraft:brown_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:brown_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                trunk: 'minecraft:crimson_stem',
                leaf: 'minecraft:nether_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:red_mushroom',
                trunk: 'minecraft:mushroom_stem',
                leaf: 'minecraft:red_mushroom_block',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:warped_fungus',
                trunk: 'minecraft:warped_stem',
                leaf: 'minecraft:warped_wart_block',
                extraDecoration: 'minecraft:shroomlight',
                substrate: 'warped_nylium'
            },
            {
                sapling: 'quark:glowshroom',
                trunk: 'quark:glowshroom_stem',
                leaf: 'quark:glowshroom_block',
                substrate: 'glowcelium'
            },
            {
                sapling: 'tconstruct:blood_slime_sapling',
                trunk: 'tconstruct:bloodshroom_log',
                leaf: 'tconstruct:blood_slime_leaves',
                fruit: 'tconstruct:ichor_slime_ball',
                substrate: 'slimy_dirt',
                sap: 'tconstruct:blood',
                rate: { living: 0, dead: 4 }
            }
        ]
    }
];
