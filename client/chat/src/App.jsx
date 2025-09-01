import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Container, Typography, TextField, Button } from "@mui/material";

const socket = io("http://localhost:5000"); // single socket

export default function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("message", message);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server", socket.id);
    });

    socket.on("receiver-message", (data) => {
      console.log("New message received:", data);
    });

    socket.on("welcome", (msg) => {
      console.log(msg, `Socket ID: ${socket.id}`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h1" component="div" gutterBottom>
        Chat App
      </Typography>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem" }}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>

      <p>Your app is running!</p>
    </Container>
  );
}
