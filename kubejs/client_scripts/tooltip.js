// priority: 0

const itemToBan = [
    'create:schematicannon',
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
    'create:mechanical_roller',
    'mekanism:cardboard_box',
    'botania:terraform_rod',
    'ifeu:blueprint',
    'beachparty:message_in_a_bottle',
    'botania:laputa_shard',
    'tconstruct:efln_ball',
    'botania:rannuncarpus',
    'botania:rannuncarpus_chibi',
    'industrialforegoing:material_stonework_factory'
]

ItemEvents.tooltip(tooltip => {
    
    tooltip.add("starcraft:milk_bread","众所周知，甜品可任意无限量的吃")
    tooltip.add('occultism:tallow',['也许你可以选择使用转化粉将暮色的生物变成原版的生物'])

    for (let addTooltipForBan of itemToBan) {
        tooltip.addAdvanced(addTooltipForBan, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, [Text.of('已禁用物品').red()])
            } else {
                text.add(1, [Text.of('Be Permitted For STAFF').green()])
            }
        })}
})

// JEI 
JEIEvents.information(event => {
    event.addItem('xycraft_world:kivi', ['按住 w 进行思索'])
    event.addItem('minecraft:beehive', ['如果橡树树苗、白桦树苗或樱花树苗水平2格范围内存在花、红树胎生苗、盛开的杜鹃花丛或盛开的杜鹃树叶，则该树苗长成的树会有 5% 的概率悬挂着蜂巢。'])
    event.addItem('ae2:mysterious_cube', ['按住 w 进行思索'])
    event.addItem('pneumaticcraft:ingot_iron_compressed', ['可以使用迷你 TNT 进行爆炸获取'])
    event.addItem('pneumaticcraft:compressed_iron_block', ['可以使用迷你 TNT 进行爆炸获取'])
})
