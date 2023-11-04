onEvent('item.registry', event => {
    var array = new Array(3200);
    for (count = 1; count <= 3200; count++) {
        array[count] = count
        event.create('item_' + count)
    }
})
