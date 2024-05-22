import inquirer from "inquirer";
import chalk  from "chalk";



console.log("\t==========================================*========================================\t");


console.log(chalk.bgBlue("\n\t                     WELCOME TO ROCK,PAPER,SCISSOR-GAME!                             \t\n"));


console.log("\t==========================================*=========================================\t");


enum choice {
  Rock,
  Paper,
  Scissor,
}

const choices = [
  { name: "Rock", value: choice.Rock },
  { name: "Paper", value: choice.Paper },
  { name: "Scissor", value: choice.Scissor },
];


interface Game {
    playerscore:number
    computerscore: number
    round:number
}

const game : Game = {
    playerscore: 0,
    computerscore:0,
    round:0
} 

async function play(){
    while(game.round<5){
        const answers = await inquirer.prompt([
            {
                name: "player",
                type: "list",
                message:(chalk.bgGray("\nPlayer Choice\n")),
                choices,
            },
            {
                name: "Computer",
                type: "list",
                message:(chalk.bgGray("\ncomputer Choice\n")),
                choices,
            },
            
        ]);

        const playerChoices = answers.player;
        const computerChoices = answers.Computer;

        if (playerChoices === computerChoices) {
            console.log('TIE!!!');
            
        }  else if (playerChoices===choice.Rock && computerChoices=== choice.Scissor) { 
            console.log(chalk.green("\n\tPLAYER WIN THIS ROUND!!!\t\n"));
            game.playerscore++
        }else if (playerChoices===choice.Paper && computerChoices=== choice.Rock ) {
                console.log(chalk.green("\n\tPLAYER WIN THIS ROUND!!!\t\n"));;
                game.playerscore++
         } else if  (playerChoices===choice.Scissor && computerChoices===choice.Paper){
            console.log(chalk.green("\n\tPLAYER WIN THIS ROUND!!!\t\n"));;
          game.playerscore++
          } else {
            console.log(chalk.green("\n\tCOMPUTER WIN THIS ROUND!!!\t\n"));;
            game.computerscore++
            
         }
        
        game.round++;
        console.log(`PLAYER SCORE ${game.playerscore}, COMPUTER SCORE ${game.computerscore}`);
        
    }
    if (game.playerscore > game.computerscore) {
        console.log(chalk.redBright("\nPLAYER WIN THIS ROUND!!!\n"));;
        
    } else if (game.playerscore < game.computerscore) {
        console.log(chalk.redBright("\nCOMPUTER WIN THIS ROUND!!!\n"));;
        
    } else {
        console.log(chalk.yellowBright("\n\tIT IS A TIE!!!\t\n"));;
        
    }
}

play();