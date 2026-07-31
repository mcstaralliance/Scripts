
const itemCapability = MBDRegistries.RECIPE_CAPABILITIES.get("item");
const oreWithChance = {
    "minecraft:coal_ore": 0.07,
    "minecraft:iron_ore": 0.1,
    "minecraft:copper_ore": 0.05,
    "minecraft:gold_ore": 0.04,
    "minecraft:redstone_ore": 0.05,
    "minecraft:emerald_ore": 0.02,
    "minecraft:lapis_ore": 0.03,
    "minecraft:diamond_ore": 0.02,
    "minecraft:nether_quartz_ore": 0.04,
    "ftbmaterials:aluminum_stone_ore": 0.04,
    "ftbmaterials:apatite_stone_ore": 0.02,
    "ftbmaterials:sulfur_stone_ore": 0.02,
    "ftbmaterials:tin_stone_ore": 0.04,
    "ftbmaterials:zinc_stone_ore": 0.04,
    "ftbmaterials:fluorite_stone_ore": 0.02,
    "ftbmaterials:nickel_stone_ore": 0.04,
    "ftbmaterials:silver_stone_ore": 0.04,
    "ftbmaterials:uranium_stone_ore": 0.02,
    "ftbmaterials:osmium_stone_ore": 0.05,
    "ftbmaterials:antimony_stone_ore": 0.03,
    "ftbmaterials:platinum_stone_ore": 0.03,
    "ftbmaterials:salt_stone_ore": 0.06,
    "ftbmaterials:lead_stone_ore": 0.03,
    "ftbmaterials:dimensional_shard_stone_ore": 0.03,
    "evilcraft:dark_ore": 0.03,
    "ftbmaterials:niter_stone_ore": 0.03,
    "draconicevolution:overworld_draconium_ore": 0.02
}

ServerEvents.recipes(event => {
    let recipe = event.recipes.starcraft.simple_miner_recipe()
        .inputItems("minecraft:stone")
        .inputFE(500)
        .inputMana(100)
        .duration(200)
        
    for (let [ore, chance] of Object.entries(oreWithChance)) {
        recipe = recipe.chance(chance, builder => builder.outputItems(ore))
    }
    recipe.id('starcraft:simple_miner_ore')
})

MBDMachineEvents.onBeforeRecipeModify("starcraft:simple_miner", handler => {
    let event = handler.event
    let recipe = event.recipe
    let random = Math.random()
    let cumulativeRatio = 0

    for (let outerContent of recipe.getOutputContents(itemCapability)) {
        cumulativeRatio += outerContent.chance
        if (random <= cumulativeRatio) {
            let builder = recipe.toBuilder()
            builder.removeOutputs(itemCapability).outputs(itemCapability, outerContent.content)
            event.setRecipe(builder.buildMBDRecipe())
            break
        }
    }
})
