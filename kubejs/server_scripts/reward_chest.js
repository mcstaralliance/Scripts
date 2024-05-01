
const stackWithProbability = [
    newItem('mysticalagriculture:master_infusion_crystal', 0.001),
    newItem('chunkloaders:single_chunk_loader', 0.01),
    newItem(Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'), 0.02),
    newItem('create:creative_blaze_cake', 0.03),
    newItem('mekanism:mekasuit_helmet', 0.05),
    newItem('mekanism:mekasuit_bodyarmor', 0.06),
    newItem('mekanism:mekasuit_pants', 0.07),
    newItem('mekanism:mekasuit_boots', 0.08),
    newItem('tiab:time_in_a_bottle', 0.09),
    newItem('avaritia:infinity_catalyst', 0.1),
    newItem('8x avaritia:ultimate_stew', 0.15),
    newItem('16x avaritia:cosmic_meatballs', 0.16),
    newItem(Item.of('mekanism:ultimate_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}'), 0.20),
    newItem('ae2:item_storage_cell_256k', 0.20),
    newItem('2x kubejs:key', 0.21),
    newItem('8x kubejs:custom_chest', 0.25),
    newItem('fluxnetworks:gargantuan_flux_storage', 0.27),
    newItem('fluxnetworks:herculean_flux_storage', 0.30),
    newItem('64x minecraft:enchanted_golden_apple',0.35),
    newItem('32x minecraft:nether_star', 0.40),
    newItem('ars_nouveau:archmage_spell_book', 0.45),
    newItem('64x pipez:universal_pipe', 0.46),
    newItem('paimon:paimonmedal', 0.50),
    newItem('paimonfood:paimon_sword', 0.51),
    newItem('16x paimonfood:paimon', 0.52),
    newItem('64x create:experience_nugget', 1),
];

onEvent('block.right_click', event => {
    let {
       block,
       player,
       hand,
       level
    } = event;
    let stack = player.getHeldItem(hand);
    let randomNumber = level.minecraftLevel.random.nextDouble();
    if (stack == 'kubejs:key' && block == 'kubejs:custom_chest') {
        for (let item of stackWithProbability) {
            if (randomNumber < item.probability) {
                player.give(item.id);
                break
            }
        }
        block.set('minecraft:air')
        stack.count--;
    }
})

/**
 * @param {string} id 
 * @param {number} probability 
 */
function newItem(id, probability) {
    return {
        id : id,
        probability : probability
    }
}
