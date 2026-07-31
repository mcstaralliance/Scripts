ServerEvents.recipes(event=>{
    //硝酸
    event.custom({
	"type":"createvintageneoforged:pressurizing",
	"ingredients": [
      {
        'type':'neoforge:tag',
        'amount': 1000,
        "tag": 'c:sulfuric_acid',
      },
      {
        'item':'immersiveengineering:dust_saltpeter'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:nitrogen_monoxide"
      }
      
	],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 1000,
        "fluid": 'starcraft:nitrogen_monoxide',
      },
      {
        'type':'neoforge:single',
        'amount': 1000,
        'fluid':'northstar:oxygen'

      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:nitrogen_dioxide"
      }
      ],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 1000,
        "fluid": 'starcraft:nitrogen_dioxide',
      },
      {
        'type':'neoforge:single',
        'amount': 1000,
        'fluid':'northstar:oxygen'

      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:nitric_acid"
      }
      ],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    //硝酸铀酰
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 1000,
        "fluid": 'starcraft:nitric_acid',
      },
      {
        'item':'mekanism:yellow_cake_uranium'
      }
	],
	"results": [
      {
        'count':1,
        "id": 'starcraft:uranyl_nitrate'
      }
      ],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    //重铀酸铵
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 1000,
        "fluid": 'starcreaft:ammonia',
      },
      {
        'item':'starcraft:uranyl_nitrate'
      }
	],
	"results": [
      {
        'count':1,
        "id": 'starcraft:ammonium_diuranate'
      }
      ],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    //氧化铀
    event.custom({
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "northstar:hydrogen"
    },
    {
      "item": 'starcraft:ammonium_diuranate'
    },
  ],
  "results": [
    {
      "amount": 1000,
      "id": "mekanism:uranium_oxide"
    }
  ]
  })
  //氢氟酸
  event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 9000,
        "fluid": 'mekanism:sulfuric_acid',
      },
      {
        'tag':'c:storage_blocks/fluorite'
      }
	],
	"results": [
      {
        'amount':9000,
        "id": 'mekanism:hydrofluoric_acid'
      }
      ],
	"processing_time": 200,
    "heat_requirement":'heated'
    })
    //四氟化铀
     event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 1000,
        "fluid": 'mekanism:hydrofluoric_acid',
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'mekanism:uranium_oxide'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": 'starcraft:uranium_tetrafluoride'
      }
      ],
	"processing_time": 200,
    "heat_requirement":'superheated'
    })
    //六氟化铀
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'tag':'c:gems/fluorite'
      },
      {
        'type':'neoforge:single',
        'amount':1000,
        'fluid':'starcraft:uranium_tetrafluoride'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": 'starcraft:mixed_uranium_hexafluoride'
      }
      ],
	"processing_time": 200,
    "heat_requirement":'superheated'
    })
    event.custom({
	"type":"createvintageneoforged:centrifugation",
	"ingredients": [ 
	{
      "type":"neoforge:single",
      "amount":2000, 
      "fluid": 'starcraft:mixed_uranium_hexafluoride'
    },
    ],
	"results": [
	{
		"id": 'mekanism:uranium_hexafluoride',
		'amount':1000
	},
    {
        'id':'starcraft:depleted_uranium_hexafluoride',
        'amount':1000
    }
	],
  "processing_time": 100,
  "heat_requirement":'superheated'
    })
    event.custom({
  "type": "createdieselgenerators:distillation",
  "ingredients": [
    {
      "type": "neoforge:single",
      "fluid": "starcraft:depleted_uranium_hexafluoride",
      "amount": 1000
    }
  ],
  "heat_requirement": "heated",
  "processing_time": 100,
  "results": [
    {
      "id": "starcreaft:ammonia",
      "amount": 500
    }
   ]
})

})

