import { Entity } from "./Entity.js";
import { Bullet } from "./Bullet.js";
import { scream } from "./sound.js";

export default class SocketHandler {
  constructor() {
    this.socket = io();
  }

  init(entityHandler) {
    this.socket.on("players", (players) => {
      entityHandler.players = players;
    });

    this.socket.on("enemy", (enemy) => {
      entityHandler.entities.push(new Entity(enemy));
    });

    this.socket.on("bullet", (bullet) => {
      entityHandler.bullets.push(new Bullet(bullet));
    });

    this.socket.on("deleteEnemy", (index) => {
      scream.play();
      entityHandler.entities.splice(index, 1);
    });
  }

  shoot(position, entities) {
    this.socket.emit("shoot", position, entities);
  }
}
