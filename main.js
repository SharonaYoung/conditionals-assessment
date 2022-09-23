// -----PART I-----
/* 
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
}; */

// -----PART II-----
let birthYear
let age

birthYear = prompt("Enter the year you were born")
if (birthYear == 2001){
  alert("You are old enough to drink in the US...barely");
}else if(birthYear < 2001){
  alert("You are old enough to drink in the US");
}else{alert("Sorry, you are not old enough to drink in the US");
}

