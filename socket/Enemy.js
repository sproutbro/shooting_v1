class Enemy {
  constructor(enemy) {
    this.canvas = { width: 640, height: 360 };
    this.src = enemy.src;
    this.frameX = 0;
    this.spriteWidth = enemy.spriteWidth;
    this.spriteHeight = enemy.spriteHeight;
    this.width = enemy.width;
    this.height = enemy.height;
    this.x = this.randomX(this.width);
    this.y = this.randomY(this.height);
    this.actionIndex = Math.floor(Math.random() * enemy.action.length);
    this.action = enemy.action[this.actionIndex];
    this.setAction(this.actionIndex);
  }

  setAction(i) {
    this.frameY = this.spriteHeight * i;

    for (const key in this.action) {
      if (Object.prototype.hasOwnProperty.call(this.action, key)) {
        this[key] = this.action[key];
      }
    }
  }

  randomX(width) {
    return Math.floor(Math.random() * (this.canvas.width - width));
  }

  randomY(height) {
    return Math.floor(Math.random() * (this.canvas.height - height));
  }
}

export { Enemy };
