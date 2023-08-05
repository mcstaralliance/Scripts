onEvent('block.tags', (event) => {
    event.add('minecraft:leaves/coniferous', [
        'minecraft:spruce_leaves',
    ]);

    event.add('minecraft:leaves', [ /ars_nouveau:\w+_leaves/]);
});
