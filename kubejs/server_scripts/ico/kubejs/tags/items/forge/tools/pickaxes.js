onEvent('item.tags', (event) => {
    var items = [
        'botania:manasteel_pick',
        'botania:terra_pick',
        'immersiveengineering:pickaxe_steel',
        'mythicbotany:alfsteel_pick',
        'tconstruct:pickaxe'
    ];

    var exceptions = [
        'occultism:ritual_dummy/craft_infused_pickaxe'
    ];

    var tags = ['forge:tools', 'forge:tools/pickaxe'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_pickaxe/)
            .add(/_paxel/)
            .add(/_aiot/)
            .remove(exceptions);
    });
});
