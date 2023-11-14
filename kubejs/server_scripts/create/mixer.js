onEvent('recipes', event => {
    event.recipes.create.mixing(Item.of('create:rose_quartz', 5),[
        Item.of('minecraft:quartz', 4),
        Item.of('minecraft:redstone', 4),
    ])

    event.recipes.create.mixing(Item.of('create:rose_quartz', 6),[
        Item.of('minecraft:quartz', 4),
        Item.of('minecraft:redstone', 4),
    ]).heated()

    event.recipes.create.mixing(Item.of('industrialforegoing:machine_frame_simple'),[
        Item.of('industrialforegoing:machine_frame_pity'),
        Item.of('industrialforegoing:plastic', 4),
        Item.of('#forge:gears/gold'),
        Fluid.of('industrialforegoing:latex', 250),
    ])

    event.recipes.create.mixing(Item.of('create:shadow_steel', 2),[
        Item.of('create:chromatic_compound'),
        Item.of('extrabotany:shadowium'),
    ]).heated()

    event.recipes.create.mixing(Item.of('create:refined_radiance', 2),[
        Item.of('create:chromatic_compound'),
        Item.of('extrabotany:photonium'),
    ]).heated()
})
