ServerEvents.recipes(event =>{
    //偏二甲肼
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'starcreaft:ammonia'
      },
      {
        'type':"neoforge:single",
        "amount":1000,
        'fluid':'starcraft:hypochlorous_acid'
      },
      {
        'type':"neoforge:single",
        "amount":2000,
        'fluid':'starcraft:methanol'
      }
	],
	"results": [
      {
        'amount':1000,
        "id": "starcraft:dimethylhydrazine"
      }
	],
	"processing_time": 800,
    "heat_requirement":'heated'
    })
    //汞产出
    event.custom({
	"type":"createvintageneoforged:centrifugation",
	"ingredients": [ 
	  {
      'item':'ftbmaterials:cinnabar_dust'
    },
    ],
	"results": [
	{
		"id": 'ftbmaterials:sulfur_dust'
	},
  {
    'amount':1000,
    'id':'starcraft:mercury'
  }
	],
  "processing_time": 100,
  "heat_requirement":'superheated'
  })
  //次氯酸
    event.custom({
  "type": "create:mixing",
  "heat_requirement": "superheated",
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 10000,
      "fluid": "northstar:chlorine"
    },
    {
      "type": "neoforge:single",
      "amount": 10000,
      "fluid": "minecraft:water"
    },
    {
      "type": "neoforge:single",
      "amount": 1000,
      "fluid": "starcraft:mercury"
    },
  ],
  "results": [
    {
      "amount": 10000,
      "id": "starcraft:hypochlorous_acid"
    }
  ]
  })
  //一型火箭燃料
  event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [ 
	  {
      "type":"neoforge:single",
      "amount":1000,
      "fluid": "starcraft:dimethylhydrazine"
    },
	  {
      "type":"neoforge:single",
      "amount":1000,
      "fluid": "northstar:oxygen"
    }
  ],
	"results": [
	{
		"id": "starcraft:basic_rocket_fuel",
		"amount": 3000
	}
	],
  "processing_time": 1000,
  "heat_requirement":'heated'
  })
  event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [ 
	  {
      "type":"neoforge:single",
      "amount":1000,
      "fluid": "starcraft:dinitrogen_tetroxide"
    },
	  {
      "type":"neoforge:single",
      "amount":1000,
      "fluid": "northstar:oxygen"
    }
  ],
	"results": [
	{
		"id": "starcraft:basic_rocket_fuel",
		"amount": 6000
	}
	],
  "processing_time": 1000,
  "heat_requirement":'heated'
  })
  //二型火箭燃料
  event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [ 
	  {
      "type":"neoforge:single",
      "amount":10000,
      "fluid": "starcraft:basic_rocket_fuel"
    },
	  {
      "type":"neoforge:single",
      "amount":10000,
      "fluid": "pneumaticcraft:kerosene"
    }
  ],
	"results": [
	{
		"id": "starcraft:advanced_rocket_fuel",
		"amount": 5000
	}
	],
  "processing_time": 1000,
  "heat_requirement":'heated'
  })
  event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [ 
	  {
      "type":"neoforge:single",
      "amount":10000,
      "fluid": "starcraft:basic_rocket_fuel"
    },
    {
      "type":"neoforge:single",
      "amount":16000,
      "fluid": "northstar:liquid_oxygen"
    },
	  {
      "type":"neoforge:single",
      "amount":16000,
      "fluid": "northstar:liquid_hydrogen"
    }
  ],
	"results": [
	{
		"id": "starcraft:ultimate_rocket_fuel",
		"amount": 5000
	}
	],
  "processing_time": 1000,
  "heat_requirement":'heated'
  })


})

