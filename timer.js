var timer = 180;
var delayInMilliseconds = 1000;
var interval = 0;

interval = setInterval(function() {
    /*
    if (timer => 165){
       console.log("autonomous")
    } if (timer < 165){
        console.log("teleop")
    }
    */
    //Uncomment the above code for auto and teleop code
    console.log('\033c')
    console.log(timer --);
}, delayInMilliseconds);

// countdown timer