onEvent('item.registry', event => {
    event.create("nether_passport").rarity(RARITY_EPIC).maxStackSize(1)
    event.create("permanent_nether_passport").rarity(RARITY_EPIC).glow(true).maxStackSize(1)
    event.create("end_portal_frame_tool").rarity("cosmic").glow(true)
})