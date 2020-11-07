import crafttweaker.item.IItemStack as IItemStack;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.oredict.IOreDict;
import crafttweaker.item.IIngredient;

// 工业2
var industrial = [<ic2:te:1>,<ic2:te:2>,<ic2:te:40>,<ic2:te:57>,<ic2:te:60>,<ic2:te:61>,<ic2:te:62>,<ic2:te:63>,<ic2:te:64>,<ic2:te:82>,<ic2:te:88>,
<ic2:te:89>] as IItemStack[];
for i, myIndustrial in industrial {
    recipes.remove(myIndustrial);
}

// 热力
var thermal = [<thermalexpansion:morb>,<thermalexpansion:morb:1>,<thermalexpansion:satchel>]
as IItemStack[];
for i, myThermal in thermal {
    recipes.remove(myThermal);
}

// 匠魂2
recipes.remove(<tconstruct:throwball>);

// 应用能源
var applied = [<appliedenergistics2:spatial_io_port>,<appliedenergistics2:spatial_pylon>,<appliedenergistics2:part:300>,<appliedenergistics2:part:302>,
<appliedenergistics2:entropy_manipulator>,<appliedenergistics2:matter_cannon>,<appliedenergistics2:network_tool>,<appliedenergistics2:part:320>,
<appliedenergistics2:part:321>,<appliedenergistics2:tiny_tnt>]
as IItemStack[];
for i, myApplied in applied {
    recipes.remove(myApplied);
}

// 时装工坊
var armourer = [<armourers_workshop:tile.skin-library>,<armourers_workshop:tile.global-skin-library>,<armourers_workshop:tile.armourer>,
<armourers_workshop:tile.hologram-projector>,<armourers_workshop:tile.colour-mixer>,<armourers_workshop:tile.dye-table>,
<armourers_workshop:tile.skinning-table>,<armourers_workshop:item.mannequin>]
as IItemStack[];
for i, myArmourer in armourer {
    recipes.remove(myArmourer);
}

// 龙之研究/龙之进化
var draconic = [<draconicevolution:draconic_spawner>,<draconicevolution:diss_enchanter>,<draconicevolution:celestial_manipulator>,
<draconicevolution:reactor_component>,<draconicevolution:reactor_component:1>,<draconicevolution:generator>,
<draconicevolution:dislocator>,<draconicevolution:magnet>,<draconicevolution:magnet:1>,<draconicevolution:dislocator_bound:1>,
<draconicevolution:dislocator_bound:2>,<draconicevolution:dislocator_pedestal>,<draconicevolution:dislocator_receptacle>]
as IItemStack[];
for i, myDraconic in draconic {
    recipes.remove(myDraconic);
}

// 末影接口
var enderio = [<enderio:block_weather_obelisk>,<enderio:item_rod_of_return>,<enderio:item_travel_staff>,<enderio:block_killer_joe>,
<enderio:item_dark_steel_helmet>,<enderio:item_dark_steel_chestplate>,<enderio:item_dark_steel_leggings>,<enderio:item_dark_steel_boots>,
<enderio:item_end_steel_helmet>,<enderio:item_end_steel_chestplate>,<enderio:item_end_steel_leggings>,<enderio:item_end_steel_boots>,
<enderio:block_powered_spawner>,<enderio:item_dark_steel_sword>,<enderio:block_experience_obelisk>,<enderio:block_tele_pad>,<enderio:item_soul_vial>,
<enderio:block_crafter>,<enderio:block_enchanter>,<enderio:block_travel_anchor>,
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:travel"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt2"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt3"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:tnt4"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv1"}),
<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:inv2"})]
as IItemStack[];
for i, myEnderIO in enderio {
    recipes.remove(myEnderIO);
}

// 林业
var forestry = [<forestry:mailbox>,<forestry:trade_station>,<forestry:stamp_collector>,<forestry:rainmaker>,<forestry:apiarist_bag>,
<forestry:lepidopterist_bag>,<forestry:miner_bag>,<forestry:digger_bag>,<forestry:forester_bag>,<forestry:hunter_bag>,<forestry:adventurer_bag>,
<forestry:builder_bag>]
as IItemStack[];
for i, myForestry in forestry {
    recipes.remove(myForestry);
}

recipes.remove(<forestry:letters>);
mods.forestry.Carpenter.removeRecipe(<forestry:letters>);

// 更多元件
val cells = [<extracells:part.base:5>,<extracells:part.base:6>]
as IItemStack[];
for i, extraCells in cells {
    recipes.remove(extraCells);
}

// 沉浸工程
val immersive = [<immersiveengineering:revolver>,<immersiveengineering:railgun>,<immersiveengineering:chemthrower>,<immersiveengineering:toolbox>]
as IItemStack[];
for i, myImmersive in immersive {
    recipes.remove(myImmersive);
}

// 无尽贪婪
var avaritia = [<avaritia:infinity_pickaxe>,<avaritia:skullfire_sword>,<avaritia:infinity_bow>,<avaritia:infinity_shovel>,<avaritia:infinity_axe>,
<avaritia:infinity_hoe>]
as IItemStack[];
for i, myAvaritia in avaritia {
    mods.avaritia.ExtremeCrafting.remove(myAvaritia);
}

// 建筑
var build = [<buildcraftbuilders:quarry>,<buildcraftbuilders:architect>]
as IItemStack[];
for i, myBuild in build {
    recipes.remove(myBuild);
}

// 更多实用设备2
var extra = [<extrautils2:goldenlasso>,<extrautils2:goldenlasso:1>,<extrautils2:bagofholding>,<extrautils2:terraformer>,<extrautils2:teleporter:1>,
<extrautils2:angelblock>,<extrautils2:quarry>]
as IItemStack[];
for i, myExtra in extra {
    recipes.remove(myExtra);
}

// 植物魔法
var botania = [<botania:enderhand>,<botania:starfield>,<botania:manabomb>,<botania:laputashard>.withTag({}),<botania:spawnermover>.withTag({}),
<botania:astrolabe>.withTag({}),<botania:floatingspecialflower>.withTag({type: "rannuncarpus"}),<botania:floatingspecialflower>.withTag({type: "rannuncarpusChibi"}),
<botania:specialflower>.withTag({type: "rannuncarpus"}),<botania:specialflower>.withTag({type: "rannuncarpusChibi"}),<botania:dirtrod>,<botania:cobblerod>,
<botania:waterrod>,<botania:exchangerod>.withTag({}),<botania:smeltrod>,<botania:firerod>,<botania:missilerod>,<botania:diviningrod>,
<botania:gravityrod>.withTag({dist: -1.0, ticksCooldown: 0, ticksTillExpire: -55, target: -1}),
<botania:tornadorod>.withTag({flying: 0 as byte})]
as IItemStack[];
for i, myBotania in botania {
    recipes.remove(myBotania);
}
