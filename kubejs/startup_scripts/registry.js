// priority: 1
/**调用指定函数`count`次，首个参数为从1开始的次数 */
function repeat(count, handler, thisArg) {
    for (let i = 1; i <= count; i++)
        handler.call(thisArg, i, count);
}

StartupEvents.registry('item', event => {
    repeat(1404, (i) => event.create(i+"_item"));
})

// block registry
StartupEvents.registry('block', event => {
    event.create("paimoncyclone_miner_base");
    event.create("paimoncyclone_miner_pro");
})

// 注册硬币
StartupEvents.registry('item', event => {
    event.create("starcraft_commoncoin").rarity("common").displayName("铜币").tooltip(Component.gray("面值: 50"));
    event.create("starcraft_advancedcoin").rarity("uncommon").displayName("银币").tooltip(Component.gray("面值: 600"));
    event.create("starcraft_ultracoin").rarity("rare").displayName("金币").tooltip(Component.gray("面值: 1200"));
})

