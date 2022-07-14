#loader contenttweaker
#priority 10000001
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.CreativeTab;

val starCreative = VanillaFactory.createCreativeTab("tab", <item:minecraft:nether_star>);
starCreative.register();
