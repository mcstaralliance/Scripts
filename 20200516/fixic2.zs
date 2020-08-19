// 此魔改全周目通用

import crafttweaker.item.IItemTransformer;
import crafttweaker.events.IEventManager;
import crafttweaker.item.IItemStack;

<custommc:item512>.displayName = "§b兰波顿晶体";
<enderio:item_material:18>.displayName = "§c能量晶体";

var nl = <enderio:item_material:18>;
var lbd = <custommc:item512>;
var goldcable = <ic2:cable:2>.withTag({type: 2 as byte, insulation: 2 as byte});
var ironcable = <ic2:cable:3>.withTag({type: 3 as byte, insulation: 3 as byte});

recipes.remove(<enderio:item_material:18>);
recipes.remove(<ic2:lapotron_crystal:26>.withTag({}));
recipes.remove(<ic2:te:74>.withTag({}));
recipes.remove(<ic2:te:71>.withTag({}));
recipes.remove(<ic2:energy_pack:26>.withTag({}));
recipes.remove(<ic2:te:80>);

lbd.addTooltip("§a自动化合成专用物品");
nl.addTooltip("§a自动化合成专用物品");

recipes.addShaped(lbd, [[<ore:dustLapis>, <ic2:crafting:2>, <ore:dustLapis>], [<ore:dustLapis>, nl, <ore:dustLapis>], [<ore:dustLapis>, <ic2:crafting:2>, <ore:dustLapis>]]);
// 兰波顿晶体

recipes.addShaped(nl, [[<ic2:dust:6>, <ic2:dust:6>, <ic2:dust:6>], [<ic2:dust:6>, <ic2:dust:6>, <ic2:dust:6>], [<ic2:dust:6>, <ic2:dust:6>, <ic2:dust:6>]]);
// 能量水晶

recipes.addShaped(<ic2:te:74>.withTag({}), [[goldcable, nl, goldcable], [nl, <ic2:resource:12>, nl], [goldcable, nl, goldcable]]);
// MFE

recipes.addShaped(<ic2:energy_pack:26>.withTag({}), [[<ic2:crafting:2>, <ic2:casing:3>, <ic2:crafting:2>], [nl, <ic2:casing:3>, nl], [<ic2:casing:3>, null,<ic2:casing:3>]]);
// 能量水晶储电背包

recipes.addShaped(<ic2:mining_laser:26>.withTag({}), [[<ore:dustRedstone>, <ore:dustRedstone>, nl], [<ic2:crafting:3>, <ic2:crafting:3>, <ic2:crafting:2>], [null,<ic2:crafting:3>, <ic2:crafting:3>]]);
// 采矿镭射枪

recipes.addShaped(<ic2:te:75>.withTag({}), [[lbd, <ic2:crafting:2>, lbd], [lbd, <immersiveengineering:metal_device1:5>, lbd], [lbd, <ic2:resource:13>, lbd]]);
// MFSU

recipes.addShaped(<ic2:te:80>, [[null,ironcable,null], [<ic2:crafting:2>, <ic2:te:79>, lbd], [null,ironcable,null]]);
// 超高压变压器
