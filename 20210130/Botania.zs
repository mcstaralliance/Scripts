mods.botania.PureDaisy.removeRecipe(<botania:livingrock>);
mods.botania.PureDaisy.removeRecipe(<botania:livingwood>);

mods.botania.PureDaisy.addRecipe(
    <contenttweaker:magic_log>, <botania:livingwood>
);
mods.botania.PureDaisy.addRecipe(
    <minecraft:stonebrick>, <botania:livingrock>
);

// 星辉工作台
mods.botania.RuneAltar.addRecipe(
    <astralsorcery:blockaltar>, [<appliedenergistics2:material:7>, 
    <astralsorcery:blockmarble>, <extendedcrafting:crafting_table>, 
    <astralsorcery:blockblackmarble>], 
    10000);

// 注魔石
mods.botania.ManaInfusion.addInfusion(
    <contenttweaker:magic_stone>, <minecraft:stone>, 2500
    );
