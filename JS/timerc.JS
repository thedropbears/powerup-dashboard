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
}