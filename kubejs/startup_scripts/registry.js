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
    event.create("starcraft:soldering_alloy")

})

// fluid registry
StartupEvents.registry("fluid",event=>{
    event.create("starcraft:exp_fluid").thickTexture("#d51767").displayName("精液");
    event.create("starcraft:raw_growth_medium").thickTexture("#8f6447").displayName("培养基原液");
    event.create("starcraft:mutagen").thickTexture("#00e672").displayName("诱变剂");
    event.create("starcraft:molten_soldering_alloy").thickTexture("#7a7a81").displayName("熔融焊锡");
    event.create("starcraft:molten_antimony_ingot").thickTexture("#65515a").displayName("熔融锑")
    // event.create("starcraft:enriched_bacterial_sludge").thickTexture("#afdc81").displayName("富集细菌浆液");
    // event.create("starcraft:bacterial_sludge").thickTexture("#2b4a2f").displayName("细菌浆液");
    
})

// gas registry
StartupEvents.registry("mekanism:gas", event=>{
    event.create("ammonia").color(0x99d6ff).displayName("氨气");
    event.create("nitrogen_monoxide").color(0x82a3c6).displayName("一氧化氮");
    event.create("nitrogen_dioxide").color(0x80242f).displayName("二氧化氮");
    event.create("fluorine").color(0x72aa55).displayName("氟气");
    event.create("nitric_acid").color(0x6cc018).displayName("硝酸");
    event.create("uranium_tetrafluoride").color(0x60746c).displayName("四氟化铀");
    event.create("sterilized_growth_medium").color(0x9b7963).displayName("无菌培养基")
    // event.create("mutagen").color(0x00e672).displayName("诱变剂");
    event.create('phosphoric_acid').color(0xa6a603).displayName("磷酸");
    event.create("gelatin_mixture").color(0x456b85).displayName("明胶混合物");
    event.create("bacteria").color(0x5c5d02).displayName("细菌");
    event.create("bacterial_sludge").color(0x2b4a2f).displayName("细菌浆液");
    event.create("enriched_bacterial_sludge").color(0xafdc81).displayName("富集细菌浆液")
})

// food  registry
StartupEvents.registry("item",event=>{
    event.create("starcraft:milk_bread")
    .food(foodbuilder => {
        foodbuilder.hunger(7)
        .saturation(6)
        .alwaysEdible()
    }),
    event.create("starcraft:incomplete_paimon_sword");
})

