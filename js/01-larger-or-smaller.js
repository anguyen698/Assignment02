let firstInput = prompt("Enter a number:")
let secondInput = prompt("Enter a number:")

let firstNumber = parseFloat(firstInput)
let secondNumber = parseFloat(secondInput)

if (firstNumber > secondNumber) {
    window.console.log(firstNumber)
} else if (secondNumber > firstNumber) {
    window.console.log(secondNumber)
} else {
    window.console.log("Both numbers are equal")
}

