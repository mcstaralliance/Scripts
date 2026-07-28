const lootStrainer = [
  {
    id: "ftb:strainer",
    pools: [
      {
        pool_name: "pebbles",
        weight: 45,
        entries: [
          ["createsifter:stone_pebble", 25, [1, 1]],
          ["createsifter:andesite_pebble", 10, [1, 1]],
          ["createsifter:granite_pebble", 8, [1, 1]],
          ["createsifter:diorite_pebble", 10, [1, 1]],
          ["createsifter:calcite_pebble", 6, [1, 1]],
          ["createsifter:tuff_pebble", 10, [1, 1]],
        ],
      },
      {
        pool_name: "misc",
        weight: 5,
        entries: [
          ["minecraft:sea_pickle", 20, [1, 1]],
          ["minecraft:seagrass", 35, [1, 1]],
          ["minecraft:kelp", 40, [1, 1]],
        ],
      },
      {
        pool_name: "sapling",
        weight: 7,
        entries: [
          ["minecraft:oak_sapling", 70, [1, 1]],
          ["minecraft:spruce_sapling", 5, [1, 1]],
          ["minecraft:birch_sapling", 5, [1, 1]],
          ["minecraft:jungle_sapling", 5, [1, 1]],
          ["minecraft:acacia_sapling", 5, [1, 1]],
          ["minecraft:dark_oak_sapling", 5, [1, 1]],
          ["minecraft:cherry_sapling", 5, [1, 1]],
          ["minecraft:mangrove_propagule", 5, [1, 1]],
        ],
      },
    ],
  },
];

LootJS.lootTables((event) => {
  lootStrainer.forEach((barrelType) => {
    const { id, pools } = barrelType;

    pools.forEach((pool) => {
      const { pool_name, entries } = pool;

      // Create a new loot table for each pool within the strainer
      event.create(`${id}_${pool_name}`).createPool((poolName) => {
        entries.forEach(([itemID, entryWeight, [min, max]]) => {
          poolName
            .addEntry(
              LootEntry.of(itemID).setCount([min, max]).withWeight(entryWeight)
            )
            .name("Strainer");
        });
      });
    });

    // Use the `create` method directly on the `event` object
    event.create(id).createPool((poolName) => {
      pools.forEach((pool) => {
        poolName
          .addEntry(
            LootEntry.reference(`${id}_${pool.pool_name}`).withWeight(
              pool.weight
            )
          )
          .name(pool.pool_name);
      });
    });
  });
});
