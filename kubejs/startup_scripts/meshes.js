StartupEvents.registry('item', event => {
  const meshTypes = [
    { id: 'cloth', name: Text.translate('item.starcraft.cloth_mesh') },
    { id: 'iron', name: Text.translate('item.starcraft.iron_mesh') },
    { id: 'gold', name: Text.translate('item.starcraft.gold_mesh') },
    { id: 'diamond', name: Text.translate('item.starcraft.diamond_mesh') },
    { id: 'blazing', name: Text.translate('item.starcraft.blazing_mesh') }
  ];

  for (const mesh of meshTypes) {
    event.create(`starcraft:${mesh.id}_mesh`, 'createsifter:mesh')
      .displayName(mesh.name)
      .parentModel('createsifter:block/meshes/mesh')
      .texture('mesh', `starcraft:item/${mesh.id}_mesh`)
      .maxDamage(1000);
  }
});
