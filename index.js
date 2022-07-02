//Start Game alert//

window.alert("Player One = Enter Key---Player Two = Space key                                    First player reach to 100 in 30 seconds wins the game!----------------Press [OK] to PLAY!");


//Countdown to 30 Second//

let timeleft = '30';
let countThree = '3';

let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countDown").innerHTML = "DONE!";
    } else {
        document.getElementById("countDown").innerHTML = "CLOCK IS TICKING: " + timeleft + " SECONDS";
    }
    timeleft -= 1;
}, 1000);



//Enter keyboard//

let playerOne = 0;

document.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        playerOne++;
        document.getElementById("clicks").innerHTML = playerOne;
    }
})


//Space Bar keyboard//

let playerTwo = 0;

document.addEventListener('keyup', function (e) {
    if (e.key === " ") {
        playerTwo++;
        document.getElementById("press").innerHTML = playerTwo;
    }
})

//Start sound game//



