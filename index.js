//My function to START THE GAME//

function myStart() { //creating a function expression with onclick=myStart() in index.html//
    let s = document.getElementById("menu");  //creating a variable that is assign to document.getElementById("menu")//
    if (s.style.display === "none") { //if my variable s is equal to none, my display will be hidden//
        s.document.style.display = "block";//variable is assign to block so which mean it display will stay in position//
    } else {
        s.style.display = "none"; //variable is equal to none, means when I click the button it will disappear//

        //Countdown to 30 Second//

    } let timeleft = '30'; //variable assign to 30 so I can set up 30 second

    let downloadTimer = setInterval(function () { //created setInterval function and assign to a variable name downloadTimer
        if (timeleft <= 0) { //if timeleft less than or equal to 0, whatever is inside the if/else statement will appear//
            clearInterval(downloadTimer);
            document.getElementById("countDown").innerHTML = "TIMES UP!"; //After 0, TIMES UP will show up//
            window.alert("TRY AGAIN, YOU BOTH DID NOT BEAT THE TIME!"); //notification will pop??
        } else {
            document.getElementById("countDown").innerHTML = "CLOCK IS TICKING: " + timeleft + " SECONDS"; //timeleft is greater than 30 so it will go down to 0//
            document.getElementById("countDown").style.fontFamily = "fantasy";
        }
        timeleft -= 1; //30 will be subtracted by 1//

    }, 1000); //milliseconds which mean every second 30 will go down by one//
}

//Enter keyboard//

let playerOne = 0; //variable is assign to 0//



document.addEventListener('keyup', function (e) {  //Basically this function is giving me to use the keyboard

    if (e.key === "Enter") { //so e is the keyboard that is equal to Enter//
        playerOne++; //playerOne is being increment//
        document.getElementById("clicks").innerHTML = playerOne; //my click will start off zero//
    } if (playerOne >= 100) { //if reach to 100, you will receive whatever is inside the if statement//
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
    } if (playerTwo >= 100) {
        document.getElementById("press").innerHTML = "YOU ARE THE WINNER!";
        window.alert("PLAYER TWO IS THE WINNER! PRESS THE 'RESTART HERE!' TO PLAY AGAIN!");
        clearInterval(downloadTimer);
    }
})








