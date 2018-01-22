//"use strict";
var timer = 135;
var delayInMilliseconds = 1000;
var interval = 0;
var refresh = setInterval(timer_app, delayInMilliseconds);

function timer_app(){
    //console.log('\033c');
    if (timer <= 0){
        //console.log("END GAME");
        document.getElementById("MTimer").textContent="END GAME";
        clearInterval(refresh);
    }
    
    if (timer <= 119){
        //console.log(timer-- + " TELEOP");
        //console.log(timer--);
        document.getElementById("MTimer").textContent=timer;
    }
    if (timer >= 120){
        //console.log(timer-- + " AUTONOMOUS");
        //console.log(timer--);
        document.getElementById("MTimer").textContent=timer;
    }
    
}

// countdown timer
