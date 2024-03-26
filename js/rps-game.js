
  <!-- <script> -->

    playTo = 3
    computer_score = 0
    player_score = 0

    const container = document.querySelector(".container");
    const options = document.querySelector(".options");
    
    const btnRock = document.querySelector("#rock");
    const btnPaper = document.querySelector("#paper");
    const btnScissors = document.querySelector("#scissors");

    const p_selection = document.querySelector(".p_selection");
    const c_selection = document.querySelector(".c_selection");

    const displayScore = document.querySelector(".score");
    displayScore.textContent = displayAllScore();

    const displayWinner = document.querySelector(".winner");

    btnPlayAgain = document.createElement('button')
    btnPlayAgain.textContent = 'Play Again?'


    function getPlayerChoice() {
      btnRock.addEventListener('click', () => {
        p_selection.textContent = "Player chose rock!";
        playRound('rock', getComputerChoice())
      })
      btnPaper.addEventListener('click', () => {
        p_selection.textContent = "Player chose paper!";
        playRound('paper', getComputerChoice())
      })
      btnScissors.addEventListener('click', () => {
        p_selection.textContent = "Player chose scissors!";
        playRound('scissors', getComputerChoice())
      })
    }

    function getComputerChoice() {
      choice = getRandomInt(1, 3)

      switch (choice) {
      case 1:
        c_selection.textContent = "Computer chose rock!";
        return "rock";
      case 2:
        c_selection.textContent = "Computer chose paper!";
        return "paper";
      case 3:
        c_selection.textContent = "Computer chose scissors!";
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
      }
    }

    function displayRoundWinner(result) {
      if (result === "Draw") {
        return(result + "!")
      } else {return (result + " won the round!")}
    }

    function playRound(playerSelection, computerSelection) {
      winner = determineRoundWinner(playerSelection, computerSelection);
      displayWinner.textContent = displayRoundWinner(winner);
      updateScore(winner);
      displayScore.textContent = displayAllScore();

      displayGameWinner(determineGameWinner())
      playAgain()
    }

    function updateScore(winner) {
      if (winner === 'Player') {
        player_score += 1
      } else if (winner === 'Computer') {
        computer_score += 1
      }
    }

    function displayAllScore() {
      return`Player: ${player_score} \nComputer: ${computer_score}`
    }

    function determineGameWinner() {
      return player_score == playTo ? 'Player' : 'Computer'
    }

    function displayGameWinner(winner) {
      if (player_score == playTo || computer_score == playTo) {
        displayWinner.textContent = (`${winner} wins the game!`);
      }
    }

    function playAgain() {
      options.insertBefore(btnPlayAgain, btnRock)
      options.removeChild(btnRock)
      options.removeChild(btnPaper)
      options.removeChild(btnScissors)

      btnPlayAgain.addEventListener('click', () => {
        resetGame()
      })

      function resetGame() {
        options.appendChild(btnRock);
        options.appendChild(btnPaper);
        options.appendChild(btnScissors);
        options.removeChild(btnPlayAgain)
      }
    }

    getPlayerChoice()

  <!-- </script> -->

