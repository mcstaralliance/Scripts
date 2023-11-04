const itemsToBan = [
    'chunkloaders:single_chunk_loader',
    'chunkloaders:basic_chunk_loader',
    'chunkloaders:advanced_chunk_loader',
    'chunkloaders:ultimate_chunk_loader'
];

onEvent('item.tooltip', tooltip => {
    for (let addTooltipForBan of itemsToBan) {
        tooltip.addAdvanced(addTooltipForBan, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, [Text.of('已禁用物品').red()])
            } else {
                text.add(1, [Text.of('Be Permited For STAFF').green()])
            }
        })
    }
    tooltip.add(['minecraft:iron_nugget'], '貌似不能正常分解~')
})