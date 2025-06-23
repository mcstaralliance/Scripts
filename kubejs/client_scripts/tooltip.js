// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const itemToBan = [
    'create:schematicannon'
]

ItemEvents.tooltip(tooltip => {
    
    event.add("starcraft:milk_bread","众所周知，甜品可任意无限量的吃")

    for (let addTooltipForBan of itemToBan) {
        tooltip.addAdvanced(addTooltipForBan, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, [Text.of('已禁用物品').red()])
            } else {
                text.add(1, [Text.of('Be Permitted For STAFF').green()])
            }
        })}
})