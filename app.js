let turnMusic = new Audio('./Assets/ting.mp3');
let gameOverMusic = new Audio('./Assets/gameover.mp3');
let turn = "X";
let gameOver = false;

// Function to change the turn

const changeTurn = () => {
    return turn === "X"? "O": "X";
}

// Function to check for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 6, 6, 0],
        [3, 4, 5, 6, 18, 0],
        [6, 7, 8, 6, 30, 0],
        [0, 3 ,6, -6, 18, 90],
        [1, 4, 7, 6, 18, 90],
        [2, 5, 8, 18, 18, 90],
        [0, 4, 8, 6, 18, 45],
        [2, 4, 6, 6, 18, 135]
    ]
    wins.forEach(e => {
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            gameOver = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "12.5em";
            gameOverMusic.play();
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = '30vw';
        };
        
    })
}

// Game Logic 

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(box => {
    let boxtext = box.querySelector('.boxtext');
    box.addEventListener('click', () => {
        if(boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
        
    })
})

// Reset button
const reset = document.querySelector('#reset'); 
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(boxtext => {
        boxtext.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0em";
    document.querySelector(".line").style.width = '0vw';

})

if(screen.width < 400) {
    // document.querySelector(".line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`;
    document.querySelector(".line").style.width = '70vw';

}

console.log(screen.width);
