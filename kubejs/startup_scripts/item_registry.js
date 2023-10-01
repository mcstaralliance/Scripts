onEvent("item.registry", (event) => {
	const item_registry = [{ name: "stone_gear", texture: 'ico:items/stone_gear' }];
	item_registry.forEach((item) => {
		event.create('ico:'+item.name).texture(item.texture);
	});
});
