onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        event.add(`chisel:${stoneType.name}`, [`#ico:stonecuttables/${stoneType.name}`]);
    });
});
