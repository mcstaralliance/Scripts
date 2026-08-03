ServerEvents.recipes(event =>{
    event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": 'c:gems/diamond'
    }
  ],
  "results": [
    {
      "id": 'ftbmaterials:diamond_plate'
    }
  ]
})
    event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": 'c:ingots/netherite'
    }
  ],
  "results": [
    {
      "id": 'ftbmaterials:netherite_plate'
    }
  ]
})
  event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": 'c:ingots/stainless_steel'
    }
  ],
  "results": [
    {
      "id": 'ftbmaterials:stainless_steel_plate'
    }
  ]
})
})