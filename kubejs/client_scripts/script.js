// priority: 0

// Visit the wiki for more info - https://kubejs.com/
const itemToBan = [
    'ae2:entropy_manipulator',
    'draconicevolution:celestial_manipulator',
    'mekanism:digital_miner',
    'ars_nouveau:glyph_lightning',
    'evilcraft:lightning_grenade',
    'evilcraft:mace_of_destruction',
    'create:schematicannon',
    'ae2:spatial_pylon',
    'ae2:tiny_tnt',
    'evilcraft:lightning_bomb',
    'thermal:lightning_charge',
    'thermal:ice_charge',
    'enderio:staff_of_travelling',
    'enderio:staff_of_levity',
    'ars_nouveau:glyph_ender_inventory',
    'create:schematic_table',
    'ae2:matter_cannon',
    'ars_nouveau:glyph_explosion',
    'industrialforegoing:infinity_nuke',
    'immersiveengineering:chemthrower',
    'botania:spawner_mover',
    'botania:rannuncarpus',
    'botania:rannuncarpus_chibi',
    'botania:floating_rannuncarpus',
    'botania:floating_rannuncarpus_chibi',
    'naturesaura:placer',
    'botania:starfield',
    'ars_nouveau:glyph_flare',
    'mekanism:cardboard_box',
    'chunkloaders:advanced_chunk_loader',
    'chunkloaders:basic_chunk_loader',
    'chunkloaders:single_chunk_loader',
    'chunkloaders:ultimate_chunk_loader',
    'create:mechanical_drill',
    'create:mechanical_plough'
]

ItemEvents.tooltip(tooltip => {
    for (let addTooltipForBan of itemToBan) {
        tooltip.addAdvanced(addTooltipForBan, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, [Text.of('已禁用物品').red()])
            } else {
                text.add(1, [Text.of('Be Permitted For STAFF').green()])
            }
        })}
})
