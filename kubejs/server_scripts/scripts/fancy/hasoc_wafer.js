ServerEvents.recipes(event =>{
    //光刻胶
    event.custom({
	"type":"createvintageneoforged:vacuumizing",
	"ingredients": [
      {
        'type':'neoforge:single',
        'amount': 10000,
        "fluid": 'immersiveengineering:phenolic_resin',
      },
      {
        'tag':'c:dusts/refined_glowstone'
      },
      {
        'type':'neoforge:single',
        'amount': 10000,
        "fluid": 'starcraft:epoxy',
      },
      {
        'type':'neoforge:single',
        'amount': 10000,
        "fluid": 'starcraft:distilled_water',
      },
      {
        'type':'neoforge:single',
        'amount': 10000,
        "fluid": 'starcraft:ethyl_tertbutyl_ether',
      },
	],
	"results": [
      {
        'amount':2000,
        "id": 'starcraft:photoresist'
      }
      ],
	"processing_time": 2000,
    "heat_requirement":'superheated'
    })
    //hasoc晶圆
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'starcraft:neutronium_doped_wafer'
  },
  "loops": 32,
  "results": [
    {'id': 'starcraft:hasoc_wafer'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_hasoc_wafer"
        },
        {
          "item": 'pneumaticcraft:printed_circuit_board'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_hasoc_wafer"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "starcraft:incomplete_hasoc_wafer"
        },
        {
          "item": 'ftbmaterials:stainless_steel_wire'
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_hasoc_wafer"
        }
      ]
    },
    {
      "type": "create:filling",
  "ingredients": [
    {
      "item": "starcraft:incomplete_hasoc_wafer"
    },
    {
      "type": "neoforge:single",
      "amount": 50,
      "fluid": "starcraft:photoresist"
    }
  ],
  "results": [
    {
      "id": "starcraft:incomplete_hasoc_wafer"
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 10000,
      "ingredients": [
        {
          "item": "starcraft:incomplete_hasoc_wafer"
        }
      ],
      "results": [
        {
          "id": "starcraft:incomplete_hasoc_wafer"
        }
      ]
    },
    {
  "type": "northstar:engraving",
  "ingredients": [
    {
      "item": "starcraft:incomplete_hasoc_wafer"
    }
  ],
  "results": [
    {
      "id": "starcraft:incomplete_hasoc_wafer"
    }
  ]
    }
  ],
  "transitional_item": {
    "id": "starcraft:incomplete_hasoc_wafer"
  }
})
    //参杂下界之星的晶圆
    event.custom({
  "type": "create:mixing",
  "heat_requirement":'superheated',
  "ingredients": [
    {
      "type": "neoforge:single",
      "amount": 16000,
      "fluid": 'starcraft:nitrogen'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    },
    {
      "tag":'c:storage_blocks/silicon'
    }
  ],
  "results": [
    {
      "id": 'starcraft:neutronium_doped_monocrystalline_silicon_boule'
    },
  ]
})
    //参杂下界合金的晶圆
    event.custom({
  "type": "create:cutting",
  "ingredients": [
    {
      "item": "starcraft:neutronium_doped_monocrystalline_silicon_boule"
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "count": 32,
      "id": 'starcraft:neutronium_doped_wafer'
    }
  ]
})
    //hasoc
    event.custom({
  "type": "create:cutting",
  "ingredients": [
    {
      "item": 'starcraft:hasoc_wafer'
    }
  ],
  "processing_time": 200,
  "results": [
    {
      "count": 1,
      "id": 'starcraft:hasoc'
    }
  ]
})
    
})