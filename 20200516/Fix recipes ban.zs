val emer = <minecraft:emerald>;
recipes.addShaped("eioendercrystal", <enderio:item_material:16>, [[emer,emer,emer],[<minecraft:ender_pearl>,<enderio:item_material:15>.marked("enccrystal"),<minecraft:ender_pearl>],[emer,<minecraft:redstone>,emer]], function(out, ins, cInfo) {
    var displayName = ins.enccrystal.displayName;
    if(displayName has ":") {
        return itemUtils.getItem(displayName);
    }
    return <enderio:item_material:16>;
}, null);
//添加了EIO末影水晶的合成

recipes.addShaped("zombiepersonmade",<enderio:item_material:42>,[[null,<enderio:item_material:74>,null],[<enderio:item_material:16>,<enderio:item_material:41>,<enderio:item_material:16>],[null,<enderio:item_material:74>,null]],function,action);
//添加了人造僵尸的合成


// 当魔改主体完善后，本文件将合并至主体。