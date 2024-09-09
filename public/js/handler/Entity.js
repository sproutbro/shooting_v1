class Entity {
  constructor(entity) {
    this.image = new Image();
    this.image.src = entity.src;
    this.gameFrame = 0;
    this.staggerFrames = 5;
    this.init(entity);
  }

  init(entity) {
    for (const key in entity) {
      if (Object.prototype.hasOwnProperty.call(entity, key)) {
        const value = entity[key];
        this[key] = value;
      }
    }
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

  update(canvas) {
    this.gameFrame++;
    if (this.frames) {
      let position =
        Math.floor(this.gameFrame / this.staggerFrames) % this.frames;
      this.frameX = this.spriteWidth * position;
    }

    if (this.speedX) {
      this.x += this.speedX;
    }

    if (this.speedY) {
      this.y += this.speedY;
    }

    if (this.x + this.width < 0 || this.x > canvas.width) {
      return this;
    }

    if (this.y + this.height < 0 || this.y > canvas.height) {
      return this;
    }

    if (this.lifeTime === this.gameFrame) {
      return this;
    }
  }
}
export { Entity };
