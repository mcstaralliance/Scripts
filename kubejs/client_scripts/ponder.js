const IDLE = 80;
const DURATION = 60;

function showAddingItems(scene, pos, item1, item2, item3, item4) {
	scene.showControls(5, pos, 'down').showing('I_ADD').withItem(item1);
	scene.idle(15);
	scene.showControls(5, pos, 'down').showing('I_ADD').withItem(item2);
	scene.idle(15);
	scene.showControls(5, pos, 'down').showing('I_ADD').withItem(item3);
	scene.idle(15);
	scene.showControls(5, pos, 'down').showing('I_ADD').withItem(item4);
	scene.idle(15);
	scene.idle(20);
}

onEvent('ponder.registry', event => {
	event.create(['mekanismgenerators:fusion_reactor_frame',
	'mekanismgenerators:fusion_reactor_port',
	'mekanismgenerators:fusion_reactor_controller',
	'mekanismgenerators:laser_focus_matrix'])
	.scene('kubejs:reactor', '聚变反应堆多方块结构', 'kubejs:reactor', (scene, utils) => {
		scene.showBasePlate();
		scene.idle(20);
		scene.scaleSceneView(0.6);

		for (let i = 1; i <= 5; i++) {
			scene.addKeyframe();
			scene.world.showSection([6, i, 2, 2, i, 6], Direction.DOWN);
			scene.overlay.showOutline('blue', {}, [6, i, 2, 2, i, 6], DURATION);
			scene.playSound('block.stone.place');
			scene.text(DURATION, `§b第 ${i} 层`, [5, i + 0.5, 5]);
			if (i == 5) break;
			scene.idle(IDLE);
		}

		// 只是想模拟一下成型时的粒子效果。
		scene.idle(20);
		scene.particles.dust(1, Color.rgba(255, 0, 0, 255), [7, 1, 2]).density(1000).area([2, 6, 7]).lifetime(20);
		scene.idle(60);

		scene.addKeyframe();
		scene.rotateCameraY(180);
		scene.idle(DURATION);
		scene.rotateCameraY(180);
		scene.idle(DURATION);

		scene.addKeyframe();
		scene.showControls(DURATION, [4.5, 6, 4.5], 'down').showing('I_ADD').withItem('mekanismgenerators:hohlraum');
		scene.text(DURATION, '§d放入充满氘氚染料的黑体辐射腔', [4.5, 6, 4.5]);
		scene.idle(IDLE);
	});
});

onEvent('ponder.registry', event => {
	event.create(['tconstruct:seared_melter',
	'tconstruct:seared_heater']).scene('kubejs:melter', '焦黑熔化炉', 'kubejs:melter', (scene, utils) => {
		scene.showBasePlate();
		scene.idle(20);

		scene.rotateCameraY(-30);
		scene.addKeyframe();
		let blocksToPlace = [
			[2, 1, 3], [2, 2, 3], [2, 1, 2], [2, 2, 2]
		];
		scene.text(DURATION, "§a焦黑熔化炉是一个小型的多方块结构");
		for (let block of blocksToPlace) {
			scene.world.showSection(block, Direction.DOWN);
			scene.playSound('block.stone.place');
			scene.idle(5);
		}
		scene.idle(DURATION);

		scene.addKeyframe();
		scene.overlay.showOutline('blue', {}, [2, 2, 3], DURATION);
		scene.text(DURATION, '§a这是焦黑熔化炉的控制器，\n§a可以放入可以熔化的物品', [2.5, 3, 3.5]);
		showAddingItems(scene, [2.5, 3, 3.5], 'minecraft:iron_ore', 'minecraft:raw_iron', 'minecraft:iron_ingot', 'minecraft:iron_block');

		scene.addKeyframe();
		scene.overlay.showOutline('blue', {}, [2, 1, 3], DURATION);
		scene.text(DURATION, '§a这是焦黑熔化炉的加热器，\n§a需要为其提供燃料', [2.6, 1, 3.8]);
		showAddingItems(scene, [2.6, 1, 3.8], 'minecraft:oak_log', 'minecraft:oak_planks', 'minecraft:coal', 'minecraft:coal_block');

		scene.addKeyframe();
		scene.overlay.showOutline('blue', {}, [2, 1, 2, 2, 2, 2], DURATION);
		scene.text(DURATION, '§a右键浇筑口输出流体', [2.6, 2.5, 2.7]);
		scene.idle(IDLE);

		scene.rotateCameraY(30);
	});
});

