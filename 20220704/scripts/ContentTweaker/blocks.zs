#loader contenttweaker
#priority 10000000

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;


function blockBuilder(name as string, toolClass as string) {
    var block as Block = VanillaFactory.createBlock(name, <blockmaterial:wood>);
    block.creativeTab = <creativetab:tab>;
    block.blockSoundType = <soundtype:wood>;
    block.toolClass = toolClass;
    block.toolLevel = 1.0;
    block.fullBlock = true;
    block.register();
}

blockBuilder("magic_log", "axe");
blockBuilder("skull_block", "pickaxe");
blockBuilder("magic_stone", "pickaxe");
