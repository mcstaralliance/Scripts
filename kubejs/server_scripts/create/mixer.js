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

// 覆写花瓣配方
onEvent('recipes', event => {
    var flowerColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    flowerColors.forEach(color => {
        var inputFlower = `botania:${color}_mystical_flower`
        var outputFlowerPetal = `2x botania:${color}_petal`
        event.remove({type: 'minecraft:crafting_shapeless', output: outputFlowerPetal });
        event.recipes.create.mixing(outputFlowerPetal, [inputFlower])
    })
})
