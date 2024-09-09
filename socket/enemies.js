const canvas = { width: 640, height: 360 };

const shadowDog = {
  src: "../img/shadow_dog.png",
  spriteWidth: 575,
  spriteHeight: 523,
};

shadowDog.width = shadowDog.spriteWidth / 10;
shadowDog.height = shadowDog.spriteHeight / 10;
shadowDog.action = [];
shadowDog.action.push({
  frames: 7,
  lifeTime: 50,
});
shadowDog.action.push({
  y: canvas.height,
  frames: 7,
  speedY: -8,
});
shadowDog.action.push({
  y: -shadowDog.height,
  frames: 7,
  speedY: 8,
});
shadowDog.action.push({
  x: -shadowDog.width,
  frames: 9,
  speedX: 10,
});

const enemies = { shadowDog };

export default enemies;
