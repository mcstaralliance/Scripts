onEvent('item.tags', (event) => {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';
    var gems_coal = gems + '/coal';

    event.add(gems, [
        'rftoolsbase:dimensionalshard',
        'minecraft:ender_pearl',
        'minecraft:coal',
        'ars_nouveau:mana_gem',
        'thermal:bitumen',
    ]);

    event.add(gems + '/coal_coke', [
        'emendatusenigmatica:coke_gem',
        'thermal:coal_coke'
    ]);
    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get(gems_coal).add('minecraft:coal');
    event.get('forge:gems/dimensional').add('rftoolsbase:dimensionalshard');
    event.get('forge:gems/mana').add('ars_nouveau:mana_gem');
    event.get('forge:gems/charcoal').add('minecraft:charcoal');
    event.add('forge:gems/bitumen', ['thermal:bitumen']);
    event.get('forge:gems/mana_gem').remove('ars_nouveau:mana_gem');

});
