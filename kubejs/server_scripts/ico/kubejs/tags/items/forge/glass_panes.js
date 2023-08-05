onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event
            .get(`forge:glass_panes/${color}`)
            .add([
                `#chipped:${color}_stained_glass_pane`,
                `quark:${color}_framed_glass_pane`
            ]);
    });

    event
        .get('forge:glass_panes/colorless')
        .add([
            'create:tiled_glass_pane',
            'create:framed_glass_pane',
            'create:horizontal_framed_glass_pane',
            'create:vertical_framed_glass_pane'
        ]);
});
