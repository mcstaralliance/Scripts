var allAdd as string[] = ["acer","terra","ignis","aqua","ordo","perditio","vacuos","lux","motus","gelum","vitreus","metallum","victus","mortuus","potentia","permutatio","praecantatio","auram","alkimia","vitium","tenebrae","alienis","volatus","herba","instrumentum","fabrico","machina","vinculum","spiritus","cognitio","sensus","aversio","praemunio","desiderium","exanimis","bestia","humanus"] ;
//设置总列表
for oneAdd in allAdd {
	var itemStackAdd = itemUtils.getItem("contenttweaker:" + oneAdd);
	itemStackAdd.displayName = oneAdd + " 矿";
	furnace.addRecipe(<thaumcraft:crystal_essence>.withTag({Aspects: [{amount: 1, key: oneAdd}]})*2, itemStackAdd, 20.0);
}
//添加Displayname 添加熔炉配方