// priority: 1005

// Unified pattern
function getKey(item) {
    // 用于处理字符串获取物品传入模式及返回对应的键值
    return item.startsWith('#') ? {tag: item.substring(1)} : {item: item};
}

const patterns = {
    // 写明各种配方
    crossWithCore: [
        'BAB', 
        'ACA',
        'BAB'
    ],
    surroundWithCore: [
        'AAA',
        'ABA',
        'AAA'
    ],
    fullShaped: [
        'AAA',
        'AAA',
        'AAA'
    ],
    cross: [
        'ABA',
        'BAB',
        'ABA'
    ]
};

function recipeBuilder(pattern, items) {
    // 自动生成配方对象
    const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let keyObject = {};
    items.forEach((item, index) => {
        keyObject[keys[index]] = getKey(item);
    });
    return {
        pattern: pattern,
        key: keyObject
    }
}


// 将函数注册到全局
global.addCrossWithCore = function(event, output, core, surroundA, surroundB) {
    const recipe = recipeBuilder(patterns.crossWithCore, [surroundA, surroundB, core]);
    event.shaped(output, recipe.pattern, recipe.key);
}

global.addSurroundWithCore = function(event, output, core, surroundA) {
    const recipe = recipeBuilder(patterns.surroundWithCore, [surroundA, core]);
    event.shaped(output, recipe.pattern, recipe.key);
}

global.addFullShaped = function(event, output, itemA) {
    const recipe = recipeBuilder(patterns.fullShaped, [itemA]);
    event.shaped(output, recipe.pattern, recipe.key)
}

global.addCross = function(event, output, itemA, itemB) {
    const recipe = recipeBuilder(patterns.cross, [itemA, itemB]);
    event.shaped(output, recipe.pattern, recipe.key);
}
