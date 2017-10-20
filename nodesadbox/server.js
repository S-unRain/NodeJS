var http = require("http");

var server = http.createServer(function(req,res){
	console.log("客户端和服务器已经建立通信"+req.url);

	res.WriteHead(200,{"content-type":"text/plain"});
	res.end("Hey NodeJS!");
});

server.listen(3900,"127.0.0.1");

console.log("Server is Running!");