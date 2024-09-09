import SocketHandler from "./handler/SocketHandler.js";
import EntityHandler from "./handler/EntityHandler.js";
import MouseHandler from "./handler/MouseHandler.js";
import EventHandler from "./handler/EventHandler.js";
import TouchHandler from "./handler/TouchHandler.js";

const entityHandler = new EntityHandler();
const socketHandlder = new SocketHandler();
socketHandlder.init(entityHandler);

const eventHandler = new EventHandler(entityHandler, socketHandlder);
const mouseHandler = new MouseHandler(entityHandler.canvas2, eventHandler);
const touchHandler = new TouchHandler(entityHandler.canvas2, eventHandler);

function gameLoop() {
  entityHandler.draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
