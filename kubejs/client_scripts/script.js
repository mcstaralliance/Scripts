// priority: 0

const itemsToBan = [
    'mekanism:dimensional_stabilizer',
    'mekanism:upgrade_anchor',
    'mekanism:cardboard_box',
    'mekanismgenerators:turbine_casing',
    'mekanismgenerators:turbine_valve',
    'mekanismgenerators:turbine_blade',
    'mekanismgenerators:turbine_vent'
]

onEvent('item.tooltip', tooltip => {
	let corundumTooltip = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
	for (let i = 0; i < corundumTooltip.length; i++) {
		tooltip.addAdvanced("quark:" + corundumTooltip[i] + "_corundum", (item, advanced, text) => {
			text.add(1, Text.of('生长于 y < 24 的地方').color(0xc95ec4))
			text.add(2, Text.of('使用注液器将水注入使其生长').color(0xc95ec4))
		  })
	}
	tooltip.add('kubejs:nether_passport', Text.of('每前往一次下界，都需要消耗一张通行证').red())
})

onEvent('item.tooltip', tooltip => {
	for (let BanItem of itemsToBan) {
		tooltip.addAdvanced(BanItem, (item, advanced, text) => {
			text.add(1, Text.of('已禁用物品').red())
		})
	}
})