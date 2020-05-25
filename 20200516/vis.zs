var allAdd as string[] = ["acer","terra","ignis","aqua","ordo","perditio","vacuos","lux","motus","gelum","vitreus","metallum","victus","mortuus","potentia","permutatio","praecantatio","auram","alkimia","vitium","tenebrae","alienis","volatus","herba","instrumentum","fabrico","machina","vinculum","spiritus","cognitio","sensus","aversio","praemunio","desiderium","exanimis","bestia","humanus"] ;
//设置总列表
for oneAdd in allAdd {
	var itemStackAdd = itemUtils.getItem("contenttweaker:" + oneAdd);
	itemStackAdd.displayName = oneAdd + " 矿";
	itemStackAdd.addTooltip("&6熔炉烧炼可获得两倍对应的魔力水晶碎片");
	furnace.addRecipe(<thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: oneAdd}]})*2, itemStackAdd, 20.0);
}
//添加Displayname 添加熔炉配方
/* 
"contenttweaker:acer","contenttweaker:terra","contenttweaker:ignis","contenttweaker:aqua","contenttweaker:ordo","contenttweaker:perditio","contenttweaker:vacuos","contenttweaker:lux","contenttweaker:motus","contenttweaker:gelum","contenttweaker:vitreus","contenttweaker:metallum","contenttweaker:victus","contenttweaker:mortuus","contenttweaker:potentia","contenttweaker:permutatio","contenttweaker:praecantatio","contenttweaker:auram","contenttweaker:alkimia","contenttweaker:vitium","contenttweaker:tenebrae","contenttweaker:alienis","contenttweaker:volatus","contenttweaker:herba","contenttweaker:instrumentum","contenttweaker:fabrico","contenttweaker:machina","contenttweaker:vinculum","contenttweaker:spiritus","contenttweaker:cognitio","contenttweaker:sensus","contenttweaker:aversio","contenttweaker:praemunio","contenttweaker:desiderium","contenttweaker:exanimis","contenttweaker:bestia","contenttweaker:humanus"
 */