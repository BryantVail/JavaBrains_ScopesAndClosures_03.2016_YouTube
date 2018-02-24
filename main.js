var first = 'bry';
var last = 'vail';


namePrint(first, last);//executed before the definition

function namePrint(first, last){

    if(first && last){
        var lastN = last;
    }//same scope as outside of 'if' statement

    console.log(`${first}`);
    console.log(`is a ${lastN}`);
}



