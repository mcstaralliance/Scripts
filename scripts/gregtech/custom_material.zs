#loader gregtech
#priority 500

import mods.gregtech.material.MaterialBuilder;
import mods.gregtech.material.Material;

MaterialBuilder(32001, "rockcrystal")
    .dust(2)
    .color(0xFFFFFF)
    .ore(2, 1, true)
    .build();
