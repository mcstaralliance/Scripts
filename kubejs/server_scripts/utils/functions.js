// priority: 1005

// Unified pattern
function getKey(item) {
    return item.startsWith('#') ? {tag: item.substring(1)} : {item: item};
}
const patterns = {
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
