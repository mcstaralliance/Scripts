onEvent('block.tags', (event) => {
    event.add('forge:ores', [
        'minecraft:ancient_debris',
        'occultism:iesnium_ore',
    ]);

    event.add('forge:ores/dimensional', [
        'rftoolsbase:dimensionalshard_overworld',
        'rftoolsbase:dimensionalshard_nether',
        'rftoolsbase:dimensionalshard_end'
    ]);

    event.get('forge:ores/nether/gold').add('minecraft:nether_gold_ore');
    event.get('forge:ores/netherite_scrap').remove('minecraft:ancient_debris');
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');

    event.get('forge:ores/starmetal').add('astralsorcery:starmetal_ore');
    event.get('forge:ores/aquamarine').add('astralsorcery:aquamarine_sand_ore');
});
