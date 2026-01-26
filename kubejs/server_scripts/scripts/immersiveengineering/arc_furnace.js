ServerEvents.recipes(event => {
    event.recipes.immersiveengineering.arc_furnace(
        ['ftbmaterials:stainless_steel_ingot'], 
        'ftbmaterials:stainless_steel_dust', 
        ['ftbmaterials:coal_coke_dust'], 
        'ftbmaterials:emerald_dust'
    )

    event.recipes.immersiveengineering.arc_furnace(
        ['draconicevolution:draconium_ingot'],
        'draconicevolution:draconium_dust',
        ['iceandfire:dragonsteel_fire_ingot','iceandfire:dragonsteel_ice_ingot','iceandfire:dragonsteel_lightning_ingot']
    )
})