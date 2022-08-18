const Express = require("express");
const router = Express.Router();
const io = require("socket.io")(4001);

io.on("connection", (socket) => {
  console.log(socket.id);
});

module.exports = router;
