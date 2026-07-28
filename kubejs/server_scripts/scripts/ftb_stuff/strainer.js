const lootStrainer = [
  {
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
  const targetTable = event.getLootTable(
    "ftbstuff:custom/water_strainer_test"
  );

  if (targetTable == null) {
    console.error(
      "[LootJS] Missing FTB Stuff water strainer loot table: " +
        "ftbstuff:custom/water_strainer_test"
    );
    return;
  }

  lootStrainer.forEach((strainerType) => {
    const pools = strainerType.pools;

    const poolReferences = [];

    pools.forEach((poolDefinition) => {
      const pool_name = poolDefinition.pool_name;
      const weight = poolDefinition.weight;
      const entries = poolDefinition.entries;
      const helperTable = `kubejs:ftb_stuff/water_strainer/${pool_name}`;
      poolReferences.push([helperTable, weight]);

      event.create(helperTable).createPool((lootPool) => {
        lootPool.name(`water_strainer_${pool_name}`);

        entries.forEach((entry) => {
          const itemID = entry[0];
          const entryWeight = entry[1];
          const min = entry[2][0];
          const max = entry[2][1];

          lootPool.addEntry(
            LootEntry.of(itemID)
              .withWeight(entryWeight)
              .setCount([min, max])
          );
        });
      });
    });

    // FTB Stuff uses this shared table for every wooden water strainer.
    targetTable.clear();

    targetTable.createPool((lootPool) => {
      lootPool.name("water_strainer");
      lootPool.rolls(1);

      poolReferences.forEach((reference) => {
        const helperTable = reference[0];
        const weight = reference[1];

        lootPool.addEntry(
          LootEntry.reference(helperTable).withWeight(weight)
        );
      });
    });
  });
});
