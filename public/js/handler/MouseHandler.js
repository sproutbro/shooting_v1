export default class MouseHandler {
  constructor(canvas, eventHandler) {
    this.mousePosition = { x: 0, y: 0 };
    this.isMouseDown = false;
    this.eventHandler = eventHandler;

    canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
    canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
  }

  handleMouseMove(event) {
    const rect = event.target.getBoundingClientRect();
    this.mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  handleMouseDown() {
    this.isMouseDown = true;
    this.eventHandler.onMouseDown(this.mousePosition);
  }

  handleMouseUp() {
    this.isMouseDown = false;
  }
}
