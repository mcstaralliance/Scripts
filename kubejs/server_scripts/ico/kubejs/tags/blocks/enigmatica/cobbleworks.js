onEvent('block.tags', (event) => {
    event.get('ico:cobbleworks/stone').add(generatableStone);
    event.get('ico:cobbleworks/cobblestone').add(generatableCobblestone);
    event.get('ico:cobbleworks/basalt').add(generatableBasalt);
});
