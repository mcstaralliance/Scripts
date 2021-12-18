import crafttweaker.events.IEventManager;
import crafttweaker.event.BlockHarvestDropsEvent;
import crafttweaker.block.IBlock;

events.onBlockHarvestDrops(function(event as BlockHarvestDropsEvent) {
    if (!event.world.remote) { 
        if (event.drops.length == 0 || event.silkTouch) {
            return; 
        }
        val block as IBlock = event.block;
        if (block.definition.id == "minecraft:wool" && block.meta == 15) { 
            event.drops = [<contenttweaker:skull_block> % 100]; 
        } 
    } 
});