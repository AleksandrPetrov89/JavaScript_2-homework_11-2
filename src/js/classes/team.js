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

  // eslint-disable-next-line class-methods-use-this
  [Symbol.iterator]() {
    return {
      current: 0,
      length: this.team.length,
      ar: this.team,
      next() {
        this.current += 1;
        if (this.current <= this.length) {
          return { done: false, value: this.ar[this.current - 1] };
        // eslint-disable-next-line no-else-return
        } else {
          return { done: true };
        }
      },
    };
  }
}
