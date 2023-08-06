onEvent('item.tags', (event) => {
    var items = [
        'immersiveengineering:manual',
        'botania:lexicon',
        'rftoolsbase:manual',
        'ars_nouveau:worn_notebook',
        'alexsmobs:animal_dictionary',
        'occultism:dictionary_of_spirits'
    ];
    event.get('forge:manuals').add(items);
});
