ServerEvents.recipes(event =>{
    event.custom({
  "type": "oritech:atomic_forge",
  "ingredients": [
    {
      "item": "oritech:processing_unit"
    },
    {
      "item": 'starcraft:hasoc_wafer'
    },
    {
      "item": 'starcraft:hasoc_wafer'
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:advanced_computing_engine"
    }
  ],
  "time": 5
})
    event.custom({
  "type": "oritech:assembler",
  "ingredients": [
    {
      "tag": 'c:plastics'
    },
    {
      "tag": "c:carbon_fibre"
    },
    {
      "tag": "c:ingots/electrum"
    },
    {
      "tag": "c:dusts/redstone"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:processing_unit"
    }
  ],
  "time": 96
})
})
