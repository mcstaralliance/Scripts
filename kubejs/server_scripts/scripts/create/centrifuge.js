ServerEvents.recipes(event =>{
    event.custom({
	"type":"createvintageneoforged:centrifugation",
	"ingredients": [ 
	{
      "type":"neoforge:single",
      "amount":64000, 
      "fluid": "starcraft:liquid_air"
    },
    ],
	"results": [
	{
		"id": 'northstar:oxygen',
		'amount':11000
	},
    {
        'id':'starcraft:nitrogen',
        'amount': 35000
    },
    {
        'id':'starcraft:carbon_dioxide',
        'amount': 2000
    },
	],
  "processing_time": 100,
  "heat_requirement":'heated'
})
    event.custom({
	"type":"createvintageneoforged:centrifugation",
	"ingredients": [ 
	{
      "type":"neoforge:single",
      "amount":64000, 
      "fluid": "starcraft:liquid_ender_air"
    },
    ],
	"results": [
	{
		"id": 'starcraft:nitrogen_dioxide',
		'amount':50000
	},
    {
        'id':'mekanismgenerators:deuterium',
        'amount': 30000
    },
    {
        'id':'mekanismgenerators:tritium',
        'amount': 30000
    }
	],
  "processing_time": 100,
  "heat_requirement":'superheated'
})
})