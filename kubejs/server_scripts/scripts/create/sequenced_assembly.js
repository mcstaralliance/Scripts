ServerEvents.recipes(event =>{
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": 'c:ingots/silicon'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2:printed_silicon'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:silicon_press'
        }
      ],"keep_held_item": true,
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
   {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": 'c:gems/certus_quartz'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2:printed_calculation_processor'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:calculation_processor_press'
        }
      ],"keep_held_item": true,
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
   {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": 'c:gems/diamond'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2:printed_engineering_processor'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:engineering_processor_press'
        }
      ],"keep_held_item": true,
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
   {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": 'c:gems/quartz'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2cs:simple_circuit_print'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:engineering_processor_press'
        }
      ],"keep_held_item": true,
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
   {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": 'c:ingots/gold'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2:printed_logic_processor'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:logic_processor_press'
        }
      ],"keep_held_item": true,
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
   {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": 'ae2:printed_logic_processor'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2:logic_processor'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'minecraft:redstone'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:printed_silicon'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
   {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item":'ae2:printed_calculation_processor'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2:calculation_processor'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'minecraft:redstone'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:printed_silicon'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item":'ae2:printed_engineering_processor'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2:engineering_processor'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'minecraft:redstone'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:printed_silicon'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item":'ae2cs:simple_circuit_print'
  },
  "loops": 2,
  "results": [
    {'id': 'ae2cs:simple_processor'}
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'minecraft:redstone'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        },
        {
          "item": 'ae2:printed_silicon'
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
    {
  "type": "create:pressing",
  "ingredients": [
    {
      "item": 'create:incomplete_precision_mechanism'
    }
  ],
  "results": [
    {
      "id": 'create:incomplete_precision_mechanism'
    }
  ]
    },
    {
      "type": "create_new_age:energising",
      "energy_needed": 1000,
      "ingredients": [
        {
          "item": "create:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "id": "create:incomplete_precision_mechanism"
        }
      ]
    },
  ],
  "transitional_item": {
    "id": "create:incomplete_precision_mechanism"
  }
})
})