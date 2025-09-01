// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { Container, Typography, TextField, Button } from "@mui/material";
// import { Stack } from "@mui/material";


// export default function App() {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const [room, setRoom] = useState("");
//   const [socket, setSocket] = useState(null); // store socket instance
//   const [socketId, setSocketId] = useState(""); // store socket ID

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (message.trim() !== "" && socket) {
//       socket.emit("message",{room ,message});
//       setMessage("");
//     }
//   };

//   useEffect(() => {
//     const socket = io("http://localhost:5000"); // single socket variable per tab
//     setSocket(socket); // store for handleSubmit

//     socket.on("connect", () => {
//       console.log("Connected to server", socket.id);
//       setSocketId(socket.id);
//     });

//     socket.on("receiver-message", (data) => {
//       console.log("New message received:", data);
//     });

//     socket.on("welcome", (msg) => {
//       console.log(msg, `Socket ID: ${socket.id}`);
//          setMessages((messages) => [...messages, data]);
//     });

//     return () => {
//       socket.disconnect(); // cleanup on unmount
//     };
//   }, []);

//   return (
//     <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
//       <Typography variant="h1" component="div" gutterBottom>
//         Chat App
//       </Typography>

//       <Typography variant="h6">{socketId}</Typography>

//       <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
//         <TextField
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           id="message-input"
//           label="Message"
//           variant="outlined"
//           fullWidth
//         />
//         <TextField
//           value={room}
//           onChange={(e) => setRoom(e.target.value)}
//           id="room-input"
//           label="Room"
//           variant="outlined"
//           fullWidth
//         />
//         <Button variant="contained" color="primary" type="submit">
//           Submit
//         </Button>
//       </form>


//       <Stack>
//         {
//           messages.map((msg, index) => (
//             <Typography key={index} variant="body1">{msg}</Typography>
//           ))
//         }
//       </Stack>

//       <p>Your app is running!</p>
//     </Container>
//   );
// }
  

import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";

const App = () => {
  // Single socket instance per tab
  const socket = useMemo(
    () => io("http://localhost:3000", { withCredentials: true }),
    []
  );

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketID, setSocketId] = useState("");
  const [roomName, setRoomName] = useState("");

  // Send chat message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!room || !message) return;
    socket.emit("message", { room, message });
    setMessage("");
  };

  // Join a room
  const joinRoomHandler = (e) => {
    e.preventDefault();
    if (!roomName) return;
    socket.emit("join-room", roomName);
    setRoom(roomName);
    setRoomName("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("Connected", socket.id);
    });

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("welcome", (msg) => console.log(msg));

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h6">Socket ID: {socketID}</Typography>

      {/* Join Room */}
      <form onSubmit={joinRoomHandler} style={{ marginBottom: "1rem" }}>
        <TextField
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          label="Room Name"
          variant="outlined"
        />
        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
          Join Room
        </Button>
      </form>

      {/* Send Message */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          variant="outlined"
        />
        <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          label="Room"
          variant="outlined"
          sx={{ ml: 1 }}
        />
        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
          Send
        </Button>
      </form>

      {/* Messages */}
      <Stack spacing={1}>
        {messages.map((m, i) => (
          <Typography key={i}>{m}</Typography>
        ))}
      </Stack>
    </Container>
  );
};

export default App;
