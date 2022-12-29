#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ItemFood;
import mods.contenttweaker.Item;

var myPaiMon = VanillaFactory.createItemFood("paimon", 4);
myPaiMon.maxStackSize = 16;
myPaiMon.wolfFood = true;
myPaiMon.healAmount = 4;
myPaiMon.alwaysEdible = true;
myPaiMon.creativeTab = <creativetab:tab>;
myPaiMon.register();
