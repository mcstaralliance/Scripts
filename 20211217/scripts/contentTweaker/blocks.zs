#loader contenttweaker
#priority 10000000
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var magicLog = VanillaFactory.createBlock("magic_log", <blockmaterial:wood>);
magicLog.toolClass = "axe";
magicLog.toolLevel = 1.0;
magicLog.blockSoundType = <soundtype:wood>;
magicLog.creativeTab = <creativetab:tab>;
magicLog.register();

var mySkull = VanillaFactory.createBlock("skull_block", <blockmaterial:wood>);
mySkull.toolClass = "pickaxe";
mySkull.toolLevel = 1.0;
mySkull.blockSoundType = <soundtype:wood>;
mySkull.creativeTab = <creativetab:tab>;
mySkull.register();

var myStone = VanillaFactory.createBlock("magic_stone", <blockmaterial:wood>);
myStone.toolClass = "pickaxe";
myStone.toolLevel = 1.0;
myStone.blockSoundType = <soundtype:wood>;
myStone.creativeTab = <creativetab:tab>;
myStone.register();
