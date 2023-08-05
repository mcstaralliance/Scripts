onEvent('entity_type.tags', (event) => {
    let entities = ['alexsmobs:dropbear'];
    event.get('ico:dropbears').add(entities);
});
