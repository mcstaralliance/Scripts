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
    
})