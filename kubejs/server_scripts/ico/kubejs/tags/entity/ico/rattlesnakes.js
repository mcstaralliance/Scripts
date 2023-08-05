onEvent('entity_type.tags', (event) => {
    let entities = ['alexsmobs:rattlesnake'];
    event.get('ico:rattlesnakes').add(entities);
});
