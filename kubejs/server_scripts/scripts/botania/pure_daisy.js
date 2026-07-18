ServerEvents.recipes(event => {
    //活木 
    event.custom({  
  "type": "botania:pure_daisy",
  "copy_properties": true,
  "input": {
    "type": "botania:all_of_excluding",
    "excluding": [
      {
        "type": "botania:any_of",
        "ingredients": [
          {
            "type": "botania:block",
            "block": "botania:livingwood_log"
          }
        ]
      }
    ],
    "ingredients": [
      {
        "type": "botania:tag",
        "tag": '#immersiveengineering:treated_wood'
      }
    ]
  },
  "output": {
    "type": "botania:block",
    "block": "botania:livingwood_log"
  },
  "time": 100})
    //活石
    event.custom({  
  "type": "botania:pure_daisy",
  "input": {
    "type": "botania:block",
    "block": 'ars_nouveau:sourcestone'
  },
  "output": {
    "type": "botania:state",
    "state": {
      "Name": "botania:livingrock"
    }
  },
  "time": 100})
 })
