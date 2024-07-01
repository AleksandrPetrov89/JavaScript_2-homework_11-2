import Team from '../classes/team.js';
import Bowman from '../classes/bowman.js';

const bowman1 = new Bowman('bowman1');
const bowman2 = new Bowman('bowman2');
const team1 = new Team();
const team2 = new Team(bowman1, 'a');
const team3 = new Team(bowman1, bowman2);

test.each([
  [team1, []],
  [team2, [bowman1]],
  [team3, [bowman1, bowman2]],
])(
  ('Проверка перебора класса Team'),
  (team, res) => {
    const ans = [...team];
    expect(ans).toEqual(res);
  },
);
