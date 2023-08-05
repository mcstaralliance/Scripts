onEvent('item.tags', (event) => {
    var items = ['immersiveengineering:shovel_steel'];


    var tags = ['forge:tools', 'forge:tools/shovel'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_shovel$/)
            .add(/_aiot/)
            .add(/_paxel/)
            .add(/_excavator/)
    });
});
