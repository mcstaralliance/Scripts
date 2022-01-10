#loader contenttweaker
#priority 2000

import mods.contenttweaker.Item;
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.ItemFood;
import crafttweaker.item.IItemStack as IItemStack;

val starCraftCrativeTab = VanillaFactory.createCreativeTab("tab", <item:minecraft:nether_star>);
starCraftCrativeTab.register();

var woodenShears = VanillaFactory.createItem("wooden_shears");
woodenShears.maxStackSize = 1;
woodenShears.maxDamage = 233;
woodenShears.creativeTab = <creativetab:tab>;
woodenShears.register();

var clayFurnace = VanillaFactory.createItem("clay_furnace");
clayFurnace.maxStackSize = 16;
clayFurnace.creativeTab = <creativetab:tab>;
clayFurnace.register();

var magicLog = VanillaFactory.createBlock("magic_log", <blockmaterial:wood>);
magicLog.toolClass = "axe";
magicLog.toolLevel = 1.0;
magicLog.blockSoundType = <soundtype:wood>;
magicLog.fullBlock = true;
magicLog.creativeTab = <creativetab:tab>;
magicLog.register();

var myHammer = VanillaFactory.createItem("hammer");
myHammer.maxStackSize = 1;
myHammer.maxDamage = 1000;
myHammer.creativeTab = <creativeTab:tab>;
myHammer.register();

var myProcessor = VanillaFactory.createItem("processor");
myProcessor.maxStackSize = 64;
myProcessor.creativeTab = <creativeTab:tab>;
myProcessor.glowing = true;
myProcessor.register();

var dragonCore = VanillaFactory.createItem("dragon");
dragonCore.maxStackSize = 8;
dragonCore.creativeTab = <creativeTab:tab>;
dragonCore.glowing = true;
dragonCore.register();

var mySkull = VanillaFactory.createBlock("skull_block", <blockmaterial:wood>);
mySkull.toolClass = "pickaxe";
mySkull.toolLevel = 1.0;
mySkull.blockSoundType = <soundtype:wood>;
mySkull.fullBlock = true;
mySkull.creativeTab = <creativetab:tab>;
mySkull.register();

var myStone = VanillaFactory.createBlock("magic_stone", <blockmaterial:wood>);
myStone.toolClass = "pickaxe";
myStone.toolLevel = 1.0;
myStone.blockSoundType = <soundtype:wood>;
myStone.fullBlock = true;
myStone.creativeTab = <creativetab:tab>;
myStone.register();

var myPaiMon = VanillaFactory.createItemFood("paimon", 4);
myPaiMon.maxStackSize = 16;
myPaiMon.wolfFood = true;
myPaiMon.healAmount = 4;
myPaiMon.alwaysEdible = true;
myPaiMon.creativeTab = <creativetab:tab>;
myPaiMon.register();

var myEntanglement = VanillaFactory.createItem("jiuchan");
myEntanglement.maxStackSize = 10;
myEntanglement.creativeTab = <creativetab:tab>;
myEntanglement.register();

var myStar = VanillaFactory.createItem("star");
myStar.maxStackSize = 64;
myStar.creativeTab = <creativetab:tab>;
myStar.register();

var myPrimoGem = VanillaFactory.createItem("primogem");
myPrimoGem.maxStackSize = 64;
myPrimoGem.creativeTab = <creativetab:tab>;
myPrimoGem.register();

var myFate = VanillaFactory.createItem("xiangyu");
myFate.maxStackSize = 10;
myFate.creativeTab = <creativetab:tab>;
myFate.register();

var myDualVectorFoil = VanillaFactory.createItem("artificialfoil");
myDualVectorFoil.creativeTab = <creativetab:tab>;
myDualVectorFoil.register();

var myDust = VanillaFactory.createItem("soildust");
myDust.creativeTab = <creativetab:tab>;
myDust.register();

var myAluminium = VanillaFactory.createItem("aluminium_ingot");
myAluminium.creativeTab = <creativetab:tab>;
myAluminium.register();

var myCopper = VanillaFactory.createItem("copper_ingot");
myCopper.creativeTab = <creativetab:tab>;
myCopper.register();

var myIridium = VanillaFactory.createItem("iridium_ingot");
myIridium.creativeTab = <creativetab:tab>;
myIridium.register();

var myLead = VanillaFactory.createItem("lead_ingot");
myLead.creativeTab = <creativetab:tab>;
myLead.register();

var myNickel = VanillaFactory.createItem("nickel_ingot");
myNickel.creativeTab = <creativetab:tab>;
myNickel.register();

var myPlatinum = VanillaFactory.createItem("platinum_ingot");
myPlatinum.creativeTab = <creativetab:tab>;
myPlatinum.register();

var mySilver = VanillaFactory.createItem("silver_ingot");
mySilver.creativeTab = <creativetab:tab>;
mySilver.register();

var myTin = VanillaFactory.createItem("tin_ingot");
myTin.creativeTab = <creativetab:tab>;
myTin.register();

var myUranium = VanillaFactory.createItem("uranium_ingot");
myUranium.creativeTab = <creativetab:tab>;
myUranium.register();
