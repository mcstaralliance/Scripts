onEvent('item.tags', (event) => {
    var tags = ['forge:tools', 'forge:tools/axe'];
    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/_axe$/)
            .add(/_paxel/)
            .add(/_aiot/)
    });
});
