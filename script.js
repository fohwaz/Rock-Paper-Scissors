function playRound(playerSelection, computerSelection) {}

const computerSelection = computerPlay()
let getPlayerSelection = prompt("Rock, Paper or Scissors?")
const playerSelection = getPlayerSelection.toLowerCase

function computerPlay() {
  let number = getRandomInt(1, 4)
  switch (number) {
    case 1:
      return "rock"
    case 2:
      return "paper"
    case 3:
      return "scissors"
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
