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
    'botania:laputa_shard',
    'tconstruct:efln_ball',
    'botania:rannuncarpus',
    'botania:rannuncarpus_chibi'
]

ItemEvents.tooltip(tooltip => {
    
    tooltip.add("starcraft:milk_bread","众所周知，甜品可任意无限量的吃")
    tooltip.add("ae2:flawless_budding_quartz", "星域世界赋予它能够被合成的特性")
    tooltip.add("kubejs:custom_chest", "可到点券商城购买奇珍之匙开箱，放置到地上使用奇珍之匙右键即可")
    tooltip.add("kubejs:custom_chest", "内含：加速火把，派蒙矿机，无尽装备，MekaSuit装备等稀有物品")
    tooltip.add("starcraft_commoncoin", "到主城系统商店购买")
    tooltip.add("starcraft_advancedcoin", "到主城系统商店购买")
    tooltip.add("starcraft_ultracoin", "到主城系统商店购买")

    for (let addTooltipForBan of itemToBan) {
        tooltip.addAdvanced(addTooltipForBan, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, [Text.of('已禁用物品').red()])
            } else {
                text.add(1, [Text.of('Be Permitted For STAFF').green()])
            }
        })}
})


