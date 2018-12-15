var c=5;//声明一个全局变量c 
function test3(){
	window.c=3;
	console.log(c);		//答案：undefined，原因：由于此时的c是一个局部变量c，并且没有被赋值
	var c;
	console.log(window.c);//答案：3，原因：这里的c就是一个全局变量c
}
test3();


