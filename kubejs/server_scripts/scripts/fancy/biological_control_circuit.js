ServerEvents.recipes(event =>{
    //蒸馏水
    event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "type": "neoforge:single",
      "fluid": "minecraft:water",
      "amount": 1000
    }
  ],
  "heat_requirement": "heated",
  "processing_time": 100,
  "results": [
    {
      "id": "starcraft:distilled_water",
      "amount": 1000
    }
   ]
})
    //细菌
    event.custom({
	"type":"createvintageneoforged:pressurizing",
	"ingredients": [
      {
        "item": 'mekanism:bio_fuel',
      },
       {
        "item": 'mekanism:bio_fuel',
      },
       {
        "item": 'mekanism:bio_fuel',
      },
       {
        "item": 'mekanism:bio_fuel',
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'starcraft:distilled_water'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:bacteria"
      }
      
	],
	"processing_time": 500,
    "heat_requirement":'heated'
    })
    //生物质
    event.custom({
  "type": "createdieselgenerators:basin_fermenting",
  "ingredients": [
    {
      "item": 'createaddition:biomass'
    },
    {
      "type": "fluid_stack",
      "fluid": "minecraft:water",
      "amount": 100
    }
  ],
  "heat_requirement": "heated",
  "processing_time": 200,
  "results": [
    {
        'amount':100,
        "id": "starcraft:biomass"
    }
  ]
})
    //细菌浆液
     event.custom({
	"type":"createvintageneoforged:pressurizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 1000,
        "fluid": 'starcraft:bacteria',
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'starcraft:biomass'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:bacterial_sludge"
      }
      
	],
	"processing_time": 500,
    "heat_requirement":'heated'
    })
    //富集细菌溶液
    event.custom({
	"type":"createvintageneoforged:pressurizing",
	"ingredients": [ 
	{
      "type":"neoforge:single",
        "fluid": "starcraft:bacterial_sludge"
    },
	{
      "tag": "c:dusts/uranium"
    }
  ],
	"results": [
	{
		"id": "starcraft:enriched_bacterial_sludge",
		"amount": 1000
	}
	],
  "processing_time": 600,
  "heat_requirement":'heated'
})
    //诱变剂
     event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "type": "neoforge:single",
      "fluid": "starcraft:enriched_bacterial_sludge",
      "amount": 1000
    }
  ],
  "heat_requirement": "heated",
  "processing_time": 100,
  "results": [
    {
      "id": "starcraft:mutagen",
      "amount": 100
    }
   ]
}).id("starcraft:createdieselgenerators/distillation/mutagen")
    //培养基原液
    event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": 'starcraft:dust_agar'
    },
    {
      "item": 'starcraft:dust_agar'
    },
    {
      "item": 'starcraft:dust_agar'
    },
    {
      "item": 'starcraft:dust_agar'
    },
    {
      "item": 'starcraft:dust_meat'
    },
    {
      "item": 'starcraft:dust_meat'
    },
    {
      "item": 'starcraft:dust_meat'
    },
    {
      "item": 'starcraft:dust_meat'
    },
    {
      "item": 'starcraft:dust_calcium'
    },
    {
      "item": 'starcraft:dust_calcium'
    },
    {
      "item": 'starcraft:dust_calcium'
    },
    {
      "item": 'starcraft:dust_calcium'
    },
    {
       "tag":'c:dusts/salt'
    },
    {
       "tag":'c:dusts/salt'
    },
    {
       "tag":'c:dusts/salt'
    },
    {
       "tag":'c:dusts/salt'
    },
    {
      "type": "neoforge:single",
      "amount": 4000,
      "fluid": "starcraft:mutagen"
    }
  ],
  "results": [
    {
      "amount": 4000,
      "id": "starcraft:raw_growth_medium"
    }
  ]
    })
    //无菌培养基
    event.custom({
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 100,
      "fluid": "starcraft:raw_growth_medium"
    }
  ],
  "results": [
    {
      "amount": 100,
      "id": "starcraft:sterilized_growth_medium"
    }
  ]
    })
    //硫酸产线
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'tag':'c:dusts/sulfur'
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'minecraft:water'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "mekanism:sulfur_dioxide"
      }
      
	],
	"processing_time": 100,
    "heat_requirement":'heated'
    })
     event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'type':'neoforge:single',
       'amount':1000,
       'fluid':'mekanism:sulfur_dioxide'

      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'northstar:oxygen'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "mekanism:sulfur_trioxide"
      }
	],
	"processing_time": 100,
    "heat_requirement":'heated'
    })
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'type':'neoforge:single',
       'amount':1000,
       'fluid':'mekanism:sulfur_trioxide'

      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'minecraft:water'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "mekanism:sulfuric_acid"
      }
	],
	"processing_time": 100,
    "heat_requirement":'heated'
    })
    //磷酸
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'tag':'c:dusts/apatite'
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'mekanism:sulfuric_acid'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:phosphoric_acid"
      }
	],
	"processing_time": 100,
    "heat_requirement":'heated'
    })
    //胶原粉
    event.custom({
  "type": "create:mixing",
  "ingredients": [
     {
      'item':'starcraft:dust_meat'
    },
     {
      'item':'minecraft:bone_meal'
    },
    {
      "type": "neoforge:single",
      "amount": 500,
      "fluid": 'mekanism:sulfuric_acid'
    },
  ],
  "results": [
    {
      "id": 'starcraft:dust_collagen'
    }
  ]
    })

    //明胶混合物
  event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      'item':'starcraft:dust_collagen'
    },
     {
      'item':'starcraft:dust_collagen'
    },
     {
      'item':'starcraft:dust_collagen'
    },
     {
      'item':'starcraft:dust_collagen'
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "starcraft:phosphoric_acid"
    },
    {
      "type": "neoforge:single",
      "amount": 3000,
      "fluid": "minecraft:water"
    }
  ],
  "results": [
    {
      "amount": 4000,
      "id": "starcraft:gelatin_mixture"
    }
  ]
    })
    //明胶粉
    event.custom({
	"type":"createvintageneoforged:centrifugation",
	"ingredients": [ 
	{
      "type":"neoforge:single",
      "amount":6000, 
      "fluid": "starcraft:gelatin_mixture"
    },
    ],
	"results": [
	{
		"id": 'starcraft:dust_gelatin',
		'count':4
	},
    {
        'id':'ftbmaterials:apatite_dust'
    }
	],
  "processing_time": 100,
  "heat_requirement":'heated'
})
    //琼脂粉
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'item':'starcraft:dust_gelatin'
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'starcraft:distilled_water'
      }
	],
	"results": [
      {
        "id": 'starcraft:dust_agar'
      }
	],
	"processing_time": 100,
    "heat_requirement":'superheated'
    })
    //干细胞
    event.custom({
	"type":"createvintageneoforged:pressurizing",
	"ingredients": [
      {
       'item':'minecraft:dragon_egg'
      },
      {
        'type':'neoforge:single',
        'amount':500,
        'fluid':"starcraft:raw_growth_medium"
      },
      {
        'type':'neoforge:single',
        'amount':500,
        'fluid':"starcraft:bacteria"
      }
	],
	"results": [
      {
        'count':64,
        "id": 'starcraft:stem_cells'
      },
      {
        'count':64,
        "id": 'starcraft:stem_cells'
      }
    ],
	"processing_time": 1600,
    "heat_requirement":'heated'
    })
    //环氧氯丙烷
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
    {
      'item':'starcraft:sodium_hydroxide_dust'
    },
    {
      'item':'starcraft:sodium_hydroxide_dust'
    },
    {
      'item':'starcraft:sodium_hydroxide_dust'
    }, 
    {
        'type':'neoforge:single',
        'amount':4000,
        'fluid':"northstar:chlorine"
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':"starcraft:propene"
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':"minecraft:water"
      }
	],
	"results": [
      {
        'amount':1000,
        "id": 'starcraft:epichlorohydrin'
      },
      {
        'amount':1000,
        "id": 'mekanism:brine'
      }
    ],
	"processing_time": 1000,
    "heat_requirement":'heated'
    })
    //环氧树脂
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
    {
      'item':'starcraft:sodium_hydroxide_dust'
    },
    {
      'item':'starcraft:sodium_hydroxide_dust'
    },
    {
      'item':'starcraft:sodium_hydroxide_dust'
    }, 
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':"starcraft:acetone"
      },
      {
        'type':'neoforge:single',
        'amount':2000,
        'fluid':"starcraft:phenol"
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':"immersiveengineering:phenolic_resin"
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':"starcraft:epichlorohydrin"
      }
	],
	"results": [
      {
        'amount':1000,
        "id": 'starcraft:epoxy'
      },
      {
        'amount':1000,
        "id": 'mekanism:brine'
      }
    ],
	"processing_time": 1200,
    "heat_requirement":'superheated'
    })    
   //纤维强化环氧树脂片
   event.custom({
  "type": "create:mixing",
  "heat_requirement": "heated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 90,
      "fluid": "starcraft:epoxy"
    },
    {
      "item":"oritech:carbon_fibre_strands"
    }
  ],
  "results": [
    {
      "id": 'starcraft:reinforcedrpoxyresin_plate'
    }
  ]
    }) 
    //纤维强化电路基板
     event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'item':'starcraft:reinforcedrpoxyresin_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'item':'ftbmaterials:brass_plate'
      },
      {
        'type':'neoforge:single',
        'amount':125,
        'fluid':"mekanism:sulfuric_acid"
      }
	],
	"results": [
      {
        'count':1,
        "id": 'starcraft:fiber_reinforced_circuit_board'
      },
    ],
	"processing_time": 1000,
    "heat_requirement":'heated'
    })
    //多层纤维强化基板
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'item':'starcraft:fiber_reinforced_circuit_board'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'tag':'c:plates/refined_glowstone'
      },
      {
        'type':'neoforge:single',
        'amount':500,
        'fluid':"mekanism:sulfuric_acid"
      }
	],
	"results": [
      {
        'count':1,
        "id": 'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
    ],
	"processing_time": 1000,
    "heat_requirement":'heated'
    })
    //湿件电路板
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
       {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
       {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
       {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
       {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
       {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
       {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
       {
        'item':'starcraft:multilayer_fiber_reinforced_circuit_board'
      },
      {
        'item':'beyonddimensions:net_pump_block'
      },
      {
        'item':'pneumaticcraft:universal_sensor'
      },
      {
        'item':'mekanism:ultimate_control_circuit'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'type':'neoforge:single',
        'amount':4000,
        'fluid':"starcraft:sterilized_growth_medium"
      }
	],
	"results": [
      {
        'count':16,
        "id": 'starcraft:wetware_lifesupport_circuit_board'
      },
    ],
	"processing_time":2000,
    "heat_requirement":'superheated'
    })
    //大师电路板
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
       'item':'starcraft:wetware_lifesupport_circuit_board'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'item':'ftbmaterials:stainless_steel_plate'
      },
      {
        'type':'neoforge:single',
        'amount':10000,
        'fluid':"starcraft:sodium_persulfate"
      }
	],
	"results": [
      {
        "id": 'starcraft:master_circuit_board'
      }
    ],
	"processing_time": 1200,
    "heat_requirement":'heated'
    })
    //神经处理单元
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'starcraft:master_circuit_board'
  },
  "loops": 16,
  "results": [
    {'id': 'starcraft:neuro_processing_unit'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_neuro_processing_unit"
        },
        {
          "item": 'starcraft:stem_cells'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_neuro_processing_unit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_neuro_processing_unit"
        },
        {
          "item": 'mekanism:ultimate_mechanical_pipe'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_neuro_processing_unit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_neuro_processing_unit"
        },
        {
          "tag": 'c:plates/electrum'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_neuro_processing_unit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_neuro_processing_unit"
        },
        {
          "item": 'industrialforegoing:plastic'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_neuro_processing_unit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_neuro_processing_unit"
        },
        {
          "item": 'ftbmaterials:stainless_steel_rod'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_neuro_processing_unit"
        }
      ]
    },
    {
      "type": "create:filling",
  "ingredients": [
    {
      "item": "starcraft:incomplete_neuro_processing_unit"
    },
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "starcraft:sterilized_growth_medium"
    }
  ],
  "results": [
    {
      "id": "starcraft:incomplete_neuro_processing_unit"
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 10000,
      "ingredients": [
        {
          "item": "starcraft:incomplete_neuro_processing_unit"
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_neuro_processing_unit"
        }
      ]
    },
    
  ],
  "transitional_item": {
    "id": "starcraft:incomplete_neuro_processing_unit"
  }
})
  //生物控制电路
  event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'starcraft:neuro_processing_unit'
  },
  "loops": 8,
  "results": [
    {'id': 'starcraft:biological_control_circuit'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_biological_control_circuit"
        },
        {
          "item": 'starcraft:hasoc'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_biological_control_circuit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_biological_control_circuit"
        },
        {
          "item": 'rainbowcompound:radiance_mechanism'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_biological_control_circuit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_biological_control_circuit"
        },
        {
          "item": 'rainbowcompound:shadow_mechanism'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_biological_control_circuit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_biological_control_circuit"
        },
        {
          "tag": 'c:rods/titanium'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_biological_control_circuit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_biological_control_circuit"
        },
        {
          "item": 'oritech:super_ai_chip'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_biological_control_circuit"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_biological_control_circuit"
        },
        {
          "item": 'oritech:flux_gate'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_biological_control_circuit"
        }
      ]
    },
    {
      "type": "create:filling",
  "ingredients": [
    {
      "item": "starcraft:incomplete_biological_control_circuit"
    },
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "starcraft:molten_soldering_alloy"
    }
  ],
  "results": [
    {
      "id": "starcraft:incomplete_biological_control_circuit"
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 100000,
      "ingredients": [
        {
          "item": "starcraft:incomplete_biological_control_circuit"
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_biological_control_circuit"
        }
      ]
    },
    {
  "type": "northstar:engraving",
  "ingredients": [
    {
      "item": "starcraft:incomplete_biological_control_circuit"
    }
  ],
  "results": [
    {
      "id": "starcraft:incomplete_biological_control_circuit"
    }
  ]
    }
    
  ],
  "transitional_item": {
    "id": "starcraft:incomplete_biological_control_circuit"
  }
})
  //焊锡
  event.custom({
  "type": "create:mixing",
  "heat_requirement":'heated',
  "ingredients": [
    {
      "tag": 'c:dusts/tin'
    },
    {
      "tag": 'c:dusts/tin'
    },
    {
      "tag": 'c:dusts/tin'
    },
    {
      "tag": 'c:dusts/tin'
    },
    {
      "tag": 'c:dusts/tin'
    },
    {
      "tag": 'c:dusts/tin'
    },
    {
      "tag":'c:dusts/lead'
    },
     {
      "tag":'c:dusts/lead'
    },
    {
      "tag":'c:dusts/lead'
    },
    {
      "tag":'c:dusts/antimony'
    }
  ],
  "results": [
    {
      "amount": 900,
      "id": "starcraft:molten_soldering_alloy"
    }
  ]
})
})
