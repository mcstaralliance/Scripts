// priority: 101

const hammerRecipes = [
  // Cobblestone -> Gravel
  ["#c:cobblestones", "minecraft:gravel", 1],
  ["ftbstuff:compressed_cobblestone", "minecraft:gravel", 9],
  ["ftbstuff:compressed_cobblestone_2", "minecraft:gravel", 81],
  ["ftbstuff:compressed_cobblestone_3", "minecraft:gravel", 729],
  // Dirt -> Sand
  ["minecraft:dirt", "minecraft:sand", 1],
  ["ftbstuff:compressed_dirt", "minecraft:sand", 9],
  ["ftbstuff:compressed_dirt_2", "minecraft:sand", 81],
  ["ftbstuff:compressed_dirt_3", "minecraft:sand", 729],
  // Endstone -> Crushed Endstone
  ["minecraft:end_stone", "ftbstuff:crushed_endstone", 1],
  ["ftbstuff:compressed_end_stone", "ftbstuff:crushed_endstone", 9],
  ["ftbstuff:compressed_end_stone_2", "ftbstuff:crushed_endstone", 81],
  ["ftbstuff:compressed_end_stone_3", "ftbstuff:crushed_endstone", 729],
  // Gravel -> Dirt
  ["minecraft:gravel", "minecraft:dirt", 1],
  ["ftbstuff:compressed_gravel", "minecraft:dirt", 9],
  ["ftbstuff:compressed_gravel_2", "minecraft:dirt", 81],
  ["ftbstuff:compressed_gravel_3", "minecraft:dirt", 729],
  // Netherrack -> Crushed Netherrack
  ["minecraft:netherrack", "ftbstuff:crushed_netherrack", 1],
  ["ftbstuff:compressed_netherrack", "ftbstuff:crushed_netherrack", 9],
  ["ftbstuff:compressed_netherrack_2", "ftbstuff:crushed_netherrack", 81],
  ["ftbstuff:compressed_netherrack_3", "ftbstuff:crushed_netherrack", 729],
  // Sand -> Dust
  ["#c:sandstone/uncolored_blocks", "minecraft:sand", 4],
  ["minecraft:sand", "ftbstuff:dust", 1],
  ["ftbstuff:compressed_sand", "ftbstuff:dust", 9],
  ["ftbstuff:compressed_sand_2", "ftbstuff:dust", 81],
  ["ftbstuff:compressed_sand_3", "ftbstuff:dust", 729],
  // Red Sand -> Dust
  ["#c:sandstone/red_blocks", "minecraft:red_sand", 4],
  ["minecraft:red_sand", "ftbstuff:dust", 1],
  ["ftbstuff:compressed_red_sand", "ftbstuff:dust", 9],
  ["ftbstuff:compressed_red_sand_2", "ftbstuff:dust", 81],
  ["ftbstuff:compressed_red_sand_3", "ftbstuff:dust", 729],
  // Stone -> Cobblestone
  ["ftbstuff:compressed_stone", "minecraft:cobblestone", 9],
  ["ftbstuff:compressed_stone_2", "minecraft:cobblestone", 81],
  ["ftbstuff:compressed_stone_3", "minecraft:cobblestone", 729],
  // Basalt -> Crushed Basalt
  ["minecraft:basalt", "ftbstuff:crushed_basalt", 1],
  ["ftbstuff:compressed_basalt", "ftbstuff:crushed_basalt", 9],
  ["ftbstuff:compressed_basalt_2", "ftbstuff:crushed_basalt", 81],
  ["ftbstuff:compressed_basalt_3", "ftbstuff:crushed_basalt", 729],
  //Kivi -> Crushed Kivi
  ["xycraft_world:kivi", "starcraft:crushed_kiwi", 1],
];

ServerEvents.recipes((event) => {
  const ftbstuff = event.recipes.ftbstuff;

  hammerRecipes.forEach(([input, output, amount]) => {
    const itemStack = [];
    const remainder = amount % 64;

    for (let i = 0; i < Math.floor(amount / 64); i++) {
      itemStack.push(`64x ${output}`);
    }

    if (remainder > 0) {
      itemStack.push(`${remainder}x ${output}`);
    }
    ftbstuff.hammer(itemStack, input).id(`starcraft:stuff/hammer/${input.split(":")[1]}_${amount}`);
  });
});
