// priority: 0

const itemToBan = [
    'ars_nouveau:glyph_phantom_block',
    'ars_nouveau:glyph_place_block',
    'ars_nouveau:glyph_wall',
    'ars_nouveau:glyph_intangible',
    'mekanism:robit',
    'mekanism:upgrade_anchor',
    'evilcraft:lightning_bomb',
    'industrialforegoing:enchantment_applicator',
    'ae2:matter_cannon',
    'mekanism:cardboard_box',
    'botania:terraform_rod',
    'beachparty:message_in_a_bottle',
    'botania:laputa_shard',
    'tconstruct:efln_ball',
    'botania:rannuncarpus',
    'botania:rannuncarpus_chibi'
]

ItemEvents.tooltip(tooltip => {
    
    tooltip.add("starcraft:milk_bread","众所周知，甜品可任意无限量的吃")

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
    event.addItem('minecraft:beehive', ['如果橡树树苗、白桦树苗或樱花树苗水平2格范围内存在花、红树胎生苗、盛开的杜鹃花丛或盛开的杜鹃树叶，则该树苗长成的树会有 5% 的概率悬挂着蜂巢。'])
})
