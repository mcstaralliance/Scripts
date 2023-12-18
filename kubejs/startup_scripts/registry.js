/**调用指定函数`count`次，首个参数为从1开始的次数 */
function repeat(count, handler, thisArg) {
    for (let i = 1; i <= count; i++)
        handler.call(thisArg, i, count);
}

onEvent('item.registry', event => {
    repeat(3200, (i) => event.create('item_' + i));
})

onEvent('block.registry', event => {
    repeat(55, (i) => event.create('block_' + i).material('metal').hardness(1).lightLevel(1.0));
})
