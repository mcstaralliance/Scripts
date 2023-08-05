onEvent('entity_type.tags', (event) => {
    let entities = [ 'minecraft:zombified_piglin'];
    event.get('forge:zombies').add(entities);
});
