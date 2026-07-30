ServerEvents.recipes(event =>{
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "c:plates/iron"
  },
  "loops": 1,
  "results": [
    {'id': 'create:iron_sheet'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'minecraft:oak_planks'
        }
      ],"keep_held_item": true,
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'createdieselgenerators:hammer'
        }
      ],"keep_held_item": true,
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'createdieselgenerators:hammer'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    }
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
})
