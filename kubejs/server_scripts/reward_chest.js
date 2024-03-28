onEvent('lootjs', event => {
    event
        .addLootTableModifier('kubejs:chests/reward_chest')
        .addLoot('minecraft:stone');
})

onEvent('block.right_click', event => {
    let {
       block,
       player,
       hand
    } = event;
    let stack = player.getHeldItem(hand);
    if (stack == 'minecraft:cobblestone' && block == 'minecraft:chest') {
        let data = block.entityData;
        data.putString('LootTable', 'kubejs:chests/reward_chest');
        block.setEntityData(data);
        stack.count--;
    }
})
