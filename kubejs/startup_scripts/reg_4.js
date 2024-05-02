onEvent('block.registry', event => {
    event.create('paimon_miner_pro').unbreakable().noDrops()
    event.create('paimon_miner_lite').unbreakable().noDrops()
    event.create('trophy').unbreakable()
    event.create('custom_chest')
})
