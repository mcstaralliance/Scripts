const stackWithProbability = [
    newItem('torcherino:torcherino', 0.02),
    newItem('botania:creative_mana_pool', 0.03),
    newItem('chunkloaders:single_chunk_loader', 0.04),
    newItem('avaritia:infinity_chestplate', 0.07),
    newItem('avaritia:infinity_pants', 0.08),
    newItem('avaritia:infinity_boots', 0.09),
    newItem('avaritia:infinity_catalyst', 0.1),
    newItem('starcraft:paimon_cyclone_miner', 0.11),
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
    let { block, player, item: stack } = event;
    if (stack.id !== 'kubejs:key' || block.id !== 'kubejs:custom_chest') return;

    let randomNumber = Math.random();

    let rewarded = false;
    for (let item of stackWithProbability) {
        if (randomNumber < item.probability) {
            console.log(item.probability);
            giveAndNotify(item.id, player, block);
            rewarded = true;
            break;
        }
    }

    if (!rewarded) {
        let fallback = stackWithProbability[stackWithProbability.length - 1];
        giveAndNotify(fallback.id, player, block);
    }

    block.set('minecraft:air');
    stack.count--;
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

/**
 * @param {string} item
 * @param {import("@package/net/minecraft/world/entity/player").$Player} player
 * @param {import("@package/dev/latvian/mods/kubejs/level").$LevelBlock} block
 */
function giveAndNotify(item, player, block) {
    let stack = Item.of(item);
    let message = Text.of('✦ 你获得了')
        .append(stack.getHoverName())
        ['withStyle(java.util.function.UnaryOperator)'](stack.getRarity().getStyleModifier());

    player.give(stack);
    player.setStatusMessage(message);
    player.swing();
    player.playNotifySound('minecraft:entity.experience_orb.pickup', 'players', 1, 1);

    let { x, y, z } = block.pos;
    // prettier-ignore
    player.level.spawnParticles(
        'minecraft:totem_of_undying', true,
        x + 0.5, y + 1.0, z + 0.5,
        0.5, 0.5, 0.5,
        10, 0.1
    );
}
