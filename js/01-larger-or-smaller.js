let firstInput = prompt("Please enter a number:")
let secondInput = prompt("Please enter a number:")

let firstNumber = parseFloat(firstInput)
let secondNumber = parseFloat(secondInput)

if (firstNumber > secondNumber) {
    window.console.log(firstNumber)
} else if (secondNumber > firstNumber) {
    window.console.log(secondNumber)
} else {
    window.console.log("Both numbers are equal")
}
