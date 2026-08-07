ServerEvents.tags("item",(event) =>{
    event.add('c:raw_materials/copper',['ftbmaterials:copper_cluster']);
    event.add('minecraft:diamond_ores',['ftbmaterials:diamond_cluster',]);
    event.add('c:raw_materials/gold',['ftbmaterials:gold_cluster']);
    event.add('c:raw_materials/iron',['ftbmaterials:iron_cluster']);
    event.add('minecraft:lapis_ores',['ftbmaterials:lapis_lazuli_cluster']);
    event.add('minecraft:emerald_ores',['ftbmaterials:emerald_cluster']);
    event.add('c:plastics',['pneumaticcraft:plastic']);
    event.add('minecraft:redstone_ores',['ftbmaterials:redstone_cluster']),
    event.add('pneumaticcraft:plastic_sheets',['industrialforegoing:plastic']);
    event.remove('c:ores/iron',['ad_astra:mars_iron_ore']);
    event.remove('minecraft:iron_ores',['ad_astra:mars_iron_ore']);
    event.remove('c:plates/obsidian',['ftbmaterials:obsidian_plate'])
})