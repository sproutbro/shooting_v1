import { gun1 } from "./sound.js";
import { Bullet } from "./Bullet.js";

export default class EventHandler {
  constructor(entityHandler, socketHandlder) {
    this.entityHandler = entityHandler;
    this.socketHandlder = socketHandlder;
  }

  onMouseDown(position) {
    gun1.play();
    this.entityHandler.bullets.push(new Bullet(position));
    this.socketHandlder.shoot(position, this.entityHandler.entities);
  }

  onTouchStart(position) {
    gun1.play();
    this.entityHandler.bullets.push(new Bullet(position));
    this.socketHandlder.shoot(position, this.entityHandler.entities);
  }
}
