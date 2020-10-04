#loader contenttweaker
/*
    StarCraft_Test ContentTweaker Items Script.
*/

import mods.contenttweaker.Item;
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.ResourceLocation;
import mods.contenttweaker.VanillaFactory;

function createMatter(name as string) {
    val matter as Item = VanillaFactory.createItem(name);
    matter.rarity = "UNCOMMON";
    matter.creativeTab = <creativetab:materials.base>;
    matter.register();
}

createMatter("black_matter");
createMatter("red_matter");
createMatter("yellow_matter");
createMatter("blue_matter");
createMatter("grey_matter");
createMatter("green_matter");
createMatter("brown_matter");

/*
val <color> as Item = VanillaFactory.createItem("<color>_matter");
<color>.rarity = "UNCOMMON";
<color>.maxStackSize = 64;
<color>.creativeTab = <creativetab:materials.base>;
<color>.register();
*/