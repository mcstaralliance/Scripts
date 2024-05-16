onEvent('block.right_click', event => {
  let BlockId = event.block.getId()
  if (event.player.getMainHandItem() == Item.of('kubejs:end_portal_frame_tool') && BlockId == 'minecraft:end_portal_frame'){
    let KeyCharger = event.block.createEntity("item")
    let EndStone = event.block.createEntity("item")
    let x = event.block.getX()
    let y = event.block.getY()
    let z = event.block.getZ()

    KeyCharger.item = 'dimdungeons:block_key_charger'
    EndStone.item = 'minecraft:end_stone'

    KeyCharger.x += 0.5
    KeyCharger.y += 0.5
    KeyCharger.z += 0.5

    EndStone.x += 0.5
    EndStone.y += 0.5
    EndStone.z += 0.5

    KeyCharger.spawn()
    EndStone.spawn()

    event.block.set('minecraft:air')
  }
})