#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;
import mods.contenttweaker.ResourceLocation;
import mods.contenttweaker.BlockMaterial;
import mods.contenttweaker.SoundType;
import mods.contenttweaker.DropHandler;

function OreBuilder(name as string){
	print("Block about to be added : " + name);
	var cotblock = VanillaFactory.createBlock(name, <blockmaterial:rock>);
	cotblock.setBlockHardness(5.0); 
	cotblock.setBlockSoundType(<soundtype:stone>); 
	cotblock.setBlockResistance(50.0); 
    cotblock.setToolClass("pickaxe"); 
    cotblock.setToolLevel(0); 
	cotblock.register();
}
//简化创建Ore函数

function setDropandCreate(name as string){
	OreBuilder(name);
	name.setDropHandler(function(drops, world, position, state, fortune) {

    drops.add(<thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: name}]})*2);

    return;
	});
}
//简化创建并设置掉落函数
var visores = ["acer","terra","ignis","aqua","ordo","perditio","vacuos","lux","motus","gelum","vitreus","metallum","victus","mortuus","potentia","permutatio","praecantatio","auram","alkimia","vitium","tenebrae","alienis","volatus","herba","instrumentum","fabrico","machina","vinculum","spiritus","cognitio","sensus","aversio","praemunio","desiderium","exanimis","bestia","humanus"] ;
for i, visore in visores {
    var visore = visores[i];
    setDropandCreate(visore);
}

//创建Ore

/* function BlockBuilder(name as string, material as BlockMaterial, sound as SoundType, hardness as float, resis as float, toolcls as string, toollvl as int){
	print("Block about to be added : " + name);
	var cotblock = VanillaFactory.createBlock(name, material);
	cotblock.setBlockHardness(hardness); 
	cotblock.setBlockSoundType(sound); 
	cotblock.setBlockResistance(resis); 
    cotblock.setToolClass(toolcls); 
    cotblock.setToolLevel(toollvl); 
	cotblock.register(); 
	}*/


/* function setDropandCreate(name as string){
	print("Vis Ore about to be added : " ~ name);
	mods.content.Block.registerBlock("Vis"~name, "Vis"~name~"_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: name}]})], false, 0.5f, 0.8f, 2);
} */


/* 

mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visterra", "Visterra_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "terra"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visingis", "Visingis_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "ingis"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visaqua", "Visaqua_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aqua"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visordo", "Visordo_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "ordo"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visperditio", "Visperditio_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "perditio"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
mods.content.Block.registerBlock("Visacer", "Visacer_Ore", "rock", "content_block", "block", 1, [<minecraft:stone>, <thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: "aer"}]})], false, 0.5f, 0.8f, 2);
 */