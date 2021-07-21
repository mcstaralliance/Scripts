import mods.techreborn.chemicalReactor;
import crafttweaker.event.PlayerCraftedEvent;
import crafttweaker.item.IItemStack as IItemStack;
import crafttweaker.oredict.IOreDictEntry;
import crafttweaker.oredict.IOreDict;
import crafttweaker.item.IIngredient;
import crafttweaker.item.IItemDefinition;
import crafttweaker.player.IPlayer;
import crafttweaker.recipes.ICraftingInventory;
import mods.thaumcraft.ArcaneWorkbench;
import crafttweaker.data.IData;

// ic2 火力发电机修复
recipes.remove(<ic2:te:3>);
recipes.addShaped(<ic2:te:3>, 
[
    [null, <ore:reBattery>, null],
    [<ore:plateIron>, <ore:plateIron>, <ore:plateIron>],
    [null, <ic2:te:46>, null]
]);

// 修复 碳酸钙单元 的合成表问题
val carbonCell = <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcarbonfiber", Amount: 1000}});
val calciumCell = <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcalcium", Amount: 1000}});
val calciumcarbonateCell = <techreborn:dynamiccell>.withTag({Fluid: {FluidName: "fluidcalciumcarbonate", Amount: 1000}});
mods.techreborn.chemicalReactor.addRecipe(calciumcarbonateCell, carbonCell * 2, calciumCell, 60, 50);

// 修复 科技重生 电路板的合成
recipes.remove(<techreborn:part:29>);
recipes.addShaped(<techreborn:part:29>, 
[
    [<techreborn:cable:5>, <techreborn:cable:5>, <techreborn:cable:5>],
    [<ore:dustRedstone>, <minecraft:iron_ingot>, <ore:dustRedstone>],
    [<techreborn:cable:5>, <techreborn:cable:5>, <techreborn:cable:5>]
]);

// 修复 能量水晶 粉碎机配方
Lib.addGrinder(<techreborn:energycrystal>,<ic2:dust:6>*3,5,2048);

// 白铜线圈
recipes.addShaped(<techreborn:part:13> * 2, 
[
    [<ore:ingotNickel>, <ore:ingotCopper>, <ore:ingotNickel>],
    [<ore:ingotCopper>, null, <ore:ingotCopper>],
    [<ore:ingotNickel>, <ore:ingotCopper>, <ore:ingotNickel>]
]);

// 镍铬合金线圈
recipes.addShaped(<techreborn:part:14> * 2, 
[
    [null, <ore:ingotNickel>, null],
    [<ore:ingotNickel>, <ore:ingotChrome>, <ore:ingotNickel>],
    [null, <ore:ingotNickel>, null]
]);

// 坝塔尔合金线圈
recipes.addShaped(<techreborn:part:15> * 2, 
[
    [<ore:ingotRefinedIron>, <ore:ingotRefinedIron>, <ore:ingotRefinedIron>],
    [<ore:ingotChrome>, <ore:ingotChrome>, <ore:ingotAluminum>],
    [<ore:ingotChrome>, <ore:ingotAluminum>, <ore:ingotAluminum>]
]);

// 红宝石与匠魂铸造模
recipes.addShaped("gemTotoly",<techreborn:gem> * 2, 
[
    [null, <tconstruct:cast_custom:2>.marked("anyCast"), null],
    [null, null, null],
    [<appliedenergistics2:paint_ball:20>.marked("ballDamageTransformor"), <tconstruct:slime_channel:3>.marked("anyChannel"), <ore:dustDiamond>]
],function(out, ins, cInfo) {
    var cast as string[] = [ins.anyCast.displayName,ins.anyChannel.displayName];
    var item_tconstruct_clay_cast_blank_damage = ins.ballDamageTransformor.displayName;
    var castReborn as string = cast[0]+cast[1];
    if(!isNull(cInfo.inventory.player.currentItem)){
        if (cInfo.inventory.player.currentItem.definition.id == <tconstruct:cast_custom:2>.definition.id){
            if (castReborn has ":") {
                if (item_tconstruct_clay_cast_blank_damage == "0") {
                    return itemUtils.getItem(castReborn);
                }
                return itemUtils.getItem(castReborn, item_tconstruct_clay_cast_blank_damage);
            }
            return out;
        }
        return out;
    }
    return out;
}, null);

// 修复 tr 橡胶木合成
recipes.addShapeless(<minecraft:log2>, 
[
    <techreborn:rubber_log>
]);

// 奥数工作台 DNA 球
mods.thaumcraft.ArcaneWorkbench.removeRecipe(<thaumadditions:dna_sample>);

// 虚空种子于命运骰子回收
recipes.addShaped("diceCyc",<thaumcraft:void_seed> * 2, 
[
    [<botania:enderdagger>.anyDamage().transformDamage(20), null],
    [<botania:dice>.marked("nbt"), null]
],function(out, ins, cInfo) {
    var playerUuid as string = cInfo.inventory.player.uuid;
    if (playerUuid == ins.nbt.tag.soulbindUUID){
        return <thaumcraft:void_seed> * 2;
    }
    cInfo.inventory.player.sendChat("You must own the dice. 你必须是此骰子的拥有者。");
    return null;
}, null);
