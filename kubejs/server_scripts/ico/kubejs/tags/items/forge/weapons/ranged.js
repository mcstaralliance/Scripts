onEvent('item.tags', (event) => {
    var items = [
        'botania:flare_chakram',
        'botania:thorn_chakram',
        'industrialforegoing:infinity_trident',
        'mekanism:flamethrower',
        'minecraft:bow',
        'minecraft:crossbow',
        'minecraft:trident',
        'alexsmobs:blood_sprayer',
    ];

    var tags = ['forge:weapons', 'forge:weapons/ranged'];

    tags.forEach((tag) => {
        event.get(tag).add(items).add(/_bow$/);
    });
});
