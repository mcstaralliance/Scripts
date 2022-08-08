import mods.botaniatweaks.Agglomeration;
import crafttweaker.item.IItemStack;

val beefRaw = <minecraft:beef>;
val rabbitRaw = <minecraft:rabbit>;
val chickenRaw = <minecraft:chicken>;
val pigRaw = <minecraft:porkchop>;
val fishRaw = <minecraft:fish>;
val neutron = <avaritia:resource:2>;
val cosmicMeatBall = <avaritia:cosmic_meatballs>;
val ultimateStew = <avaritia:ultimate_stew>;
val pumpkin = <minecraft:pumpkin>;
val brownMushRoom = <minecraft:brown_mushroom>;
val wheat = <minecraft:wheat>;
val carrot = <minecraft:carrot>;
val beetRoot = <minecraft:beetroot>;
val apple = <minecraft:apple>;
val potato = <minecraft:potato>;
val melon = <minecraft:melon>;
val cactus = <minecraft:cactus>;

var removeRuneAltar as IItemStack[] = [
    <botania:rune>,
    <botania:rune:1>,
    <botania:rune:2>,
    <botania:rune:3>
];
for myRemoveRuneAltar in removeRuneAltar{
    mods.botania.RuneAltar.removeRecipe(myRemoveRuneAltar);
}

var removeItem as IItemStack[] = [
    <botania:spreader>,
    <botania:pool>,
    <astralsorcery:itemwand>,
    <avaritia:resource:1>,
    <botania:altar>
];
for myRemoveItem in removeItem{
    recipes.remove(myRemoveItem);
}

mods.botania.PureDaisy.removeRecipe(<botania:livingrock>);
mods.botania.PureDaisy.removeRecipe(<botania:livingwood>);

mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/knowledgeshare");
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/tool_basicwand");

mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumcraft:infusion_matrix>);
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumadditions:knowledge_tome>);

Agglomeration.removeRecipe(<botania:manaresource:4>, [<botania:manaresource:2>, <botania:manaresource>, <botania:manaresource:1>]);

// 花瓣
for i in 0 to 16{
    var mysticalPetal as IItemStack = <botania:petal>.definition.makeStack(i);
    recipes.addShapeless("petal_duplication" + i, mysticalPetal * 4, [mysticalPetal, <minecraft:dye:15>]);
}

// 活石活木
mods.botania.PureDaisy.addRecipe(<thaumcraft:stone_arcane>,<botania:livingrock>, 100);
mods.botania.PureDaisy.addRecipe(<thaumadditions:chiseled_greatwood>,<botania:livingwood>, 100);

// 植魔四符文
mods.botania.RuneAltar.addRecipe(<botania:rune>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "aqua"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <minecraft:waterlily>, <minecraft:water_bucket>, <ore:sugarcane>], 20000);
mods.botania.RuneAltar.addRecipe(<botania:rune:1>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "ignis"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <minecraft:fire_charge>, <minecraft:tnt>, <minecraft:magma_cream>], 20000);
mods.botania.RuneAltar.addRecipe(<botania:rune:2>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "terra"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <botania:grassseeds>, <minecraft:sandstone>, <minecraft:dirt>], 20000);
mods.botania.RuneAltar.addRecipe(<botania:rune:3>,[<thaumadditions:salt_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]}), <botania:manaresource>, <thaumcraft:salis_mundus>, <minecraft:feather>, <minecraft:wheat_seeds>, <minecraft:red_flower>], 20000);

// 荒古邪术石
mods.botania.ElvenTrade.addRecipe([<thaumcraft:stone_ancient>], [<thaumcraft:stone_arcane>, <rftools:infused_enderpearl>]);
mods.botania.ElvenTrade.addRecipe([<thaumcraft:stone_eldritch_tile>], [<thaumcraft:stone_arcane>, <thaumcraft:ingot:1>]);
mods.botania.ElvenTrade.addRecipe([<botania:gaiahead>], [<botania:manaresource:14>, <mw:mininuke>, <extraplanets:nuclear_bomb>, <cyclicmagic:dynamite_safe>, <cyclicmagic:ender_tnt_6>, <extraplanets:fire_bomb>]);

// 共鸣星杖
mods.thaumcraft.Infusion.registerRecipe("itemwand", "",<astralsorcery:itemwand>, 15, [
    <aspect:auram> * 20, <aspect:vacuos> * 50, <aspect:ordo> * 30, <aspect:praecantatio> * 30, <aspect:cognitio> * 100
    ], 
    <botania:twigwand>, [
        <astralsorcery:itemusabledust:1>, <astralsorcery:itemusabledust>, <astralsorcery:itemcraftingcomponent>, <astralsorcery:itemcraftingcomponent:2>, <astralsorcery:itemrockcrystalsimple>, <astralsorcery:itemcraftingcomponent:3>
    ]
);

// 水晶矩阵锭
mods.thaumcraft.Infusion.registerRecipe("avaritia_ingot", "",<avaritia:resource:1>, 20, [
    <aspect:metallum> * 50, <aspect:caeles> * 1
    ], 
    <thaumadditions:mithrillium_ingot>, [
        <avaritia:resource>, <minecraft:nether_star>
    ]
);

