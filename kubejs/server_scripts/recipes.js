ServerEvents.recipes(event => {
    event.shaped('starcraft:energy_input', ["AAA","ABA","AAA"],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:redstone_block'
        }
    );

    event.shaped('starcraft:item_input', ["ABA","ACA","AAA"],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:dispenser',
            C: 'minecraft:hopper'
        }
    );

    event.shaped('starcraft:item_output', ["AAA","ABA","ACA"],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:dispenser',
            C: 'minecraft:hopper'
        }
    );

    event.shapeless('starcraft:item_input', ['starcraft:item_input']);
    event.shapeless('starcraft:item_output', ['starcraft:item_output']);

    event.shaped('starcraft:mana_input', ["ABA","ACA","AAA"],
        {
            A: 'minecraft:lapis_block',
            B: 'botania:elven_spreader',
            C: 'botania:mana_pylon'
        }
    );

    event.shaped('starcraft:mana_output', ["AAA","ABA","ACA"],
        {
            A: 'minecraft:lapis_block',
            B: 'botania:elven_spreader',
            C: 'botania:mana_pylon'
        }
    );

    event.shapeless('starcraft:mana_input', ['starcraft:mana_input']);
    event.shapeless('starcraft:mana_output', ['starcraft:mana_output']);
    event.shapeless('createaddition:electric_motor', ['starcraft:stress_input']);
    event.shapeless('starcraft:stress_input', ['createaddition:electric_motor']);
    event.shapeless('avaritia:infinity_catalyst',['extendedcrafting:ultimate_singularity','avaritia:ultimate_stew','avaritia:endest_pearl','avaritia:record_fragment','avaritia:neutronium_block','avaritia:crystal_matrix'])
})