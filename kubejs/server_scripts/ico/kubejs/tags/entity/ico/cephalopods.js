onEvent('entity_type.tags', (event) => {
    let entities = [
        'minecraft:squid',
        'alexsmobs:mimic_octopus'
    ];
    event.get('ico:cephalopods').add(entities);
});
