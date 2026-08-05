ServerEvents.tags("block",(event) =>{
    event.add('createdieselgenerators:oil_deposit',["minecraft:air"]);
    event.remove('c:ores/iron','ad_astra:mars_iron_ore')
    event.remove('minecraft:iron_ores','ad_astra:mars_iron_ore')
})