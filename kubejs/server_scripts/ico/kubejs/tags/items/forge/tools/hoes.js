onEvent('item.tags', (event) => {

    var tags = ['forge:tools', 'forge:tools/hoe'];

    tags.forEach((tag) => {
        event.get(tag).add(/_hoe/).add(/_aiot/)
    });
});
