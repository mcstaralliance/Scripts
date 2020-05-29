#priority 2000
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;
import mods.contenttweaker.ResourceLocation;
import mods.contenttweaker.BlockMaterial;
import mods.contenttweaker.SoundType;

function visOreBuilder(name as string){
	print("Block about to be added : " + name);
	var cotblock = VanillaFactory.createBlock(name, <blockmaterial:rock>);
	cotblock.setBlockHardness(5.0); 
	cotblock.setBlockSoundType(<soundtype:stone>); 
	cotblock.setBlockResistance(50.0); 
    cotblock.setToolClass("pickaxe"); 
    cotblock.setToolLevel(0); 
	cotblock.register();
}

//自定义批量添加方块函数

visOreBuilder("acer");
visOreBuilder("terra");
visOreBuilder("ignis");
visOreBuilder("aqua");
visOreBuilder("ordo");
visOreBuilder("perditio");
visOreBuilder("vacuos");
visOreBuilder("lux");
visOreBuilder("motus");
visOreBuilder("gelum");
visOreBuilder("vitreus");
visOreBuilder("metallum");
visOreBuilder("victus");
visOreBuilder("mortuus");
visOreBuilder("potentia");
visOreBuilder("permutatio");
visOreBuilder("praecantatio");
visOreBuilder("auram");
visOreBuilder("alkimia");
visOreBuilder("vitium");
visOreBuilder("tenebrae");
visOreBuilder("alienis");
visOreBuilder("volatus");
visOreBuilder("herba");
visOreBuilder("instrumentum");
visOreBuilder("fabrico");
visOreBuilder("machina");
visOreBuilder("vinculum");
visOreBuilder("spiritus");
visOreBuilder("cognitio");
visOreBuilder("sensus");
visOreBuilder("aversio");
visOreBuilder("praemunio");
visOreBuilder("desiderium");
visOreBuilder("exanimis");
visOreBuilder("bestia");
visOreBuilder("humanus");

//注意！！！！！不能简化 
