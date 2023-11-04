onEvent('block.registry', event => {
    var array = new Array(55);
    for (count = 1; count <= 55; count++) {
        array[count] = count
        event.create('block_' + count).material('metal').hardness(1).lightLevel(1.0)
    }
})
