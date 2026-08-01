const sifterRecipes = [
	{
		input: "minecraft:dirt",
		mesh: "cloth",
		outputs: [
			["minecraft:pumpkin_seeds", 0.15],
			["minecraft:wheat_seeds", 0.15],
			["minecraft:melon_seeds", 0.15],
			["minecraft:beetroot_seeds", 0.15],
			["minecraft:cocoa_beans", 0.15],
			["minecraft:bamboo", 0.15],
			["minecraft:sugar_cane", 0.15],
			["minecraft:sweet_berries", 0.15],
			["farmersdelight:rice", 0.15],
			["integrateddynamics:menril_sapling", 0.15],
			["farmersdelight:cabbage_seeds", 0.15],
			["farmersdelight:tomato_seeds", 0.15],
			["jags:grass_seed", 0.15],
			["immersiveengineering:seed", 0.15]
		]
	},
	{
		input: "minecraft:dirt",
		mesh: "iron",
		outputs: [
			["minecraft:oak_sapling", 0.2],
			["minecraft:spruce_sapling", 0.2],
			["minecraft:birch_sapling", 0.2],
			["minecraft:jungle_sapling", 0.2],
			["minecraft:acacia_sapling", 0.2],
			["minecraft:dark_oak_sapling", 0.2],
			["minecraft:cherry_sapling", 0.2],
			["integrateddynamics:menril_sapling", 0.2]
		]
	},
	{
		input: "minecraft:gravel",
		mesh: "cloth",
		outputs: [
			["ftbmaterials:copper_chunk", 0.54],
			["ftbmaterials:coal_tiny", 0.5],
			["ftbmaterials:iron_chunk", 0.44],
			["minecraft:flint", 0.17]
		]
	},
	{
		input: "minecraft:gravel",
		mesh: "iron",
		outputs: [
			["ftbmaterials:iron_chunk", 0.54],
			["ftbmaterials:coal_tiny", 0.5],
			["ftbmaterials:copper_chunk", 0.44],
			["ftbmaterials:zinc_chunk", 0.1],
			["minecraft:flint", 0.22],
			["minecraft:coal", 0.2],
			["ftbmaterials:tin_chunk", 0.12],
			["ftbmaterials:lead_chunk", 0.1]
		]
	},
	{
		input: "minecraft:gravel",
		mesh: "gold",
		outputs: [
			["ftbmaterials:iron_chunk", 0.64],
			["ftbmaterials:coal_tiny", 0.6],
			["ftbmaterials:copper_chunk", 0.54],
			["ftbmaterials:zinc_chunk", 0.15],
			["minecraft:coal", 0.25],
			["ftbmaterials:lapis_lazuli_chunk", 0.16],
			["ftbmaterials:aluminum_chunk", 0.16],
			["ftbmaterials:tin_chunk", 0.15],
			["ftbmaterials:lead_chunk", 0.15],
			["ftbmaterials:emerald_chunk", 0.04]
		]
	},
	{
		input: "minecraft:gravel",
		mesh: "diamond",
		outputs: [
			["ftbmaterials:iron_chunk", 0.69],
			["ftbmaterials:copper_chunk", 0.59],
			["ftbmaterials:zinc_chunk", 0.2],
			["minecraft:coal", 0.3],
			["ftbmaterials:lapis_lazuli_chunk", 0.21],
			["ftbmaterials:lead_chunk", 0.2],
			["ftbmaterials:aluminum_chunk", 0.2],
			["ftbmaterials:tin_chunk", 0.2],
			["ftbmaterials:osmium_chunk", 0.19],
			["ftbmaterials:emerald_chunk", 0.08],
			["ftbmaterials:diamond_chunk", 0.12]
		]
	},
	{
		input: "minecraft:gravel",
		mesh: "blazing",
		outputs: [
			["ftbmaterials:iron_chunk", 0.69],
			["ftbmaterials:copper_chunk", 0.59],
			["ftbmaterials:zinc_chunk", 0.2],
			["minecraft:coal", 0.3],
			["ftbmaterials:lapis_lazuli_chunk", 0.21],
			["ftbmaterials:lead_chunk", 0.2],
			["ftbmaterials:aluminum_chunk", 0.2],
			["ftbmaterials:tin_chunk", 0.2],
			["ftbmaterials:osmium_chunk", 0.19],
			["ftbmaterials:emerald_chunk", 0.08],
			["ftbmaterials:diamond_chunk", 0.12]
		]
	},
	{
		input: "#c:sands",
		mesh: "cloth",
		outputs: [
			["ftbmaterials:copper_chunk", 0.43],
			["ftbmaterials:iron_chunk", 0.33],
			["ftbmaterials:tin_chunk", 0.09]
		]
	},
	{
		input: "#c:sands",
		mesh: "iron",
		outputs: [
			["ftbmaterials:copper_chunk", 0.43],
			["ftbmaterials:iron_chunk", 0.33],
			["ftbmaterials:tin_chunk", 0.12],
			["ftbmaterials:gold_chunk", 0.09],
			["ftbmaterials:lead_chunk", 0.02],
			["ftbmaterials:nickel_chunk", 0.02]
		]
	},
	{
		input: "#c:sands",
		mesh: "gold",
		outputs: [
			["ftbmaterials:copper_chunk", 0.63],
			["ftbmaterials:iron_chunk", 0.53],
			["ftbmaterials:aluminum_chunk", 0.15],
			["ftbmaterials:gold_chunk", 0.13],
			["ftbmaterials:tin_chunk", 0.13],
			["ftbmaterials:nickel_chunk", 0.13],
			["ftbmaterials:lead_chunk", 0.12],
			["mysticalagriculture:prosperity_shard", 0.12]
		]
	},
	{
		input: "#c:sands",
		mesh: "diamond",
		outputs: [
			["ftbmaterials:copper_chunk", 0.7],
			["ftbmaterials:iron_chunk", 0.63],
			["ftbmaterials:aluminum_chunk", 0.18],
			["ftbmaterials:gold_chunk", 0.18],
			["ftbmaterials:silver_chunk", 0.17],
			["ftbmaterials:nickel_chunk", 0.16],
			["ftbmaterials:osmium_chunk", 0.16],
			["ftbmaterials:lead_chunk", 0.15],
			["ftbmaterials:tin_chunk", 0.15]
		]
	},
	{
		input: "#c:sands",
		mesh: "blazing",
		outputs: [
			["ftbmaterials:copper_chunk", 0.9],
			["ftbmaterials:iron_chunk", 0.9],
			["ftbmaterials:aluminum_chunk", 0.28],
			["ftbmaterials:gold_chunk", 0.38],
			["ftbmaterials:silver_chunk", 0.37],
			["ftbmaterials:nickel_chunk", 0.36],
			["ftbmaterials:osmium_chunk", 0.36],
			["ftbmaterials:lead_chunk", 0.35],
			["ftbmaterials:tin_chunk", 0.35]
		]
	},
	{
		input: "ftbstuff:dust",
		mesh: "cloth",
		outputs: [
			["minecraft:bone_meal", 0.11],
			["mysticalagriculture:dirt_essence", 0.05],
			["ftbmaterials:salt_dust", 0.02],
			["ftbmaterials:iron_tiny_dust", 0.14]
		]
	},
	{
		input: "ftbstuff:dust",
		mesh: "iron",
		outputs: [
			["minecraft:bone_meal", 0.16],
			["ftbmaterials:salt_dust", 0.1],
			["minecraft:gunpowder", 0.09],
			["ftbmaterials:niter_dust", 0.08],
			["ftbmaterials:gold_chunk", 0.07]
		]
	},
	{
		input: "ftbstuff:dust",
		mesh: "gold",
		outputs: [
			["minecraft:bone_meal", 0.21],
			["ftbmaterials:salt_dust", 0.15],
			["minecraft:gunpowder", 0.14],
			["ftbmaterials:silver_chunk", 0.13],
			["ftbmaterials:niter_dust", 0.13],
			["ftbmaterials:gold_chunk", 0.11],
			["minecraft:redstone", 0.11],
			["ftbmaterials:nickel_chunk", 0.11],
			["ftbmaterials:bauxite_dust", 0.1]
		]
	},
	{
		input: "ftbstuff:dust",
		mesh: "diamond",
		outputs: [
			["minecraft:bone_meal", 0.25],
			["ftbmaterials:salt_dust", 0.22],
			["minecraft:redstone", 0.21],
			["minecraft:gunpowder", 0.19],
			["ftbmaterials:gold_chunk", 0.16],
			["ftbmaterials:bauxite_dust", 0.15],
			["ftbmaterials:niter_dust", 0.15],
			["ftbmaterials:silver_chunk", 0.15],
			["ftbmaterials:nickel_chunk", 0.14]
		]
	},
	{
		input: "ftbstuff:dust",
		mesh: "blazing",
		outputs: [
			["minecraft:gold_ingot", 0.62],
			["minecraft:redstone", 0.6],
			["ftbmaterials:salt_dust", 0.5],
			["modern_industrialization:aluminum_dust", 0.41],
			["ftbmaterials:silver_ingot", 0.61],
			["ftbmaterials:nickel_ingot", 0.54]
		]
	},
	{
		input: "ftbstuff:crushed_basalt",
		mesh: "gold",
		outputs: [
			["minecraft:netherrack", 0.6],
			["ftbmaterials:sulfur_dust", 0.1],
			["mekanism:dirty_netherite_scrap", 0.01]
		]
	},
	{
		input: "ftbstuff:crushed_basalt",
		mesh: "diamond",
		outputs: [
			["minecraft:netherrack", 0.4],
			["ftbmaterials:sulfur_dust", 0.25],
			["mekanism:dirty_netherite_scrap", 0.04]
		]
	},
	{
		input: "ftbstuff:crushed_basalt",
		mesh: "blazing",
		outputs: [
			["minecraft:netherrack", 0.6],
			["ftbmaterials:sulfur_dust", 0.4],
			["mekanism:dirty_netherite_scrap", 0.08]
		]
	},
	{
		input: "ftbstuff:crushed_netherrack",
		mesh: "gold",
		outputs: [
			["mysticalagriculture:soulium_dust", 0.27],
			["minecraft:glowstone_dust", 0.17],
			["ftbmaterials:quartz_chunk", 0.24]
		]
	},
	{
		input: "ftbstuff:crushed_netherrack",
		mesh: "diamond",
		outputs: [
			["mysticalagriculture:soulium_dust", 0.27],
			["minecraft:glowstone_dust", 0.14],
			["ftbmaterials:quartz_chunk", 0.42],
			["minecraft:blaze_powder", 0.15]
		]
	},
	{
		input: "ftbstuff:crushed_netherrack",
		mesh: "blazing",
		outputs: [
			["mysticalagriculture:soulium_dust", 0.4],
			["minecraft:glowstone_dust", 0.17],
			["minecraft:quartz", 0.5],
			["actuallyadditions:black_quartz", 0.08],
			["minecraft:blaze_powder", 0.15]
		]
	},
	{
		input: "starcraft:crushed_kiwi",
		mesh: "diamond",
		outputs: [
			["xycraft_world:xychorium_gem_light", 0.24],
			["xycraft_world:xychorium_gem_dark", 0.24],
			["xycraft_world:xychorium_gem_blue", 0.24],
			["xycraft_world:xychorium_gem_green", 0.24],
			["xycraft_world:xychorium_gem_red", 0.24]
		]
	},
	{
		input: "starcraft:crushed_kiwi",
		mesh: "blazing",
		outputs: [
			["xycraft_world:xychorium_gem_light", 0.9],
			["xycraft_world:xychorium_gem_dark", 0.9],
			["xycraft_world:xychorium_gem_blue", 0.9],
			["xycraft_world:xychorium_gem_green", 0.9],
			["xycraft_world:xychorium_gem_red", 0.9]
		]
	},
	{
		input: 'minecraft:oak_leaves',
		mesh: "cloth",
		outputs: [
			['ars_nouveau:blue_archwood_sapling', 0.9],
			['ars_nouveau:red_archwood_sapling', 0.9],
			['ars_nouveau:green_archwood_sapling', 0.9],
			['ars_nouveau:purple_archwood_sapling', 0.9],
			['minecraft:oak_sapling', 0.9],
			['minecraft:spruce_sapling',0.9],
			['minecraft:birch_sapling',0.9],
			['minecraft:jungle_sapling',0.9],
			['minecraft:acacia_sapling',0.9],
			['minecraft:dark_oak_sapling',0.9],
			['minecraft:cherry_sapling',0.9]
			
		]
	},
];

