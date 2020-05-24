import mods.thaumcraft.Infusion;
//凝血弹弓,方块放置器,UU一套,稳定刷怪笼未ban

//无尽碗
import mods.roots.Fey;
Fey.removeRecipe(<roots:unending_bowl>);

//祛魔台
recipes.remove(<draconicevolution:diss_enchanter>);

//苍穹变换器
recipes.remove(<draconicevolution:celestial_manipulator>);

//空间IO端口
recipes.remove(<appliedenergistics2:spatial_io_port>);

//地形转换机
recipes.remove(<ic2:te:40>);

//反应堆稳定器
recipes.remove(<draconicevolution:reactor_component>);

//空间塔
recipes.remove(<appliedenergistics2:spatial_pylon>);

//反应堆能量注入器
recipes.remove(<draconicevolution:reactor_component:1>);

//资源库
recipes.remove(<armourers_workshop:tile.skin-library>);

//发电机
recipes.remove(<draconicevolution:generator>);

//采矿机
recipes.remove(<ic2:te:60>);

//高级采矿机
recipes.remove(<ic2:te:57>);

//全球资源库
recipes.remove(<armourers_workshop:tile.global-skin-library>);

//时装制作台
recipes.remove(<armourers_workshop:tile.armourer>);

//气象方尖碑
recipes.remove(<enderio:block_weather_obelisk>);

//信箱
recipes.remove(<forestry:mailbox>);

//贸易站
recipes.remove(<forestry:trade_station>);

//集邮箱
recipes.remove(<forestry:stamp_collector>);

//造雨机
recipes.remove(<forestry:rainmaker>);

//林业背包
var bags = [<forestry:lepidopterist_bag>,<forestry:miner_bag>,<forestry:digger_bag>,<forestry:forester_bag>,<forestry:hunter_bag>,<forestry:apiarist_bag>,<forestry:adventurer_bag>,<forestry:builder_bag>] ;
for i, bag in bags {
    val bag = bags[i];
    recipes.remove(bag);
}

//区块加载器
recipes.remove(<ic2:te:82>);

//玄钢头盔
recipes.remove(<enderio:item_dark_steel_helmet>);

//玄钢胸甲
recipes.remove(<enderio:item_dark_steel_chestplate>);

//玄钢护腿
recipes.remove(<enderio:item_dark_steel_leggings>);

//玄钢靴子
recipes.remove(<enderio:item_dark_steel_boots>);

//末影钢头盔
recipes.remove(<enderio:item_end_steel_helmet>);

//末影钢胸甲
recipes.remove(<enderio:item_end_steel_chestplate>);

//末影钢护腿
recipes.remove(<enderio:item_end_steel_leggings>);

//末影钢靴子
recipes.remove(<enderio:item_end_steel_boots>);

//ME破坏面板
recipes.remove(<appliedenergistics2:part:300>);

//ME流体破坏面板-AE2
recipes.remove(<appliedenergistics2:part:302>);

//ME流体破坏面板-更多元件
recipes.remove(<extracells:part.base:5>);

//传送符咒
recipes.remove(<draconicevolution:dislocator>);

//全息投影仪
recipes.remove(<armourers_workshop:tile.hologram-projector>);

//生物球可复用生物球
recipes.remove(<thermalexpansion:morb>);

//可复用生物球
recipes.remove(<thermalexpansion:morb:1>);

//工业tnt
recipes.remove(<ic2:te:1>);

//工程师装配台
recipes.remove(<immersiveengineering:wooden_device0:2>);

//左轮手枪
recipes.remove(<immersiveengineering:revolver>);

//折返权杖
recipes.remove(<enderio:item_rod_of_return>);

//方块破坏器
recipes.remove(<industrialforegoing:block_destroyer>);

//旅行权杖
recipes.remove(<enderio:item_travel_staff>);

//无限钻头
recipes.remove(<industrialforegoing:infinity_drill>);

//杀手乔
recipes.remove(<enderio:block_killer_joe>);

//核弹
recipes.remove(<ic2:te:2>);

//武士头盔
recipes.remove(<sakura:samurai_helmet>);

//武士胸甲
recipes.remove(<sakura:samurai_chest>);

//武士护腿
recipes.remove(<sakura:samurai_pants>);

//武士靴子
recipes.remove(<sakura:samurai_shoes>);

//炽焰之啄颅剑
recipes.remove(<avaritia:skullfire_sword>);

//熵变机械臂
recipes.remove(<appliedenergistics2:entropy_manipulator>);

//物品传送符咒
recipes.remove(<draconicevolution:magnet>);

//物质炮
recipes.remove(<appliedenergistics2:matter_cannon>);

//生物捕捉工具
recipes.remove(<industrialforegoing:mob_imprisonment_tool>);

//电动刷怪箱
recipes.remove(<enderio:block_powered_spawner>);

//磁轨炮
recipes.remove(<immersiveengineering:railgun>);

//终结之剑
recipes.remove(<enderio:item_dark_steel_sword>);

//经验交换方尖碑
recipes.remove(<enderio:block_experience_obelisk>);

//绑定传送符咒(点对点)
recipes.remove(<draconicevolution:dislocator_bound:1>);

//绑定传送符咒(玩家)
recipes.remove(<draconicevolution:dislocator_bound:2>);

//网络工具
recipes.remove(<appliedenergistics2:network_tool>);

//自动刷怪机
recipes.remove(<industrialforegoing:mob_duplicator>);

//觉醒物品传送符咒
recipes.remove(<draconicevolution:magnet:1>);

//调色器
recipes.remove(<armourers_workshop:tile.colour-mixer>);

//配色工作台
recipes.remove(<armourers_workshop:tile.dye-table>);

//镶嵌工作台
recipes.remove(<armourers_workshop:tile.skinning-table>);

//ME成型面板
recipes.remove(<appliedenergistics2:part:320>);

//ME流体成型面板-AE2
recipes.remove(<appliedenergistics2:part:321>);

//ME流体成型面板-更多元件
recipes.remove(<extracells:part.base:6>);

//传送台
recipes.remove(<enderio:block_tele_pad>);

//传送符咒基座
recipes.remove(<draconicevolution:dislocator_pedestal>);

//附魔提取机
recipes.remove(<industrialforegoing:enchantment_extractor>);

//灵魂瓶
recipes.remove(<enderio:item_soul_vial>);

//传送符咒收纳容器
recipes.remove(<draconicevolution:dislocator_receptacle>);

//玄钢升级"存入"
recipes.remove(<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:direct"}));

//玄钢升级"旅行"
recipes.remove(<enderio:item_dark_steel_upgrade:1>.withTag({"enderio:dsu": "enderio:travel"}));

//信件
recipes.remove(<forestry:letters>);
mods.forestry.Carpenter.removeRecipe(<forestry:letters>);

//EFLN
recipes.remove(<tconstruct:throwball:1>);

//腐化瓶
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:bottle_taint>);

