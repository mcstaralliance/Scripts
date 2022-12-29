#loader contenttweaker
#priority 1001

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.CreativeTab;

val starCreative = VanillaFactory.createCreativeTab("tab", <item:minecraft:nether_star>);
starCreative.register();