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
//简化创建Ore函数


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


/* function visOreBuilder(name as string){
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