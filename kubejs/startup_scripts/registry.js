// priority: 1

//const { fluidlogistics } = require("@package/com/yision");
//const { minecraft } = require("@package/net");

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
    event.create("energy_input");
    event.create("fluid_input");
    event.create("fluid_output");
    event.create("item_input");
    event.create("item_output");
    event.create("assembly_line").soundType('metal');
    event.create("assembly_line_gearbox").soundType('metal');
    event.create("assembly_line_grating").soundType('metal');
    event.create("assembly_line_controller").soundType('metal');
    event.create("assembly_line_controller_working").soundType('metal');
    event.create("biological_magic_generator").soundType('metal');
    event.create("biological_magic_generator_working").soundType('metal');
    event.create("blood_sweat_factory").soundType('metal');
    event.create("blood_sweat_factory_working").soundType('metal');
    })

// item registry
StartupEvents.registry('item', event => {
    event.create("starcraft_commoncoin").rarity("common").tooltip(Component.gray("面值: 50"));
    event.create("starcraft_advancedcoin").rarity("uncommon").tooltip(Component.gray("面值: 600"));
    event.create("starcraft_ultracoin").rarity("rare").tooltip(Component.gray("面值: 1200"));
    event.create("key").rarity("epic");
    event.create("starcraft:ammonia_rich_mixture");
    event.create("starcraft:uranyl_nitrate");
    event.create("starcraft:ammonium_diuranate");
    event.create("starcraft:rune_blank");
    event.create("starcraft:blank_slate");
    event.create("starcraft:reinforce_slate");
    event.create("starcraft:imbued_slate");
    event.create("starcraft:demonic_slate");
    event.create("starcraft:stem_cells");
    event.create("starcraft:neuro_processing_unit");
    event.create("starcraft:dust_agar");
    event.create("starcraft:dust_gelatin");
    event.create("starcraft:dust_collagen");
    event.create("starcraft:dust_meat");
    event.create("starcraft:biological_control_circuit");
    event.create("starcraft:dust_calcium");
    event.create("starcraft:soldering_alloy");
    event.create("starcraft:block_of_gaia")

})

// fluid registry
StartupEvents.registry("fluid",event=>{
    event.create("starcraft:exp_fluid").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xd51767).displayName("精液");
    event.create("starcraft:raw_growth_medium").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x8f6447).displayName("培养基原液");
    event.create("starcraft:mutagen").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x00e672).displayName("诱变剂");
    event.create("starcraft:molten_soldering_alloy").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x7a7a81).displayName("熔融焊锡");
    event.create("starcraft:molten_antimony_ingot").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x65515a).displayName("熔融锑")
    event.create("starcraft:royal_jelly").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xfcfadd).displayName("蜂王浆")
    event.create("starcreaft:ammonia").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x99d6ff).displayName("氨气");
    event.create("starcraft:nitrogen_monoxide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x82a3c6).displayName("一氧化氮");
    event.create("starcraft:nitrogen_dioxide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x80242f).displayName("二氧化氮");
    event.create("starcraft:fluorine").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x72aa55).displayName("氟气");
    event.create("starcraft:nitric_acid").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x6cc018).displayName("硝酸");
    event.create("starcraft:uranium_tetrafluoride").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x60746c).displayName("四氟化铀");
    event.create("starcraft:sterilized_growth_medium").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x9b7963).displayName("无菌培养基")
    event.create('starcraft:phosphoric_acid').stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xa6a603).displayName("磷酸");
    event.create("starcraft:gelatin_mixture").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x456b85).displayName("明胶混合物");
    event.create("starcraft:bacteria").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x5c5d02).displayName("细菌");
    event.create("starcraft:bacterial_sludge").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x2b4a2f).displayName("细菌浆液");
    event.create("starcraft:enriched_bacterial_sludge").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xafdc81).displayName("富集细菌浆液");
    event.create("starcraft:distilled_water").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x3b73c5).displayName("蒸馏水");
    event.create("starcraft:biomass").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x10ce00).displayName("生物质");
    
    
})

// gas registry
StartupEvents.registry("mekanism:gas", event=>{
    // event.create("ammonia").tint(0x99d6ff).displayName("氨气");
    // event.create("nitrogen_monoxide").tint(0x82a3c6).displayName("一氧化氮");
    // event.create("nitrogen_dioxide").tint(0x80242f).displayName("二氧化氮");
    // event.create("fluorine").tint(0x72aa55).displayName("氟气");
    // event.create("nitric_acid").tint(0x6cc018).displayName("硝酸");
    // event.create("uranium_tetrafluoride").tint(0x60746c).displayName("四氟化铀");
    // event.create("sterilized_growth_medium").tint(0x9b7963).displayName("无菌培养基")
    // // event.create("mutagen").tint(0x00e672).displayName("诱变剂");
    // event.create('phosphoric_acid').tint(0xa6a603).displayName("磷酸");
    // event.create("gelatin_mixture").tint(0x456b85).displayName("明胶混合物");
    // event.create("bacteria").tint(0x5c5d02).displayName("细菌");
    // event.create("bacterial_sludge").tint(0x2b4a2f).displayName("细菌浆液");
    // event.create("enriched_bacterial_sludge").tint(0xafdc81).displayName("富集细菌浆液")
})

// // food  registry
// StartupEvents.registry("item",event=>{
//     event.create("starcraft:milk_bread")
//     .food(foodbuilder => {
//         foodbuilder.hunger(7)
//         .saturation(6)
//         .alwaysEdible()
//     }),
//     event.create("starcraft:incomplete_paimon_sword");
// })

