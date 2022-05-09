const app = require("socket.io");
const io = app(3000, {
  cors: {
    origin: ["http://localhost:8080"],
  },
});

io.on("connection", (socket) => {
  console.log("socket connection established ->", socket.id);
  // socket.on("custom-event", (number, text, obj) => {
  //   console.log(number, text, obj);
  // });
  socket.on("send-message", (message) => {
    // console.log(message);
    // io.emit("receive-message", message);
    socket.broadcast.emit("receive-message", message);
  });
});
