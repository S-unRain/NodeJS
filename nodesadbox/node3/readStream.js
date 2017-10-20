var fs = require("fs");

var myReadStream =fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);


//必须要用data
myReadStream.on("data",function(chunk){
	console.log("========================接受chunk=================")
	console.log(chunk);
})