// function fun () {
//   return () => {
//       return () => {
//           return () => {
//               console.log(this.name)
//           }
//       }
//   }
// }

// var f = fun.call({name: 'foo'})
// var t1 = f.call({name: 'bar'})()()
// var t2 = f().call({name: 'baz'})()
// var t3 = f()().call({name: 'qux'})

var name = 'global';
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
        console.log(this.name); //
    }.bind(window)//不会立即执行
};
var bar = new obj.foo();//undefined
setTimeout(function() {
    console.log(window.name);
}, 0);
console.log(bar.name);

var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);

/**
 * 
 * 
 */

function test(a) {
    // var a
    console.log(a);       
    // var a = 123;
    console.log(a);       
    function a() {}
    console.log(a);       
    var b = function() {}
    console.log(b);       
    function d() {}
}

a:undefined
b:undefined

a: