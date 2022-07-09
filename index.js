//My function to START THE GAME//


function myStart() {
    let s = document.getElementById("menu");
    if (s.style.display === "none") {
        s.document.style.display = "block";
    } else {
        s.style.display = "none";

        //Countdown to 30 Second//

    } let timeleft = '30';

    let downloadTimer = setInterval(function () {
        if (timeleft <= -1) {
            clearInterval(downloadTimer);
            document.getElementById("countDown").innerHTML = "TIMES UP!";
            window.alert("TRY AGAIN, YOU BOTH DID NOT BEAT THE TIME!");
        } else {
            document.getElementById("countDown").innerHTML = "CLOCK IS TICKING: " + timeleft + " SECONDS";

        }
        timeleft -= 1;

    }, 1000);
}

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








