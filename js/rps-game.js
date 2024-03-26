
  <!-- <script> -->

    playTo = 3
    computer_score = 0
    player_score = 0

    const container = document.querySelector(".container");
    
    const btnRock = document.querySelector("#rock");
    const btnPaper = document.querySelector("#paper");
    const btnScissors = document.querySelector("#scissors");

    displayScore = document.createElement("div");
    displayScore.textContent = `Player score: ${player_score} Computer score: ${computer_score}`;
    container.appendChild(displayScore);

    displayRoundWinner = document.createElement("div");
    container.appendChild(displayRoundWinner);

    function getPlayerChoice() {
      btnRock.addEventListener('click', () => {
        console.log("Player chose rock!")
        playRound('rock', getComputerChoice())
      })
      btnPaper.addEventListener('click', () => {
        console.log("Player chose paper!")
        playRound('paper', getComputerChoice())
      })
      btnScissors.addEventListener('click', () => {
        console.log("Player chose scissors!")
        playRound('scissors', getComputerChoice())
      })
    }

    function getComputerChoice() {
      choice = getRandomInt(1, 3)

      switch (choice) {
      case 1:
        console.log("Computer chose rock!")
        return "rock";
      case 2:
        console.log("Computer chose paper!")
        return "paper";
      case 3:
        console.log("Computer chose scissors!")
        return "scissors";
      }
    }

    function getRandomInt(min, max) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    function determineRoundWinner(player, computer) {
      console.log(computer)
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
      winner = determineRoundWinner(playerSelection, computerSelection);
      displayRoundWinner.textContent = RoundWinner(winner);
      updateScore(winner);
      displayScore.textContent = displayAllScore();

      displayGameWinner(determineGameWinner())
    }

    function determineGameWinner() {
      return player_score == playTo ? 'Player' : 'Computer'
    }

    function RoundWinner(result) {
      if (result === "Draw") {
        return(result + "!")
      } else {return (result + " won the round!")}
    }

    function displayAllScore() {
      return`Player: ${player_score} \nComputer: ${computer_score}`
    }

    function updateScore(winner) {
      if (winner === 'Player') {
        player_score += 1
      } else if (winner === 'Computer') {
        computer_score += 1
      }
    }

    // function determineGameWinner() {
    //   if (computer_score == player_score) {
    //     return "Draw"
    //   } else if (computer_score > player_score) {
    //     return "Computer"
    //   } else {return "Player"}
    // }

    function displayGameWinner(winner) {
      if (player_score == playTo || computer_score == playTo) {
        displayRoundWinner.textContent = (`${winner} wins the game!`);
      }
    }


    function playGame() {

      getPlayerChoice()

      // for (let round = 1; round <= 1; round++) {
        // console.log(`Round ${round}`);
        // winner = getPlayerChoice
        // winner = playRound(getPlayerChoice(), getComputerChoice());
        // displayWinner(winner);
        // updateScore(winner)
        // displayScore()
      // }

    //   // game_winner = determineGameWinner()
    //   // displayGameWinner(game_winner)
    }



    getPlayerChoice()





  <!-- </script> -->

