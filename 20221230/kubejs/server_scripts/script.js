// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  event.remove({output: 'ae2:drive'})
  event.shaped('ae2:drive',[
	'IAI',
	'CPC',
	'IAI'
	],{
	  I: 'minecraft:iron_block',
	  C: 'ae2:fluix_glass_cable',
	  P: 'minecraft:sticky_piston',
	  A: 'ae2:crafting_accelerator'
  })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})