const itemsToRemove = [
    'create:andesite_alloy',
    'tconstruct:seared_ingot_gauge',
    'tconstruct:seared_melter',
    'tconstruct:scorched_ingot_gauge',
    'tconstruct:scorched_alloyer',
    'minecraft:stonecutter',
    'create:empty_blaze_burner',
    'create:shaft',
    'create:belt_connector',
    'create:rose_quartz',
    'create:windmill_bearing',
    'elementalcraft:contained_crystal',
    'extendedcrafting:luminessence',
    'elementalcraft:extractor',
    'elementalcraft:infuser',
    'psi:cad_assembler',
    'psi:programmer',
    'botania:terra_plate',
    'elementalcraft:binder'
]

const recipeIdToRemove = [
    'tconstruct:smeltery/casting/seared/smeltery_controller',
    'create:deploying/cogwheel'
]

onEvent('recipes', event => {
    for (let index = 0; index < recipeIdToRemove.length; index++) {
        event.remove({id: recipeIdToRemove[index]});
    }
})

onEvent('recipes', event => {
    for (let index = 0; index < itemsToRemove.length; index++) {
        event.remove({type: 'minecraft:crafting_shaped', output: itemsToRemove[index]});
        event.remove({type: 'minecraft:crafting_shapeless', output: itemsToRemove[index]}); 
    }
})

