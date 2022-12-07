let fib_arr: number[] = []
let sum: number = 0
function fib(numberth: number): any {
    if (numberth == 1) {
        fib_arr = [1]
    } else if (numberth == 2) {
        fib_arr = [1, 1]
    } else {
        fib_arr = [1, 1]
        let i: number
        for (i = 2; i < numberth; i++) {
            fib_arr.push(fib_arr[i - 1] + fib_arr[i - 2])
        }
    }
    let i: number
    for (i = 0; i < fib_arr.length; i++) {
        sum += fib_arr[i]
    }
    return `${fib_arr} and sum = ${sum}`
}
console.log(fib(10))