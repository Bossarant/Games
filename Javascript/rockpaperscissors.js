let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function ConvertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

getComputerChoice();

function win(userChoice, ComputerChoice) {
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${ConvertToWord(userChoice)}${smalluserword} beats ${ConvertToWord(ComputerChoice)}${smallcompword}. you win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function lose(userChoice, ComputerChoice) {
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${ConvertToWord(userChoice)}${smalluserword} loses to ${ConvertToWord(ComputerChoice)}${smallcompword}. you lose`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function draw(userChoice, ComputerChoice) {
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    result_p.innerHTML = `${ConvertToWord(userChoice)}${smalluserword} equals ${ConvertToWord(ComputerChoice)}${smallcompword}. its a draw.`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 300);
}

function Game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, ComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, ComputerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, ComputerChoice);
    }
}

function Main() {
    rock_div.addEventListener("click", () => Game("r"));
    paper_div.addEventListener("click", () => Game("p"));
    scissors_div.addEventListener("click", () => Game("s"));
}
Main();