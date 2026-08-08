ServerEvents.recipes(event =>{
    //滴水成安山合金
    event.custom({
    "type": "ftbstuff:dripper",
  "chance": 0.1,
  "consume_fluid_on_fail": true,
  "fluid": {
    "amount": 1000,
    "id": "minecraft:water"
  },
  "input": 'minecraft:andesite',
  "output": 'create:andesite_alloy_block'})
  event.custom({
    "type": "ftbstuff:dripper",
  "chance": 0.1,
  "consume_fluid_on_fail": true,
  "fluid": {
    "amount": 1000,
    "id": "minecraft:lava"
  },
  "input": 'minecraft:diorite',
  "output": 'xycraft_world:kivi'})
  event.custom({
  "type": "extendedcrafting:shapeless_table",
  "ingredients": [
    {
      "item": "minecraft:wheat"
    },
    {
      "item": "minecraft:pumpkin"
    },
    {
      "item": "avaritia:neutron_nugget"
    },
    {
      "item": "minecraft:apple"
    },
    {
      "item": "minecraft:golden_apple"
    },
    {
      "item": "minecraft:melon_slice"
    },
    {
      "item": "minecraft:glistering_melon_slice"
    },
    {
      "item": "minecraft:sweet_berries"
    },
    {
      "item": "minecraft:chorus_fruit"
    },
    {
      "item": "minecraft:carrot"
    },
    {
      "item": "minecraft:golden_carrot"
    },
    {
      "item": "minecraft:potato"
    },
    {
      "item": "minecraft:poisonous_potato"
    },
    {
      "item": "minecraft:beetroot"
    },
    {
      "item": "minecraft:kelp"
    },
    {
      "item": "minecraft:cocoa_beans"
    },
    {
      "item": "minecraft:nether_wart"
    },
    {
      "item": "minecraft:pitcher_pod"
    },
    {
      "item": "minecraft:honey_bottle"
    },
    {
      "item": "minecraft:cactus"
    },
    {
      "item": "minecraft:bamboo"
    },
    {
      "item": "minecraft:warped_fungus"
    },
    {
      "item": "minecraft:crimson_fungus"
    },
    {
      "item": "minecraft:red_mushroom"
    },
    {
      "item": "minecraft:brown_mushroom"
    },
    {
      "item": "kaleidoscope_chinesefood:sichuan_boiled_pork_slices"
    },
    {
      "item": "kaleidoscope_chinesefood:yellow_croaker_tofu_soup"
    },
    {
      "item": "kaleidoscope_chinesefood:golden_apple_platter"
    },
    {
      "item": "kaleidoscope_chinesefood:yangzhou_fried_rice"
    },
    {
      "item": "kaleidoscope_chinesefood:big_plate_chicken"
    },
    {
      "item": "kaleidoscope_chinesefood:big_plate_chicken_noodles"
    },
    {
      "item": "kaleidoscope_chinesefood:tomato_egg_noodles"
    },
    {
      "item": "kaleidoscope_chinesefood:dry_pot_spare_ribs"
    },
    {
      "item": "kaleidoscope_chinesefood:beef_with_scrambled_eggs"
    },
    {
      "item": "kaleidoscope_chinesefood:beef_with_scrambled_eggs_rice"
    },
    {
      "item": "kaleidoscope_chinesefood:stir_fried_three_fresh_vegetables"
    },
    {
      "item": "kaleidoscope_chinesefood:stuffed_eggplant"
    },
    {
      "item": "kaleidoscope_chinesefood:dry_pot_chicken"
    },
    {
      "item": "kaleidoscope_chinesefood:twice_cooked_pork"
    },
    {
      "item": "kaleidoscope_chinesefood:four_joy_meatballs"
    },
    {
      "item": "kaleidoscope_cookery:braised_beef"
    },
    {
      "item": "kaleidoscope_cookery:pan_seared_knight_steak"
    },
    {
      "item": "kaleidoscope_cookery:spicy_chicken"
    },
    {
      "item": "kaleidoscope_chinesefood:steamed_rice_rolls"
    },
    {
      "item": "kaleidoscope_chinesefood:hk_milk_tea"
    },
    {
      "item": "kaleidoscope_chinesefood:yellow_croaker_soup"
    },
    {
      "item": "kaleidoscope_cookery:stuffed_tiger_skin_pepper"
    },
    {
      "item": "kaleidoscope_cookery:cold_style_sashimi"
    },
    {
      "item": "kaleidoscope_cookery:cold_cut_ham_slices"
    },
    {
      "item": "kaleidoscope_cookery:cold_roasted_meat"
    },
    {
      "item": "kaleidoscope_cookery:tundra_style_sashimi"
    },
    {
      "item": "kaleidoscope_cookery:red_mushroom_pot_soup"
    },
    {
      "item": "kaleidoscope_cookery:brown_mushroom_pot_soup"
    },
    {
      "item": "kaleidoscope_cookery:spicy_blood_stew"
    },
    {
      "item": "kaleidoscope_cookery:four_joy_meatball_soup"
    },
    {
      "item": "kaleidoscope_cookery:dough_drop_soup"
    },
    {
      "item": "kaleidoscope_cookery:oil_splashed_fish"
    },
    {
      "item": "kaleidoscope_cookery:golden_salad"
    },
    {
      "item": "kaleidoscope_cookery:sticky_candy_plate"
    },
    {
      "item": "kaleidoscope_cookery:berry_platter"
    },
    {
      "item": "kaleidoscope_cookery:chorus_fruit_platter"
    },
    {
      "item": "kaleidoscope_cookery:qingtuan_plate"
    },
    {
      "item": "kaleidoscope_cookery:baozi_plate"
    },
    {
      "item": "kaleidoscope_cookery:shengjian_mantou_plate"
    },
    {
      "item": "kaleidoscope_cookery:sticky_rice_cake_plate"
    },
    {
      "item": "kaleidoscope_cookery:tieguanyin"
    },
    {
      "item": "kaleidoscope_cookery:meat_pie"
    },
    {
      "item": "kaleidoscope_cookery:stir_fried_pork_with_peppers"
    },
    {
      "item": "kaleidoscope_cookery:sticky_candy"
    },
    {
      "item": "kaleidoscope_cookery:fried_egg"
    },
    {
      "item": "kaleidoscope_twilight:frozen_bun"
    },
    {
      "item": "kaleidoscope_cookery:donkey_burger"
    },
    {
      "item": "kaleidoscope_cookery:frost_lamb_chop"
    },
    {
      "item": "kaleidoscope_cookery:end_style_sashimi"
    },
    {
      "item": "kaleidoscope_cookery:nether_style_sashimi"
    },
    {
      "item": "kaleidoscope_cookery:sweet_and_sour_ender_pearls"
    },
    {
      "item": "kaleidoscope_cookery:blaze_lamb_chop"
    },
    {
      "item": "kaleidoscope_cookery:fried_caterpillar"
    },
    {
      "item": "kaleidoscope_cookery:fried_spring_roll"
    },
    {
      "item": "kaleidoscope_cookery:braised_pork_ribs"
    },
    {
      "item": "kaleidoscope_cookery:qingtuan"
    }
  ],
  "result": {
    "count":5,
    "id": 'avaritia:ultimate_stew'
  }
})
  event.custom({
  "type": "createmetallurgy:casting_in_table",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 90,
      "fluid": "starcraft:molten_infinity_ingot"
    },
    {
      "item": "createmetallurgy:graphite_ingot_mold"
    }
  ],
  "processing_time": 60,
  "result": {
    "item": {
      "count": 1,
      "id": 'avaritia:infinity_ingot'
    }
  }})
  event.custom({
  "type": "northstar:freezing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 100,
      "fluid": "starcraft:air"
    }
  ],
  "maxTemperature": -180,
  "processing_time": 10,
  "results": [
    {
      "amount":100,
      "id": "starcraft:liquid_air"
    }
  ]
})
  event.custom({
  "type": "northstar:freezing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 100,
      "fluid": "starcraft:ender_air"
    }
  ],
  "maxTemperature": -180,
  "processing_time": 10,
  "results": [
    {
      "amount":100,
      "id": "starcraft:liquid_ender_air"
    }
  ]
})
  event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 2000,
      "fluid": "starcraft:air"
    },
    {
      "item":'minecraft:blue_ice'
    },
  ],
  "results": [
    {
      "amount": 2000,
      "id": "starcraft:liquid_air"
    },
  ]
    })
    event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'mekanism:quantum_entangloporter'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      'count':32,
      "id": 'fluxnetworks:flux_core'
    }
  ]
}),
  event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'mekanism:quantum_entangloporter'
    }
  ],
  "processing_time": 250,
  "results": [
    {
      'count':32,
      "id": 'fluxnetworks:flux_core'
    }
  ]
})
  event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": "minecraft:sand"
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "chance": 0.25,
      "id": "northstar:rutile_concentrate"
    },
    {
      "id":'ftbstuff:dust'
    }
  ]
})
  event.custom({
  "type": "xycraft_machines:extractor",
  "adjacent": [
    {
      "fluid_type": "minecraft:water",
      "predicate_type": "xycraft_core:fluid_type_rule"
    },
    {
      "fluid_type": "minecraft:lava",
      "predicate_type": "xycraft_core:fluid_type_rule"
    }
  ],
  "catalyst": {
    "block": 'minecraft:gravel',
    "predicate_type": "xycraft_core:block_rule"
  },
  "output": {
    "count": 1,
    "id": 'create:limestone'
  },
  "target": {
    "block": 'minecraft:sand',
    "predicate_type": "xycraft_core:block_rule"
  },
  "ticks": 30
})
  //不锈钢锭
  event.custom({
  "type": "immersiveengineering:arc_furnace",
  "additives": [
    {
      "item": 'create:chromatic_compound'
    }
  ],
  "energy": 2048000,
  "input": {
    "tag": 'c:dusts/stainless_steel'
  },
  "results": [
    {
      "tag": 'c:ingots/stainless_steel'
    }
  ],
  "slag": {
    "tag": "c:slag"
  },
  "time": 400
})
  //强化萤石板
  event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "tag": 'c:ingots/refined_glowstone'
    }
  ],
  "results": [
    {
      "id": 'ftbmaterials:refined_glowstone_plate'
    }
  ]
})
  //粗火星铁
  event.smelting('northstar:raw_martian_iron_ore',['ad_astra:mars_iron_ore']);
  event.custom({
  "type": "minecraft:smelting",
  "category": "block",
  "cookingtime": 200,
  "experience": 0.7,
  "ingredient": {
    "item": 'ad_astra:mars_iron_ore'
  },
  "result": {
    "count": 1,
    "id": 'northstar:raw_martian_iron_ore'
  }
})
  //钛棒
  event.custom({
	"type":"createvintageneoforged:turning",
	"ingredients": [
		{
			"tag": 'c:ingots/titanium'
		}
	],
	"results": [
		{
			"id": 'ftbmaterials:titanium_rod',
			"count": 1
		}
	],
	"processingTime": 200
})
  //火山灰
  event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "item": 'northstar:volcanic_ash'
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "amount": 4,
      "id":'northstar:volcanic_ash_item'
    }
  ]
})
  //磷灰石粉
  event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": 'c:gems/apatite'
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "amount": 1,
      "id":'ftbmaterials:apatite_dust'
    }
  ]
})
  //末影透镜
   event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 64000,
      "fluid": "starcraft:liquid_ender_air"
    },
  ],
  "results": [
    {
      "id": 'starcraft:ender_lens'
    },
  ]
    })
    //不锈钢线
   event.custom({
  "type": "createaddition:rolling",
  "ingredients": [
    {
     "tag":'c:plates/stainless_steel'
    },
  ],
  "results": [
    {
      "count":2,
      "id": 'ftbmaterials:stainless_steel_wire'
    },
  ]
    })
    //不锈钢棒
     event.custom({
  "type": "createaddition:rolling",
  "ingredients": [
    {
     "tag":'c:ingots/stainless_steel'
    },
  ],
  "results": [
    {
      "count":2,
      "id": 'ftbmaterials:stainless_steel_rod'
    },
  ]
    })
    //锑粉
    event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": 'c:ingots/antimony'
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "amount": 1,
      "id":'ftbmaterials:antimony_dust'
    }
  ]
})
  //强化萤石粉
    event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": 'c:ingots/refined_glowstone'
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "amount": 1,
      "id":'ftbmaterials:refined_glowstone_dust'
    }
  ]
})
})