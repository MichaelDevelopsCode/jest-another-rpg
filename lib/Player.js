const Potion = require('../lib/Potion');


function Player(name = '') { // if name is not given then default is an empty string " '' "
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;