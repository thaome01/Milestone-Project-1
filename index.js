//Start Game alert//
//function toggleStart() {
//window.location.assign("index.html");

function myStart() {
    let s = document.getElementById("menu");
    if (s.style.display === "none") {
        s.MLDocument.style.display = "block";
    } else {
        s.style.display = "none";
    }
}


//window.alert("Player One = Enter Key---Player Two = Space key                                    First player reach to 100 in 30 seconds wins the game!----------------Press [OK] to PLAY!");


//Countdown to 30 Second//


let timeleft = '30';

let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countDown").innerHTML = "TIMES UP!";
        window.alert("TRY AGAIN");
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
    } if (playerOne >= 5) {
        document.getElementById("clicks").innerHTML = "YOU ARE THE WINNER!";
        window.alert("PLAYER ONE IS THE WINNER! PRESS THE 'RESTART HERE!' TO PLAY AGAIN!");
        clearInterval(downloadTimer);
    }
})



//Space Bar keyboard//

let playerTwo = 0;

document.addEventListener('keyup', function (e) {
    if (e.key === " ") {
        playerTwo++;
        document.getElementById("press").innerHTML = playerTwo;
    } if (playerTwo >= 5) {
        document.getElementById("press").innerHTML = "YOU ARE THE WINNER!";
        window.alert("PLAYER TWO IS THE WINNER! PRESS THE 'RESTART HERE!' TO PLAY AGAIN!");
        clearInterval(downloadTimer);
    }
})

// Mute function //





