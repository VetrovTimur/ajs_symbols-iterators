import Person from './person';
import Team from './team';

const player1 = new Person({
  name: 'Арагорн',
  type: 'Человек',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player2 = new Person({
  name: 'Леголас',
  type: 'Эльф',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const player3 = new Person({
  name: 'Гимли',
  type: 'Гном',
  health: 100,
  level: 1,
  attack: 50,
  defence: 50,
});

const newTeam = new Team();

newTeam.add(player1);
newTeam.add(player2);
newTeam.add(player3);

// eslint-disable-next-line no-restricted-syntax
for (const player of newTeam) {
  // eslint-disable-next-line no-console
  console.log(player);
}
