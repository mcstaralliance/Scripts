import mods.gregtech.recipe.RecipeMap;

// 间接产物处理
centrifuge.recipeBuilder()
    .inputs(<contenttweaker:slag_egg>)
    .outputs(<thermalfoundation:material:864>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:richslag_egg>)
    .outputs(<thermalfoundation:material:865>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:quartz_egg>)
    .outputs(<gregtech:ore_certus_quartz_0>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:draconium_egg>)
    .outputs(<draconicevolution:draconium_ore>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:titanium_egg>)
    .outputs(<gregtech:meta_ingot:113>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:aluminum_egg>)
    .outputs(<gregtech:meta_ingot:2>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:copper_egg>)
    .outputs(<gregtech:ore_copper_0>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:tin_egg>)
    .outputs(<gregtech:ore_tin_0>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:xp_egg>)
    .fluidOutputs([<liquid:xpjuice> * 50])
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:gold_egg>)
    .outputs(<gregtech:ore_gold_0>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:iron_egg>)
    .outputs(<gregtech:ore_iron_0>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:wood_egg>)
    .outputs(<minecraft:log>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:specialrubber_egg>)
    .fluidOutputs([<liquid:styrene_butadiene_rubber> * 144])
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:tungstensteel_egg>)
    .outputs(<gregtech:meta_ingot:2013>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:polymerclay_egg>)
    .outputs(<deepmoblearning:polymer_clay> * 4)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:soldering_alloy_egg>)
    .fluidOutputs([<liquid:soldering_alloy> * 144])
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:radon_egg>)
    .fluidOutputs([<liquid:radon> * 144])
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:stainlesssteel_egg>)
    .outputs(<gregtech:meta_ingot:323>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:rhodiumplatedpalladium_egg>)
    .outputs(<gregtech:meta_ingot:2062>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:neutronium_egg>)
    .outputs(<avaritia:resource:3>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:star_egg>)
    .circuit(1)
    .outputs(<astralsorcery:itemcraftingcomponent>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:star_egg>)
    .circuit(2)
    .outputs(<astralsorcery:itemcraftingcomponent:1>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();

centrifuge.recipeBuilder()
    .inputs(<contenttweaker:star_egg>)
    .circuit(3)
    .outputs(<gregtech:meta_dust:32001>)
    .duration(100)
    .EUt(256)
    .buildAndRegister();
    
centrifuge.recipeBuilder()
    .inputs(<contenttweaker:trinium_egg>)
    .circuit(1)
    .outputs(<gregtech:meta_ingot:130>)
    .duration(60)
    .EUt(30720)
    .buildAndRegister();

// 氟蛋处理
centrifuge.recipeBuilder()
    .inputs(<contenttweaker:fluorine_egg>)
    .fluidOutputs([<liquid:fluorine> * 144])
    .duration(20)
    .EUt(30720)
    .buildAndRegister();

// 空气蛋
centrifuge.recipeBuilder()
    .inputs(<contenttweaker:air_egg>)
    .fluidOutputs([<liquid:air> * 1600])
    .duration(100)
    .EUt(256)
    .buildAndRegister();

// 地狱空气蛋
centrifuge.recipeBuilder()
    .inputs(<contenttweaker:nether_air_egg>)
    .fluidOutputs([<liquid:nether_air> * 1600])
    .duration(100)
    .EUt(256)
    .buildAndRegister();    

// 末地空气蛋
centrifuge.recipeBuilder()
    .inputs(<contenttweaker:ender_air_egg>)
    .fluidOutputs([<liquid:ender_air> * 1600])
    .duration(100)
    .EUt(256)
    .buildAndRegister();      