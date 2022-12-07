var fib_arr = [];
var sum = 0;
function fib(numberth) {
    if (numberth == 1) {
        fib_arr = [1];
    }
    else if (numberth == 2) {
        fib_arr = [1, 1];
    }
    else {
        fib_arr = [1, 1];
        var i_1;
        for (i_1 = 2; i_1 < numberth; i_1++) {
            fib_arr.push(fib_arr[i_1 - 1] + fib_arr[i_1 - 2]);
        }
    }
    var i;
    for (i = 0; i < fib_arr.length; i++) {
        sum += fib_arr[i];
    }
    return "".concat(fib_arr, " and sum = ").concat(sum);
}
console.log(fib(10));
