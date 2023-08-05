onEvent('item.tags', (event) => {
    event
        .get('ico:candle_materials')
        .add('minecraft:honeycomb')
        .add('occultism:tallow');
});
