ServerEvents.recipes(event=> {
    event.custom({
  "type": "industrialforegoing:laser_drill_fluid",
  "catalyst": {
    "item": "starcraft:ender_lens"
  },
  "output": {
    "amount": 50,
    "fluid": "starcraft:ender_air"
  },
  "rarity": [
    {
      "biome_filter": {
        "blacklist": [],
        "whitelist": [
          "minecraft:is_end",
        ]
      },
      "depth_max": 60,
      "depth_min": 20,
      "dimension_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "weight": 8
    }
  ]
})
})