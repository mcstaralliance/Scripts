ServerEvents.recipes(event =>{
    event.custom({
  "type": "evilcraft:blood_infuser",
  "input_item": 
  {"item":"botania:livingrock"},
  "input_fluid": {
    "id": "evilcraft:blood",
    "amount": 500
  },
  "output_item": {
    "id": "starcraft:blank_slate"
  },
  "duration": 800,
  "xp": 2,
  "tier": 0
})
    event.custom({
  "type": "evilcraft:blood_infuser",
  "input_item": 
  {"item":"starcraft:blank_slate"},
  "input_fluid": {
    "id": "evilcraft:blood",
    "amount": 1000
  },
  "output_item": {
    "id": "starcraft:reinforce_slate"
  },
  "duration": 800,
  "xp": 2,
  "tier": 1
})
    event.custom({
  "type": "evilcraft:blood_infuser",
  "input_item": 
  {"item":"starcraft:reinforce_slate"},
  "input_fluid": {
    "id": "evilcraft:blood",
    "amount": 4000
  },
  "output_item": {
    "id": "starcraft:imbued_slate"
  },
  "duration": 800,
  "xp": 2,
  "tier": 2
})
    event.custom({
  "type": "evilcraft:blood_infuser",
  "input_item": 
  {"item":"starcraft:imbued_slate"},
  "input_fluid": {
    "id": "evilcraft:blood",
    "amount": 8000
  },
  "output_item": {
    "id": "starcraft:demonic_slate"
  },
  "duration": 800,
  "xp": 2,
  "tier": 3
})


})