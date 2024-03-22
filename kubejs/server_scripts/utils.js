// priority: 0

// Unified pattern
function getKey(item) {
    return item.startsWith('#') ? {tag: item.substring(1)} : {item: item};
}
const patterns = {
    crossWithCore: [
        'CBC', 
        'BAB',
        'CBC'
    ],
    surroundWithCore: [
        'BBB',
        'BAB',
        'BBB'
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

onEvent('item.tags', event => {
    let corundum = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    corundum.forEach(Color => {
        event.add('starcraft:tag_corundum_cluster', ["quark:" + Color + "_corundum" + "_cluster"])
    }); 
})
