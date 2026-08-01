ServerEvents.recipes(event =>{
    event.custom({
	"type": "createvintageneoforged:curving_convex",
	"ingredients": [
		{
          "item":'draconicevolution:awakened_draconium_block'
        }
	],
	"results": [
		{
          "count": 1,
		  "id": "starcraft:heavy_awakened_draconium_plate"
		}
	]
})
    event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": 'c:storage_blocks/stainless_steel'
    }
  ],
  "results": [
    {
      "id": 'createvintageneoforged:convex_curving_head'
    }
  ]
})
    event.custom(
        {
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABCDEFGBA",
    "ABHIIIJBA",
    "ABKILIMBA",
    "ABNIIIOBA",
    "ABPQRSPBA",
    "ABBBBBBBA",
    "ATTTTTTTA"
  ],
  "key": {
    "A": {
      "item": "ad_astra:calorite_block"
    },
    "B": {
      "item": "starcraft:biological_control_circuit"
    },
    "C": {
      "item": "botania:rune_of_water"
    },
    "D": {
      "item": "botania:rune_of_fire"
    },
    "E": {
      "item": "botania:rune_of_earth"
    },
    "F": {
      "item": "botania:rune_of_air"
    },
    "G": {
      "item": "botania:rune_of_mana"
    },
    "H": {
      "item": "botania:rune_of_summer"
    },
    "I": {
      "item": "starcraft:demonic_slate"
    },
    "J": {
      "item": "botania:rune_of_spring"
    },
    "K": {
      "item": "botania:rune_of_autumn"
    },
    "L": {
      "item": "avaritia:infinity"
    },
    "M": {
      "item": "botania:rune_of_winter"
    },
    "N": {
      "item": "botania:rune_of_lust"
    },
    "O": {
      "item": "botania:rune_of_gluttony"
    },
    "P": {
      "item": "botania:rune_of_wrath"
    },
    "Q": {
      "item": "botania:rune_of_greed"
    },
    "R": {
      "item": "botania:rune_of_sloth"
    },
    "S": {
      "item": "botania:rune_of_envy"
    },
    "T": {
      "item": "ad_astra:desh_engine"
    }
  },
  "result": {
    "id": 'ad_astra:calorite_engine'
  }
})
    event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABCCCCCBA",
    "ABCDEDCBA",
    "ABCEDECBA",
    "ABCDEDCBA",
    "ABCCCCCBA",
    "ABBBBBBBA",
    "AFFFFFFFA"
  ],
  "key": {
    "A": {
      "item": "ad_astra:calorite_block"
    },
    "B": {
      "item": 'occultism:storage_stabilizer_tier4'
    },
    "C": {
      "item": 'ae2lt:lightning_collapse_matrix'
    },
    "D": {
      "item": "draconicevolution:chaotic_core"
    },
    "E": {
      "item": "mekanism:pellet_antimatter"
    },
    "F": {
      "item": "ad_astra:rocket_nose_cone"
    }
  },
  "result": {
    "id": 'starcraft:advanced_rocket_nose_cone'
  }
})
    event.custom({
  "type": "ad_astra:nasa_workbench",
  "ingredients": [
    {
      "item": 'starcraft:advanced_rocket_nose_cone'
    },
    {
      "item":'starcraft:heavy_awakened_draconium_plate'
    },
    {
      "item":'starcraft:heavy_awakened_draconium_plate'
    },
    {
      "item":'starcraft:heavy_awakened_draconium_plate'
    },
    {
      "item":'starcraft:heavy_awakened_draconium_plate'
    },
    {
      "item":'starcraft:heavy_awakened_draconium_plate'
    },
    {
      "item":'starcraft:heavy_awakened_draconium_plate'
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:calorite_tank"
    },
    {
      "item": "ad_astra:calorite_tank"
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:calorite_engine"
    },
    {
      "item": "ad_astra:rocket_fin"
    }
  ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_4_rocket"
  }
})
  event.custom({
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "category": "misc",
  "key": {
    "A": {
      "item": "northstar:amethyst_crystal"
    },
    "C": {
      "item": "northstar:circuit"
    },
    "F": {
      "tag": 'c:ingots/steel'
    },
    "L": {
      "item": "create:fluid_tank"
    },
    "P": {
      "item": "create:fluid_pipe"
    },
    "S": {
      "item": "create:shaft"
    },
    "T": {
      "tag": 'c:plates/steel'
    }
  },
  "pattern": [
    " TPT ",
    "TCPCT",
    "PPLPP",
    "TCACT",
    "FFSFF"
  ],
  "result": {
    "count": 1,
    "id": "northstar:electrolysis_machine"
  },
  "show_notification": false
})
  event.custom({
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "category": "misc",
  "key": {
    "B": {
      "item": "minecraft:blaze_rod"
    },
    "C": {
      "item": "northstar:advanced_circuit"
    },
    "I": {
      "item": "minecraft:blue_ice"
    },
    "L": {
      "item": "create:shaft"
    },
    "S": {
      "tag": 'c:ingots/desh'
    },
    "T": {
      "tag": 'c:plates/desh'
    }
  },
  "pattern": [
    "ITB",
    "ITB",
    "SLS",
    "CCC",
    "SLS"
  ],
  "result": {
    "count": 1,
    "id": "northstar:temperature_regulator"
  },
  "show_notification": false
})

})
