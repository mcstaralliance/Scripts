// priority: 0

const itemToBan = [
    'ars_nouveau:glyph_phantom_block',
    'ars_nouveau:glyph_place_block',
    'ars_nouveau:glyph_wall',
    'ars_nouveau:glyph_intangible',
    'industrialforegoing:enchantment_applicator',
    'ae2:matter_cannon',
    'mekanism:cardboard_box',
    'botania:terraform_rod',
    'botania:laputa_shard',
    'tconstruct:efln_ball',
    'evilcraft:lightning_bomb',
    'ifeu:weather_controller',
    'avaritia:infinity_shovel',
    'avaritia:infinity_chest',
    'forestry:mailbox',
    'forestry:trade_station',
    'industrialforegoing:infinity_drill',
    'industrialforegoing:infinity_nuke',
    'composite:material_creative_reinforced_book',
    'ars:nouveau_glyph_intangible',
    'mekanism:upgrade_anchor',
    'mekanism:robit',
    'mekanism:dimensional_stabilizer',
    'ars:nouveau_glyph_phantom_block',
    'ars:nouveau_glyph_place_block',
    'ars:nouveau_glyph_wall',
    'ifeu:blueprint',
    'industrialforegoing:material_stonework_factory',
    'ifeu:rule_controller',
    'ifeu:time_controller',
    'chunkloaders:basic_chunk_loader',
    'extendedae:plus_infinity_biginteger_cell',
    'chunkloaders:advanced_chunk_loader',
    'buildcraftrobotics:requester',
    'buildcraftlib:guide',
    'buildcraftbuilders:builder',
    'buildcraftbuilders:architect',
    'buildcraftbuilders:library',
    'buildcraftbuilders:replacer',
    'buildcraftbuilders:quarry',
    'buildcraftfactory:mining_well',
    'chunkloaders:ultimate_chunk_loader',
    'functionalstorage:creative_vending_upgrade',
    'buildcraftrobotics:zone_planner',
    'buildcraftbuilders:filler',
    'buildcraftfactory:flood_gate',
    'avaritia:infinity_umbrella',
    'cataclysm:laser_gatling',
    'extendedae:plus_entity_speed_ticker',
    'draconicevolution:disenchanter',
    'botania:floating_rannuncarpus_chibi',
    'botania:floating_rannuncarpus',
    'botania:rannuncarpus_chibi',
    'botania:rannuncarpus',
    'tconstruct:shuriken',
    'composite:material_duplichanted_book',
    'avaritia:infinity_clock',
    'ars:nouveau_glyph_break'
]

ItemEvents.tooltip(tooltip => {
    
    tooltip.add("starcraft:milk_bread","众所周知，甜品可任意无限量的吃")
    tooltip.add("ae2:flawless_budding_quartz", "星域世界赋予它能够被合成的特性")
    tooltip.add("kubejs:custom_chest", "可到点券商城购买奇珍之匙开箱，放置到地上使用奇珍之匙右键即可")
    tooltip.add("kubejs:custom_chest", "内含：加速火把，派蒙矿机，无尽装备，MekaSuit装备等稀有物品")
    tooltip.add("starcraft_commoncoin", "到主城系统商店购买")
    tooltip.add("starcraft_advancedcoin", "到主城系统商店购买")
    tooltip.add("starcraft_ultracoin", "到主城系统商店购买")
    tooltip.add("starcraft:simple_miner", "可消耗石头、电量与魔力随机挖掘出各种矿石，顺带一提这玩意其实有 27 个输出格")
    tooltip.add("starcraft:simple_miner", [Text.of("控制器方块换成纯净玻璃，用红石右键成型").red()])
    tooltip.add("enderio:powered_spawner","你需要找到一个破损的刷怪笼按u键以查看他的配方")
    for (let addTooltipForBan of itemToBan) {
        tooltip.addAdvanced(addTooltipForBan, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, [Text.of('已禁用物品').red()])
            } else {
                text.add(1, [Text.of('Be Permitted For STAFF').green()])
            }
        })}
})


