/**
 * @author 星域联盟
 * @version 22.1.13
 */
#priority 1000

import crafttweaker.event.BlockHarvestDropsEvent;
import crafttweaker.block.IBlock;
import crafttweaker.world.IWorld;

// 设置方块掉落
events.onBlockHarvestDrops(function(event as BlockHarvestDropsEvent) {
    val block as IBlock = event.block;
    val world as IWorld = event.world;
    if (!world.remote) {
        if (event.drops.length == 0 || event.silkTouch) {
            return;
        }
        if (block.definition.id == "minecraft:wool" && block.meta == 15) {
            event.drops = [<contenttweaker:skull_block> % 100];
        }
    }
});
