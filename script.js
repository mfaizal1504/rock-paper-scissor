console.log("Hello there!")


//Create bot_choice to store choice made by bot
let bot_choice;
//Create player_choice to store choice made by player
let player_choice;
//Create bot_score to store score for bot
let bot_score = 0;
//Create player_score to keep score for player
let player_score = 0;

//function to generate choice for bot
function getComputerChoice() {
    //Create random_value with a random value
    random_value = Math.random() * 100;
    console.log(`random value = ${random_value}`);
    //Set value of bot_choice based on the value of random_value (0-33=rock, 34-66=paper, 67-100=scissor)
    if (random_value >= 0 && random_value <= 33) {
        bot_choice = "rock";
    } else if (random_value >= 34 && random_value <= 66) {
        bot_choice = "paper";
    } else {
        bot_choice = "scissor";
    }
    return bot_choice;
}

function getHumanChoice() {

    //Set value for player_choice by asking input using prompt
    let askForInput = true; //loop breaker

    while (askForInput) {

        player_choice = prompt("rock, paper, or scissor?");

        if (player_choice == null) {//handle choice if player press cancel
            console.log("Player doesn't make a valid choice");
            askForInput = false;
            return null;
        } else {
            console.log(`player raw choice is ${player_choice}`); //display raw input
            player_choice = String(player_choice).toLowerCase();

            //check if the choice is valid
            if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissor") {
                //player made a valid choice
                console.log(`player choice is ${player_choice}`);
                askForInput = false;
                return player_choice;
            } else {
                alert("The choice made is invalid!");
            }   
        }
    }

}

function playRound() {
    //run a single run of the game, getting the bot input and
    //player input and decide who wins the game
    bot_choice = getComputerChoice();
    console.log(`bot choice is ${bot_choice}`);
    player_choice = getHumanChoice();
    checkWinner(bot_choice, player_choice);
    console.log(`Player: ${player_score}\nBot: ${bot_score}`);
}

function checkWinner(bot_choice, player_choice) {
    //check winner for the round
    //wins will give one point to the winner
    //no points for draws
    
    if (player_choice == null) { //auto lose if no choice made
        console.log("You lose since you didn't chose your hand!");
        bot_score += 1;
    } else {
        if (player_choice == bot_choice) {
            console.log(`It's a draw! You both chose ${player_choice}`);
        } else {
            if (player_choice == "rock") {
                if (bot_choice == "scissor") {
                    console.log("You win! Rock beats Scissor");
                    player_score += 1;
                } else {
                    console.log("You lost! Paper beats Rock");
                    bot_score += 1;
                }
            } else if (player_choice == "scissor") {
                if (bot_choice == "rock") {
                    console.log("You lost! Rock beats Scissor");
                    bot_score += 1;
                } else {
                    console.log("You win! Scissor beats paper");
                    player_score += 1;
                }
            } else { //player_choice is paper
                if (bot_choice == "scissor") {
                    console.log("You lost! Scissor beats Paper");
                    bot_score += 1;
                } else {
                    console.log("You win! Paper beats Rock");
                    player_score += 1;
                }
            }
        }
    }
}