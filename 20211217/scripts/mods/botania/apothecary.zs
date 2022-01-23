#priority 2000
import mods.botania.Apothecary;

// remove
// 白雏菊
Apothecary.removeRecipe("puredaisy");
Apothecary.removeRecipe("rannuncarpus");
Apothecary.addRecipe("puredaisy", 
    [<botania:petal>, <botania:petal>, <botania:petal>, <botania:petal>, <ebwizardry:magic_crystal>]
);
