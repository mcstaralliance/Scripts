onEvent('item.tags', (event) => {
    const small_meats = [
            'farmersdelight:mutton_chops',
            'farmersdelight:chicken_cuts',
            'farmersdelight:bacon',
            'quark:frog_leg',
        ],
        medium_meats = [ 'minecraft:chicken', 'minecraft:rabbit'],
        large_meats = [
            'alexsmobs:kangaroo_meat',
            'minecraft:beef',
            'minecraft:mutton',
            'minecraft:porkchop',
            'alexsmobs:moose_ribs'
        ];

    event.get('ico:meats').add(small_meats).add(medium_meats).add(large_meats);

    event.get('ico:meats/small').add(small_meats);
    event.get('ico:meats/medium').add(medium_meats);
    event.get('ico:meats/large').add(large_meats);
});
