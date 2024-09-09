import express from "express";
import http from "http";

import SocketHandler from "./socket/SocketHandler.js";

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);
const socketHandlder = new SocketHandler(server);
socketHandlder.init();

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
