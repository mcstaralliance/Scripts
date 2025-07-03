ServerEvents.recipes(event => {
    event.recipes.create.deploying('create:precision_mechanism', ['#forge:plates/obsidian', 'thermal:energy_limiter_attachment'])
})

ServerEvents.recipes(event => {
    const create = event.recipes.create
    create.filling('minecraft:golden_apple', ['minecraft:apple',Fluid.of('tconstruct:molten_gold',720)]),
    create.filling('minecraft:enchanted_golden_apple', ['minecraft:golden_apple', Fluid.of('starcraft:exp_fluid',1000)]),
    create.mixing(Fluid.of('starcraft:exp_fluid',125),['2x minecraft:enchanted_book',Fluid.of('minecraft:milk',500)]).heated(),
    create.filling('starcraft:milk_bread', ['minecraft:bread', Fluid.of('minecraft:milk',250)]),
    create.sequenced_assembly('paimonfood:paimon_sword','paimonfood:paimonfood_item',
        [
            create.deploying("starcraft:incomplete_paimon_sword",["starcraft:incomplete_paimon_sword",'minecraft:blaze_rod']),
            create.deploying("starcraft:incomplete_paimon_sword",['starcraft:incomplete_paimon_sword','minecraft:netherite_ingot']),
            create.deploying("starcraft:incomplete_paimon_sword",["starcraft:incomplete_paimon_sword",'minecraft:emerald']),
            create.pressing("starcraft:incomplete_paimon_sword","starcraft:incomplete_paimon_sword"),
            create.pressing("starcraft:incomplete_paimon_sword","starcraft:incomplete_paimon_sword"),
            create.pressing("starcraft:incomplete_paimon_sword","starcraft:incomplete_paimon_sword"),
            create.pressing("starcraft:incomplete_paimon_sword","starcraft:incomplete_paimon_sword"),
            create.pressing("starcraft:incomplete_paimon_sword","starcraft:incomplete_paimon_sword")
        ]
    )
    .transitionalItem("starcraft:incomplete_paimon_sword").loops(2)
})

ServerEvents.recipes(event => {
    event.recipes.create.haunting('actuallyadditions:black_quartz', '#forge:gems/quartz')
})

ServerEvents.recipes(event => {
  event.recipes.create.emptying([Fluid.of('evilcraft:blood',250), 'evilcraft:hardened_blood_shard'], 'minecraft:rotten_flesh')
})