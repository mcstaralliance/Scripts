onEvent('item.tags', (event) => {
    var items = [
        'botania:flare_chakram',
        'botania:thorn_chakram',
        'immersiveengineering:chemthrower',
        'immersiveengineering:railgun',
        'immersiveengineering:revolver',
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
