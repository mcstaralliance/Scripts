ServerEvents.recipes(event => {

    event.recipes.ars_nouveau.enchanting_apparatus(
        ['evilcraft:eternal_water', 'goety:haunted_mirror', 'goety:ectoplasm', 'goety:ectoplasm', 'goety:ectoplasm', 'goety:haunted_sapling'], // input items
        'minecraft:decorated_pot', // reagent
        'goety:haunted_jug', // output
        10000 // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    )   

    //维度魔源通道
    event.recipes.ars_nouveau.enchanting_apparatus(['ars_nouveau:source_jar','ars_nouveau:source_jar','beyonddimensions:space_time_stable_frame','beyonddimensions:space_time_stable_frame','beyonddimensions:space_time_stable_frame','beyonddimensions:space_time_bar','beyonddimensions:space_time_bar','beyonddimensions:space_time_bar'],
        'beyonddimensions:dimensional_connect_block',
        'beyonddimensions:ars_source_pathway',
        10000
    )
    // 空白符文
    event.recipes.ars_nouveau.enchanting_apparatus(['ars_nouveau:source_gem','ars_nouveau:source_gem','ars_nouveau:source_gem','ars_nouveau:source_gem'],
        'botania:livingrock',
        'starcraft:rune_blank',
        1000
    )
})
