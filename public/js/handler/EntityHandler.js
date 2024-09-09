export default class EntityHandler {
  constructor() {
    this.players = {};
    this.entities = [];
    this.bullets = [];
    this.init();
  }

  init() {
    this.canvas0 = document.createElement("canvas");
    this.canvas1 = document.createElement("canvas");
    this.canvas2 = document.createElement("canvas");
    this.canvas0.width = this.canvas1.width = this.canvas2.width = 640;
    this.canvas0.height = this.canvas1.height = this.canvas2.height = 360;
    this.canvas0.style.zIndex = 0;
    this.canvas1.style.zIndex = 1;
    this.canvas2.style.zIndex = 2;

    const body = document.querySelector("body");
    body.appendChild(this.canvas0);
    body.appendChild(this.canvas1);
    body.appendChild(this.canvas2);
  }

  drawBackground(canvas) {
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = "../../img/background1.jpg";
    ctx.drawImage(image, 0, 0, 640, 427, 0, 0, 640, 360);
  }

  drawEntities(canvas, entities) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!entities.length) return;
    entities.forEach((entity, index) => {
      entity.draw(ctx);
      if (entity.update(canvas)) {
        this.entities.splice(index, 1);
      }
    });
  }

  drawPlayers(canvas, players) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Object.keys(players).length) {
      ctx.font = "16px serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "right";

      Object.keys(players).forEach((key, index) => {
        ctx.fillText(
          `${key}: ${players[key].score}`,
          canvas.width,
          canvas.height - index * 18
        );
      });
    }

    if (this.bullets.length) {
      this.bullets.forEach((bullet, index) => {
        bullet.draw(ctx);
        if (bullet.update(canvas)) {
          this.bullets.splice(index, 1);
        }
      });
    }
  }

  draw() {
    this.drawBackground(this.canvas0);
    this.drawPlayers(this.canvas1, this.players);
    this.drawEntities(this.canvas2, this.entities);
  }
}
