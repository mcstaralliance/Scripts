const stackWithProbability = [
    newItem('torcherino:torcherino', 0.02),
    newItem('botania:creative_pool', 0.03),
    newItem('chunkloaders:single_chunk_loader', 0.04),
    newItem('avaritia:infinity_chestplate', 0.07),
    newItem('avaritia:infinity_pants', 0.08),
    newItem('avaritia:infinity_boots', 0.09),
    newItem('avaritia:infinity_catalyst', 0.1),
    newItem('starcraft:paimon_miner_lite', 0.11),
    newItem('mekanism:mekasuit_helmet', 0.12),
    newItem('mekanism:mekasuit_bodyarmor', 0.13),
    newItem('mekanism:mekasuit_pants', 0.14),
    newItem('mekanism:mekasuit_boots', 0.15),
    newItem(
        Item.of(
            'botania:mana_tablet[botania:mana=500000,botania:creative_mana={}]'
        ),
        0.16
    ),
    newItem('2x avaritia:ultimate_stew', 0.17),
    newItem('16x avaritia:cosmic_meatballs', 0.18),
    newItem(
        Item.of(
            'mekanism:ultimate_energy_cube[mekanism:energy={energy_containers:[256000000L]}]'
        ),
        0.19
    ),
    newItem('ae2:item_storage_cell_256k', 0.2),
    newItem('4x kubejs:custom_chest', 0.25),
    newItem('fluxnetworks:gargantuan_flux_storage', 0.27),
    newItem('fluxnetworks:herculean_flux_storage', 0.3),
    newItem('32x minecraft:enchanted_golden_apple', 0.35),
    newItem('2x minecraft:nether_star', 0.4),
    newItem('ars_nouveau:archmage_spell_book', 0.45),
    newItem('64x minecraft:experience_bottle', 0.5)
];

BlockEvents.rightClicked('kubejs:custom_chest', (event) => {
    let block = event.getBlock();
    let player = event.getPlayer();
    let stack = event.getItem();

    let randomNumber = Math.random();

    if (stack.id === 'kubejs:key' && block.id === 'kubejs:custom_chest') {
        let rewarded = false;
        for (let item of stackWithProbability) {
            if (randomNumber < item.probability) {
                console.log(item.probability);
                player.give(item.id);
                rewarded = true;
                break;
            }
        }

        if (!rewarded) {
            let fallback =
                stackWithProbability[stackWithProbability.length - 1];
            player.give(fallback.id);
        }

        block.set('minecraft:air');
        stack.count--;
    }
});

/**
 * @param {string} id
 * @param {number} probability
 */
function newItem(id, probability) {
    return {
        id: id,
        probability: probability
    };
}
