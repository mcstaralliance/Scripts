onEvent('item.tags', (event) => {
    var items = [
        'industrialforegoing:infinity_drill',
        'industrialforegoing:infinity_saw',
        'mekanism:atomic_disassembler',
        'mekanism:meka_tool',
        'thermal:flux_drill',
        'thermal:flux_saw'
    ];
    var tags = ['forge:tools', 'forge:tools/multi-tool'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_paxel/)
            .add(/_aiot/);
    });
});
