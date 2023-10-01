onEvent("recipes", (event) => {
	const items = [];

	const id_items = [
		"create:crafting/materials/andesite_alloy",
		"create:crafting/materials/andesite_alloy_from_zinc",
	];

	const type_items = [];

	type_items.forEach((output) => {
		event.remove({ output: output, type: "minecraft:crafting_table" });
	});
	items.forEach((items) => {
		event.remove({ output: items });
	});
	id_items.forEach((id) => {
		event.remove({ id: id });
	});
});
