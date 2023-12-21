// onEvent('recipes', (event) => {

//     const furnaceRecipes = event.recipes.getAll('minecraft:smelting');
  
//     // 检查是否成功获取了熔炉的配方
//     furnaceRecipes.forEach((recipe) => {
//         console.info('Input:', recipe.ingredient, '-> Output:', recipe.result, 'Cook Time:', recipe.cookingtime);
//       });

//     const recipes = [
//         // {
//         //     outputs: [
//         //         { type: 'masterfulmachinery:items', data: { item: 'id', count: 1 } },
//         //         { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
//         //         { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 500 }},
//         //     ],
//         //     inputs: [
//         //         { type: 'masterfulmachinery:items', data: { item: 'id', count: 4 } },
//         //         { type: 'masterfulmachinery:energy', perTick: false, data: { amount: 10000 } },
//         //         { type: 'masterfulmachinery:fluids', perTick: false, data: { fluid: 'mekanismgenerators:fusion_fuel', amount: 500 }},
//         //     ],
//         //     ticks: 80,
//         // },
// ];

//         recipes.forEach((recipe) => {
//         recipe.type = 'masterfulmachinery:machine_process';
//         recipe.structureId = 'artificial_intelligence_1';
//         recipe.controllerId = 'artificial_intelligence';
//         event.custom(recipe);
//     });
// });