import { Enemy } from "./Enemy.js";
import enemies from "./enemies.js";
import Player from "./Player.js";

export default class EntityHandler {
  constructor() {
    this.players = {};
  }

  insertPlayer() {
    return new Player();
  }

  insertEnemy(name) {
    return new Enemy(enemies[name]);
  }
}
