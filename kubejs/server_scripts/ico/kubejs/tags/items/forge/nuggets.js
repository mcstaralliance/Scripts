onEvent('item.tags', (event) => {
    event.add('forge:nuggets', [
        'mythicbotany:alfsteel_nugget',
        'occultism:iesnium_nugget',
        'tconstruct:debris_nugget',
        'tconstruct:netherite_nugget'
    ]);

    event.get('forge:nuggets/tinkers_bronze').add('tconstruct:tinkers_bronze_nugget');
    event.get('forge:nuggets/alfsteel').add('mythicbotany:alfsteel_nugget');
});
