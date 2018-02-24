var top = 10;
var inner = 50;//global, not used in 'foo'

function foo(){
    var inner = 20;
    console.log(inner);
}//end foo

foo();