onEvent('item.tags', (event) => {
    event.add('forge:fruits', [
        'ars_nouveau:mana_berry',
    ]);

    event.add('forge:fruits/mana_berry', ['ars_nouveau:mana_berry']);
});
