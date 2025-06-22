
const stackWithProbability = [
   /* 19周目的物品待添加
    newItem('starcraft:paimon_miner_lite', 0.01),
    newItem('chunkloaders:single_chunk_loader', 0.01),
    newItem(Item.of('avaritia:infinity_armor_chestplate', '{Damage:0}'), 0.02),
    newItem(Item.of('avaritia:infinity_armor_leggings', '{Damage:0}'), 0.02),
    newItem(Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'), 0.02),
    newItem('botania:creative_pool', 0.03),
    newItem('create:creative_blaze_cake', 0.03),
    newItem('mekanism:mekasuit_helmet', 0.05),
    newItem('mekanism:mekasuit_bodyarmor', 0.06),
    newItem('mekanism:mekasuit_pants', 0.07),
    newItem('mekanism:mekasuit_boots', 0.08),
    newItem(Item.of('avaritia:infinity_armor_boots', '{Damage:0}'), 0.09),
    newItem('avaritia:infinity_catalyst', 0.1),
    newItem('8x avaritia:ultimate_stew', 0.15),
    newItem('16x avaritia:cosmic_meatballs', 0.16),
    newItem(Item.of('mekanism:ultimate_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}'), 0.20),
    newItem('ae2:item_storage_cell_256k', 0.20),
    newItem('4x kubejs:custom_chest', 0.25),
    newItem('fluxnetworks:gargantuan_flux_storage', 0.27),
    newItem('fluxnetworks:herculean_flux_storage', 0.30),
    newItem('32x minecraft:enchanted_golden_apple',0.35),
    newItem('32x minecraft:nether_star', 0.40),
    newItem('ars_nouveau:archmage_spell_book', 0.45),
    newItem('paimon:paimonmedal', 0.50),
    newItem('paimonfood:paimon_sword', 0.51),
    newItem('16x paimonfood:paimon', 0.52),
    newItem('64x create:experience_nugget', 1),
    */
];

BlockEvents.rightClicked('custom_chest', event => {
    let block = event.getBlock();
    let player = event.getPlayer();
    let stack = event.getItem();

    let randomNumber = Math.random();
    
    if (stack == "kubejs:key" && block == "kubejs:custom_chest") {
        for (let item of stackWithProbability) {
            if (randomNumber < item.probability) {
                console.log(item.probability)
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