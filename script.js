score = 0;
cross = true;

let audio = new Audio("data/music.mp3")
let audioGO = new Audio("data/gameover.mp3")
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino')
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 120 + "px"
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 120) + "px"
    }
}

setInterval(() => {
    dino = document.querySelector('.dino')
    obstacle = document.querySelector('.obstacle')
    gameOver = document.querySelector('.gameOver')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 53) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audioGO.play();
        audio.pause();
        setInterval(() => {
            audioGO.pause();
        }, 1000);
    }
    else if(offsetX < 145 && cross){
        score+=5 ;
        console.log(score)
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - .2;
            obstacle.style.animationDuration= newDur + 's';
        }, 800);
    }

}, 100);
 
function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
}

