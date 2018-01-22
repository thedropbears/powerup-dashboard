//"use strict";
var timer = 135;
var delayInMilliseconds = 1000;
var interval = 0;
var refresh = setInterval(timer_app, delayInMilliseconds);
var text = document.createTextNode("timer here");
var span = document.getElementById("MTimer");

function timer_app(){
    //console.log('\033c');
    if (timer <= 0){
        //console.log("END GAME");
        //document.getElementById("MTimer").textContent=timer;
        timer = timer--
        text = document.createTextNode(timer);
        span.appendChild(text);
        clearInterval(refresh);
    }
    
    if (timer <= 119){
        //console.log(timer-- + " TELEOP");
        //console.log(timer--);
        //document.getElementById("MTimer").textContent=timer;
        timer = timer--
        text = document.createTextNode(timer);
        span.appendChild(text);
    }
    if (timer >= 120){
        //console.log(timer-- + " AUTONOMOUS");
        //console.log(timer--);
        //document.getElementById("MTimer").textContent=timer;
        timer = timer--
        text = document.createTextNode(timer);
        span.appendChild(text);
    }
    
}

// countdown timer
