'use strict';

function createCharacter (name, nickname, race, origin, attack, defense) {
  return {
    name, nickname, race, origin, attack, defense,
    describe: function() {
      return `${name} is a ${race} from ${origin}.`;
    },
    evaluateFight: function(character) {
      const x = attack;
      const y = defense;
      if (y > x) {
        return `Your opponent takes ${x} damage and you recieve zero damage.`;
      } else {
        return `Your opponent takes ${x} damage and you recieve ${y} damage.`;
      }
    } 

  };

}