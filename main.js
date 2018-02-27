'use strict';

var a = 10;

function outer(){
    var b = 20;

    a++;
    b++;
    function inner(){
        console.log(a);
        console.log(b);
    }//end inner
    return inner;
}//end outer

var fn1 = outer();//fn1 gets an instance var of 'b', using global 'a'
fn1();

var fn2 = outer();
fn2();//fn2 uses the global 'a' after it has been incremented by the first passing of the function