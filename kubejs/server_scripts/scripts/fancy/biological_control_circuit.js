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
	"type":"createvintageneoforged:vacuumizing",
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
	"type":"createvintageneoforged:vacuumizing",
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
	"type":"createvintageneoforged:vacuumizing",
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
        'fluid':'mekanism:oxygen'
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
	"type":"createvintageneoforged:vacuumizing",
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
    
    
    


})