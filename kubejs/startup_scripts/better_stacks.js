onEvent('item.modification', (event) => {
    const increaseStackSize = [
        'alexsmobs:emu_egg',

        'environmental:duck_egg',

        /industrialforegoing:efficiency_addon/,
        /industrialforegoing:speed_addon/,
        /industrialforegoing:processing_addon/,
        /industrialforegoing:range_addon/,

        'minecraft:ender_pearl',
        'minecraft:bucket',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:egg',

        'rftoolsbase:infused_enderpearl',
        'rftoolsbase:infused_diamond',

        //signs
        /(minecraft|environmental):\w+_sign/
    ];

    event.modify(increaseStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
