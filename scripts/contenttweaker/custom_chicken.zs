#loader contenttweaker
#modloaded chickens
#priority 100

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;

var chickenQuartz = ChickenFactory.createChicken("quartz", Color.fromInt(0xC9E3FF), <item:contenttweaker:quartz_egg>);
chickenQuartz.setForegroundColor(Color.fromInt(0xA6EFFF));
chickenQuartz.register();

var chickenStar = ChickenFactory.createChicken("star", Color.fromInt(0x427EFF), <item:contenttweaker:star_egg>);
chickenStar.setForegroundColor(Color.fromInt(0x003084));
chickenStar.register();

var chickenIkun = ChickenFactory.createChicken("ikun", Color.fromInt(0xFFFFFF), <item:minecraft:egg>);
chickenIkun.setForegroundColor(Color.fromInt(0xFFFFFF));
chickenIkun.spawnType = "NORMAL";
chickenIkun.register();

var chickenNeutronium = ChickenFactory.createChicken("neutronium", Color.fromInt(0x0E0E0E), <item:contenttweaker:neutronium_egg>);
chickenNeutronium.setForegroundColor(Color.fromInt(0x3B3B3B));
chickenNeutronium.register();

var chickenStainlesssteel = ChickenFactory.createChicken("stainlesssteel", Color.fromInt(0xB1B1C3), <item:contenttweaker:stainlesssteel_egg>);
chickenStainlesssteel.setForegroundColor(Color.fromInt(0x767681));
chickenStainlesssteel.register();

var chickenTungstensteel = ChickenFactory.createChicken("tungstensteel", Color.fromInt(0x555587), <item:contenttweaker:tungstensteel_egg>);
chickenTungstensteel.setForegroundColor(Color.fromInt(0x2D2D47));
chickenTungstensteel.register();

var chickenRhodiumplatedpalladium = ChickenFactory.createChicken("rhodiumplatedpalladium", Color.fromInt(0xC1AFAF), <item:contenttweaker:rhodiumplatedpalladium_egg>);
chickenRhodiumplatedpalladium.setForegroundColor(Color.fromInt(0x978989));
chickenRhodiumplatedpalladium.register();

var chickenRadon = ChickenFactory.createChicken("radon", Color.fromInt(0xD24ED2), <item:contenttweaker:radon_egg>);
chickenRadon.setForegroundColor(Color.fromInt(0xD24ED2));
chickenRadon.register();

var chickenSolderingAlloy = ChickenFactory.createChicken("soldering_alloy", Color.fromInt(0x8F8F97), <item:contenttweaker:soldering_alloy_egg>);
chickenSolderingAlloy.setForegroundColor(Color.fromInt(0x767A7C));
chickenSolderingAlloy.register();

var chickenSpecialRubber = ChickenFactory.createChicken("specialrubber", Color.fromInt(0x050904), <item:contenttweaker:specialrubber_egg>);
chickenSpecialRubber.setForegroundColor(Color.fromInt(0xB9B9B9));
chickenSpecialRubber.register();

var chickenPolymerClay = ChickenFactory.createChicken("polymerclay", Color.fromInt(0x3D7382), <item:contenttweaker:polymerclay_egg>);
chickenPolymerClay.setForegroundColor(Color.fromInt(0x598088));
chickenPolymerClay.register();

var chickenTrinium = ChickenFactory.createChicken("trinium", Color.fromInt(0x8866A7), <item:contenttweaker:trinium_egg>);
chickenTrinium.setForegroundColor(Color.fromInt(0xE3D9ED));
chickenTrinium.register();

// 氟鸡
var chickenFluorine = ChickenFactory.createChicken("fluorine", Color.fromInt(0x8866A9), <item:contenttweaker:fluorine_egg>);
chickenFluorine.setForegroundColor(Color.fromInt(0x93D9ED));
chickenFluorine.register();

// 空气鸡
var chickenAir = ChickenFactory.createChicken("air", Color.fromInt(0x8867A9), <item:contenttweaker:air_egg>);
chickenAir.setForegroundColor(Color.fromInt(0x93D7ED));
chickenAir.register();

// 地狱空气鸡
var chickenNether_air = ChickenFactory.createChicken("nether_air", Color.fromInt(0x8967A9), <item:contenttweaker:nether_air_egg>);
chickenNether_air.setForegroundColor(Color.fromInt(0x99D7ED));
chickenNether_air.register();

// 末地空气鸡
var chickenEnder_air = ChickenFactory.createChicken("ender_air", Color.fromInt(0x6867A9), <item:contenttweaker:ender_air_egg>);
chickenEnder_air.setForegroundColor(Color.fromInt(0x83D7ED));
chickenEnder_air.register();
