#priority 2000

import crafttweaker.item.IItemStack;

// EnderIO 导线
var enderio as IItemStack[] = [
    <enderio:item_item_conduit>,
    <enderio:item_liquid_conduit>,
    <enderio:item_liquid_conduit:1>,
    <enderio:item_liquid_conduit:2>,
    <enderio:item_power_conduit>,
    <enderio:item_power_conduit:1>,
    <enderio:item_power_conduit:2>,
    <enderio:item_redstone_conduit>
];

for enderio in enderio {
    enderio.addTooltip(game.localize("tooltip.not_suggested"));
}

// uniingots
var ingots as IItemStack[] = [
    <contenttweaker:lead_ingot>,
    <contenttweaker:uranium_ingot>,
    <contenttweaker:silver_ingot>,
    <contenttweaker:iridium_ingot>,
    <contenttweaker:aluminum_ingot>,
    <contenttweaker:nickel_ingot>,
    <contenttweaker:copper_ingot>,
    <contenttweaker:platinum_ingot>,
    <contenttweaker:tin_ingot>
];

for ingot in ingots {
    ingot.addTooltip(game.localize("tooltip.uniingot"));
}

// extra remove tooltip
var exRemoveTooltips as IItemStack[] = [
    <botania:specialflower>.withTag({type: "rannuncarpus"}),
    <forge:bucketfilled>.withTag({FluidName: "concrete", Amount: 1000})
];

for exRemoveTooltip in exRemoveTooltips {
    exRemoveTooltip.addTooltip(format.red(game.localize("tooltip.recipe_deleted")));
}

// satchel tooltip
var satchelTooltips as IItemStack[] = [
    <thermalexpansion:satchel>, 
    <thermalexpansion:satchel:1>, 
    <thermalexpansion:satchel:2>, 
    <thermalexpansion:satchel:3>, 
    <thermalexpansion:satchel:4>, 
    <thermalexpansion:satchel:100>
];

for satchelTooltip in satchelTooltips {
    satchelTooltip.addTooltip(format.green(game.localize("tooltip.satchel")));
}

// Touhou Little Maid
var maidTooltips as IItemStack[] = [
    <touhou_little_maid:garage_kit>,
    <touhou_little_maid:smart_slab>,
    <touhou_little_maid:smart_slab:1>
];

for maidTooltip in maidTooltips {
    maidTooltip.addTooltip(format.red(game.localize("tooltip.maid")));
}

// Electroblob's Wizardry
var wizardryTooltips as IItemStack[] = [
    <ebwizardry:spell_book:11>,
    <ebwizardry:spell_book:159>,
    <ebwizardry:spell_book:170>
];

for wizardryTooltip in wizardryTooltips {
    wizardryTooltip.addTooltip(format.red(game.localize("tooltip.wizardry")));
}

// even more
<contenttweaker:paimon>.addTooltip(game.localize("tooltip.best_friends"));
<contenttweaker:skull_block>.addTooltip(game.localize("tooltip.break_black_wool"));
<botania:manaresource:4>.addTooltip(game.localize("tooltip.about_a_quarter"));
<avaritia:resource:1>.addTooltip(game.localize("tooltip.about_a_quarter"));
<ic2:resource:12>.addTooltip(game.localize("tooltip.hammer_for_frame"));
<contenttweaker:primogem>.addTooltip(game.localize("tooltip.primogem"));
