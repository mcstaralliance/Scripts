ServerEvents.recipes(event => {
    //磷灰石粉
    event.recipes.mekanism.crushing('ftbmaterials:apatite_dust','#forge:gems/apatite')

    //肉末
    event.recipes.mekanism.crushing('4x starcraft:dust_meat','#forge:foods/raw_meat')

    //钙粉
    event.recipes.mekanism.crushing('starcraft:dust_calcium','minecraft:bone_meal')

    //硫粉
    event.recipes.mekanism.crushing('ftbmaterials:sulfur_dust','ftbmaterials:sulfur')
    event.recipes.mekanism.crushing('4x ftbmaterials:sulfur_dust','ftbmaterials:sulfur_stone_ore')

    //盐粉
    event.recipes.mekanism.crushing('ftbmaterials:salt_dust','ftbmaterials:salt')
})
