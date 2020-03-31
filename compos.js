// function sum(x,y) {
//     return x + y;
// }

// function mult(x,y) {
//     return x * y;
// }

// function multAndSum(x,y,z) {
//     // invoking sum immediatley
//     return sum( mult( x,y), z);
// }

// // (3 * 4) + 5
// multAndSum(3,4,5);

//composeRight
function composeRight(fn2,fn1) {
    return function comp(...args){
        return fn2(fn1(...args));
    }
}

function increment(x) {
    return x + 1;
}

function double(x) {
    return x * 2;
}

var f = composeRight(increment,double);
var p = composeRight(double,increment);

console.log(f(3)); // 7
console.log(p(3)); // 8

