// priority: 1

const idToRemove = [
    'botania:runic_altar/air',
    'botania:runic_altar/earth',
    'botania:runic_altar/fire',
    'botania:runic_altar/water',
    'botania:runic_altar/mana'
]

const itemToBan = [
    'create:schematicannon'
]

const itemToRemove = [
    'create:cogwheel',
    'create:large_cogwheel',
    'cagedmobs:mob_cage',
    'cagedmobs:hopping_mob_cage',
    'beyonddimensions:net_creater',
    'beyonddimensions:net_control',
    'beyonddimensions:net_interface',
    'beyonddimensions:net_pathway',
    'create:sweet_roll',
    'botania:runic_altar'
]


ServerEvents.recipes(event => {
    console.log("Remove items is running")

    for (let toRemove of itemToRemove){
        event.remove({ output: toRemove })
    }
    for (let toIdRemove of idToRemove){
        event.remove({ id: toIdRemove })
    }
    for (let toBan of itemToBan){
        event.remove({ output: toBan })
    }

    console.log("Remove items is done")
})