onEvent('item.tags', (event) => {
    event
        .get('forge:dusts')
        .add('thermal:ender_pearl_dust')
        .add('#forge:dusts/flour');

    event.get('forge:dusts/lapis').add('mekanism:dust_lapis_lazuli');
    event.get('forge:dusts/netherite_scrap').add('mekanism:dust_netherite');

    event.get('forge:dusts').remove('minecraft:prismarine_shard');
    event.get('forge:dusts/prismarine').remove('minecraft:prismarine_shard');



    event.add('forge:dusts/flour', 'create:wheat_flour');
    event.add('forge:dusts/flour', 'pedestals:dustflour');

    // Temporary until EE adapts this change
    event.get('forge:chunks/arcane').remove('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/arcane').remove('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/arcane').remove('emendatusenigmatica:arcane_ore');
    event.get('forge:ores/arcane').remove('ars_nouveau:arcane_ore');
    event.get('forge:ores/mana_gem').remove('ars_nouveau:arcane_ore');
    event.get('forge:gems/arcane').remove('emendatusenigmatica:arcane_gem');
    event.get('forge:storage_blocks/arcane').remove('emendatusenigmatica:arcane_block');
    event.get('forge:storage_blocks/mana').add('emendatusenigmatica:arcane_block');
    event.get('forge:chunks/mana').add('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/mana').add('emendatusenigmatica:arcane_ore');
    event.get('forge:ores/mana').add('emendatusenigmatica:arcane_chunk');
    event.get('forge:gems/mana').add('emendatusenigmatica:arcane_gem');
    event.get('forge:ores/mana').add('ars_nouveau:arcane_ore');
});
