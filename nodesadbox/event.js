var event = require("events");
//js 事件
/*element.on("click",function(){

})*/

//实例化事件对象
var myEmitter = new event.EventEmitter();

//注册事件
myEmitter.on("sbqEvent",function(){
	console.log("sbqEvent事件被触发!");
});

//激活事件
myEmitter.emit('sbqEvent');