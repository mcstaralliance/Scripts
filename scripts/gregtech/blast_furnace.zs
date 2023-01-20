import mods.gregtech.recipe.RecipeMap;

// 基岩粉
electric_blast_furnace.recipeBuilder()
    .inputs(<ore:dustObsidian>)
    .fluidInputs([<liquid:astralsorcery.liquidstarlight> * 250])
    .outputs(<enderio:item_material:20> * 2)
    .duration(200)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 通量控制器
electric_blast_furnace.recipeBuilder()
    .inputs(<fluxnetworks:fluxblock>, <fluxnetworks:fluxcore>, <gregtech:meta_item_1:281>)
    .fluidInputs([<liquid:titanium_tetrachloride> * 500])
    .outputs(<fluxnetworks:fluxcontroller> * 4)
    .duration(200)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 熔岩鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:lava> * 5000])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "chickens:lavachicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(32)
    .property("temperature", 1800)
    .buildAndRegister();

// 水鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:water> * 5000])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "chickens:waterchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(32)
    .property("temperature", 1800)
    .buildAndRegister();

// 原木鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:wood_tar> * 1000])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "chickens:logchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 铁鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:iron> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "chickens:ironchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 金鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:gold> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "chickens:goldchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 星辉鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <astralsorcery:itemcraftingcomponent:1>)
    .fluidInputs([<liquid:astralsorcery.liquidstarlight> * 1000])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:star", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 经验鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:xpjuice> * 1000])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:xpchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 聚合粘土鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <deepmoblearning:polymer_clay> * 64)
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:polymerclay", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 铜鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:copper> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:copperchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 炉渣鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <thermalfoundation:material:864> * 32)
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:slagchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(128)
    .property("temperature", 2700)
    .buildAndRegister();

// 富炉渣鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <thermalfoundation:material:865> * 32)
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:richslagchicken", Gain: 1, Strength: 1}))
    .duration(2000)
    .EUt(360)
    .property("temperature", 3600)
    .buildAndRegister();

// 钨钢鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:tungsten_steel> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:tungstensteel", Gain: 1, Strength: 1}))
    .duration(2000)
    .EUt(360)
    .property("temperature", 3600)
    .buildAndRegister();

// 钛鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:titanium> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:titaniumchicken", Gain: 1, Strength: 1}))
    .duration(2000)
    .EUt(360)
    .property("temperature", 3600)
    .buildAndRegister();

// 不锈钢鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:stainless_steel> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:stainlesssteel", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 镀铑钯鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:rhodium_plated_palladium> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:rhodiumplatedpalladium", Gain: 1, Strength: 1}))
    .duration(4000)
    .EUt(3400)
    .property("temperature", 4500)
    .buildAndRegister();

// 焊锡鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:soldering_alloy> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:soldering_alloy", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 丁苯橡胶鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:styrene_butadiene_rubber> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:specialrubber", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(1920)
    .property("temperature", 4500)
    .buildAndRegister();

// 赛特斯石英鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:silicon> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:quartz", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();

// 氡鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:radon> * 1000])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:radon", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(480)
    .property("temperature", 360)
    .buildAndRegister();

// 中子鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <avaritia:neutron_collector>)
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:neutronium", Gain: 1, Strength: 1}))
    .duration(4000)
    .EUt(7680)
    .property("temperature", 5400)
    .buildAndRegister();

// 龙锭鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}), <minecraft:dragon_egg>)
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:draconiumchicken", Gain: 1, Strength: 1}))
    .duration(4000)
    .EUt(1920)
    .property("temperature", 4500)
    .buildAndRegister();

// 铝鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:aluminium> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:aluminumchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(120)
    .property("temperature", 1800)
    .buildAndRegister();

// 锡鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:tin> * 1296])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "morechickens:tinchicken", Gain: 1, Strength: 1}))
    .duration(1800)
    .EUt(120)
    .property("temperature", 2700)
    .buildAndRegister();
    
// 凯金鸡
electric_blast_furnace.recipeBuilder()
    .inputs(<roost:chicken>.withTag({Growth: 10, Chicken: "contenttweaker:ikun", Gain: 10, Strength: 10}))
    .fluidInputs([<liquid:trinium> * 11664])
    .outputs(<roost:chicken>.withTag({Growth: 1, Chicken: "contenttweaker:trinium", Gain: 1, Strength: 1}))
    .duration(2000)
    .EUt(30720)
    .property("temperature", 7200)
    .buildAndRegister();

