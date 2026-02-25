let userGrade = prompt("Please type in a number between 1 and 100")

let grade = parseFloat(userGrade)
if (grade > 100 || grade < 1) {
    alert("Only numbers between 1 and 100 are accepted")
} else {
    if (grade < 60) {
        alert("You received an F")
    } else if (grade < 70) {
        alert("You received a D")
    } else if (grade < 80) {
        alert("You received a C")
    } else if (grade < 90) {
        alert("You received a B")
    } else {
        alert("You received an A")
    }
}

