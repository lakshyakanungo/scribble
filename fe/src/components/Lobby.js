import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
// const SERVER = "http://127.0.0.1:4000";
const socket = io("http://localhost:4000");

export default function Lobby() {
  // var socket = socketClient(SERVER);
  // socket.on("connect", () => {
  //   return <h1>tumne connect kiya with id {socket.id} </h1>;
  // });

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("connected", socket.id);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      console.log("disconnected", socket.id);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  return (
    <div>
      <p>You are in lobby</p>
      <p>Connected: {"" + isConnected}</p>
      <p>Last pong: {lastPong || "-"}</p>
      <button onClick={sendPing}>Send ping</button>
    </div>
  );
}
