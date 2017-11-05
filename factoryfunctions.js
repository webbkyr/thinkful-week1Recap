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

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6), 
  createCharacter('Biblo Baggins', 'biblo', 'Hobbit', 'The Shire', 2, 1), 
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legoolas', 'Elf', 'Woodland Realm', 8, 5)
];

