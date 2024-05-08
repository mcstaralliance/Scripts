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
	tooltip.add('minecraft:end_portal_frame', Text.of('使用末地传送门工具右击末地传送门框架，可以将其转换成能被挖掘的方块').aqua())
	tooltip.add('kubejs:fragment_of_patience', Text.of('§c *重要提示：动力锯将始终将碎片设为第 1 阶段，请确保锯只被使用一次！* \n §b涉及 7 个加工步骤和 7 个机器，每次世界加载时，加工步骤的顺序都是随机的。第一步始终是切割。\n每个周期有 1/1000 的几率获得成功。\n关键在于创建一个非常通用的工厂。'))
	tooltip.add('kubejs:starcraft_core', Text.of('群星之力...').gray())
	tooltip.add('akashictome:tome', Text.of('弄丢了用三个木棍合成！').gold())
	tooltip.add('kubejs:custom_chest', Text.of('需要使用「奇珍之匙」开启').gold())
	tooltip.add('kubejs:custom_chest', Text.of('内含：MekaSuit 护甲、大法师法术书、256k元件、无尽催化剂、寰宇肉丸、下界之星、金苹果、终极能量立方').gold())
	tooltip.add('kubejs:custom_chest', Text.of('超级派蒙旋风 Lite、区块加载器、创造魔力石板、超级煲、时间之瓶、应急食品、大型/超大型能量存储器、终极注魔水晶').gold())
	tooltip.add('kubejs:key', Text.of('能够开启「星域奇珍箱」售价为：6 元/把。').gold())
	tooltip.add('starcraft:electric_stress_creator', Text.of('已弃用物品，请勿使用').red())
	tooltip.add('starcraft:stress_creator', Text.of('已弃用物品，请勿使用').red())
})

onEvent('item.tooltip', tooltip => {
	for (let BanItem of itemsToBan) {
		tooltip.addAdvanced(BanItem, (item, advanced, text) => {
			text.add(1, Text.of('已禁用物品').red())
		})
	}
})
