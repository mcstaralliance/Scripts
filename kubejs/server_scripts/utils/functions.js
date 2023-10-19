// priority: 1005


// Unified pattern
function CrossWithCoreRecipe(core, surroundA, surroundB) {
    let keyA = surroundA.startsWith('#') ? {tag: surroundA.substring(1)} : {item: surroundA};
    let keyB = surroundB.startsWith('#') ? {tag: surroundB.substring(1)} : {item: surroundB};
    let keyCore = core.startsWith('#') ? {tag: core.substring(1)} : {item: core}
    return {
        pattern: [
            'BAB',
            'ACA',
            'BAB'
        ],
        key: {
            A: keyA,
            B: keyB,
            C: core
        }
    }
}

function surroundWithCoreRecipe(core, surroundA) {
    let keyCore = core.startsWith('#') ? {tag: core.substring(1)} : {item: core};
    let keyA = surroundA.startsWith('#') ? {tag: surroundA.substring(1)} : {item: surroundA};
    return {
        pattern: [
            'AAA',
            'ABA',
            'AAA'
        ],
        key: {
            A: keyCore,
            B: keyA
        }
    }
}

function fullShapedRecipe(itemA) {
    let keyA = itemA.startsWith('#') ? {tag: itemA.substring(1)} : {item: itemA};
    return {
        pattern: [
            'AAA',
            'AAA',
            'AAA'
        ],
        key: {
            A: keyA,
        }
    }
}

function crossRecipe(itemA, itemB) {
    let keyA = itemA.startsWith('#') ? {tag: itemA.substring(1)} : {item: itemA};
    let keyB = itemB.startsWith('#') ? {tag: itemB.substring(1)} : {item: itemB};
    return {
        pattern: [
            'ABA',
            'BAB',
            'ABA'
        ],
        key: {
            A: keyA,
            B: keyB
        }
    }
}

global.addCrossWithCore = function(event, output, core, surroundA, surroundB) {
    const recipe = CrossWithCoreRecipe(core, surroundA, surroundB);
    event.shaped(output, recipe.pattern, recipe.key);
}

global.addSurroundWithCore = function(event, output, core, surroundA) {
    const recipe = surroundWithCoreRecipe(core, surroundA);
    event.shaped(output, recipe.pattern, recipe.key);
}

global.addFullShaped = function(event, output, itemA) {
    const recipe = fullShapedRecipe(itemA);
    event.shaped(output, recipe.pattern, recipe.key)
}

global.addCross = function(event, output, itemA, itemB) {
    const recipe = crossRecipe(itemA, itemB);
    event.shaped(output, recipe.pattern, recipe.key);
}