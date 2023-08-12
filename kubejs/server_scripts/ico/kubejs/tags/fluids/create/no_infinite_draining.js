onEvent('fluid.tags', (event) => {
    let draining_whitelist = [
        'create:chocolate',
        'industrialforegoing:latex',
        'industrialforegoing:sewage',
        'industrialforegoing:sludge',
        'minecraft:lava',
        'minecraft:water',
        'tconstruct:blood',
        'tconstruct:earth_slime',
        'tconstruct:ender_slime',
        'tconstruct:sky_slime',
        'thermal:crude_oil',
    ];

    event.get('create:no_infinite_draining').add(/.*/).remove(draining_whitelist);

    event.get('create:allow_infinite_draining').add(draining_whitelist);
});
