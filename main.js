// -----PART I-----

let userChoice = prompt("Heads or Tails");
let randomNumber = Math.round(Math.random());
let computerChoice;

if(randomNumber === 0){
  computerChoice = "Heads";
}else{ computerChoice = "Tails";
}
if(userChoice === computerChoice){
  alert ("Yay, you matched " + computerChoice);
} else if(userChoice !== computerChoice){
  alert ("Aw, you did not match " + computerChoice);
}
else {alert("Enter a correct response please")
}; 

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

