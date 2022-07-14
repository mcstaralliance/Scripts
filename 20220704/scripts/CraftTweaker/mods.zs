import mods.techreborn.alloySmelter;
import scripts.utils;

mods.techreborn.alloySmelter.addRecipe(<minecraft:ender_eye>, <ore:dustBlaze>, <ore:enderpearl>, 100, 100);
mods.techreborn.alloySmelter.addRecipe(<minecraft:end_crystal>, <ore:netherStar>, <ore:enderpearl>, 400, 100);
mods.techreborn.alloySmelter.addRecipe(<minecraft:beacon>, <minecraft:nether_star>, <ore:obsidian>, 800, 100);

<ore:dustChrome>.add(<tfc:ore/chromite>);
<ore:ingotIron>.add(<tfc:metal/ingot/pig_iron>, <tfc:metal/ingot/wrought_iron>);
<ore:gemDiamond>.add(<tfc:gem/diamond>, <tfc:gem/diamond:1>, <tfc:gem/diamond:2>, <tfc:gem/diamond:3>, <tfc:gem/diamond:4>);

COMMONCOIN.displayName = game.localize("item.starcraft.coin.name");
COMMONCOIN.addTooltip(game.localize("tooltip.coin_value") ~ "10");

ADVANCEDCOIN.displayName = game.localize("item.starcraft.coin.name");
ADVANCEDCOIN.addTooltip(game.localize("tooltip.coin_value") ~ "100");

ULTRACOIN.displayName = game.localize("item.starcraft.coin.name");
ULTRACOIN.addTooltip(game.localize("tooltip.coin_value") ~ "1000");
