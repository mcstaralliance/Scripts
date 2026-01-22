ServerEvents.recipes(event => {
    //粘钢锭
    event.recipes.enderio.alloy_smelting(Item.of('tconstruct:slimesteel_ingot',2),
    [Item.of('tconstruct:sky_slime_ball'),Item.of('tconstruct:seared_brick'),Item.of('minecraft:iron_ingot')],
    5000,
    0)
    
    //焊锡
    event.recipes.enderio.alloy_smelting(Item.of('starcraft:soldering_alloy',10),
    [Item.of('ftbmaterials:tin_ingot',9),Item.of('ftbmaterials:antimony_ingot')],
    5000,
    0)
})