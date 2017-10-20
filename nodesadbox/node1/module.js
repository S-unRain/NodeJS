var counter = function(arr){
	return `数组中拥有${arr.length}个元素`;
}
// console.log(counter(["henry,2,3"]));//counter 对外公开可以让外部文件使用

var adder = function(a,b){
	return `两个数的和为${a+b}`;
}


var pi = 3.142;

//只有使用module.exports之后,其他文件都会使用
/*module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi =pi;
*/


 