ServerEvents.recipes((event) => {
    //维度网络发生器
    event.recipes.occultism.ritual(
        'beyonddimensions:net_creater',
        ['occultism:storage_controller','occultism:storage_stabilizer_tier5','occultism:storage_stabilizer_tier5','occultism:storage_stabilizer_tier5','occultism:storage_stabilizer_tier5','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot'],
        'beyonddimensions:unstable_space_time_fragment',
        'occultism:contact_eldritch_spirit'
    )

    //等级1维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier1',['occultism:otherstone_pedestal','minecraft:copper_block','minecraft:blaze_powder','occultism:spirit_attuned_gem','botania:rune_of_earth','botania:rune_of_fire','botania:rune_of_air','botania:rune_of_water'],
        'occultism:book_of_binding_bound_foliot',
        'occultism:craft_foliot'
    )
    
    //等级2维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier2',['occultism:storage_stabilizer_tier1','#c:storage_blocks/silver','occultism:spirit_attuned_gem','occultism:spirit_attuned_gem','minecraft:ghast_tear','botania:rune_of_spring','botania:rune_of_summer','botania:rune_of_autumn','botania:rune_of_winter'],
        'occultism:book_of_binding_bound_djinni',
        'occultism:craft_djinni'
    )

    //等级3维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier3',['minecraft:gold_block','minecraft:nether_star','occultism:spirit_attuned_crystal','occultism:storage_stabilizer_tier2','botania:rune_of_lust','botania:rune_of_gluttony','botania:rune_of_envy'],
        'occultism:book_of_binding_bound_afrit',
        'occultism:craft_afrit'
    )

    //等级4维度存储稳定器
    event.recipes.occultism.ritual(
        'occultism:storage_stabilizer_tier4',['occultism:storage_stabilizer_tier3','occultism:iesnium_block','minecraft:dragon_head','occultism:spirit_attuned_crystal','occultism:spirit_attuned_crystal','botania:rune_of_greed','botania:rune_of_wrath','botania:rune_of_sloth','botania:rune_of_pride'],
        'occultism:book_of_binding_bound_marid',
        'occultism:craft_marid'
    )
})
