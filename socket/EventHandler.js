export default class EventHandler {
  constructor(entityHandler) {
    this.entityHandler = entityHandler;
  }

  getEntityPosition(entity) {
    return {
      x: entity.x + entity.width / 2,
      y: entity.y + entity.height / 2,
      radius: entity.width / 2,
    };
  }

  checkCircleCollision(entity, position) {
    const dx = entity.x - position.x;
    const dy = entity.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < entity.radius + position.radius;
  }
}
