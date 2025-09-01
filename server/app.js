// import express from 'express';
// import { Server } from 'socket.io';
// import { createServer } from 'http';
// import cors from 'cors';

// const app = express();
// const server = createServer(app);
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST"],
//         credentials: true
//     }
// });


// // automatically called when a client connects
// io.on("connection", (socket) => {
//     console.log("user connected" , socket.id );

//     socket.on("message" , ({room , message}) => {
//         console.log({room , message});
//      //   io.emit("receiver-message" , data);  // io means the entire circuit i have emiited the message to all the socket connected , now all the client will listen to this event (receiver-message)
// //socket.broadcast.emit("receiver-message" , data); // broadcast means all the client except the one who has sent the message
// io.to(room).emit("receiver-message" , data.message); // to send message to a particular room (all the client in that room will get the message
//     })
   
//       socket.emit("welcome" , "Welcome to the server!"); 

//       socket.on("disconnect", () => {
//         console.log("user disconnected" , socket.id);
//       });
// });

// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// // server.listen as we create htpp server
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // soket.io is build on top of http server  
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
const server = createServer(app);
const PORT = 3000;
const JWT_SECRET = "asdasdsadasdasdasdsa";

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// Simple login route to issue JWT in cookie
app.get("/login", (req, res) => {
  const token = jwt.sign({ userId: "12345" }, JWT_SECRET);
  res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: false })
     .json({ message: "Login successful" });
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Socket middleware to check JWT from cookie
io.use((socket, next) => {
  const cookieHeader = socket.handshake.headers.cookie;
  if (!cookieHeader) return next(new Error("No cookie sent"));

  const token = cookieHeader.split(";").find(c => c.trim().startsWith("token="))?.split("=")[1];
  if (!token) return next(new Error("No token found"));

  try {
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    next(new Error("Authentication Error"));
  }
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  // Join room
  socket.on("join-room", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  // Send message to all clients in a room
  socket.on("message", ({ room, message }) => {
    console.log({ room, message });
    io.in(room).emit("receive-message", message);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });

  socket.emit("welcome", "Welcome to the server!");
});

app.get("/", (req, res) => res.send("Server is running"));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 