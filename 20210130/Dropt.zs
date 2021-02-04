import mods.dropt.Dropt;

Dropt.list("remove")
    .priority(0)
    .add(Dropt.rule()
        .matchDrops([<astralsorcery:blockmarble>.or(<astralsorcery:blockmarble:1>)])
        .addDrop(Dropt.drop()
            .items([<contenttweaker:calcium_carbonate_dust>])
        )
    );