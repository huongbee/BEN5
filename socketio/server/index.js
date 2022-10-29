const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
app.use(cors())

const corsOptions = {
  origin: '',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
io.on('connection', (socket) => {
  console.log('connected.....');
  // socket.on('chat message', (chatMessage) => { // nhận
  // });
  // socket.emit('chat message', { title: 'Test Title', content: 'Test content' }) // gửi
  socket.on('chat', (chatMessage) => {
    // handle receive chat message
    console.log(chatMessage);
  })
});
app.get('/send', cors(corsOptions), (req, res) => {
  const { message } = req.query;
  return res.render('home', { message });
});

app.post('/send', cors(corsOptions), (req, res) => {
  const { message, title } = req.body;
  io.sockets.emit('chat message', { title, content: message });
  return res.redirect('/send?message=Thành công');
});
server.listen(3000, () => console.log('listening on port 3000'))