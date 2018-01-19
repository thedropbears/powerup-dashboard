//"use strict";
var timer = 180;
var delayInMilliseconds = 1000;
var interval = 0;

interval = setInterval(function() {
    console.log('\033c');
    if (timer <= 164){
        console.log(timer-- + " TELEOP");
    }
    if (timer >= 165){
        console.log(timer-- + " AUTONOMOUS");
    }
}, delayInMilliseconds);

// countdown timer
