// priority: 0

const itemToBan = [
    'create:schematicannon',
    'torcherino:torcherino',
    'torcherino:compressed_torcherino',
    'torcherino:double_compressed_torcherino'
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
    event.addItem('xycraft_world:kivi', ['按住 w 进行思索'])
    event.addItem('minecraft:beehive', ['如果橡树树苗、白桦树苗或樱花树苗水平2格范围内存在花、红树胎生苗、盛开的杜鹃花丛或盛开的杜鹃树叶，则该树苗长成的树会有 5% 的概率悬挂着蜂巢。'])
    event.addItem('ae2:mysterious_cube', ['按住 w 进行思索'])
})