//create a function that checks if the input/parameter is an even number

function checkForEven (start, end) {
    for (let num = start; num <= end; num++) {
        if ( num % 2 ===0) {
            console.log( num + " is even number")
        } else{
            console.log( num + " is odd number")
        } 
    }
}

checkForEven(20,25)

//create a function that prints to the console n1 to n2, where n1 is the first input/parameter and n2 is the second input/parameter

function printnum (n1, n2) {
    for (let num =n1; num <= n2; num++) {
        console.log(num);
    }
}

printnum (2, 12);

//create a function that sums the values in-between two numbers e.g calcFunc(1,3) return 6 i.e 1+2+3

function sumval(n1, n2){
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }

    return sum;
}
let total = sumval(4, 20)
console.log("The sum between 4 and 20 is", total)