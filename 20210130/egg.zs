#priority 1000

import crafttweaker.player.IPlayer;

val TNT = <minecraft:tnt>;
val mySkull = <minecraft:skull:3>.withTag(
    {
        SkullOwner: {
            Id: "eb299a36-4849-423e-b7f7-65566c4209fe", Properties: {
                textures: 
                [
                    {
                        Signature: "MF0s1eHpll6F2V+ePn6uo7S89d7ztB/hSZVYyqDwFT95QU6TUIxykIOfIdm+VImgEDOGjkN3J81CuwiQgXF7V0oN3PXDc7Gv34O+CmDHCCZd/aoSPNPUW9EO8M81oWPtYjKJnCZ30ySnPNp2F9Toa6Cwv8Lm2boSbxjjn0mTGiXcCWpk9zjScx07QapbsQdNWUWCbp/sio8e5BpCuaC3MFfn2EqRllJZwuLKzrGLR1elHbYik5JQ+/8lS2cUl8cii2e3tvHfAJT69mbNvxH6yoI8AzeAj/fqwzzS0u8EHkO5HL4RzRZojBeZuFHGumfOJChugrLo974y06dFsBTsJ4WWRzotZhaTyYHV4dVBRROfQKcf1aL2KXDN8qrQCvzMxyps1OE4EdDa0xfJRecwnAkbhv6JFrXRggJSM5QS5qZgxoAMvrWq8agD0EWITOY1y39blWOFqPtg4A78jKS4u0MH1jDvEnuvYBLJpDJxWIJfp2jZYpSl10/LiwVkLOaTXE+vBYj9YKbGVvW/s3WXsJwLpUOPup05hcHnKCJ3/Jfxo/AGfcqKx0ZBIJJMCkrlvs0PA7BdaGJppSMuq55kuIwnT7vSW47V18coBj448PZwegH0ax/J9g6TOCMJhrnBUO5thjA1Y3XXBibeuVfRymOFNTxtBoxtLp4LtiO45Sg=", Value: "ewogICJ0aW1lc3RhbXAiIDogMTYxMjE4ODA2MDkxMSwKICAicHJvZmlsZUlkIiA6ICJlYjI5OWEzNjQ4NDk0MjNlYjdmNzY1NTY2YzQyMDlmZSIsCiAgInByb2ZpbGVOYW1lIiA6ICJFY2FyZWUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWM2YTQxZmM0NzllMjNhOWMwYzFmNjEzMTc1MWM3NjY1NDAzNjMwMGJhMzRhNTVmYjdhNDEyNTg5OWYyMzlhMyIKICAgIH0KICB9Cn0="
                    }
                ]
            }, 
        Name: "?????"
        }
    }
);


recipes.addShaped(mySkull, 
[
    [TNT, TNT], 
    [TNT, <minecraft:skull:4>]
]);

mySkull.addShiftTooltip(format.aqua("某星域世界玩家的头颅, 因缘分投机, 故出现在这里."));
<minecraft:skull:3>.displayName = ("??????");
<minecraft:skull:4>.addTooltip(format.aqua("用 3 个TNT与我合成!"));
