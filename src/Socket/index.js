import { io } from "socket.io-client";

export const socketInit = () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    trensports: ["websocket"],
  };
  return io("http://localhost:5000", options);
};