onEvent('ponder.registry', event => {
	event.create(['minecraft:ender_eye',
	'minecraft:end_portal_frame'])
	.scene('kubejs:end_portal', '末地门搭建', 'kubejs:end_portal', (scene, utils) => {
		scene.showBasePlate();
		scene.idle(20);
		scene.scaleSceneView(0.7);

		scene.addKeyframe();
		let blocksToPlace = [
			[5, 1, 2], [4, 1, 2], [3, 1, 2],
			[2, 1, 3], [2, 1, 4], [2, 1, 5],
			[3, 1, 6], [4, 1, 6], [5, 1, 6],
			[6, 1, 5], [6, 1, 4], [6, 1, 3]
		];
		scene.text(150, "§a准备好一个平地，以你为中心，\n§a将 12 个末地门框架像这样摆放\n§c注意，一定要以你为中心，不然末地门框架朝向\n§c有问题会导致不能开门");
		for (let block of blocksToPlace) {
			scene.world.showSection(block, Direction.DOWN);
			scene.playSound('block.glass.place');
			scene.idle(5);
		}
		scene.idle(20);

		scene.addKeyframe();
		for (let block of blocksToPlace) {
			scene.world.modifyBlock(block, state => state.with("eye", true), false);
			scene.playSound('block.end_portal_frame.fill');
			scene.idle(5);
		}
		scene.world.setBlocks([3, 1, 3, 5, 1, 5], 'minecraft:end_portal');
		scene.world.showSection([3, 1, 3, 5, 1, 5], Direction.DOWN);
		scene.playSound('block.end_portal.spawn');

		scene.idle(10);
	});

	event.create(['minecraft:end_portal_frame',
	'dimdungeons:item_portal_key',
	'dimdungeons:block_gilded_portal',
	'dimdungeons:block_portal_keyhole'])
	.scene('kubejs:portal_key', '传送门钥匙获取', (scene, utils) => {
		scene.configureBasePlate(1, 1, 3);
		scene.showBasePlate();
		scene.idle(20);
		scene.scaleSceneView(1.3);
		scene.world.setBlocks([2, 1, 2], Block.id('minecraft:end_portal_frame'), false);
		scene.world.showSection([2, 1, 2], Direction.DOWN);

		scene.addKeyframe();
		scene.showControls(DURATION, [2.5, 2, 2.5], 'down').rightClick().withItem('dimdungeons:item_portal_key');
		scene.text(DURATION, '§b用空白传送门钥匙右键末地门框架', [2.5, 2, 2.5]);
		scene.idle(IDLE);

		scene.addKeyframe();
		scene.showControls(DURATION, [2.5, 2, 2.5], 'down').showing('I_REFRESH').withItem(Item.of('dimdungeons:item_portal_key', '{dest_x:5,dest_z:0,key_activated:1b}'));
		scene.text(DURATION, '§b就变成了激活了的钥匙', [2.5, 2, 2.5]);
		scene.playSound('block.beacon.activate');
		for (let i = 1; i <= 10; i++) {
			let xspeed = (Math.random() * 0.08) * (Math.random() < 0.5 ? 1 : -1);
			let yspeed = Math.random() * 0.4;
			let zspeed = (Math.random() * 0.08) * (Math.random() < 0.5 ? 1 : -1);
			scene.particles.simple(5, 'end_rod', [2.5, 2, 2.5]).delta([xspeed, yspeed, zspeed]).density(3);
			scene.idle(8);
		}
	})

	.scene('kubejs:portal', '维度传送门多方块结构', 'kubejs:portal', (scene, utils) => {
		scene.showBasePlate();
		scene.idle(20);
		scene.scaleSceneView(0.7);
		scene.world.modifyBlock([4, 4, 4], () => Block.id('dimdungeons:block_portal_keyhole'), false);

		scene.addKeyframe();
		let blocksToPlace = [
			[7, 1, 4], [7, 2, 4], [7, 3, 4],
			[4, 1, 4], [5, 2, 4], [3, 2, 4], [5, 3, 4], [3, 3, 4], [4, 4, 4],
			[1, 1, 4], [1, 2, 4], [1, 3, 4]
		];
		scene.text(180, '§a将传送门按照这样搭建');
		for (let block of blocksToPlace) {
			scene.world.showSection(block, Direction.DOWN);
			scene.playSound('block.stone.place');
			scene.idle(5);
		}
		scene.idle(20);

		scene.addKeyframe();
		scene.rotateCameraY(45);
		scene.idle(DURATION);
		scene.rotateCameraY(-45);
		scene.idle(DURATION);

		scene.addKeyframe();
		scene.showControls(IDLE, [4.5, 5, 4.5], 'down').rightClick().withItem(Item.of('dimdungeons:item_portal_key', '{dest_x:5,dest_z:0,key_activated:1b}'));
		scene.text(DURATION, '§b将刚刚在末地门框架右键获得的钥匙\n§b右键传送门基石', [4.5, 5, 4.5]);
		scene.idle(IDLE);

		scene.addKeyframe();
		scene.world.modifyBlock([4, 4, 4], state => state.with('lit', true), false);
		scene.playSound('block.tripwire.click_on');
		scene.world.showSection([4, 2, 4], Direction.DOWN);
		scene.world.showSection([4, 3, 4], Direction.DOWN);
		scene.text(DURATION, '§d通往地牢的门就打开了');
		for (let i = 1; i <= 10; i++) {
			let x1 = 4 + Math.random(), x2 = 4 + Math.random();
			let y1 = 2 + 0.8, y2 = 3 + 0.8;
			let z1 = 4 + Math.random(), z2 = 4 + Math.random();
			let xspeed = (Math.floor(Math.random() * 3) - 1) / 9;
			let zspeed = (Math.floor(Math.random() * 3) - 1) / 9;
			scene.particles.simple(1, 'end_rod', [x1, y1, z1]).motion([xspeed, 0.0, zspeed]).density(2);
			scene.particles.simple(1, 'end_rod', [x2, y2, z2]).motion([xspeed, 0.0, zspeed]).density(2);
			scene.idle(8);
		}
	});
});

