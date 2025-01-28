let humanscore = 0;
let npcscore = 0;
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors"; 
    }
}
function getPlayerChoice(){
    let playerChoice = prompt("Please enter rock, paper, or scissors");
    switch (playerChoice.toLowerCase()) {
        case "rock":
            // console.log("you have chosen rock");
            return playerChoice;
        case "paper":
            // console.log("you have chosen paper");
            return playerChoice;
        case "scissors":
            // console.log("you have chosen scissors");
        return playerChoice;
        default:
            console.log("please enter one of the named options, case does not matter");
        break;
    }
}
function playRound(playerChoice, computerChoice){

    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()){
        console.log("Whoa! Thats a tie!");
    } else if (playerChoice.toLowerCase() == "rock"){
        switch (computerChoice.toLowerCase()){
            case "scissors":
                console.log("You won! rock beats scissors");
                humanscore++
                break;
            case "paper":
                console.log("You lost! paper beats rock!");
                npcscore++
                break;
        }
    } else if (playerChoice.toLowerCase() == "paper"){
        switch (computerChoice.toLowerCase()){
            case "scissors":
                console.log("You lost! paper beats scissors");
                npcscore++
                break;
            case "rock":
                console.log("You won! paper beats rock!");
                humanscore++
                break;
        }
    } else if (playerChoice.toLowerCase() == "scissors"){
        switch (computerChoice.toLowerCase()){
            case "paper":
                console.log("You won! paper beats scissors");
                humanscore++
                break;
            case "rock":
                console.log("You lost! rock beats scissors!");
                npcscore++
                break;
        }
    }
    
}
function playGame(){
    while (humanscore + npcscore < 5){
        const humanSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("your score was " + humanscore + " the computer's score was " + npcscore);
    if (humanscore > npcscore){
        console.log("You won! Congratulations!");
    } else if (npcscore > humanscore){
        console.log("You lost! Better luck next time!");
    }
    let playAgain = prompt("would you like to play again?");
    if (playAgain.toLowerCase() == "yes"){
        humanscore = 0;
        npcscore = 0;
        playGame();
    } else {
        console.log("Thanks for playing, have a good day!");
        }
    }

playGame()