var a = 10;

var fn = function(){
    console.log(a);
};//end fn = function(){}

setTimeout(fn, 2000);
console.log("This is first");