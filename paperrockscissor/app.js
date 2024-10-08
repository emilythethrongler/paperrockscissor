
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const output = document.querySelector('.output');

//move decider
returns = ['rock','paper','scissors']
function opsign() {

    return returns[Math.floor(Math.random() * 3)]
}

//adjustable output for game
function talk(words) {
    output.innerHTML = words+"<br>"+output.innerHTML;
}

//main function
function rps(pmove){
let opmove = opsign()
talk("computer chose: "+opmove)

if (opmove == pmove) {
    talk("tie")
    
} else {

if (pmove == "rock") {
    if (opmove == "paper") {talk("you lose")} else {talk("you win")}

} else if(pmove == "paper") {
    if (opmove == "scissors") {talk("you lose")} else {talk("you win")}

} else if(pmove == "scissors") {
    if (opmove == "rock") {talk("you lose")} else {talk("you win")}

} else {
    talk("invaled entry, check you're spelling or the rules: common knowlege")
}

}



}





rock.addEventListener('click', function() {
    // Code to execute when the button is clicked
    rps('rock')
  });

scissors.addEventListener('click', function() {
    // Code to execute when the button is clicked
    rps('scissors')
  });

paper.addEventListener('click', function() {
    // Code to execute when the button is clicked
    rps('paper')
  });





