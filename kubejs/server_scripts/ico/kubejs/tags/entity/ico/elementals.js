onEvent('entity_type.tags', (event) => {
    let entities = ['minecraft:blaze', 'thermal:blizz', 'thermal:blitz', 'thermal:basalz'];
    event.get('ico:elementals').add(entities);

    event.get('ico:elementals/fire').add('minecraft:blaze');
    event.get('ico:elementals/water').add('thermal:blizz');
    event.get('ico:elementals/air').add('thermal:blitz');
    event.get('ico:elementals/earth').add('thermal:basalz');
});
