onEvent('item.registry', event => {
    event.create('fragment_of_patience').rarity(RARITY_EPIC).glow(true)
    event.create('starcraft_core').rarity(RARITY_EPIC).glow(true)
    event.create('patience_reward').rarity(RARITY_RARE).glow(true)
    event.create('key').rarity(RARITY_UNCOMMON)
})