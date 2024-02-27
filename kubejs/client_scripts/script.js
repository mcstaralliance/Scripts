// priority: 0
onEvent('item.tooltip', tooltip => {
	let corundumTooltip = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
	for (let i = 0; i < corundumTooltip.length; i++) {
		tooltip.addAdvanced("quark:" + corundumTooltip[i] + "_corundum", (item, advanced, text) => {
			text.add(1, Text.of('生长于 y < 24 的地方').color(0xc95ec4))
			text.add(2, Text.of('使用注液器将水注入使其生长').color(0xc95ec4))
		  })
	}
})