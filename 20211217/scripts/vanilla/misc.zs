#priority 4000

import crafttweaker.item.IItemStack;

COMMONCOIN.displayName = game.localize("item.coin.name");
COMMONCOIN.addTooltip(game.localize("tooltip.coin_value") ~ "10");

ADVANCEDCOIN.displayName = game.localize("item.coin.name");
ADVANCEDCOIN.addTooltip(game.localize("tooltip.coin_value") ~ "100");

ULTRACOIN.displayName = game.localize("item.coin.name");
ULTRACOIN.addTooltip(game.localize("tooltip.coin_value") ~ "1000");

var removeSolarPanels as IItemStack[] = [
    <super_solar_panels:machines:1>,
    <super_solar_panels:machines:2>,
    <super_solar_panels:machines:3>,
    <super_solar_panels:machines:4>,
    <super_solar_panels:machines:5>,
    <super_solar_panels:machines:11>,
    <super_solar_panels:machines:6>,
    <super_solar_panels:machines:7>,
    <super_solar_panels:machines:8>,
    <super_solar_panels:machines:9>
];
for panels in removeSolarPanels{
    recipes.remove(panels);
    panels.addTooltip(format.red(game.localize("tooltip.scheduled_for_deletion")));
    panels.addTooltip(format.red(game.localize("tooltip.dread_change")));
}
