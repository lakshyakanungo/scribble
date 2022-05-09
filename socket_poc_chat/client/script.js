import { io } from "socket.io-client";

const messageInput = document.querySelector("#message-input");
const roomInput = document.querySelector("#room-input");
const joinRoomButton = document.querySelector("#join-room-button");
const form = document.querySelector("#form");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  displayMessage(`tumne connect kiya with id->${socket.id} `);
});
// socket.emit("custom-event", 2, "duni ", { a: "abc 4" });
// socket.emit("message-event", "abhi na jao chod kr ke dil abhi bhara nhi");
socket.on("receive-message", (message) => {
  displayMessage(message);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  const room = roomInput.value;

  if (message == "") return;
  socket.emit("send-message", message);
  displayMessage(message);
  messageInput.value = "";
});

joinRoomButton.addEventListener("click", () => {
  const room = roomInput.value;
});

function displayMessage(message) {
  const div = document.createElement("div");
  div.textContent = message;
  document.querySelector("#message-container").append(div);
}
