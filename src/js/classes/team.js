import Character from './character.js';

export default class Team {
  constructor(...characters) {
    this.team = [];
    characters.forEach((item) => {
      if (item instanceof Character) {
        this.team.push(item);
      }
    });
  }

  * [Symbol.iterator]() {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of this.team) {
      yield item;
    }
    // this.team.forEach(item => yield item);
  }
}
