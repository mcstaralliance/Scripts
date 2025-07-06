// priority: 1

const itemToBan = [
    'create:schematicannon',
    'torcherino:torcherino',
    'torcherino:compressed_torcherino',
    'torcherino:double_compressed_torcherino',
    'ars_nouveau:glyph_phantom_block',
    'ars_nouveau:glyph_place_block',
    'ars_nouveau:glyph_wall',
    'ars_nouveau:glyph_intangible',
    'mekanism:robit',
    'mekanism:upgrade_anchor',
    'pneumaticcraft:chunkloader_upgrade',
    'evilcraft:lightning_bomb',
    'industrialforegoing:enchantment_applicator',
    'ae2:matter_cannon',
    'twilightforest:uncrafting_table',
    'ifeu:time_controller',
    'ifeu:rule_controller',
    'create:mechanical_plough',
    'create:mechanical_drill',
    'create:mechanical_roller'
]

const idToRemove = [
    'botania:runic_altar/air',
    'botania:runic_altar/earth',
    'botania:runic_altar/fire',
    'botania:runic_altar/water',
    'botania:runic_altar/mana',
    'evilcraft:crafting/weather_container_lightning',
    'evilcraft:crafting/weather_container_rain'
]

const itemToRemove = [
    'create:cogwheel',
    'create:large_cogwheel',
    'cagedmobs:mob_cage',
    'cagedmobs:hopping_mob_cage',
    'beyonddimensions:net_creater',
    'beyonddimensions:net_control',
    'beyonddimensions:net_interface',
    'beyonddimensions:net_pathway',
    'create:sweet_roll',
    'botania:runic_altar',
    'modularrouters:modular_router',
    'mekanism:steel_casing',
    'cookingforblockheads:sink',
    'evilcraft:eternal_water',
    'thermal:device_rock_gen',
    'pipez:fluid_pipe',
    'pipez:item_pipe',
    'mekanism:basic_mechanical_pipe',
    'mekanism:basic_logistical_transporter',
    'mekanism:basic_universal_cable',
    'mekanism:basic_pressurized_tube',
    'thermal:machine_frame',
    Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
    Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
    'naturesaura:chunk_loader',
    'chunkloaders:single_chunk_loader',
    'chunkloaders:basic_chunk_loader',
    'chunkloaders:advanced_chunk_loader',
    'chunkloaders:ultimate_chunk_loader'
]


ServerEvents.recipes(event => {
    console.log("Remove items is running")

    for (let toRemove of itemToRemove){
        event.remove({ output: toRemove })
    }
    for (let toIdRemove of idToRemove){
        event.remove({ id: toIdRemove })
    }
    for (let toBan of itemToBan){
        event.remove({ output: toBan })
    }

    console.log("Remove items is done")
})