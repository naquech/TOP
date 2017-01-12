//user makes a choice
//var userChoice = prompt("Do you choose rock, paper or scissors?");
var userChoice = "paper";
console.log(userChoice);


//Computer makes a random choice
var computerChoice = Math.random();
console.log(computerChoice);

    //translate random number into choice
if(computerChoice > 0 && computerChoice <= 0.33){
    computerChoice = "rock";
    console.log(computerChoice);
    }
    else if (computerChoice > 0.34 && computerChoice <= 0.66){
        computerChoice = "paper";
        console.log(computerChoice);
        }
        else{
            computerChoice = "scissors";
            console.log(computerChoice);
            }

var compare = function(choice1, choice2){
    if (choice1 === choice2){ 
        //return "The result is a tie!"
        console.log("The result is a tie!");
        }
        else if (choice1 === "rock"){
            if (choice2 === "scissors"){
                //return "rock wins";
                console.log("Rock wins");
                }
                else{
                    //return "paper wins";
                    console.log("Paper wins");
                    }
            }
            else if (choice1 === "paper"){
                if (choice2 === "rock"){
                    //return "paper wins";
                    console.log("paper wins");
                }
                    else {
                        //return "scissors wins";
                        console.log("scissors wins");
                        }
            }
            else if (choice1 === "scissors"){
                if (choice2 === "rock"){
                    //return "rock wins";
                    console.log("rock wins");
                    }
                    else{
                        //return "scissors wins";
                        console.log("scissors wins");
                        }
            }
    };

compare(userChoice, computerChoice);
