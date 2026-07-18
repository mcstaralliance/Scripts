ServerEvents.recipes(event => {
    //魔力钢 
    event.custom({  
  "type": "botania:mana_infusion",
  "input": {
    "tag": 'c:ingots/steel'
  },
  "mana": 3000,
  "output": {
    "count": 2,
    "id": 'botania:manasteel_ingot'
  }})

    //魔力钢块
   event.custom({  
   "type": "botania:mana_infusion",
  "input": {
    "tag": 'c:storage_blocks/steel'
  },
  "mana": 27000,
  "output": {
    "count": 2,
    "id": 'botania:manasteel_block'
  }})
})
