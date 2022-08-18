const Express = require("express");
const app = Express();

const routes = require("./routes");

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server().listen(server, {
  cors: {
    origin: "*",
  },
});

app.use(Express.json());
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
app.use(routes);

io.on("connection", (socket) => {
  console.log("a user connected :", socket.id);
  socket.on("disconnect", () => {
    console.log(`user ${socket.id} disconnected`);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});
