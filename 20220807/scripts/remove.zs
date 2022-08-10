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
];

mods.botania.PureDaisy.removeRecipe(<botania:livingrock>);
mods.botania.PureDaisy.removeRecipe(<botania:livingwood>);

mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/knowledgeshare");
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/tool_basicwand");

mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:infusion_matrix>);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumadditions:knowledge_tome>);

Agglomeration.removeRecipe(<botania:manaresource:4>, [<botania:manaresource:2>, <botania:manaresource>, <botania:manaresource:1>]);

mods.avaritia.ExtremeCrafting.remove(<avaritia:resource:5>);
mods.avaritia.ExtremeCrafting.remove(<avaritia:resource:6>);

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