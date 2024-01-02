// priority: 1
/**调用指定函数`count`次，首个参数为从1开始的次数 */
function repeat(count, handler, thisArg) {
    for (let i = 1; i <= count; i++)
        handler.call(thisArg, i, count);
}

onEvent('item.registry', event => {
    repeat(3200, (i) => event.create('item_' + i));
})

onEvent('block.registry', event => {
    repeat(55, (i) => event.create('block_' + i).material('stone').hardness(2).lightLevel(1.0).requiresTool(true));
})

onEvent('block.registry', event => {
    event.create('machine_frame_advanced_processing').material('metal').hardness(1).lightLevel(1.0)
    event.create('netherstar_controller_processing').material('metal').hardness(1).lightLevel(1.0)
    event.create('block_11_processing').material('metal').hardness(1).lightLevel(1.0)
})
