var timer = 180;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}

while (timer > 0) {
    if (timer => 165){
        console.log(autonomous)
    } if (timer < 165){
        console.log(teleop)
    }
    sleep(1000)
    console.log(timer --)
}
// countdown timer