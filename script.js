const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2D");
const canvasSize = 600;
canvas.width = canvasSize;
canvas.height = canvasSize;

const snakeBox = 20;
const totalMoves = canvasSize/snakeBox;

const apple = new Image();
apple.src ='images/apple.png';

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let down = new Audio();
let left = new Audio();
let right = new Audio();

dead.src = 'audio/dead.mp3';
eat.src = 'audio/eat.mp3';
up.src = 'audio/up.mp3';
down.src = 'audio/down.mp3';
left.src = 'audio/left.mp3';
right.src = 'audio/right.mp3';

// Defining Snake
let snake = [];
snake[0] = {
    x : 9 * snakeBox ,
    y : 10 * snakeBox
};

// Creating Food
let food = {};
getFood();

//score
let score = 0;

//Snake Direction
let dir = "";

document.addEventListener("keydown",direction);

function direction(){
    let key = event.keyCode;
    if(key==37 && dir!="RIGHT"){
        dir = "LEFT";
        left.play();
    }
    else if(key==38 && dir!="DOWN"){
        dir = "UP";
        up.play();
    }
    else if(key==39 && dir!="LEFT"){
        dir = "RIGHT";
        right.play();
    }
    else if(key==40 && dir!="Up"){
        dir = "DOWN";
        down.play();
    }
}

function getFood(){
    food = {
        x : Math.floor(Math.random()*(totalMoves-2-3)+3) *snakeBox ,
        y : Math.floor(Math.random()*(totalMoves-2-3)+3)*snakeBox
    }
}

function render(){
    ctx.fillStyle="#dcdcdc";
    ctx.fillRect(0,0,canvasSize,canvasSize)
}
render();