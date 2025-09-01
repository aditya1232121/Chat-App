import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

const app = express();
const server = createServer(app);
const PORT = 5000;

app.use(cors());
app.use(express.json());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});


// automatically called when a client connects
io.on("connection", (socket) => {
    console.log("user connected" , socket.id );

    socket.on("message" , (data) => {
        console.log(data);
     //   io.emit("receiver-message" , data);  // io means the entire circuit i have emiited the message to all the socket connected , now all the client will listen to this event (receiver-message)
socket.broadcast.emit("receiver-message" , data); // broadcast means all the client except the one who has sent the message
    })
   
      socket.emit("welcome" , "Welcome to the server!"); 

      socket.on("disconnect", () => {
        console.log("user disconnected" , socket.id);
      });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

// server.listen as we create htpp server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// soket.io is build on top of http server  