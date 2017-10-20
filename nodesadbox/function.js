//在nodejs中常使用函数表达式!

function sayHi1(){
	console.log("Hello 132!");
}

// 函数表达式 右左法则 匿名函数执行的快;

var sayHi2 = function (){
	console.loh("Hello 311!");
}

// sayHi();


function callFunction(foo){
	foo();
};
callFunction(sayHi1);