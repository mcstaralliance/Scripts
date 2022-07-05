
// 删除物品配方
// 注意: 可以删除任何处理配方
onEvent('recipes', event => {
    const remove = [
        'draconicevolution:reactor_core',
        'botania:apothecary_default'
    ]
    for (i = 0; i < remove.length; i++){
        event.remove({output:remove[i]})
    }
})
