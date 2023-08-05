onEvent('item.tags', (event) => {
    var items = [
        'farmersdelight:flint_knife',
        'farmersdelight:iron_knife',
        'farmersdelight:diamond_knife',
        'farmersdelight:netherite_knife',
        'farmersdelight:golden_knife',
        'occultism:butcher_knife'
    ];


    var tags = [
        'forge:tools',
        'forge:tools/knives',
        'forge:tools/knife',
        'forge:fillet_knife',
        'farmersdelight:tools/knives',
        'farmersdelight:straw_harvesters'
    ];

    tags.forEach((tag) => {
        event.get(tag).add(items)
    });
});
