// A Tic-tac-toe game

// create variables to access each cell in the board

let a1 = document.getElementById("A1");
let a2 = document.getElementById("A2");
let a3 = document.getElementById("A3");
let b1 = document.getElementById("B1");
let b2 = document.getElementById("B2");
let b3 = document.getElementById("B3");
let c1 = document.getElementById("C1");
let c2 = document.getElementById("C2");
let c3 = document.getElementById("C3");

// assign empty value (space) to each cell for the game to begin

a1.innerHTML = " ";
a2.innerHTML = " ";
a3.innerHTML = " ";
b1.innerHTML = " ";
b2.innerHTML = " ";
b3.innerHTML = " ";
c1.innerHTML = " ";
c2.innerHTML = " ";
c3.innerHTML = " ";

// set turn for first player

let turn = 1;

// create variable to access message display

let message = document.getElementById("message");

// create variable to access turn display

const turnDisplay = document.getElementById("turndisplay");

// set turn display for 1st player to begin

turnDisplay.innerHTML = "Jogador: X";

// fucntion to alternate turn every time a piece is placed

function shiftTurn() {
    if (turn == 1) {
        turn = 2;
    } else {
        turn = 1;
    }
    // alternate display too
    if (turn == 1) {
        turnDisplay.innerHTML = "Jogador: X";
    } else {
        turnDisplay.innerHTML = "Jogador: O";
    }
}

// function to reload page

function reloadPage() {
    window.location.reload();
}

// function to disable panel

function disablePanel() {
    // Get a nodeList of all board td cells
    const allTDs = document.querySelectorAll('.cell');

    // loop through each cell and remove onclick attribute
    // (you can't apply the method on a whole array directly)
    allTDs.forEach(element => {element.removeAttribute('onclick');
    });
    
}

// reloader button

let reloadButton = '<br><br><button onclick="reloadPage()">Jogar de novo</button>';

// function to check if someone has won the game on every turn

function checkWinner () {
    let track1 = a1.innerHTML + a2.innerHTML + a3.innerHTML;
    let track2 = b1.innerHTML + b2.innerHTML + b3.innerHTML;
    let track3 = c1.innerHTML + c2.innerHTML + c3.innerHTML;
    let track4 = a1.innerHTML + b1.innerHTML + c1.innerHTML;
    let track5 = a2.innerHTML + b2.innerHTML + c2.innerHTML;
    let track6 = a3.innerHTML + b3.innerHTML + c3.innerHTML;
    let track7 = a1.innerHTML + b2.innerHTML + c3.innerHTML;
    let track8 = a3.innerHTML + b2.innerHTML + c1.innerHTML;

    // define winning tracks
    let winningTracks = [track1, track2, track3, track4, track5, track6, track7, track8];
    
    // define board fullfilled
    let allCells = a1.innerHTML + b1.innerHTML + c1.innerHTML + a2.innerHTML + b2.innerHTML 
    + c2.innerHTML + a3.innerHTML + b3.innerHTML + c3.innerHTML;

    if (winningTracks.includes("XXX")) {
        message.innerHTML = "X venceu!"+ reloadButton;
        turnDisplay.innerHTML = "";
        disablePanel();
    } else if (winningTracks.includes("OOO")) {
        message.innerHTML = "O venceu!"+ reloadButton;
        turnDisplay.innerHTML = "";
        disablePanel();
    } else if (!allCells.includes(" ")) {
        message.innerHTML = "Empate!" + reloadButton;
        turnDisplay.innerHTML = "";
        disablePanel();

    } else {
        message.innerHTML = "";
    }
}

// fucntion to place pieces on clicked cells
// this function works as the game engine

function placePiece(cell) {
    // create var to access clicked cell
    let thisCell = document.getElementById(cell);
    // prevent player from changing occupied cell
    if (thisCell.innerHTML == " ")
    // move on turn and place piece
    {shiftTurn();
    if (turn == 1) {
        thisCell.innerHTML = "O";
    } else {
        thisCell.innerHTML = "X";
    }}

    checkWinner()
}