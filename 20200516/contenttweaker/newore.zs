#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;
import mods.contenttweaker.ResourceLocation;
import mods.contenttweaker.BlockMaterial;
import mods.contenttweaker.SoundType;
import mods.contenttweaker.DropHandler;
import mods.contenttweaker.ItemList;

function OreBuilder(name as string){
	print("Block about to be added : " + name);
	var cotblock = VanillaFactory.createBlock(name, <blockmaterial:rock>);
	cotblock.setBlockHardness(5.0); 
	cotblock.setBlockSoundType(<soundtype:stone>); 
	cotblock.setBlockResistance(50.0); 
    cotblock.setToolClass("pickaxe"); 
    cotblock.setToolLevel(0); 
	cotblock.setDropHandler(function(drops, world, position, state, fortune) {
        drops.add(<item:thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: name}]})*2);
        return;
    });
	cotblock.register();
}

var visores = ["acer","terra","ignis","aqua","ordo","perditio","vacuos","lux","motus","gelum","vitreus","metallum","victus","mortuus","potentia","permutatio","praecantatio","auram","alkimia","vitium","tenebrae","alienis","volatus","herba","instrumentum","fabrico","machina","vinculum","spiritus","cognitio","sensus","aversio","praemunio","desiderium","exanimis","bestia","humanus"] ;
for visore in visores {
    OreBuilder(visore);
}