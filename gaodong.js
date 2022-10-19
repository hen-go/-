// function Main () {
// }
// Main.prototype.sex = '男' ;
// Main.prototype.num = 1 ;
// Main.prototype.eat = function () {
// 	console.log('Main eat ...')
//   this.num += 1
// }


// function Personal () {}
// Personal.prototype = new Main();
// Personal.prototype.constructor = Personal;
// Personal.prototype.name = 'hwk';
// Personal.prototype.sayName = function () {
// 	console.log('Personal name')
// }

// // 继承



// var p1 = new Personal();
// var p2 = new Personal();
// console.log('sex' in p1) //true
// p1.num = 2
// console.log(p1.num)
// console.log(p2.num)
// console.log(Object.keys(p1).includes('sex')) //false keys遍历自有的属性，sex是继承来的
// console.log(p1.sex ) ; // 男
// console.log(p1.name) ; // hwk
// p1.eat();			  // Main eat ...
// console.log(p1.num)
// console.log(p2.num)
// p1.sayName ();		  // Uncaught TypeError：p.sayName is not a function 


// //原型链
// function a() {this.b = 3}
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a()
// console.log(b)
// console.log(c.b)

// //
// var a = {x:1}
// var b = a;
// a = a.x = {x:1}
// console.log(a);   // {x:1}
// console.log(b);   // {x:{x:1}}

// var obj = {
// 	a: 123
// }
// obj[2] = 3
// console.log(obj)

// function fn(){
// 	console.log('1')
// }
// fn()
// var fn = function(){
// 		console.log('2')
// }
// fn()

// var a = [1, 2, 3, 1];
// var b = a.toString()
// a.join = a.shift;
// console.log(a)
// //console.log(a == 1 && a == 2 && a == 3); // true

// let set = new Set(a)
// console.log(a.indexOf(1))


// const map = new Map()
// map.set('name', '林三心')
// map.set('age', 22)
// map.set('gender', '男')

// console.log() // Map(3) { 'name' => '林三心', 'age' => 22, 'gender' => '男' }


// // 可选链
// const arr1 = [1,3,2,4,3,5,6,7]
// // do something
// const item1 = arr1?.[1]
// console.log(item1)



// function curry(fn, args = []) {
//   return function(){
//       let rest = [...args, ...arguments];
//       if (rest.length < fn.length) {
//           return curry.call(this,fn,rest);
//       }else{
//           return fn.apply(this,rest);
//       }
//   }
// }
// //test
// function sum(a,b,c) {
//   return a+b+c;
// }

// let sumFn = curry(sum);
// console.log(sumFn(1)(2)(3)); //6
// console.log(sumFn(1)(2, 3)); //6
// console.log(sumFn(1, 2)(3)); //6

for(let i = 0; i < 2; i ++){
  setTimeout(() => {
    console.log(i)
  }, 100);
}
for(var i = 0; i < 2; i ++){
  setTimeout(() => {
    console.log(i)
  }, 100);
}
