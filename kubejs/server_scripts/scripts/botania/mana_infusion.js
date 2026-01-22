ServerEvents.recipes(event => {
    //魔力钢 
    event.recipes.botania.mana_infusion('botania:manasteel_ingot','tconstruct:slimesteel_ingot',3000)
    event.recipes.botania.mana_infusion('2x botania:manasteel_ingot','#forge:ingots/steel',3000)

    //魔力钢块
    event.recipes.botania.mana_infusion('botania:manasteel_block','tconstruct:slimesteel_block',27000)
    event.recipes.botania.mana_infusion('2x botania:manasteel_block','#forge:storage_blocks/steel',27000)
})