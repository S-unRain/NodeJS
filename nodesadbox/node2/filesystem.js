// 引入文件系统模块
var fs = require("fs");


/*//同步 读取&&写入
var readMe = fs.readFileSync("readMe.txt","utf8");
console.log(readMe);

//同步写入文件
fs.writeFileSync("writeMe.txt","HelloWorld!");*/





//异步 读取 &写入
/*
fs.readFile("readMe.txt","utf8",function(err,data){
	if (err) throw err;
	console.log(data);
})
console.log(132);


fs.readFile("writeMe.txt","Hello Every",function(err,data){
	if (err) throw err;
	console.log(data);
})*/

//一步读取文件readMe.txt,并将读取的文件内容写入到writeMe.txt中;
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if (err) throw err;
// 	fs.writeFile("writeMe.txt",data );
// })

//删除文件
/*fs.unlink("readMe.txt",function(err,result){
	if (err) throw err;
	console.log(result);
});*/

//创建文件夹
// fs.mkdir("stuff");

//删除文件夹
fs.rmdir("stuff");

