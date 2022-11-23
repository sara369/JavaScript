//============ Game Function ============
const GRASS_CLASS = "grass";
    const GRASS_COUNT = 50;

const BALL_CLASS = "ball";
    const BALL_COUNT = 5;


    const PLAYER = document.querySelector('.player');
let playerPos  = {
    x:0,
    y:0,
}

let playerVel  = {
    x:0,
    y:0,
}

const PLAYER_SPEED = 1.8;


const START_PLAYER_POS = {
    x: window.innerWidth/2,
    y: window.innerHeight/2,
}


const SOUND = new Audio('assets/coin.mp3');

function start () {
    generateRandomElements (GRASS_CLASS, GRASS_COUNT);
    generateRandomElements (BALL_CLASS, BALL_COUNT);

    playerPos = START_PLAYER_POS;
}

function update () {
    playerPos.x += playerVel.x;
    playerPos.y += playerVel.y;
    PLAYER.style.left = playerPos.x + "px";
    PLAYER.style.top = playerPos.y + "px";

    checkCollisions();

    requestAnimationFrame(update);
};

//============ Handle the Player Movement ============
window.addEventListener('keydown', (e) =>{
    if (e.key == "ArrowUp") {
        playerVel.y = -1 * PLAYER_SPEED;
        PLAYER.style.backgroundImage = "url('assets/spriteup.PNG')";
    }
    if (e.key == "ArrowDown") {
        playerVel.y = 1 * PLAYER_SPEED;
        PLAYER.style.backgroundImage = "url('assets/spritedown.PNG')";
    }

    if (e.key == "ArrowLeft") {
        playerVel.x = -1 * PLAYER_SPEED;
        PLAYER.style.backgroundImage = "url('assets/spriteleft.PNG')";
    }

    if (e.key == "ArrowRight") {
        playerVel.x = 1 * PLAYER_SPEED;
        PLAYER.style.backgroundImage = "url('assets/spriteright.PNG')";
    }

    PLAYER.classList.add("walk");
});

window.addEventListener('keydown', (e) =>{
    if (e.key == "ArrowUp") {
        playerVel.y = -1 * PLAYER_SPEED;
    }
    if (e.key == "ArrowDown") {
        playerVel.y = 1 * PLAYER_SPEED;
    }

    if (e.key == "ArrowLeft") {
        playerVel.x = -1 * PLAYER_SPEED;
    }

    if (e.key == "ArrowRight") {
        playerVel.x = 1 * PLAYER_SPEED;
    }

});

window.addEventListener("keyup", (e) => {
    playerVel.x = 0;
    playerVel.y = 0;
  
    PLAYER.classList.remove("walk");
  });


function generateRandomElements (className, elementCount) {
    for (let count = 0; count < elementCount; count++) {
        const newElement = document.createElement('div');
        newElement.classList.add(className);
        newElement.style.left = Math.random() * 100 + '%';
        newElement.style.top = Math.random() * 100 + '%';
        document.body.appendChild(newElement);
        
    }
}


function checkCollisions () {
    balls = document.querySelectorAll('.ball');
    balls.forEach(ball => {
        if (collision(ball, PLAYER)){
            ball.style.left = Math.random() * 100 + '%';
            ball.style.top = Math.random() * 100 + '%';
            SOUND.play();
        }
    })
}

// ============= Check collision between 2 divs ===========
function collision($div1, $div2) {
    var x1 = $div1.getBoundingClientRect().left;
    var y1 = $div1.getBoundingClientRect().top;
    var h1 = $div1.clientHeight;
    var w1 = $div1.clientWidth;
    var b1 = y1 + h1;
    var r1 = x1 + w1;
  
    var x2 = $div2.getBoundingClientRect().left;
    var y2 = $div2.getBoundingClientRect().top;
    var h2 = $div2.clientHeight;
    var w2 = $div2.clientWidth;
    var b2 = y2 + h2;
    var r2 = x2 + w2;
  
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
  

//============ Run The Game ============

start();
update();