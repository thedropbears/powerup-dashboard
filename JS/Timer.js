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
    sleep(1000);
    document.getElementById("Timer").innerText = timer;
}
// countdown timer