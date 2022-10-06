const express = require("express");
const http = require("http");
const ws = require("ws");
const path = require("path");

const app = express();
app.use(express.static(path.join(process.cwd(), "public")));

const httpServer = http.createServer(app);
const wss = new ws.Server(
{
    server: httpServer
});

const port = process.env.PORT || 3000;
httpServer.listen(port, () => console.log("Listening at port: " + port));

wss.on("connection", socket =>
{
	console.log("client was connected");
});
