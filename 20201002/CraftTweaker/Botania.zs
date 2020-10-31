import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

var ban as IItemStack[] = [
    <botania:rfgenerator>
];

for item in ban {
    Lib.removeAllRecipe(item);
}

mods.botania.Apothecary.removeRecipe(<botania:specialflower>.withTag({type: "entropinnyum"}));
mods.botania.Apothecary.addRecipe(<botania:specialflower>.withTag({type: "entropinnyum"}), [<botania:specialflower>.withTag({type: "endoflame"}), <botania:lens:11>, <enderio:block_reinforced_obsidian>, <botania:rune:12>, <botania:rune:11>, <botania:rune:13>]);
mods.botania.PureDaisy.addRecipe(<minecraft:quartz_block:1>, <appliedenergistics2:quartz_block>);
