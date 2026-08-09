const OVERRIDES = {
    'block.mekanism.sulfuric_acid': '液态硫酸',
    'chemical.mekanism.sulfuric_acid': '气态硫酸'
};

// 在 last 阶段最终覆盖翻译
ClientEvents.generateAssets('last', (event) => {
    event.json('mekanism:lang/zh_cn', OVERRIDES);
});
