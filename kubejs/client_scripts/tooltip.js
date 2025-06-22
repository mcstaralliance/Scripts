// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const itemToBan = [
    'create:schematicannon'
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