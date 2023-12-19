const itemsToBan = [
    'chunkloaders:single_chunk_loader',
    'chunkloaders:basic_chunk_loader',
    'chunkloaders:advanced_chunk_loader',
    'chunkloaders:ultimate_chunk_loader',
    '@compactmachines'
];

onEvent('item.tooltip', tooltip => {
    for (let addTooltipForBan of itemsToBan) {
        tooltip.addAdvanced(addTooltipForBan, (item, advanced, text) => {
            if (!tooltip.shift) {
                text.add(1, [Text.of('已禁用物品').red()])
            } else {
                text.add(1, [Text.of('Be Permited For STAFF').green()])
            }
        })
    }

    // Masterful Machine Tooltip
    tooltip.add('masterfulmachinery:alfsteel_furnace_controller', ['§e多方块名§f : §a模块化熔炉 MKII', '§e需要：', '§c精灵钢线圈 * 24', '§c注魔板 * 1', '§c流明玻璃 * 12', '§c精灵钢块 * 12', '§c高级排气扇 * 18', '§c模块化熔炉 MKI 物品输入口 + 输出口 * 1', '§c模块化熔炉 MKI 能量输入口 * 1', '§c机械外壳 * 8', '§c精灵钢机械方块 * 20', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:artificial_intelligence_controller', ['§e多方块名§f : §a星域智脑', '§e需要：', '§c星域智脑控制器 * 1', '§c夸克计算力场方块 * 48', '§c星域智脑物品输入口 * 4', '§c星域智脑能量输入口 * 1', '§c星域智脑物品输出口 * 1', '§c量子位结构外壳 * 871', '§c星辉块 * 36', '§c维度外壳 * 534', '§c力量框架 * 168', '§c夸克计算外壳 * 128', '§c量子位计算器 * 4', '§d§lDesigned by Tudor'])
    tooltip.add('masterfulmachinery:elementium_furnace_controller', ['§e多方块名§f : §a模块化熔炉 MKI', '§e需要：', '§c模块化熔炉 MKI 物品输入 + 输出口 * 1', '§c模块化熔炉 MKI 能量输入口 * 1', '§c源质钢机械方块 * 13', '§c泰拉钢块 * 1', '§c源质钢线圈 * 16', '§c泰拉凝聚板 * 1', '§c硬化玻璃 * 8', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:force_field_aggregator_controller',['§e多方块名§f : §a星域力场聚合装置', '§e需要：', '§c机械外壳 * 45', '§c源质钢线圈 * 32', '§c聚变外壳 * 32', '§c星域力场聚合装置能量输入口 * 2', '§c星域力场聚合装置物品输入 + 物品输出口 * 1', '§c质量压力容器 * 8', '§d§lDesigned by Tudor'])
    tooltip.add('masterfulmachinery:machine_pulverizer_controller', ['§e多方块名§f : §a模块化粉碎机', '§e需要：', '§c注意危险 * 12', '§c石英粉碎机 * 9', '§c硬化玻璃 * 9', '§c模块化粉碎机物品输入 + 输出口 * 1', '§c模块化粉碎机能量输入口 * 1', '§c下界合金机械方块 * 46', '§c下界合金包层铝传输通道 * 6', '§c工厂警示块 * 24', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:marine_fisher_controller', ['§e多方块名§f : §a模块化捕鱼器', '§e需要：', '§c镂空钢框架 * 4', '§c黄瓦块 * 114', '§c模块化捕鱼器能量输入 + 流体输入 + 物品输入 + 物品输出口 * 1', '§d§lDesigned by qing_kong']),
    tooltip.add('masterfulmachinery:material_stonework_factory_controller', ['§e多方块名§f : §a模块化造石厂', '§e需要：', '§c工厂灯块 * 5', '§c金块 * 5', '§c模块化造石厂流体输入口 * 2', '§c钢瓦块 * 25', '§c模块化造石厂物品输出口 * 2', '§c工厂警示块 * 13', '§c高压线圈 * 2', '§c通风管道 * 5', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:neutronium_collector_controller', ['§e多方块名§f : §a模块化中子素收集器', '§e需要：', '§c中子素块 * 24', '§c模块化中子素收集器物品输入 + 输出口 * 1', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:netherstar_controller', ['§e多方块名§f : §a模块化下界之星能源炉', '§e需要：', '§c中子素反应堆外壳 * 556', '§c黑曜石反应堆基底 * 103', '§c辐射危险 * 113', '§c模块化下界之星能源炉物品输入口 * 2', '§c模块化下界之星能源炉能量输出口 * 3', '§c下界之星能量块 * 192', '§c中子素质量通道 * 22', '§c夸克计算外壳 * 26', '§c量子位计算器 * 1', '§c中子素连接固化器 * 34', '§c星辉界能量汲取器 * 34', '§c精灵钢块 * 24', '§c星辉块 * 8', '§c末影玻璃 * 28', '§c信标 * 8', '§c彩虹桥玻璃 * 4', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:neutron_collector_modular_controller', ['§d§l[§c§lWIP§d§l]'])
    tooltip.add('masterfulmachinery:particle_fusion_reactor_controller', ['§e多方块名§f : §a星域粒子聚合器', '§e需要：', '§c星域粒子聚合器物品输入口 * 1', '§c星域粒子聚合器能量输入口 * 7', '§c并行处理单元 * 2', '§c流明玻璃 * 96', '§c琥珀金块 * 8', '§c福鲁伊克斯块 * 6', '§c守护之石 * 3', '§c致密能量元件 * 2', '§c星域粒子聚合器物品输出口 * 1', '§c高级原液单元 * 2', '§d§lDesigned by Tudor'])
    tooltip.add('masterfulmachinery:star_creation_instrument_controller', ['§e多方块名§f : §a创星仪', '§e需要：', '§c信标 * 1', '§c彩虹桥玻璃 * 1', '§c暗黑玻璃 * 1', '§c黑曜石反应堆基底 * 617', '§c中子素反应堆外壳 * 120', '§c星灵中子机械方块* 232', '§c高压危险 * 72', '§c夸克级承重方块 * 18', '§c质量压力容器 * 112', '§c星辰之耀线圈 * 209', '§c维度外壳 * 149', '§c末影玻璃 * 248', '§c中子素质量通道 * 32', '§c下界之星能量块 * 97', '§c星辉块 * 14', '§c精灵钢块 * 12', '§c星灵中子响应器 * 28', '§c下界之星块 * 1', '§c夸克计算力场方块 * 12', '§c星灵中子聚合器 * 24', '§c创星仪能量输出 + 输入口 * 2', '§c创星仪流体输出 + 输入口 * 2', '§c创星仪物品输出 + 输入口 * 2', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:star_picker_controller', ['§e多方块名§f : §a摘星者', '§e需要：', '§c下界之星能量块 * 1', '§c星钢钻头稳定器 * 1', '§c魔力钢块 * 1', '§c星钢机械方块 * 103', '§c泰拉钢掺杂下届合金五向挖掘钻头 * 1', '§c星钢钻杆方块 * 5', '§c钢脚手架 * 20', '§c星钢散热器 * 4', '§c摘星者能量输入口 * 2', '§c摘星者物品输出口 * 2', '§d§lDesigned by qing_kong'])
    tooltip.add('masterfulmachinery:wither_builder_controller',['§e多方块名§f : §a模块化杀凋机', '§e需要：', '§c灵魂沙 * 3', '§c下界之星方块 * 1', '§c凋灵骷髅头 * 3', '§c钢块(沉浸工程) * 28', '§c注意危险 * 16', '§c高压线圈 * 2', '§c遮光玻璃 * 67', '§c杀凋机能量输入口 * 2', '§c杀凋机物品输入 + 输出口 * 1', '§d§lDesigned by qing_kong'])

    tooltip.add(['minecraft:iron_nugget'], '貌似不能正常分解~')
})