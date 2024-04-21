onEvent('recipes', event => {
    const commonVein = [
        'minecraft:coal_ore',
        'minecraft:iron_ore',
        'minecraft:copper_ore',
        'minecraft:gold_ore',
        'minecraft:redstone_ore',
        'minecraft:lapis_ore',
        'create:zinc_ore',
        'elementalcraft:inert_crystal_ore',
        'mysticalagriculture:prosperity_ore',
        'mysticalagriculture:inferium_ore',
        'ae2:quartz_ore'
    ]

    const rareVein = [
        'minecraft:diamond_ore',
        'minecraft:emerald_ore',
        'mekanism:fluorite_ore',
        'rftoolsbase:dimensionalshard_overworld',
        'ae2:quartz_ore',
        'rftoolsbase:dimensionalshard_overworld',
        'thermal:cinnabar_ore',
        'thermal:niter_ore',
        'thermal:sulfur_ore',
        'thermal:tin_ore',
        'thermal:lead_ore',
        'thermal:silver_ore',
        'thermal:nickel_ore',
        'mekanism:osmium_ore',
        'mekanism:uranium_ore'
    ]

    const netherRareVein = [
        'tconstruct:cobalt_ore',
        'minecraft:glowstone',
        'minecraft:nether_quartz_ore',
        'rftoolsbase:dimensionalshard_nether',
        'mysticalagriculture:soulium_ore'
    ]

    const epicVein = [
        'draconicevolution:nether_draconium_ore',
        'minecraft:ancient_debris',
    ]

    for (let i = 0; i < commonVein.length; i++) {
        event.recipes.createoreexcavation.drilling([commonVein[i]], '{"text": "寻常矿脉"}', 50, 200)
        .biomeWhitelist('forge:is_overworld')
        .stress(128)
        .id("starcraft_vein_" + commonVein[i]); 
    }

    for (let i = 0; i < rareVein.length; i++) {
        event.recipes.createoreexcavation.drilling([rareVein[i]], '{"text": "重要矿脉"}', 20, 200)
        .fluid(Fluid.of('minecraft:water', 500))
        .biomeWhitelist('forge:is_overworld')
        .stress(256)
        .id("starcraft_vein_" + rareVein[i]);
    }

    for (let i = 0; i < netherRareVein.length; i++) {
        event.recipes.createoreexcavation.drilling([netherRareVein[i]], '{"text": "下界重要矿脉"}', 20, 200)
        .drill('createoreexcavation:diamond_drill')
        .fluid(Fluid.of('minecraft:water', 1000))
        .biomeWhitelist('forge:is_hot/nether')
        .stress(256)
        .id("starcraft_vein_" + netherRareVein[i]);
    }

    for (let i = 0; i < epicVein.length; i++) {
        event.recipes.createoreexcavation.drilling([epicVein[i]], '{"text": "稀少矿脉"}', 5, 300)
        .drill('createoreexcavation:netherite_drill')
        .fluid(Fluid.of('minecraft:lava', 1000))
        .biomeWhitelist('forge:is_hot/nether')
        .stress(512)
        .id("starcraft_vein_" + epicVein[i]);
    }
    
	event.recipes.createoreexcavation.extracting(Fluid.of("mekanism:uranium_hexafluoride", 200), '{"text": "沉积铀储层"}', 1, 200)
        .alwaysInfinite()
        .stress(512)
        .veinSize(5, 8)
        .biomeWhitelist('forge:is_overworld')
        .id("starcraft_vein_uranium_hexafluoride");

	// event.recipes.createoreexcavation.drilling([Item.of('minecraft:coal'), Item.of('minecraft:diamond').withChance(0.05)], '{"text": "My coal vein"}', 2 -> 权重, 1000 -> 时间刻)
    //     .drill('createoreexcavation:diamond_drill')  // 所需钻头
    //     .fluid('minecraft:lava')  // 钻井液
    //     .alwaysFinite()  // 有限挖掘
    //     .veinSize(5, 8) // 矿脉大小
    //     .id("my_vein2"); // id

	// event.recipes.createoreexcavation.drilling('minecraft:raw_iron', '{"text": "My iron vein"}', 10, 100)
    //     .veinSize(3, 8.5)
    //     .biomeWhitelist('forge:is_overworld') // 群系
    //     .stress(512)
    //     .id("my_vein3");

	// event.recipes.createoreexcavation.extracting(Fluid.of('minecraft:water', 400), '{"text": "Water well"}', 10, 100)
    //     .alwaysInfinite()
    //     .id("test");
})