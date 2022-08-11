import crafttweaker.item.IItemStack;
import mods.botaniatweaks.Agglomeration;

var remove as IItemStack[] = [
    <mekanism:basicblock:8>,
    <teslacorelib:machine_case>,
    <ic2:te:44>,
    <ic2:te:1>,
    <ic2:resource:12>,
    <ic2:te:43>,
    <ic2:te:45>,
    <ic2:te:47>,
    <buildcrafttransport:pipe_stripes_item>,
    <appliedenergistics2:security_station>,
    <appliedenergistics2:quartz_growth_accelerator>,
    <appliedenergistics2:charger>,
    <ic2:crafting:6>,
    <appliedenergistics2:drive>,
    <appliedenergistics2:part:260>,
    <appliedenergistics2:part:241>,
    <enderio:block_simple_sag_mill>,
    <enderio:block_sag_mill>,
    <botania:pylon:2>,
    <botania:pylon:1>,
    <botania:pylon>,
    <mekanismgenerators:reactor:1>,
    <minecraft:redstone_ore>,
    <mekanism:machineblock>,
    <mekanism:machineblock:1>,
    <enderio:item_material:51>,
    <enderio:block_simple_alloy_smelter>,
    <thermalexpansion:frame>,
    <mekanism:machineblock:8>,
    <enderio:item_material>,
    <botania:manavoid>,
    <appliedenergistics2:material:39>,
    <botania:spreader>,
    <botania:pool>,
    <astralsorcery:itemwand>,
    <avaritia:resource:1>,
    <botania:altar>,
    <botania:alfheimportal>,
    <avaritia:infinity_helmet>,
    <avaritia:infinity_chestplate>,
    <avaritia:infinity_pants>,
    <avaritia:infinity_boots>,
    <draconicevolution:draconic_core>,
    <draconicevolution:wyvern_core>,
    <draconicevolution:wyvern_energy_core>,
    <draconicevolution:wyvern_helm>,
    <draconicevolution:wyvern_chest>,
    <draconicevolution:wyvern_legs>,
    <draconicevolution:wyvern_boots>,
    <draconicevolution:energy_crystal:1>,
    <draconicevolution:energy_crystal:6>,
    <draconicevolution:energy_crystal:8>,
    <draconicevolution:crystal_binder>
];

var removeRuneAltar as IItemStack[] = [
    <botania:rune>,
    <botania:rune:1>,
    <botania:rune:2>,
    <botania:rune:3>
];

var toBan as IItemStack[] = [
    <cyclicmagic:chest_sack_empty>,
    <cyclicmagic:inventory_food>,
    <cyclicmagic:dynamite_mining>,
    <armourers_workshop:tile.skin-library>,
    <appliedenergistics2:spatial_io_port>,
    <tconstruct:throwball:1>,
    <cyclicmagic:robot_spawner>,
    <armourers_workshop:item.mannequin>,
    <cyclicmagic:builder_pattern>,
    <cyclicmagic:uncrafting_block>,
    <cyclicmagic:block_miner_smart>,
    <armourers_workshop:tile.armourer>,
    <buildcraftbuilders:architect>,
    <botania:manabomb>,
    <openblocks:block_breaker>,
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:travel"}),
    <buildcraftbuilders:quarry>,
    <immersiveengineering:chemthrower>,
    <appliedenergistics2:tiny_tnt>,
    <appliedenergistics2:material:32>,
    <appliedenergistics2:spatial_pylon>,
    <ic2:te:60>,
    <rftools:spawner>,
    <enderio:block_weather_obelisk>,
    <buildcraftfactory:mining_well>,
    <enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:direct"}),
    <enderio:block_powered_spawner>,
    <botania:exchangerod>,
    <ic2:te:82>,
    <draconicevolution:dislocator_receptacle>,
    <immersiveengineering:toolbox>,
    <ic2:dynamite>,
    <botania:astrolabe>,
    <openblocks:dev_null>,
    <extrabotany:masterhandbag>,
    <ic2:te:40>,
    <tconstruct:throwball>,
    <ic2:te:89>,
    <ic2:te:88>,
    <draconicevolution:celestial_manipulator>,
    <botania:spawnermover>
];

mods.botania.Apothecary.removeRecipe("rannuncarpus");

mods.botania.PureDaisy.removeRecipe(<botania:livingrock>);
mods.botania.PureDaisy.removeRecipe(<botania:livingwood>);

mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/knowledgeshare");
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/tool_basicwand");

mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:infusion_matrix>);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumadditions:knowledge_tome>);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumadditions:dna_sample>);

Agglomeration.removeRecipe(<botania:manaresource:4>, [<botania:manaresource:2>, <botania:manaresource>, <botania:manaresource:1>]);

mods.avaritia.ExtremeCrafting.remove(<avaritia:resource:5>);
mods.avaritia.ExtremeCrafting.remove(<avaritia:resource:6>);
mods.avaritia.ExtremeCrafting.remove(<avaritia:skullfire_sword>);

for myRemoveRuneAltar in removeRuneAltar{
    mods.botania.RuneAltar.removeRecipe(myRemoveRuneAltar);
}

for myRemove in remove{
    recipes.remove(myRemove);
}

for ban in toBan{
    recipes.remove(ban);
    ban.addTooltip(format.red("配方已删除。"));
}
