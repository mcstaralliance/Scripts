recipes.remove(<xtones:base>);
var machineName = "dragon";
val recipesTickTime = 72000;

recipes.remove(<draconicevolution:draconic_core>);
recipes.addShapeless(<draconicevolution:draconic_core>,[<thaumcraft:grapple_gun_spool>,<thaumcraft:plate:3>,<thaumcraft:tallow>,<draconicevolution:draconium_ingot>*2,<forestry:pollen>,<thaumcraft:mind>]);
//龙芯 龙锭*2 机动装置滚轴 虚空金属板 魔力油脂 花粉 发条之心
recipes.remove(<draconicevolution:wyvern_core>);
recipes.addShaped("WyvernCore",<draconicevolution:wyvern_core>,[[<thaumcraft:brain>,<draconicevolution:draconic_core>,<thaumcraft:morphic_resonator>],[<draconicevolution:draconic_core>,<minecraft:nether_star>,<draconicevolution:draconic_core>],[<thaumcraft:morphic_resonator>,<draconicevolution:draconic_core>,<thaumcraft:brain>]]);
//双足飞龙芯 龙芯*4 僵尸脑子*2 形态谐振器*2 下届*1
recipes.addShaped("awakedcore", <draconicevolution:awakened_core>, [[<draconicevolution:draconic_ingot>, <draconicevolution:wyvern_core>, <thaumcraft:focus_3>], [<draconicevolution:wyvern_core>, <draconicevolution:wyvern_core>, <draconicevolution:wyvern_core>], [<thaumcraft:focus_3>, <draconicevolution:wyvern_core>, <draconicevolution:draconic_ingot>]]);
//觉醒龙芯合成 双足龙芯*5 觉醒锭*2 空白大师核心*2

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "sword", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_sword>)
	.addItemInput(<thaumadditions:mithminite_plate>*6)
	.addItemInput(<thaumcraft:focus_2>)
	.addItemInput(<draconicevolution:wyvern_sword>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//神龙剑 秘金板*6 高级空白核心*1 双足剑 神龙能量核心

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "pick", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_pick>)
	.addItemInput(<thaumadditions:mithminite_plate>*6)
	.addItemInput(<thaumcraft:focus_2>)
	.addItemInput(<draconicevolution:wyvern_pick>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//神龙镐 同神龙剑

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "axe", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_axe>)
	.addItemInput(<thaumadditions:mithminite_plate>*6)
	.addItemInput(<thaumcraft:focus_2>)
	.addItemInput(<draconicevolution:wyvern_axe>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//同神龙剑	

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "shovel", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_shovel>)
	.addItemInput(<thaumadditions:mithminite_plate>*6)
	.addItemInput(<thaumcraft:focus_2>)
	.addItemInput(<draconicevolution:wyvern_shovel>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//同神龙剑	
//龍工具

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "helm", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_helm>)
	.addItemInput(<extendedcrafting:singularity:18>*2)
	.addItemInput(<thaumadditions:mithminite_hood>)
	.addItemInput(<draconicevolution:wyvern_helm>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//神龙头  扩展合成锡奇点*2 秘金神秘使兜帽 双足头 神龙能量核心

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "chest", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_chest>)
	.addItemInput(<minecraft:anvil:2>)
	.addItemInput(<thaumadditions:mithminite_robe>)
	.addItemInput(<draconicevolution:wyvern_chest>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//神龙🐻 快烂的铁砧 秘金神秘使法袍 双足🐻 神龙能量核心

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "legs", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_legs>)
	.addItemInput(<theoneprobe:probe_goggles>)
	.addItemInput(<thaumadditions:mithminite_belt>)
	.addItemInput(<draconicevolution:wyvern_legs>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//神龙裤 检测器 秘金神秘使腰带 双足裤 神龙能量核心

mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "boots", machineName, recipesTickTime)
	.addEnergyPerTickInput(1024)
	.addFluidInput(<liquid:pyrotheum>*5000)
	.addItemOutput(<draconicevolution:draconic_boots>)
	.addItemInput(<thaumadditions:puriflower>)
	.addItemInput(<thaumadditions:mithminite_boots>)
	.addItemInput(<draconicevolution:wyvern_boots>)
	.addItemInput(<draconicevolution:draconic_energy_core>)
	.build();
//神龙鞋 纯净之花 秘金神秘使靴子 双足鞋 神龙能量核心
//龍装备合成
mods.modularmachinery.RecipeBuilder.newBuilder(machineName + "_" + "power", machineName, recipesTickTime)
	.addEnergyPerTickInput(4096)
	.addFluidInput(<liquid:cloud_seed_concentrated>*25000)
	.addItemOutput(<draconicevolution:draconic_staff_of_power>)
	.addItemInput(<draconicevolution:draconic_sword>)
	.addItemInput(<draconicevolution:draconic_pick>)
	.addItemInput(<draconicevolution:draconic_axe>)
	.addItemInput(<draconicevolution:draconic_shovel>)
	.build();
//龍权 99lines
