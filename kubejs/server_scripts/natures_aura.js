ServerEvents.recipes((event) => {
    const { naturesaura } = event.recipes
    naturesaura.animal_spawner('allay', ['naturesaura:birth_spirit', 'actuallyadditions:empowered_palis_crystal', '#forge:feathers'], 300)
    naturesaura.animal_spawner('bee', ['naturesaura:birth_spirit', 'minecraft:sugar', '#minecraft:flowers'], 100)
})