console.log("Hello there!")

//Steps for 1 round
//1. Create bot_choice to store choice made by bot
let bot_choice;
//2. Create player_choice to store choice made by player
let player_choice;
//3. Create bot_score to store score for bot
let bot_score = 0;
//4. Create player_score to keep score for player
let player_score = 0;
//5. Create random_value with a random value
random_value = Math.random() * 100;
console.log(`random value = ${random_value}`);
//6. Set value of bot_choice based on the value of random_value (0-33=rock, 34-66=paper, 67-100=scissor)
if (random_value >= 0 && random_value <= 33) {
    bot_choice = "rock";
} else if (random_value >= 34 && random_value <= 66) {
    bot_choice = "paper";
} else {
    bot_choice = "scissor";
}
console.log(`bot choice is ${bot_choice}`);
//7. Set value for player_choice by asking input using prompt
player_choice = prompt("rock, paper, or scissor?");
console.log(`player choice is ${player_choice}`);