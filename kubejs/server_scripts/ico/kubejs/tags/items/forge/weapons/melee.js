onEvent('item.tags', (event) => {
    var items = [
        'botania:ender_dagger',
        'industrialforegoing:infinity_hammer',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
    ];


    var tags = ['forge:weapons', 'forge:weapons/melee'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_sword/)
            .add(/_paxel/)
            .add(/_aiot/)
    });
});
