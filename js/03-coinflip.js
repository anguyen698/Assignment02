// heads IF x < 0.5
// tails IF x >= 0.5
let coinFlip = Math.round(Math.random())

let choice = prompt("Heads or Tails").toLowerCase()

if (choice === "heads" && coinFlip === 1) {
    alert("The flip was heads and you chose heads...you win!")
} else if (choice === "heads" && coinFlip === 0) {
    alert("The flip was heads but you chose tails...you lose!")
} else if (choice === "tails" && coinFlip === 1) {
    alert("The flip was tails but you chose heads...you lose!")
} else if (choice === "tails" && coinFlip === 0) {
    alert("The flip was tails and you chose tails...you win!")
}
