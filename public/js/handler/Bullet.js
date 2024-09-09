class Bullet {
  constructor(bullet) {
    this.image = new Image();
    this.image.src = "../../img/bullethole.png";
    this.frameX = 0;
    this.frameY = 0;
    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.x = bullet.x - 16;
    this.y = bullet.y - 16;
    this.width = 32;
    this.height = 32;
    this.lifeTime = 100;
    this.gameFrame = 0;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frameX,
      this.frameY,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.gameFrame++;
    if (this.lifeTime === this.gameFrame) {
      return this;
    }
  }
}
export { Bullet };
