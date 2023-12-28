const manaDisplay = (event) => {
  const {
    block: {
      id,
      entityData: { mana, manaCap },
    },
    player,
  } = event;

  const manaInfo =
  id.startsWith('botania')
    ? id === 'botania:creative_pool'
      ? [Text.white('∞')]
      : [Text.white(`${mana}/${manaCap}`)]
    : id === 'extrabotany:manabuffer'
    ? [Text.white(`${mana}/64000000`)]
    : null;

  player.setStatusMessage(['Mana: '].concat(manaInfo));
};

['mana', 'diluted', 'fabulous', 'creative'].forEach((types) => {
  onEvent('block.right_click', (event) => {
    if (event.block.id === `botania:${types}_pool` || event.block.id === 'extrabotany:manabuffer') {
      manaDisplay(event);
      event.player.swingArm(MAIN_HAND);
    }
  });
});