onEvent('entity_type.tags', (event) => {
    let entities = ['botania:doppleganger'];
    event.get('ico:gaia_guardian').add(entities);
});
