//priority: 1000

//Registry containing all crop-like growables.
const cropRegistry = [
    {
        type: 'cactus',
        crops: [
            {
                seed: 'minecraft:cactus',
                render: 'minecraft:cactus',
                plant: 'minecraft:cactus',
                substrate: 'sand'
            }
        ]
    },
    {
        type: 'cane_like',
        crops: [
            {
                seed: 'minecraft:bamboo',
                render: 'minecraft:bamboo',
                plant: 'minecraft:bamboo',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sugar_cane',
                render: 'minecraft:sugar_cane',
                plant: 'minecraft:sugar_cane',
                substrate: 'sand'
            }
        ]
    },
    {
        type: 'coral',
        crops: [
            {
                seed: 'minecraft:brain_coral',
                render: 'minecraft:brain_coral',
                plant: 'minecraft:brain_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_block',
                render: 'minecraft:brain_coral_block',
                plant: 'minecraft:brain_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_fan',
                render: 'minecraft:brain_coral_fan',
                plant: 'minecraft:brain_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral',
                render: 'minecraft:bubble_coral',
                plant: 'minecraft:bubble_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_block',
                render: 'minecraft:bubble_coral_block',
                plant: 'minecraft:bubble_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_fan',
                render: 'minecraft:bubble_coral_fan',
                plant: 'minecraft:bubble_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral',
                render: 'minecraft:fire_coral',
                plant: 'minecraft:fire_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_block',
                render: 'minecraft:fire_coral_block',
                plant: 'minecraft:fire_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_fan',
                render: 'minecraft:fire_coral_fan',
                plant: 'minecraft:fire_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral',
                render: 'minecraft:horn_coral',
                plant: 'minecraft:horn_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_block',
                render: 'minecraft:horn_coral_block',
                plant: 'minecraft:horn_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_fan',
                render: 'minecraft:horn_coral_fan',
                plant: 'minecraft:horn_coral_fan',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral',
                render: 'minecraft:tube_coral',
                plant: 'minecraft:tube_coral',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_block',
                render: 'minecraft:tube_coral_block',
                plant: 'minecraft:tube_coral_block',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_fan',
                render: 'minecraft:tube_coral_fan',
                plant: 'minecraft:tube_coral_fan',
                substrate: 'water'
            },
        ]
    },
    {
        type: 'crop_fiber',
        crops: [
            {
                seed: 'immersiveengineering:seed',
                render: 'immersiveengineering:hemp',
                plant: 'immersiveengineering:hemp_fiber',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_fruit',
        crops: [
            {
                seed: 'occultism:datura_seeds',
                render: 'occultism:datura',
                plant: 'occultism:datura',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:chorus_flower',
                render: 'minecraft:chorus_flower',
                plant: 'minecraft:chorus_fruit',
                substrate: 'end_stone'
            }
        ]
    },
    {
        type: 'crop_gourd',
        crops: [
            {
                seed: 'minecraft:pumpkin_seeds',
                render: 'minecraft:pumpkin',
                plant: 'minecraft:pumpkin',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_grain',
        crops: [
            {
                seed: 'farmersdelight:rice',
                render: 'farmersdelight:rice_upper_crop',
                plant: 'farmersdelight:rice_panicle',
                substrate: 'water'
            },
            {
                seed: 'minecraft:wheat_seeds',
                render: 'minecraft:wheat',
                plant: 'minecraft:wheat',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_leafy',
        crops: [
            {
                seed: 'farmersdelight:cabbage_seeds',
                render: 'farmersdelight:cabbages',
                plant: 'farmersdelight:cabbage',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_melon',
        crops: [
            {
                seed: 'minecraft:melon_seeds',
                render: 'minecraft:melon',
                plant: 'minecraft:melon',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_root',
        crops: [
            {
                seed: 'farmersdelight:onion',
                render: 'farmersdelight:onions',
                plant: 'farmersdelight:onion',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:beetroot_seeds',
                render: 'minecraft:beetroots',
                plant: 'minecraft:beetroot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:carrot',
                render: 'minecraft:carrots',
                plant: 'minecraft:carrot',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:potato',
                render: 'minecraft:potatoes',
                plant: 'minecraft:potato',
                plantSecondary: 'minecraft:poisonous_potato',
                plantSecondaryRate: 'low',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_vine',
        crops: [
            {
                seed: 'farmersdelight:tomato_seeds',
                render: 'farmersdelight:tomatoes',
                plant: 'farmersdelight:tomato',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'flower',
        crops: [
            {
                seed: 'botania:black_mystical_flower',
                render: 'botania:black_mystical_flower',
                plant: 'botania:black_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:blue_mystical_flower',
                render: 'botania:blue_mystical_flower',
                plant: 'botania:blue_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:brown_mystical_flower',
                render: 'botania:brown_mystical_flower',
                plant: 'botania:brown_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:cyan_mystical_flower',
                render: 'botania:cyan_mystical_flower',
                plant: 'botania:cyan_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:gray_mystical_flower',
                render: 'botania:gray_mystical_flower',
                plant: 'botania:gray_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:green_mystical_flower',
                render: 'botania:green_mystical_flower',
                plant: 'botania:green_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:light_blue_mystical_flower',
                render: 'botania:light_blue_mystical_flower',
                plant: 'botania:light_blue_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:light_gray_mystical_flower',
                render: 'botania:light_gray_mystical_flower',
                plant: 'botania:light_gray_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:lime_mystical_flower',
                render: 'botania:lime_mystical_flower',
                plant: 'botania:lime_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:magenta_mystical_flower',
                render: 'botania:magenta_mystical_flower',
                plant: 'botania:magenta_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:orange_mystical_flower',
                render: 'botania:orange_mystical_flower',
                plant: 'botania:orange_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:pink_mystical_flower',
                render: 'botania:pink_mystical_flower',
                plant: 'botania:pink_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:purple_mystical_flower',
                render: 'botania:purple_mystical_flower',
                plant: 'botania:purple_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:red_mystical_flower',
                render: 'botania:red_mystical_flower',
                plant: 'botania:red_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:white_mystical_flower',
                render: 'botania:white_mystical_flower',
                plant: 'botania:white_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'botania:yellow_mystical_flower',
                render: 'botania:yellow_mystical_flower',
                plant: 'botania:yellow_mystical_flower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:allium',
                render: 'minecraft:allium',
                plant: 'minecraft:allium',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:azure_bluet',
                render: 'minecraft:azure_bluet',
                plant: 'minecraft:azure_bluet',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:blue_orchid',
                render: 'minecraft:blue_orchid',
                plant: 'minecraft:blue_orchid',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:cornflower',
                render: 'minecraft:cornflower',
                plant: 'minecraft:cornflower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:dandelion',
                render: 'minecraft:dandelion',
                plant: 'minecraft:dandelion',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lilac',
                render: 'minecraft:lilac',
                plant: 'minecraft:lilac',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lily_of_the_valley',
                render: 'minecraft:lily_of_the_valley',
                plant: 'minecraft:lily_of_the_valley',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:orange_tulip',
                render: 'minecraft:orange_tulip',
                plant: 'minecraft:orange_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:oxeye_daisy',
                render: 'minecraft:oxeye_daisy',
                plant: 'minecraft:oxeye_daisy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:peony',
                render: 'minecraft:peony',
                plant: 'minecraft:peony',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:pink_tulip',
                render: 'minecraft:pink_tulip',
                plant: 'minecraft:pink_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:poppy',
                render: 'minecraft:poppy',
                plant: 'minecraft:poppy',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:red_tulip',
                render: 'minecraft:red_tulip',
                plant: 'minecraft:red_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:rose_bush',
                render: 'minecraft:rose_bush',
                plant: 'minecraft:rose_bush',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sunflower',
                render: 'minecraft:sunflower',
                plant: 'minecraft:sunflower',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:white_tulip',
                render: 'minecraft:white_tulip',
                plant: 'minecraft:white_tulip',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:wither_rose',
                render: 'minecraft:wither_rose',
                plant: 'minecraft:wither_rose',
                substrate: 'soul_sand'
            },
        ]
    },
    {
        type: 'grass_like',
        crops: [
            {
                seed: 'minecraft:crimson_roots',
                render: 'minecraft:crimson_roots',
                plant: 'minecraft:crimson_roots',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'minecraft:fern',
                render: 'minecraft:fern',
                plant: 'minecraft:fern',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:grass',
                render: 'minecraft:grass',
                plant: 'minecraft:grass',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:nether_sprouts',
                render: 'minecraft:nether_sprouts',
                plant: 'minecraft:nether_sprouts',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:seagrass',
                render: 'minecraft:seagrass',
                plant: 'minecraft:seagrass',
                substrate: 'water'
            },
            {
                seed: 'minecraft:warped_roots',
                render: 'minecraft:warped_roots',
                plant: 'minecraft:warped_roots',
                substrate: 'warped_nylium'
            },
            {
                seed: 'tconstruct:blood_slime_tall_grass',
                render: 'tconstruct:blood_slime_tall_grass',
                plant: 'tconstruct:blood_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:ender_slime_tall_grass',
                render: 'tconstruct:ender_slime_tall_grass',
                plant: 'tconstruct:ender_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:sky_slime_tall_grass',
                render: 'tconstruct:sky_slime_tall_grass',
                plant: 'tconstruct:sky_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:earth_slime_tall_grass',
                render: 'tconstruct:earth_slime_tall_grass',
                plant: 'tconstruct:earth_slime_tall_grass',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:blood_slime_fern',
                render: 'tconstruct:blood_slime_fern',
                plant: 'tconstruct:blood_slime_fern',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:ender_slime_fern',
                render: 'tconstruct:ender_slime_fern',
                plant: 'tconstruct:ender_slime_fern',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:sky_slime_fern',
                render: 'tconstruct:sky_slime_fern',
                plant: 'tconstruct:sky_slime_fern',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:earth_slime_fern',
                render: 'tconstruct:earth_slime_fern',
                plant: 'tconstruct:earth_slime_fern',
                substrate: 'slimy_dirt'
            }
        ]
    },
    {
        type: 'kelp_like',
        crops: [
            {
                seed: 'minecraft:kelp',
                render: 'minecraft:kelp_plant',
                plant: 'minecraft:kelp',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'lily_like',
        crops: [
            {
                seed: 'minecraft:lily_pad',
                render: 'minecraft:lily_pad',
                plant: 'minecraft:lily_pad',
                substrate: 'water'
            },
        ]
    },
    {
        type: 'shroom',
        crops: [
            {
                seed: 'botania:black_mushroom',
                render: 'botania:black_mushroom',
                plant: 'botania:black_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:blue_mushroom',
                render: 'botania:blue_mushroom',
                plant: 'botania:blue_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:brown_mushroom',
                render: 'botania:brown_mushroom',
                plant: 'botania:brown_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:cyan_mushroom',
                render: 'botania:cyan_mushroom',
                plant: 'botania:cyan_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:gray_mushroom',
                render: 'botania:gray_mushroom',
                plant: 'botania:gray_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:green_mushroom',
                render: 'botania:green_mushroom',
                plant: 'botania:green_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:light_blue_mushroom',
                render: 'botania:light_blue_mushroom',
                plant: 'botania:light_blue_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:light_gray_mushroom',
                render: 'botania:light_gray_mushroom',
                plant: 'botania:light_gray_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:lime_mushroom',
                render: 'botania:lime_mushroom',
                plant: 'botania:lime_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:magenta_mushroom',
                render: 'botania:magenta_mushroom',
                plant: 'botania:magenta_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:orange_mushroom',
                render: 'botania:orange_mushroom',
                plant: 'botania:orange_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:pink_mushroom',
                render: 'botania:pink_mushroom',
                plant: 'botania:pink_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:purple_mushroom',
                render: 'botania:purple_mushroom',
                plant: 'botania:purple_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:red_mushroom',
                render: 'botania:red_mushroom',
                plant: 'botania:red_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:white_mushroom',
                render: 'botania:white_mushroom',
                plant: 'botania:white_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:yellow_mushroom',
                render: 'botania:yellow_mushroom',
                plant: 'botania:yellow_mushroom',
                substrate: 'mushroom'
            },
            {
                seed: 'minecraft:nether_wart',
                render: 'minecraft:nether_wart',
                plant: 'minecraft:nether_wart',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:sea_pickle',
                render: 'minecraft:sea_pickle',
                plant: 'minecraft:sea_pickle',
                substrate: 'water'
            },
        ]
    },
    {
        type: 'shrub',
        crops: [
            {
                seed: 'minecraft:sweet_berries',
                render: 'minecraft:sweet_berry_bush',
                plant: 'minecraft:sweet_berries',
                substrate: 'dirt'
            },
        ]
    },
    {
        type: 'vine',
        crops: [
            {
                seed: 'minecraft:twisting_vines',
                render: 'minecraft:twisting_vines_plant',
                plant: 'minecraft:twisting_vines',
                substrate: 'warped_nylium'
            },
            {
                seed: 'minecraft:vine',
                render: 'minecraft:vine',
                plant: 'minecraft:vine',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:weeping_vines',
                render: 'minecraft:weeping_vines_plant',
                plant: 'minecraft:weeping_vines',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'tconstruct:sky_slime_vine',
                render: 'tconstruct:sky_slime_vine',
                plant: 'tconstruct:sky_slime_vine',
                substrate: 'slimy_dirt'
            },
            {
                seed: 'tconstruct:ender_slime_vine',
                render: 'tconstruct:ender_slime_vine',
                plant: 'tconstruct:ender_slime_vine',
                substrate: 'slimy_dirt'
            }
        ]
    }
];
