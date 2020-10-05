import crafttweaker.item.IItemStack as IItemStack;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.oredict.IOreDict;
import crafttweaker.item.IIngredient;

// IC2: 40-地形转换机 57-超级采矿机 60-采矿机 61-物质生成机 62-模式存储机 63-复制机 64-模式扫描机 82-区块加载器 88-工业工作台 89-批量工作台 1-工业tnt 2-核弹
var UU = [<ic2:te:1>,<ic2:te:2>,<ic2:te:40>,<ic2:te:57>,<ic2:te:60>,<ic2:te:61>,<ic2:te:62>,<ic2:te:63>,<ic2:te:64>,<ic2:te:82>,<ic2:te:88>,<ic2:te:89>]
as IItemStack[];
for i, myUU in UU {
    recipes.remove(myUU);
}

// 热力: morb-生物球(空) morb:1-可复用生物球(空) satchel-背包
var thermal = [<thermalexpansion:morb>,<thermalexpansion:morb:1>,<thermalexpansion:satchel>]
as IItemStack[];
for i, myThermal in thermal {
    recipes.remove(myThermal);
}

// 匠魂2-EFLN
recipes.remove(<tconstruct:throwball>);

// AE2: spatial_io_port-空间 IO 端口 spatial_pylon-空间塔 part:300-ME破坏面板 part:302-ME流体破坏面板 entropy_manipulator-熵变机械臂 matter_cannon-物质炮
// network_tool-网络工具 part:320-ME成型面板 part:321-ME流体成型面板
var AE2 = [<appliedenergistics2:spatial_io_port>,<appliedenergistics2:spatial_pylon>,<appliedenergistics2:part:300>,<appliedenergistics2:part:302>,
<appliedenergistics2:entropy_manipulator>,<appliedenergistics2:matter_cannon>,<appliedenergistics2:network_tool>,<appliedenergistics2:part:320>,
<appliedenergistics2:part:321>]
as IItemStack[];
for i, myAE2 in AE2 {
    recipes.remove(myAE2);
}

// 时装工坊: skin-library-资源库 global-skin-library-全球资源库 armourer-时装制作台 hologram-projector-全息投影仪 colour-mixer-调色器 dye-table-配色工作台
// skinning-table-镶嵌工作台 mannequin-人偶
var armourer = [<armourers_workshop:tile.skin-library>,<armourers_workshop:tile.global-skin-library>,<armourers_workshop:tile.armourer>,
<armourers_workshop:tile.hologram-projector>,<armourers_workshop:tile.colour-mixer>,<armourers_workshop:tile.dye-table>,
<armourers_workshop:tile.skinning-table>,<armourers_workshop:item.mannequin>]
as IItemStack[];
for i, myArmourer in armourer {
    recipes.remove(myArmourer);
}

// 龙之研究: draconic_spawner-稳定刷怪笼 diss_enchanter-祛魔台 celestial_manipulator-苍穹变换器 reactor_component-反应堆稳定器
// reactor_component:1-反应堆能量注入器 generator-发电机 dislocator-传送符咒 magnet-物品传送符咒 magnet:1-觉醒物品传送符咒
// dislocator_bound:1-绑定传送符咒(点对点) dislocator_bound:2-绑定传送符咒(玩家) dislocator_pedestal-传送符咒基座 dislocator_receptacle-传送符咒收纳容器
var DE = [<draconicevolution:draconic_spawner>,<draconicevolution:diss_enchanter>,<draconicevolution:celestial_manipulator>,
<draconicevolution:reactor_component>,<draconicevolution:reactor_component:1>,<draconicevolution:generator>,
<draconicevolution:dislocator>,<draconicevolution:magnet>,<draconicevolution:magnet:1>,<draconicevolution:dislocator_bound:1>,
<draconicevolution:dislocator_bound:2>,<draconicevolution:dislocator_pedestal>,<draconicevolution:dislocator_receptacle>]
as IItemStack[];
for i, myDE in DE {
    recipes.remove(myDE);
}

// 末影接口: block_weather_obelisk-气象方尖碑 item_rod_of_return-折返权杖 item_travel_staff-旅行权杖 item_dark_steel-玄钢套 item_end_steel-末影钢套
// block_killer_joe-杀手乔 block_powered_spawner-电动刷怪箱 item_dark_steel_sword-终结之剑 block_experience_obelisk-经验交换方尖碑 block_tele_pad-传送台
// item_soul_vial-灵魂瓶 item_dark_steel_upgrade-玄钢升级 travel-旅行 tnt-爆破 inv-物品栏升级
var EIO = [<enderio:block_weather_obelisk>,<enderio:item_rod_of_return>,<enderio:item_travel_staff>,<enderio:block_killer_joe>,
<enderio:item_dark_steel_helmet>,<enderio:item_dark_steel_chestplate>,<enderio:item_dark_steel_leggings>,<enderio:item_dark_steel_boots>,
<enderio:item_end_steel_helmet>,<enderio:item_end_steel_chestplate>,<enderio:item_end_steel_leggings>,<enderio:item_end_steel_boots>,
<enderio:block_powered_spawner>,<enderio:item_dark_steel_sword>,<enderio:block_experience_obelisk>,<enderio:block_tele_pad>,<enderio:item_soul_vial>,
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:travel"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt2"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt3"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt4"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv1"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv2"})]
as IItemStack[];
for i, myEnderIO in EIO {
    recipes.remove(myEnderIO);
}

var forestry = [<forestry:mailbox>,<forestry:trade_station>,<forestry:stamp_collector>,<forestry:rainmaker>,<forestry:lepidopterist_bag>,
<forestry:miner_bag>,<forestry:digger_bag>,<forestry:forester_bag>,<forestry:hunter_bag>,<forestry:apiarist_bag>,<forestry:adventurer_bag>,
<forestry:builder_bag>]
as IItemStack[];
for i, myForestry in forestry {
    recipes.remove(myForestry);
}

recipes.remove(<forestry:letters>);
mods.forestry.Carpenter.removeRecipe(<forestry:letters>);

val cells = [<extracells:part.base:5>,<extracells:part.base:6>]
as IItemStack[];
for i, extraCells in cells {
    recipes.remove(extraCells);
}

val IE = [<immersiveengineering:revolver>,<immersiveengineering:railgun>]
as IItemStack[];
for i, myIE in IE {
    recipes.remove(myIE);
}

var avaritia = [<avaritia:infinity_pickaxe>,<avaritia:skullfire_sword>,<avaritia:infinity_bow>,<avaritia:infinity_shovel>,<avaritia:infinity_axe>,
<avaritia:infinity_hoe>]
as IItemStack[];
for i, myAvaritia in avaritia {
    mods.avaritia.ExtremeCrafting.remove(myAvaritia);
}

var BC = [<buildcraftbuilders:quarry>,<buildcraftbuilders:architect>]
as IItemStack[];
for i, myBC in BC {
    recipes.remove(myBC);
}

// 战利品表修改
// 需添加LootTableTweaker MOD
/*
mods.ltt.LootTable.removeGlobalItem("enderio:item_dark_steel_upgrade:1");
mods.ltt.LootTable.removeGlobalItem("enderio:item_soul_vial");
mods.ltt.LootTable.removeGlobalItem("enderio:item_soul_vial:1");
mods.ltt.LootTable.removeGlobalItem("enderio:item_dark_steel_pickaxe");
mods.ltt.LootTable.removeGlobalItem("enderio:item_dark_steel_sword");
*/
