ServerEvents.recipes(event => {
    // 维度魔力池
    event.custom({
    type:"botania:runic_altar",
    "catalysts": [],
  "ingredients": [
    {
      "item": "beyonddimensions:space_time_stable_frame"
    },
    {
      "item": "botania:mana_pool"
    },
    {
      "item": "beyonddimensions:space_time_stable_frame"
    },
    {
      "item": "beyonddimensions:space_time_bar"
    },
    {
      "item": "beyonddimensions:dimensional_connect_block"
    },
    {
       "item":"beyonddimensions:space_time_bar"
    }
  ],
  "mana": 50000,
  "output": {
    "count": 1,
    "id": "beyonddimensions:mana_pool_pathway"
  },
  "reagent": {
    "item": "botania:livingrock"
  }
}).id("starcraft:botania/runic_altar/mana_pool_pathway")
    //水之符文
    event.custom({    
    type:"botania:runic_altar",
    "catalysts": [],
  "ingredients": [
    {
      "item": "botania:mana_powder"
    },
    {
      "item": "botania:manasteel_ingot"
    },
    {
      "item": "minecraft:bone_meal"
    },
    {
      "item": "minecraft:sugar_cane"
    },
    {
      "item": "minecraft:fishing_rod"
    },
    {
       "item":"ars_nouveau:water_essence"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 5200,
  "output": {
    "count": 2,
    "id": "botania:rune_of_water"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
   //火之符文
  event.custom({
  type:"botania:runic_altar",
  "catalysts": [],
  "ingredients": [
    {
      "item": "botania:mana_powder"
    },
    {
      "item": "botania:manasteel_ingot"
    },
    {
      "item": "minecraft:nether_brick"
    },
    {
      "item": "minecraft:gunpowder"
    },
    {
      "item": "minecraft:nether_wart"
    },
    {
       "item":"ars_nouveau:fire_essence"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 5200,
  "output": {
    "count": 2,
    "id": "botania:rune_of_fire"
  },
  "reagent": {
    "item": "botania:livingrock"
  }}) 
    //地之符文
  event.custom({  type:"botania:runic_altar",
  "catalysts": [],
  "ingredients": [
    {
      "item": "botania:mana_powder"
    },
    {
      "item": "botania:manasteel_ingot"
    },
    {
      "item": "minecraft:stone"
    },
    {
      "item": "minecraft:coal_block"
    },
    {
      "tag": "c:mushrooms"
    },
    {
      "item":"ars_nouveau:earth_essence"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 5200,
  "output": {
    "count": 2,
    "id": "botania:rune_of_earth"
  },
  "reagent": {
    "item": "botania:livingrock"}
  })
    //风之符文
    event.custom({  
   type:"botania:runic_altar",
  "catalysts": [],
  "ingredients": [
    {
      "item": "botania:mana_powder"
    },
    {
      "item": "botania:manasteel_ingot"
    },
    {
      "item": "minecraft:string"
    },
    {
      "item": "minecraft:feather"
    },
    {
      "tag": "minecraft:wool_carpets"
    },
    {
      "item":"ars_nouveau:air_essence"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 5200,
  "output": {
    "count": 2,
    "id": "botania:rune_of_air"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //魔力符文
  event.custom({ type:"botania:runic_altar",
  "catalysts": [],
  "ingredients": [
    {
      "item": "botania:mana_powder"
    },
    {
      "item": "botania:manasteel_ingot"
    },
    {
      "item": "ars_nouveau:source_gem_block"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_pearl"
    },
    {
      "item":'botania:mana_quartz'
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 5200,
  "output": {
    "count": 2,
    "id": "botania:rune_of_mana"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //春之符文
    event.custom({type:"botania:runic_altar",
  "catalysts": [
    {
      "item":"botania:rune_of_water"
    },
  {
      "item":"botania:rune_of_fire"
  }],
  "ingredients": [
    {
      "item": "ars_nouveau:abjuration_essence"
    },
    {
      "tag": "minecraft:saplings"
    },
    {
      "tag": "minecraft:saplings"
    },
    {
      "tag": "minecraft:saplings"
    },
    {
      "item": "minecraft:wheat"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 8000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_spring"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //夏之符文
    event.custom({ 
      type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_earth"
    },
  {
      "item":"botania:rune_of_air" 
  }],
  "ingredients": [
    {
      "tag": "c:sands"
    },
    {
      "tag": "c:sands"
    },
    {
      "item": "minecraft:slime_ball"
    },
    {
      "item": "minecraft:melon_slice"
    },
    {
      "item": "ars_nouveau:conjuration_essence"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 8000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_summer"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //秋之符文
   event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_fire"
    },
  {
      "item":"botania:rune_of_air" 
  }],
  "ingredients": [
    {
      "tag": "minecraft:leaves"
    },
    {
      "tag": "minecraft:leaves"
    },
    {
      "tag": "minecraft:leaves"
    },
    {
      "item": "minecraft:spider_eye"
    },
    {
      "item": "ars_nouveau:manipulation_essence"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 8000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_autumn"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    
    //冬之符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_earth"
    },
  {
      "item":"botania:rune_of_water"
  }],
  "ingredients": [
    {
      "item": "minecraft:cake"
    },
    {
      "tag": "minecraft:wool"
    },
    {
      "item": "minecraft:snow_block"
    },
    {
      "item": "minecraft:spider_eye"
    },
    {
      "item": "ars_nouveau:manipulation_essence"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 8000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_winter"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //欲望符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_summer"
    },
  {
      "item":"botania:rune_of_fire"
  }],
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 12000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_pride"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //暴怒符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_earth"
    },
  {
      "item":"botania:rune_of_winter"
  }],
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 12000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_wrath"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //暴食符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_fire"
    },
  {
      "item":"botania:rune_of_winter"
  }],
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 12000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_gluttony"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //嫉妒符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_water"
    },
  {
      "item":"botania:rune_of_winter"
  }],
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 12000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_envy"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //懒惰符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_air"
    },
  {
      "item":"botania:rune_of_autumn"
  }],
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 12000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_sloth"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //贪婪符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_water"
    },
  {
      "item":"botania:rune_of_spring"
  }],
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 12000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_greed"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
    //欲望符文
    event.custom({type:"botania:runic_altar",
      "catalysts": [
    {
      "item":"botania:rune_of_air"
    },
  {
      "item":"botania:rune_of_summer"
  }],
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item":"starcraft:rune_blank"
    }
  ],
  "mana": 12000,
  "output": {
    "count": 1,
    "id": "botania:rune_of_lust"
  },
  "reagent": {
    "item": "botania:livingrock"
  }})
 })
