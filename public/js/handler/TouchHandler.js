export default class TouchHandler {
  constructor(canvas, eventHandler) {
    this.touchPosition = { x: 0, y: 0 };
    this.isTouchDown = false;

    this.eventHandler = eventHandler;

    canvas.addEventListener("touchstart", this.handleTouchStart.bind(this));
    canvas.addEventListener("touchmove", this.handleTouchMove.bind(this));
    canvas.addEventListener("touchend", this.handleTouchEnd.bind(this));
  }

  handleTouchStart(event) {
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    this.isTouchDown = true;
    const touch = event.touches[0];
    this.touchPosition = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
    this.eventHandler.onTouchStart(this.touchPosition);
  }

  handleTouchMove(event) {
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    const touch = event.touches[0];
    this.touchPosition = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  }

  handleTouchEnd(event) {
    event.preventDefault();
    this.isTouchDown = false;
  }
}
