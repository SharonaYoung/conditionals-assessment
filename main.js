let userChoice;
let randomNumber = Math.round(Math.random());
let computerChoice;

userChoice = prompt("Heads or Tails");
if(userChoice === "Heads"){
  userChoice = 0;
}else if(userChoice === "Tails"){
  userChoice = 1;
}
console.log(randomNumber);
if(userChoice === randomNumber && userChoice === 0){
  alert ("Yay, you matched Heads ");
} else if(userChoice === randomNumber && userChoice === 1){
  alert ("Yay, you matched Tails");
} else if(userChoice !== randomNumber && userChoice === 0){
  alert ("Aw, you did not match Tails ");
} else if(userChoice !== randomNumber && userChoice === 1){
  alert ("Aw, you did not match Heads ");
}
else {alert("Enter a correct response please")
};


// if(userChoice === "Heads" && randomNumber === 0){
// alert("You guessed right! The coin flip landed on Heads ")
//  console.log(randomNumber);
// } else{console.log("Tails");
// }

