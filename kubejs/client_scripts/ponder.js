Ponder.registry((event)=>{
    event.create('xycraft_world:kivi').scene("kivi_stone_created", "如何制作 kivi 石头", (scene, util)=>{
        scene.showStructure();
        scene.world.setBlocks([1,1,1, 3,1,3],'ae2:smooth_sky_stone_block',true)
        scene.idle(20)
        scene.world.setBlocks([1,2,1, 3,2,3],'ae2:smooth_sky_stone_block',true)
        scene.idle(20)
        scene.world.replaceBlocks([2,2,2],'minecraft:crying_obsidian',true)
        scene.idle(20)
        scene.world.replaceBlocks([2,2,1],'minecraft:coal_block',true)
        scene.idle(20)
        scene.world.setBlocks([1,3,1, 3,3,3],'ae2:smooth_sky_stone_block',true);
        scene.idle(20)
        scene.text(40, "使用无限粉右键煤炭块", [2.5, 2.5, 1.5])
        scene
            .showControls(40, [2.5, 2.5, 1.5], "down")
            .rightClick()
            .withItem('enderio:grains_of_infinity');
        scene.idle(20)
        scene.world.replaceBlocks([1,1,1, 3,3,3],'minecraft:air',true);
        scene.idle(20)
        scene.world.createItemEntity([2.5, 1.5, 1.5], util.vector.of(0, 0.4, -0.07), "xycraft_world:kivi");
        scene.world.createItemEntity([2.5, 1.5, 1.5], util.vector.of(-0.07, 0.4, -0.07), "xycraft_world:kivi");
    })
})

Ponder.registry((event) => {
    event.create('ae2:mysterious_cube').scene("mysterious_cube_created", "如何获取压印模版", (scene, util)=>{
        scene.showStructure();

        scene.idle(20)
        scene.world.setBlocks([0,1,0, 4,1,4],'xycraft_world:kivi',true)
        scene.addKeyframe();
        
        scene.idle(40)
        scene.world.setBlocks([0,2,0, 4,2,4],'xycraft_world:kivi',true)
        scene.world.replaceBlocks([1,2,1, 3,2,3],'minecraft:redstone_block',true)
        scene.world.replaceBlocks([2,2,1],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([3,2,2],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([1,2,2],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([2,2,3],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([2,2,2],'minecraft:iron_block',true)
        scene.addKeyframe();
        
        scene.idle(40)
        scene.world.setBlocks([0,3,0, 4,3,4],'xycraft_world:kivi',true)
        scene.world.replaceBlocks([1,3,1, 3,3,3],'ae2:quartz_block',true)
        scene.addKeyframe();

        scene.idle(40)
        scene.world.setBlocks([0,4,0, 4,4,4],'xycraft_world:kivi',true)
        scene.world.replaceBlocks([1,4,1, 3,4,3],'minecraft:redstone_block',true)
        scene.world.replaceBlocks([2,4,1],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([3,4,2],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([1,4,2],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([2,4,3],'minecraft:lapis_block',true)
        scene.world.replaceBlocks([2,4,2],'minecraft:iron_block',true)
        scene.addKeyframe();

        scene.idle(40)
        scene.world.setBlocks([0,5,0, 4,5,4],'xycraft_world:kivi',true)
        scene.addKeyframe();

        scene.idle(20)
        scene.world.replaceBlocks([1,2,0, 3,4,0],'ae2:fluix_block',true)
        scene.world.replaceBlocks([2,3,0],'minecraft:diamond_block',true)
        scene.idle(20)
        scene.addKeyframe();

        scene.text(40, "使用环境存储器核心右键钻石块", [2.5, 3.5, 0])
        scene
            .showControls(40, [2.5, 3.5, 0], "down")
            .rightClick()
            .withItem('evilcraft:environmental_accumulation_core');
        scene.idle(40)
        scene.world.replaceBlocks([0,1,0,4,5,4],'minecraft:air',true)
        scene.idle(10)
        scene.world.createItemEntity([2.5, 2.5, 2.5], util.vector.of(0, 0.4, -0.07), 'ae2:mysterious_cube');
        scene.idle(10)
        scene.text(20, "获得神秘方块", [1.5, 2.5, 0])
    })
})