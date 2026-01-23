ServerEvents.recipes(event => {
    
    // 黑曜石钢锭
    event.recipes.mekanism.metallurgic_infusing(
        'composite_material:dungeon_steel_ingot',
        'composite_material:allay_steel_ingot',
        '80x mekanism:refined_obsidian'
    )

    // 富氨聚合物
    event.recipes.mekanism.metallurgic_infusing(
        'starcraft:ammonia_rich_mixture',
        'mekanism:bio_fuel',
        '10x mekanism:fungi'
    )

    
})