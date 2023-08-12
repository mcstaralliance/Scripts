onEvent('item.tags', (event) => {

    var tags = ['forge:storage', 'forge:storage/energy'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/energy_cell/)
            .add(/energy_cube/)
            .add(/induction/)
            .add(/battery/)
            .add(/rftoolspower:cell/)
            .add(/rftoolspower:dimensionalcell/);
    });
});