onEvent('ponder.registry', event => {
	event.create(['mekanism:ethene', // 由于乙烯物品由 JEI 提供所以实际不显示
	'mekanism:hdpe_pellet',
	'mekanism:hdpe_rod',
	'mekanism:hdpe_sheet',
	'mekanism:ethene_bucket'])
	.scene('kubejs:ethene', '乙烯产线', 'kubejs:ethene', (scene, utils) => {
		scene.showBasePlate();
		scene.idle(20);

		scene.addKeyframe();
		scene.world.showSection([3, 1, 1], Direction.DOWN);
		scene.playSound('block.netherite_block.place');
		scene.overlay.showOutline('red', {}, [3, 1, 1], DURATION);
		scene.text(DURATION, '使用有机灌注器种植作物', [3.5, 2, 1.5]);
		showAddingItems(scene, [3.5, 2, 1.5], 'minecraft:wheat_seeds', 'minecraft:beetroot_seeds', 'minecraft:carrot', 'minecraft:potato');

		function processMachine(scene, x, y, z, text) {
			scene.addKeyframe();
			scene.world.showSection([x, y, z], Direction.DOWN);
			scene.playSound('block.stone.place');
			scene.overlay.showOutline('red', {}, [x, y, z], DURATION);
			scene.text(DURATION, text, [x + 0.5, y + 1, z + 0.5]);
			scene.idle(IDLE);
		}

		function io(scene, inputPos, outputPos, textPos, text) {
			scene.addKeyframe();
			scene.overlay.showOutline('input', {}, inputPos, DURATION);
			scene.overlay.showOutline('output', {}, outputPos, DURATION);
			scene.text(DURATION, text, textPos);
			scene.idle(IDLE);
		}

		processMachine(scene, 2, 1, 2, '水源');
		processMachine(scene, 3, 1, 2, '粉碎机将作物粉碎为生物燃料');
		processMachine(scene, 2, 1, 3, '电解分离器分解水产出氢气和氧气');
		processMachine(scene, 3, 1, 3, '加压反应室消耗水、氢气和生物燃料产出基片');
		processMachine(scene, 4, 1, 4, '回旋式气液转换机将气体乙烯转换为液态乙烯');
		processMachine(scene, 4, 1, 3, '另一个加压反应室消耗液态乙烯、氧气和基片产出高密度聚乙烯丸');

		scene.world.showSection([2, 1, 1], Direction.DOWN);
		io(scene, [2, 1, 2], [3, 1, 1], [2.5, 1.5, 1.5], '为§e有机灌注器§r供§b水');

		io(scene, [3, 1, 1], [3, 1, 2], [3.5, 2, 2], '通过设置将§b有机灌注器§r中的作物输出至§e粉碎机');

		scene.world.showSection([2, 2, 2], Direction.DOWN);
		scene.world.showSection([2, 2, 3, 3, 2, 3], Direction.DOWN);
		io(scene, [2, 1, 2], [2, 1, 3, 3, 1, 3], [3, 2, 3.5], '为§e电解分离器和加压反应室§r供§b水');

		io(scene, [2, 1, 3], [3, 1, 3], [3, 2, 3.5], '通过设置将§b电解分离器§r产出的氢气\n输出至§e加压反应室');

		scene.world.showSection([1, 1, 3, 1, 2, 3], Direction.DOWN);
		scene.world.showSection([1, 3, 3, 4, 3, 3], Direction.DOWN);
		scene.world.showSection([4, 2, 3], Direction.DOWN);
		io(scene, [2, 1, 3], [4, 1, 3], [3, 3.5, 3.5], '将§b电解分离器§r产出的氧气\n输出至另一个§e加压反应室');

		scene.rotateCameraY(-90);
		scene.world.showSection([3, 1, 4], Direction.DOWN);
		io(scene, [3, 1, 3], [4, 1, 4], [3.5, 1.5, 4.5], '将之前的§b加压反应室§r产出的气体乙烯输出至§e回旋式气液转换机');
		scene.rotateCameraY(90);

		scene.rotateCameraY(90);
		scene.world.modifyBlock([5, 1, 3], state => state.with('south', true), false); // 这个地方的管道显示有点问题没连起来，手动连
		scene.world.showSection([5, 1, 3, 5, 1, 4], Direction.DOWN);
		io(scene, [4, 1, 4], [4, 1, 3], [4.5, 2, 4], '将§b回旋式气液转换机§r产出的液态乙烯输出至另一个§e加压反应室');

		scene.world.showSection([4, 1, 1, 4, 1, 2], Direction.DOWN);
		scene.showControls(DURATION, [4.5, 2, 1.5], 'down').withItem('mekanism:hdpe_pellet');
		io(scene, [4, 1, 3], [4, 1, 1], [4.5, 1.5, 2.5], '最后，输出高密度聚乙烯丸');

		scene.addKeyframe();
		scene.rotateCameraY(90);
		scene.idle(DURATION);
		scene.rotateCameraY(90);
		scene.idle(DURATION);
		scene.rotateCameraY(90);
		scene.idle(DURATION);
		scene.text(DURATION, '别忘了给机器通电！');
		scene.idle(DURATION);
	});
});