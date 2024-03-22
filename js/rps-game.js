
  <!-- <script> -->

    function getPlayerChoice() {
      let choice;

      while (true) {
        choice = prompt("Please enter Rock, Paper, or Scissors")
        choice = choice.toLowerCase()
        if (choice === "rock" || choice === "paper" ||  choice === "scissors") { break}
      }

      return choice;
    }

    function getComputerChoice() {
      choice = getRandomInt(1, 3)

      switch (choice) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";
      }
    }

    function getRandomInt(min, max) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    function determineRoundWinner(player, computer) {
      if (player === computer) {
        return "Draw"
      } else if (player === "rock" && computer === "paper") {
        return "Computer"
      } else if (player === "rock" && computer === "scissors") {
        return "Player"
      } else if (player === "paper" && computer === "rock") {
        return "Player"
      } else if (player === "paper" && computer === "scissors") {
        return "Computer"
      } else if (player === "scissors" && computer === "paper") {
        return "Player"
      } else if (player === "scissors" && computer === "rock") {
        return "Computer"
      } else { return "NOOO"}
    }

    function playRound(playerSelection, computerSelection) {
      console.log(`You chose ${playerSelection} and computer chose ${computerSelection}!`)
      return determineRoundWinner(playerSelection, computerSelection);
    }

    function displayWinner(result) {
      if (result === "Draw") {
        console.log(result + "!")
      } else {console.log(result + " won!")}
    }

    function displayScore() {
      console.log(`Player: ${player_score} \nComputer: ${computer_score}`)
    }

    function updateScore(winner) {
      if (winner === 'Player') {
        player_score += 1
      } else if (winner === 'Computer') {
        computer_score += 1
      }
    }

    function determineGameWinner() {
      if (computer_score == player_score) {
        return "Draw"
      } else if (computer_score > player_score) {
        return "Computer"
      } else {return "Player"}
    }

    function displayGameWinner(winner) {
      if (winner === "Draw") {
        console.log(`${winner}!`)
      } else {console.log(`${winner} wins the game!`)}
    }


    function playGame() {
      computer_score = 0
      player_score = 0

      for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        winner = playRound(getPlayerChoice(), getComputerChoice());
        displayWinner(winner);
        updateScore(winner)
        displayScore()
      }

      game_winner = determineGameWinner()
      displayGameWinner(game_winner)
    }

    playGame()

  <!-- </script> -->