// 泰拉钢锭
Agglomeration.addRecipe(<botania:manaresource:4>, [
    <botania:manaresource:1>, <botania:manaresource:2>, <ic2:ingot:5>, <astralsorcery:itemcraftingcomponent:2>
    ], 250000, 0xFF7F50, 0xADFF2F, <botania:runealtar>, <astralsorcery:blockinfusedwood:6>, <thaumadditions:crystal_block>
);

// 符文矩阵
mods.thaumcraft.ArcaneWorkbench.registerShapedRecipe("infusion_matrix", "", 200, [
    <aspect:aer>, <aspect:ignis>, <aspect:terra>, <aspect:aqua>, <aspect:ordo>, <aspect:perditio>
    ], <thaumcraft:infusion_matrix>, [
        [<thaumcraft:stone_arcane_brick>, <thaumcraft:nitor_yellow>, <thaumcraft:stone_arcane_brick>], 
        [<thaumcraft:alumentum>, <openblocks:golden_eye>, <thaumcraft:alumentum>], 
        [<thaumcraft:stone_arcane_brick>, <thaumcraft:nitor_yellow>, <thaumcraft:stone_arcane_brick>]
    ]
);

// 花药台
mods.thaumcraft.Crucible.registerRecipe("botania_altar", "", <botania:altar>, <thaumcraft:table_stone>, [<aspect:vacuos> * 20]);

// 知识共享卷轴
recipes.addShapeless(<astralsorcery:itemknowledgeshare>, [<astralsorcery:itemcraftingcomponent:5>, <thaumadditions:adaminite_ingot>]);

// 魔力池
recipes.addShaped(<botania:pool>, [
    [<ore:ingotBrass>, null, <ore:ingotThaumium>],
    [<ore:livingrock>, null, <ore:livingrock>],
    [<ore:livingrock>, <ore:livingrock>, <ore:livingrock>]
]);

// 魔力发射器
recipes.addShaped(<botania:spreader>, [
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>],
    [<ore:dustAstralStarmetal>, <astralsorcery:itemcraftingcomponent>, null],
    [<ore:livingwood>, <ore:livingwood>, <ore:livingwood>]
]);

// 荒古注魔柱
recipes.addShaped(<thaumcraft:pillar_ancient>, [
    [null, <thaumcraft:stone_ancient>, null],
    [null, <thaumcraft:stone_ancient>, null],
    [null, <thaumcraft:stone_ancient>, null]
]);

// 邪术注魔柱
recipes.addShaped(<thaumcraft:pillar_eldritch>, [
    [null, <thaumcraft:stone_eldritch_tile>, null],
    [null, <thaumcraft:stone_eldritch_tile>, null],
    [null, <thaumcraft:stone_eldritch_tile>, null]
]);

// 无尽之锭
mods.avaritia.ExtremeCrafting.remove(<avaritia:resource:6>);
recipes.addShaped(<avaritia:resource:6>*3, 
[
    [<avaritia:resource:4>, <avaritia:resource:4>, <avaritia:resource:4>],
    [<avaritia:resource:1>, <avaritia:resource:5>, <avaritia:resource:1>],
    [<avaritia:resource:4>, <avaritia:resource:4>, <avaritia:resource:4>]
]);

// 知识巨著
<ore:share_tome>.add(<astralsorcery:itemknowledgeshare>, <thaumadditions:knowledge_tome>);

// 寰宇肉丸
recipes.addShapeless(cosmicMeatBall,[neutron, chickenRaw, fishRaw, pigRaw, rabbitRaw, beefRaw]);

// 超级煲
recipes.addShaped(ultimateStew*9,[[pumpkin, brownMushRoom, wheat],[beetRoot, neutron, apple,],[potato, melon, cactus]]);

// 无尽套
recipes.addShaped(<avaritia:infinity_helmet>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_helm>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

recipes.addShaped(<avaritia:infinity_chestplate>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_chest>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

recipes.addShaped(<avaritia:infinity_pants>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_legs>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

recipes.addShaped(<avaritia:infinity_boots>, 
[
    [<avaritia:block_resource:1>, <avaritia:block_resource>, <avaritia:block_resource:1>],
    [<avaritia:block_resource>, <draconicevolution:draconic_boots>, <avaritia:block_resource>],
    [<avaritia:resource:5>, <avaritia:block_resource>, <avaritia:resource:5>]
]);

// 无尽催化剂修复
mods.avaritia.ExtremeCrafting.remove(<avaritia:resource:5>);
mods.avaritia.ExtremeCrafting.addShaped("resource_5",<avaritia:resource:5>,
[[<avaritia:resource:1>,<avaritia:resource>,<avaritia:resource:2>,<avaritia:resource:3>,<avaritia:resource:4>,<avaritia:resource:7>,<avaritia:endest_pearl>,<avaritia:cosmic_meatballs>,<avaritia:singularity:8>],
[<avaritia:singularity:10>,<avaritia:singularity:7>,<avaritia:singularity:6>,<avaritia:singularity:5>,<avaritia:singularity:4>,<avaritia:singularity:3>,<avaritia:singularity:2>,<avaritia:singularity:1>,<avaritia:singularity>],
[<enderio:block_alloy:6>,<ic2:resource:8>,<thermalfoundation:storage_alloy:7>,<avaritia:singularity:11>,<avaritia:singularity:9>, <thaumadditions:adaminite_block>, <extrabotany:blockorichalcos>, <extraplanets:tier11_items:4>]]);