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
    event.create("custom_chest");
})

// item registry
StartupEvents.registry('item', event => {
    event.create("starcraft_commoncoin").rarity("common").tooltip(Component.gray("面值: 50"));
    event.create("starcraft_advancedcoin").rarity("uncommon").tooltip(Component.gray("面值: 600"));
    event.create("starcraft_ultracoin").rarity("rare").tooltip(Component.gray("面值: 1200"));
    event.create("key").rarity("epic");
})

// fluid registry
StartupEvents.registry("fluid",event=>{
    event.create("starcraft:exp_fluid").thickTexture("#d51767").displayName("精液")
})

// food  registry
StartupEvents.registry("item",event=>{
    event.create("starcraft:milk_bread")
    .food(foodbuilder => {
        foodbuilder.hunger(7)
        .saturation(6)
        .alwaysEdible()
    }),
    event.create("starcraft:incomplete_paimon_sword")
})
