import { Server } from "socket.io";
import EntityHandler from "./EntityHandler.js";
import EventHandler from "./EventHandler.js";

export default class SocketHandler {
  constructor(server) {
    this.io = new Server(server);
    this.entityHandler = new EntityHandler();
    this.eventHandler = new EventHandler(this.entityHandler);
    this.stage();
  }

  stage() {
    setInterval(() => {
      this.enemy("shadowDog");
    }, 2000);
  }

  init() {
    this.io.on("connection", (socket) => {
      console.log(`Client connected: ${socket.id}`);

      const player = this.entityHandler.insertPlayer();
      this.entityHandler.players[socket.id] = player;
      this.io.emit("players", this.entityHandler.players);

      this.shoot(this.io, socket);

      socket.on("disconnect", (reason) => {
        console.log(`Client disconnected: ${socket.id}, Reason: ${reason}`);
        delete this.entityHandler.players[socket.id];
        this.io.emit("players", this.entityHandler.players);
      });
    });
  }

  enemy(name) {
    const enemy = this.entityHandler.insertEnemy(name);
    this.io.emit("enemy", enemy);
  }

  shoot(io, socket) {
    socket.on("shoot", (position, entities) => {
      position.radius = this.entityHandler.players[socket.id].radius;
      entities.forEach((entity, index) => {
        const entityPosition = this.eventHandler.getEntityPosition(entity);
        if (this.eventHandler.checkCircleCollision(entityPosition, position)) {
          this.entityHandler.players[socket.id].score++;
          io.emit("deleteEnemy", index);
          io.emit("players", this.entityHandler.players);
          io.emit("bullet", position);
        }
      });
    });
  }
}
