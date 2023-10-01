onEvent("recipes", (event) => {
	//id: `${id_prefix}gear/stone`
	const id_prefix = "ico:minecraft/shaped/";
	const recipes = [
		{
			output: "8x create:cogwheel",
			pattern: ["CBC", "BAB", "CBC"],
			key: {
				A: "appliedenergistics2:wooden_gear",
				B: "create:andesite_alloy",
				C: "minecraft:spruce_button",
			},
			id: "create:crafting/kinetics/cogwheel",
		},
		{
			output: "2x create:large_cogwheel",
			pattern: ["CBC", "BAB", "CBC"],
			key: {
				A: "appliedenergistics2:wooden_gear",
				B: "create:andesite_alloy",
				C: "#minecraft:planks",
			},
			id: "create:crafting/kinetics/large_cogwheel",
		},
	];
	recipes.forEach((recipe) => {
		event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
	});
});
