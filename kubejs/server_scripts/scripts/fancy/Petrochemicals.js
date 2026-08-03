ServerEvents.recipes(event =>{
    //原油蒸馏
    event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "type": "neoforge:tag",
      "tag": "c:crude_oil",
      "amount": 100
    }
  ],
  "heat_requirement": "heated",
  "processing_time": 20,
  "results": [
    {
      "id": "starcraft:sulfuric_heavy_fuel",
      "amount": 10
    },
     {
      "id": "starcraft:sulfuric_light_fuel",
      "amount": 50
    },
     {
      "id": "starcraft:sulfuric_naphtha",
      "amount": 150
    },
     {
      "id": "starcraft:sulfuric_kerosine",
      "amount": 60
    }
   ]
})
    //脱硫处理
    event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 12000,
      "fluid": "starcraft:sulfuric_heavy_fuel"
    },
    {
      "type": "neoforge:single",
      "amount": 2000,
      "fluid": "northstar:hydrogen"
    },
  ],
  "results": [
    {
      "amount": 12000,
      "id": "starcraft:heavy_fuel"
    },
    {
      "amount":1000,
      "id": "starcraft:hydrogen_sulfide"
    }
  ]
    })
    event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 12000,
      "fluid": "starcraft:sulfuric_light_fuel"
    },
    {
      "type": "neoforge:single",
      "amount": 2000,
      "fluid": "northstar:hydrogen"
    },
  ],
  "results": [
    {
      "amount": 12000,
      "id": "starcraft:heavy_fuel"
    },
    {
      "amount":1000,
      "id": "starcraft:hydrogen_sulfide"
    }
  ]
    })
    event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 12000,
      "fluid": "starcraft:sulfuric_naphtha"
    },
    {
      "type": "neoforge:single",
      "amount": 2000,
      "fluid": "northstar:hydrogen"
    },
  ],
  "results": [
    {
      "amount": 12000,
      "id": "oritech:still_naphtha"
    },
    {
      "amount":1000,
      "id": "starcraft:hydrogen_sulfide"
    }
  ]
    })
    event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 12000,
      "fluid": "starcraft:sulfuric_kerosine"
    },
    {
      "type": "neoforge:single",
      "amount": 2000,
      "fluid": "northstar:hydrogen"
    },
  ],
  "results": [
    {
      "amount": 12000,
      "id": "pneumaticcraft:kerosene"
    },
    {
      "amount":1000,
      "id": "starcraft:hydrogen_sulfide"
    }
  ]
    })
    //硫化氢制二氧化硫
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:hydrogen_sulfide'
      },
      {
        'type':'neoforge:single',
        'amount':3000,
        'fluid':'northstar:oxygen'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "mekanism:sulfur_dioxide"
      },
      {
        'amount':1000,
        "id":"minecraft:water"
      } 
	],
	"processing_time": 100,
    "heat_requirement":'heated'
    })
    //机械动力蒸汽
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'minecraft:water'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "mekanism:steam"
      }
	],
	"processing_time": 100,
    "heat_requirement":'heated'
    })
    //裂化石脑油
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'mekanism:steam'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'oritech:still_naphtha'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:severely_steamcracked_naphtha"
      }
	],
	"processing_time": 150,
    "heat_requirement":'heated'
    })
    //蒸馏裂化石脑油
    event.custom({
	"type":"createvintageneoforged:centrifugation",
	"ingredients": [ 
	{
      "type":"neoforge:single",
      "amount":1000, 
      "fluid": "starcraft:severely_steamcracked_naphtha"
    },
    ],
	"results": [
	{
		"id": 'starcraft:heavy_fuel',
		'amount':25
	},
    {
		"id": 'starcraft:heavy_fuel',
		'amount':50
	},
    {
		"id": 'starcraft:toluene',
		'amount':20
	},
    {
		"id": 'starcraft:benzene',
		'amount':100
	},
    {
		"id": 'starcraft:butene',
		'amount':50
	},
    {
		"id": 'northstar:methane',
		'amount':15
	},
    {
		"id": 'starcraft:propene',
		'amount':300
	},
    {
		"id": 'mekanism:ethene',
		'amount':500
	},
	],
  "processing_time": 150,
  "heat_requirement":'superheated'
})
    //聚乙烯
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:air'
      },
      {
        'type':"neoforge:single",
        "amount":144,
        'fluid':'mekanism:ethene'
      }
	],
	"results": [
      {
        'amount':144,
        "id": "pneumaticcraft:plastic"
      }
	],
	"processing_time": 150,
    "heat_requirement":'heated'
    })
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'northstar:oxygen'
      },
      {
        'type':"neoforge:single",
        "amount":144,
        'fluid':'mekanism:ethene'
      }
	],
	"results": [
      {
        'amount':216,
        "id": "pneumaticcraft:plastic"
      }
	],
	"processing_time": 150,
    "heat_requirement":'heated'
    })
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":7500,
        'fluid':'northstar:oxygen'
      },
      {
        'type':"neoforge:single",
        "amount":2160,
        'fluid':'mekanism:ethene'
      },
      {
        'type':"neoforge:single",
        "amount":100,
        'fluid':'northstar:titanium_tetrachloride'
      }
	],
	"results": [
      {
        'amount':4320,
        "id": "pneumaticcraft:plastic"
      }
	],
	"processing_time": 150,
    "heat_requirement":'superheated'
    })
    //高辛烷值汽油
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'starcraft:nitrous_oxide'
      },
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'starcraft:octane'
      },
      {
        'type':"neoforge:single",
        "amount":20000,
        'fluid':'createdieselgenerators:gasoline'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:ethyl_tertbutyl_ether'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:toluene'
      }
	],
	"results": [
      {
        'amount':32000,
        "id": "starcraft:gasoline_premium"
      }
	],
	"processing_time": 1000,
    "heat_requirement":'superheated'
    })
    //粗汽油
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:methanol'
      },
      {
        'type':"neoforge:single",
        "amount":16000,
        'fluid':'createdieselgenerators:diesel'
      },
      {
        'type':"neoforge:single",
        "amount":16000,
        'fluid':'oritech:still_naphtha'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:acetone'
      }
	],
	"results": [
      {
        'amount':32000,
        "id": "starcraft:raw_gasoline"
      }
	],
	"processing_time": 800,
    "heat_requirement":'heated'
    })
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:toluene'
      },
      {
        'type':"neoforge:single",
        "amount":10000,
        'fluid':'starcraft:raw_gasoline'
      }
	],
	"results": [
      {
        'amount':11000,
        "id": "createdieselgenerators:gasoline"
      }
	],
	"processing_time": 800,
    "heat_requirement":'heated'
    })
    //乙基叔丁基醚
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:tag",
        "amount":1000,
        'tag':'c:ethanol'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:butene'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:ethyl_tertbutyl_ether"
      }
	],
	"processing_time": 800,
    "heat_requirement":'heated'
    })
    //苯酚丙酮
    event.custom({
	"type":"createvintageneoforged:pressurizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:propene'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:benzene'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'northstar:oxygen'
      },
      {
        'type':"neoforge:single",
        "amount":100,
        'fluid':'starcraft:phosphoric_acid'
      },
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:phenol"
      },
      {
        'amount':1000,
        "id": "starcraft:acetone"
      }
  ],
	"processing_time": 100,
    "heat_requirement":'heated'
    })
    //甲烷提氢
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:tag",
        "amount":1000,
        'tag':'c:methane'
      },
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'minecraft:water'
      },
      
	],
	"results": [
      {
        'amount':8000,
        "id": "northstar:hydrogen"
      },
      {
        'amount':3000,
        "id": "starcraft:carbon_dioxide"
      },
      {
    "id":'starcraft:methanol',
    "amount":100
      }
	],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'northstar:hydrogen'
      },
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'starcraft:nitrogen'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcreaft:ammonia"
      }
	],
	"processing_time": 200,
    "heat_requirement":'superheated'
    })
   //一氧化二氮
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'northstar:oxygen'
      },
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'starcraft:nitrogen'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:nitrous_oxide"
      }
	],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    //尿素
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'northstar:hydrogen'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:carbon_dioxide'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:urea"
      }
	],
	"processing_time": 800,
    "heat_requirement":'superheated'
    })
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "minecraft:saplings"
  },
  "loops": 3,
  "results": [
    {'id': 'starcraft:nutrient_rich_sapling'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_nutrient_rich_sapling"
        },
        {
          "item": 'immersiveengineering:fertilizer'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_nutrient_rich_sapling"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "starcraft:incomplete_nutrient_rich_sapling"
        },
        {
          "type":"neoforge:single",
          "amount":1000,
          "fluid": "starcraft:urea"
        }
         ],
      "results": [
        {
          "id": "starcraft:incomplete_nutrient_rich_sapling"
        }
      ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 10000,
      "ingredients": [
        {
          "item": "starcraft:incomplete_nutrient_rich_sapling"
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_nutrient_rich_sapling"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "starcraft:incomplete_nutrient_rich_sapling"
  }
})
    //树叶
    event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "minecraft:water"
    },
    {
      "item":"starcraft:nutrient_rich_sapling"
    }
  ],
  "results": [
    {
      "count":64,
      "id": 'minecraft:oak_leaves'
    },
    {
      "count":64,
      "id": 'minecraft:oak_leaves'
    },
    {
      "count":64,
      "id": 'minecraft:oak_leaves'
    },
    {
      "count":64,
      "id": 'minecraft:oak_leaves'
    },
  ]
    }) 
    //四氧化二氮
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'starcraft:nitrogen_dioxide'
      },
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:dinitrogen_tetroxide"
      }
	],
	"processing_time": 800,
    "heat_requirement":'superheated'
    })
    //龙锭
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:gasoline_premium'
      },
      {
        'item':'draconicevolution:draconium_dust'
      }
	],
	"results": [
      {
        "id": "starcraft:hot_draconium_ingot"
      },
	],
	"processing_time": 1000,
    "heat_requirement":'superheated'
    })
    event.custom({
  "type": "create_dragons_plus:freezing",
  "ingredients": [
    {
      "item": "starcraft:hot_draconium_ingot"
    }
  ],
  "results": [
    {
      "id": 'draconicevolution:draconium_ingot'
    }
  ]
})
  //柴油
  event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "starcraft:heavy_fuel"
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "starcraft:light_fuel"
    },
  ],
  "results": [
    {
      "amount":2000,
      "id": "createdieselgenerators:diesel"
    }
  ]
    }) 
})

