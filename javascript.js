/*declarations */
let playerScore = 0;
let computerScore = 0;
let playerChoice ="";
let computerChoice ="";
let defaultMainText = "Welcome! Please choose your weapon of choice!"
let defaultSecondaryText = "First one to 5 wins!"
const playerSign = document.getElementById("playerSign");
const playerDisplayScore = document.getElementById("playerScore");
const computerSign = document.getElementById("computerSign");
const computerDisplayScore = document.getElementById("computerScore");
const gameMainText = document.getElementById("primaryGameText");
const gameSecondaryText = document.getElementById("secondaryGameText");
const endGameModal = document.getElementById("endGameModal");
const modalText = document.getElementById("modalText");
const buttons = document.querySelectorAll(".btn");
const resetBtn = document.getElementById("resetbtn");
// playerSign.textContent = "✊";
// playerSign.textContent = "✋";
// playerSign.textContent = "✌";

/*functions and setup*/

buttons.forEach(btn => {
    btn.addEventListener("click", ()=> {
        if (btn.id == "resetbtn"){
            resetGame();
        } else {
            console.log("you have clicked the " + btn.id)
            playRound(btn.id);
        } 
    });
});

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            computerSign.textContent = "✊"
            return "Rock";
        case 1:
            computerSign.textContent = "✋"
            return "Paper";
        case 2: 
            computerSign.textContent = "✌"
            return "Scissors"; 
    }
}

function getPlayerChoice(btnId){
    switch (btnId){
        case "rockbtn":
            playerChoice = "Rock";
            playerSign.textContent = "✊";
            console.log(playerChoice);
            return playerChoice;
        case "pprbtn":
            playerChoice = "Paper";
            playerSign.textContent = "✋";
            console.log(playerChoice);
            return playerChoice;
        case "scsrbtn":
            playerChoice = "Scissors";
            playerSign.textContent = "✌";
            console.log(playerChoice);
            return playerChoice;
    }
}

function resetChoices(){
    playerChoice = "";
    computerChoice = "";
}

function updateScoresAndGameText(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        gameMainText.textContent = "It's a tie!";
        gameSecondaryText.textContent = playerChoice + " is the same as " + computerChoice;
    }else if (playerChoice == "Rock"){
        switch (computerChoice){
            case "Paper":
                gameMainText.textContent = "You lose!";
                gameSecondaryText.textContent = playerChoice + " loses to " + computerChoice;
                computerScore++;
                console.log(computerScore);
                break;
            case "Scissors":
                gameMainText.textContent = "You win!";
                gameSecondaryText.textContent = playerChoice + " wins against " + computerChoice;
                playerScore++;
                console.log(playerScore);
                break;
        }
    }else if (playerChoice == "Paper"){
        switch (computerChoice){
            case "Rock":
                gameMainText.textContent = "You win!";
                gameSecondaryText.textContent = playerChoice + " wins against " + computerChoice;
                playerScore++;
                console.log(playerScore);
                break;
            case "Scissors":
                gameMainText.textContent = "You lose!";
                gameSecondaryText.textContent = playerChoice + " loses to " + computerChoice;
                computerScore++;
                console.log(computerScore);
                break;
        }
    }else if (playerChoice == "Scissors"){
        switch (computerChoice){
            case "Rock":
                gameMainText.textContent = "You lose!";
                gameSecondaryText.textContent = playerChoice + " loses to " + computerChoice;
                computerScore++;
                console.log(computerScore);
                break;
            case "Paper":
                gameMainText.textContent = "You win!";
                gameSecondaryText.textContent = playerChoice + " wins against " + computerChoice;
                playerScore++;
                console.log(playerScore);
                break;
            }
        }
}

function updateScoreDisplays(playerScore, computerScore){
    if (playerScore != null){
        playerDisplayScore.textContent = "Player Score: " + playerScore;
    }
    if (computerScore != null){
        computerDisplayScore.textContent = "Computer Score: " + computerScore;
    } 
}

function resetScoreDisplays(){
    playerDisplayScore.textContent = "Player Score: 0"
    computerDisplayScore.textContent = "Computer Score: 0"
}

function isGameOver(computerScore, playerScore){
    
    if (computerScore == 5 | playerScore == 5){
        return true;
    }
    else {
        return false;
    }
}

function launchEndGameModal(){
    console.log("game is over");
    if (playerScore > computerScore){
        modalText.textContent = "You Won!";
    } else if (playerScore < computerScore){
        modalText.textContent = "You Lost!";
    }else if (playerScore == computerScore){
        modalText.textContent  = "You Tied";
    }
    endGameModal.classList('active');
    overlay.classList('active');
}

function closeEndGameModal(){
    endGameModal.classList.remove('active');
    overlay.classList.remove('active');
    modalText.textContent = "";
}

function resetGame(){
    modalText.textContent = "Good Luck!"
    playerSign.textContent = "?";
    computerSign.textContent = "?";
    resetScoreDisplays();
    resetChoices();
    playerScore = 0;
    computerScore = 0;
    gameMainText = defaultMainText;
    gameSecondaryText = defaultSecondaryText;
    closeEndGameModal();
}

/*main game */
function playRound(btnId){

    playerChoice = getPlayerChoice(btnId);
    computerChoice = getComputerChoice();
    console.log(computerChoice);

    updateScoresAndGameText(playerChoice, computerChoice);
    updateScoreDisplays(playerScore, computerScore);
    resetChoices();

    isGameOver(computerScore, playerScore);
    if (isGameOver){
        console.log("game is over");
        launchEndGameModal();
    }
}