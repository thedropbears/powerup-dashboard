function timerCycle() {
    var countDownDate = Math.floor(Date.now() / 1000) + 135;
    var x = setInterval(function () {
        var now = Math.floor(Date.now() / 1000);
        var difference = countDownDate - now;
        console.log("K");

        if (difference <= 0) {
            document.getElementById("cycleTimer").innerHTML = "";
            $("#timer").text("GOOD JOB!");
            $("#timer").css("font-size", "425%")
            $("#timer").css("color", "#4CAF50")
            $("#timer").toggleClass("blink");
        }
        else if (difference < 10) {
            document.getElementById("timer").innerHTML = "00" + difference;
        } else if (difference < 100) {
            document.getElementById("timer").innerHTML = "0" + difference;
        }
        else {
            document.getElementById("timer").innerHTML = difference;
        }
    }, 1000);
}

/* --CYCLE TIMER--
var Ctimer = 15;
var CdelayInMilliseconds = 1000;
var Cinterval = 0;
var Crefresh = setInterval(Ctimer_app, CdelayInMilliseconds);

function Ctimer_app(){
    console.log('\033c');
    if (Ctimer > 0){
        Ctimer--;
    }
    if (Ctimer <= 0){
        Ctimer = 30;
    }
}*/