const meshSpeeds = {
	cloth: 8,
	iron: 8,
	gold: 16,
	diamond: 32,
	blazing: 32
};

ServerEvents.recipes((event) => {
	sifterRecipes.forEach(function (recipe) {
		const outputModifier = 0.8;

		let meshId = "starcraft:" + recipe.mesh + "_mesh";
		let recipeId =
			"ftb:sifting/" +
			recipe.input.replace(/[:#]/g, "_") +
			"_with_" +
			recipe.mesh +
			"_mesh";

		let inputObj = {};
		if (recipe.input.indexOf("#") === 0) {
			inputObj.tag = recipe.input.substring(1);
		} else {
			inputObj.item = recipe.input;
		}

		let results = [];
		recipe.outputs.forEach(function (out) {
			results.push({
				id: out[0],
				chance: Math.max(0, out[1] * outputModifier)
			});
		});

		let requirements = [
			{ type: "mechanicals:min_speed", value: meshSpeeds[recipe.mesh] * 1.0 }
		];
		/* if (recipe.mesh === "blazing") {
      requirements.push({ type: "mechanicals:biome_tag", value: "minecraft:is_nether" });
    }*/

		const customRecipe = {
			type: "createsifter:sifting",
			input: inputObj,
			mesh: { count: 1, id: meshId },
			processingTime: 500,
			requirements: requirements,
			results: results
		};

		event.custom(customRecipe).id(recipeId);
	});
});
