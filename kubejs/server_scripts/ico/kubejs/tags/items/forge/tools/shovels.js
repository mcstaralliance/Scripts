onEvent('item.tags', (event) => {


    var tags = ['forge:tools', 'forge:tools/shovel'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/_shovel$/)
            .add(/_aiot/)
            .add(/_paxel/)
            .add(/_excavator/)
    });
});
