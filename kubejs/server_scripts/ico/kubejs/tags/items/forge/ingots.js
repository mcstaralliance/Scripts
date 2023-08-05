onEvent('item.tags', (event) => {
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');

    event.add('forge:ingots', [
        'astralsorcery:starmetal_ingot',
        'botania:gaia_ingot',
        'create:andesite_alloy',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:ingot_hop_graphite',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_uranium',
        'industrialforegoing:pink_slime_ingot',
        'minecraft:netherite_scrap',
        'mythicbotany:alfsteel_ingot',
        'occultism:iesnium_ingot',
    ]);
    event.get('forge:ingots/copper').add('immersiveengineering:ingot_copper');
    event.get('forge:ingots/alfsteel').add('mythicbotany:alfsteel_ingot');
    event.get('forge:ingots/pink_slime').add('industrialforegoing:pink_slime_ingot');
    event.get('forge:ingots/gaia').add('botania:gaia_ingot');
    event.get('forge:ingots/gaia_spirit').add('botania:gaia_ingot');
    event.add('forge:ingots/starmetal', ['astralsorcery:starmetal_ingot']);
    event.add('forge:ingots/andesite_alloy', ['create:andesite_alloy']);
    event.get('forge:ingots/tinkers_bronze').add('tconstruct:tinkers_bronze_ingot');
});
