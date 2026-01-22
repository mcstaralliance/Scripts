ServerEvents.recipes((event) => {
    //维度网络发生器
    event.recipes.occultism.ritual(
        'beyonddimensions:net_creater',
        ['occultism:storage_controller','occultism:storage_stabilizer_tier4','occultism:storage_stabilizer_tier4','occultism:storage_stabilizer_tier4','occultism:storage_stabilizer_tier4','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot'],
        'beyonddimensions:unstable_space_time_fragment',
        'occultism:craft_marid'
    )

    //等级1维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier1',['occultism:otherstone_pedestal','minecraft:copper_block','minecraft:blaze_powder','occultism:spirit_attuned_gem','botania:rune_earth','botania:rune_fire','botania:rune_air','botania:rune_water'],
        'occultism:book_of_binding_bound_foliot',
        'occultism:craft_foliot'
    )
    
    //等级2维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier2',['occultism:storage_stabilizer_tier1','#forge:storage_blocks/silver','occultism:spirit_attuned_gem','occultism:spirit_attuned_gem','minecraft:ghast_tear','botania:rune_spring','botania:rune_summer','botania:rune_autumn','botania:rune_winter'],
        'occultism:book_of_binding_bound_djinni',
        'occultism:craft_djinni'
    )

    //等级3维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier3',['minecraft:gold_block','minecraft:nether_star','occultism:spirit_attuned_crystal','occultism:storage_stabilizer_tier2','botania:rune_lust','botania:rune_gluttony','botania:rune_sloth'],
        'occultism:book_of_binding_bound_afrit',
        'occultism:craft_afrit'
    )

    //等级4维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier4',['occultism:storage_stabilizer_tier3','occultism:iesnium_block','minecraft:dragon_head','occultism:spirit_attuned_crystal','occultism:spirit_attuned_crystal','botania:rune_greed','botania:rune_wrath','botania:rune_envy','botania:rune_pride'],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid'
    )
})