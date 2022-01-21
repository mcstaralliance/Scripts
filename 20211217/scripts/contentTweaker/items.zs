#loader contenttweaker
#priority 10000000
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

var ws = VanillaFactory.createItem("wooden_shears");
ws.maxStackSize = 1;
ws.maxDamage = 233;
ws.creativeTab = <creativetab:tab>;
ws.register();

var cf = VanillaFactory.createItem("clay_furnace");
cf.maxStackSize = 16;
cf.creativeTab = <creativetab:tab>;
cf.register();

var mh = VanillaFactory.createItem("hammer");
mh.maxStackSize = 1;
mh.maxDamage = 1000;
mh.creativeTab = <creativeTab:tab>;
mh.register();

var mp = VanillaFactory.createItem("processor");
mp.maxStackSize = 64;
mp.creativeTab = <creativeTab:tab>;
mp.glowing = true;
mp.register();

var dc = VanillaFactory.createItem("dragon");
dc.maxStackSize = 8;
dc.creativeTab = <creativeTab:tab>;
dc.glowing = true;
dc.register();

var myEntanglement = VanillaFactory.createItem("jiuchan");
myEntanglement.maxStackSize = 10;
myEntanglement.creativeTab = <creativetab:tab>;
myEntanglement.register();

var myStar = VanillaFactory.createItem("star");
myStar.maxStackSize = 64;
myStar.creativeTab = <creativetab:tab>;
myStar.register();

var myPrimoGem = VanillaFactory.createItem("primogem");
myPrimoGem.maxStackSize = 64;
myPrimoGem.creativeTab = <creativetab:tab>;
myPrimoGem.register();

var myFate = VanillaFactory.createItem("xiangyu");
myFate.maxStackSize = 10;
myFate.creativeTab = <creativetab:tab>;
myFate.register();

var myDualVectorFoil = VanillaFactory.createItem("artificialfoil");
myDualVectorFoil.creativeTab = <creativetab:tab>;
myDualVectorFoil.register();

var myDust = VanillaFactory.createItem("soildust");
myDust.creativeTab = <creativetab:tab>;
myDust.register();


var ingotNameList as string[] = [
    "nickel", "copper", "tin", "aluminium", "lead", "silver", "uranium", "iridium", "platinum"
];

for name in ingotNameList {
    var name = VanillaFactory.createItem(name ~ "_ingot");
    name.creativeTab = <creativetab:tab>;
    name.register();
}
