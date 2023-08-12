onEvent('item.tags', (event) => {
    var storageBlocks = 'forge:storage_blocks';
    event.add(storageBlocks, [
        'ars_nouveau:mana_gem_block',
        'minecraft:glowstone',
        'mythicbotany:alfsteel_block',
        'occultism:iesnium_block',
    ]);

    event.get(storageBlocks + '/glowstone').add('minecraft:glowstone');
    event.get(storageBlocks + '/mana').add('ars_nouveau:mana_gem_block');

    event.add(storageBlocks + '/tinkers_bronze', ['tconstruct:tinkers_bronze_block']);
    event.add(storageBlocks + '/alfsteel', ['mythicbotany:alfsteel_block']);

    event.add(storageBlocks + '/bronze', ['#chisel:metals/bronze']);
    event.add(storageBlocks + '/emerald', ['#chisel:emerald']);
    event.add(storageBlocks + '/glowstone', ['#chisel:glowstone']);
    event.add(storageBlocks + '/redstone', ['#chisel:redstone']);
    event.add(storageBlocks + '/coal', ['#chisel:coal']);
    event.add(storageBlocks + '/glowstone', ['#chipped:glowstone']);

});
