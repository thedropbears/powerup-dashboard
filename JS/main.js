var timer = 135;
var delayInMilliseconds = 1000;
var refresh = setInterval(timer_app, delayInMilliseconds);

function timer_app(){
    console.log('\033c');
    if (timer <= 0){
        console.log("END GAME");
        clearInterval(refresh);
    }
    if (timer <= 119){
        timer = timer - 1;
    }
    if (timer >= 120){
        timer = timer - 1;
    }
}
$(document).ready(function(Timer){
                setInterval(function(){
                        $("#MTimer").empty();
                        $("#MTimer").append(timer);
                    },500)})

            $(document).ready(function(CTimer){
                setInterval(function(){
                        $("#CTimer").empty();
                        $("#CTimer").append(Ctimer);
                    },500)})
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
