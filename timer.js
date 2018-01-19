//"use strict";
var timer = 5;
var delayInMilliseconds = 1000;
var interval = 0;
var refresh = setInterval(timer_app, delayInMilliseconds);

function timer_app(){
    console.log('\033c');
    if (timer <= 0){
        console.log("END GAME");
        clearInterval(refresh);
    }
    if (timer <= 164){
        console.log(timer-- + " TELEOP");
    }
    if (timer >= 165){
        console.log(timer-- + " AUTONOMOUS");
    }
}

// countdown timer
