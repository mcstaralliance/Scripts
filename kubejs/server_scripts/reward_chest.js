
const stackWithProbability = [
    newItem('minecraft:stone', 1),
    newItem('minecraft:stick', 0.5)
];

onEvent('block.right_click', event => {
    let {
       block,
       player,
       hand,
       level
    } = event;
    let stack = player.getHeldItem(hand);
    let randomNumber = level.minecraftLevel.random.nextDouble();
    if (stack == 'kubejs:key' && block == 'kubejs:custom_chest') {
        for (let item of stackWithProbability) {
            if (randomNumber < item.probability) {
                player.give(item.id);
            }
        }
        block.set('minecraft:air')
        stack.count--;
    }
})

/**
 * @param {string} id 
 * @param {number} probability 
 */
function newItem(id, probability) {
    return {
        id : id,
        probability : probability
    }
}