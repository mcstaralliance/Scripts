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
    event.create("custom_chest").item(item => {
        item.tooltip(Component.gold("使用奇珍之匙开启"));
        item.tooltip(Component.yellow("钥匙可在菜单点券商城花费 60 点券购买"));
        item.tooltip(Component.gray("可抽出创造魔力池、区块加载器、无尽套与 MekaSuit 等珍稀物品"));
    });
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
    event.create("key")
        .rarity("epic")
        .tooltip(Component.gray("对着奇珍箱右键即可开箱"));
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
    event.create("starcraft:block_of_gaia");
    event.create("starcraft:reinforcedrpoxyresin_plate");
    event.create("starcraft:multilayer_fiber_reinforced_circuit_board");
    event.create("starcraft:master_circuit_board");
    event.create("starcraft:wetware_lifesupport_circuit_board");
    event.create("starcraft:fiber_reinforced_circuit_board");
    event.create("starcraft:sodium_hydroxide_dust");
    event.create("starcraft:incomplete_neuro_processing_unit");
    event.create("starcraft:hasoc_wafer");
    event.create("starcraft:hasoc");
    event.create("starcraft:neutronium_doped_monocrystalline_silicon_boule");
    event.create("starcraft:neutronium_doped_wafer");
    event.create("starcraft:sodium_bisulfate_dust");
    event.create("starcraft:incomplete_biological_control_circuit");
    event.create("starcraft:nutrient_rich_sapling")
    event.create("starcraft:incomplete_nutrient_rich_sapling")
    event.create("starcraft:crushed_kiwi");
    event.create("starcraft:incomplete_hasoc_wafer");
    event.create("starcraft:advanced_rocket_nose_cone");
    event.create("starcraft:heavy_awakened_draconium_plate");
    event.create("starcraft:ender_lens"),
    event.create("starcraft:hot_draconium_ingot")

})

// fluid registry
StartupEvents.registry("fluid",event=>{
    event.create("starcraft:exp_fluid").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xd51767);
    event.create("starcraft:raw_growth_medium").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x8f6447);
    event.create("starcraft:mutagen").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x00e672);
    event.create("starcraft:molten_soldering_alloy").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x7a7a81);
    event.create("starcraft:molten_antimony_ingot").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x65515a)
    event.create("starcraft:royal_jelly").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xfcfadd)
    event.create("starcreaft:ammonia").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x99d6ff);
    event.create("starcraft:nitrogen_monoxide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x82a3c6);
    event.create("starcraft:nitrogen_dioxide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x80242f);
    event.create("starcraft:fluorine").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x72aa55);
    event.create("starcraft:nitric_acid").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x6cc018);
    event.create("starcraft:uranium_tetrafluoride").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x60746c);
    event.create("starcraft:sterilized_growth_medium").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x9b7963)
    event.create('starcraft:phosphoric_acid').stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xa6a603);
    event.create("starcraft:gelatin_mixture").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x456b85);
    event.create("starcraft:bacteria").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x5c5d02);
    event.create("starcraft:bacterial_sludge").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x2b4a2f);
    event.create("starcraft:enriched_bacterial_sludge").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xafdc81);
    event.create("starcraft:distilled_water").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x3b73c5);
    event.create("starcraft:biomass").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x10ce00);
    event.create("starcraft:epoxy").stillTexture("minecraft:block/lava_still").flowingTexture("minecraft:block/lava_flow").tint(0x956b15);
    event.create("starcraft:phenol").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x5a351c);
    event.create("starcraft:epichlorohydrin").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x4d110a);
    event.create("starcraft:sodium_persulfate").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x094444);
    event.create("starcraft:propene").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xb49e43);
    event.create("starcraft:acetone").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x828383);
    event.create("starcraft:ender_air").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x2a3550);
    event.create("starcraft:sulfuric_heavy_fuel").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xf7e692);
    event.create("starcraft:sulfuric_light_fuel").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xc09911);
    event.create("starcraft:sulfuric_naphtha").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xb7ad0a);
    event.create("starcraft:sulfuric_kerosine").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x8487c6);
    event.create("starcraft:heavy_fuel").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xf7e6aa);
    event.create("starcraft:light_fuel").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xbab207);
    event.create("starcraft:gasoline_premium").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xbf7d02);
    event.create("starcraft:methanol").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x806802);
    event.create("starcraft:ethyl_tertbutyl_ether").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x834707);
    event.create("starcraft:octane").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x670b09);
    event.create("starcraft:toluene").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x562408);
    event.create("starcraft:butene").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x94410b);
    event.create("starcraft:severely_steamcracked_naphtha").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xb9b442);
    event.create("starcraft:nitrous_oxide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x5f94b32);
    event.create("starcraft:raw_gasoline").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xc14e02);
    event.create("starcraft:fermented_biomass").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x354202);
    event.create("starcraft:hypochlorous_acid").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x526569);
    event.create("starcraft:dimethylhydrazine").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x04053e);
    event.create("starcraft:liquid_ender_air").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x04053e);
    event.create("starcraft:air").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x787878);
    event.create("starcraft:liquid_air").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x81bcff);
    event.create("starcraft:hydrogen_sulfide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xdd6103);
    event.create("starcraft:benzene").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x161615);
    event.create("starcraft:carbon_dioxide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x7d99ac);
    event.create("starcraft:nitrogen").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x0c8988);
    event.create("starcraft:urea").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x4dbe88);
    event.create("starcraft:basic_rocket_fuel").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x4dbe88);
    event.create("starcraft:advanced_rocket_fuel").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x4dbe88);
    event.create("starcraft:ultimate_rocket_fuel").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x4dbe88);
    event.create("starcraft:mercury").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xa8a0a0);
    event.create("starcraft:dinitrogen_tetroxide").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xa8a0a0);
    event.create("starcraft:depleted_uranium_hexafluoride").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x74ba66);
    event.create("starcraft:mixed_uranium_hexafluoride").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x4bf52a);
    event.create("starcraft:photoresist").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0x536571);
    event.create("starcraft:molten_infinity_ingot").stillTexture("minecraft:block/water_still").flowingTexture("minecraft:block/water_flow").tint(0xddb7b8);
    
    
    
    

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

