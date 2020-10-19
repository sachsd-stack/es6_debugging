function findSum(x, y) {
    var sum = x + y;
    console.log(sum);
}

function findDifference(x, y) {
    var difference = x - y;
    console.log(difference);
}

function multiplication(x, y) {
    var multiply = x * y;
    console.log(multiply);
}

function division(x, y) {
    if(!y) {
        console.log("Cannot divide by 0");
        return;
    }

    var divide = x/y;
    console.log(divide);
}


const arrowFindSum = (x, y) => x + y;
const arrowFindDifference = (x, y) => x - y;
const arrowMultiplication = (x, y) => x * y;
const arrowDivision = (x, y) => x / y;

findSum(3,11);
findDifference(12,3);
multiplication(3,11);
division(20,5);
console.log("Arrow Sum: " + arrowFindSum(3,11));
console.log("Arrow Difference: " + arrowFindDifference(12,3));
console.log("Arrow Multiply: " + arrowMultiplication(3,11));
console.log("Arrow Divison: " + arrowDivision(20,5));