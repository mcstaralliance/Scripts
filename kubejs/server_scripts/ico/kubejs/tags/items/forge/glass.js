onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event
            .get(`forge:glass/${color}`)
            .add([
                `quark:${color}_framed_glass`
            ]);

        event.get('forge:glass').remove([`#chipped:${color}_stained_glass_pane`]);
    });
});
