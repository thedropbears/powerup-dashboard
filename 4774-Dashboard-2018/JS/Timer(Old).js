function timerCycle() {
    var countDownDate = Math.floor(Date.now() / 1000) + 21;
    var loop = 0;
    var climb = false;
    var x = setInterval(function () {
        var now = Math.floor(Date.now() / 1000);
        var distance = countDownDate - now;

        if (distance < 10) {
            document.getElementById("cycleTimer").innerHTML = "0" + distance;
        } else {
            document.getElementById("cycleTimer").innerHTML = distance;
        }

        if (distance <= 0) {
            loop = loop + 1;
            if (loop <= 4) {
                document.getElementById("cycleTimer").innerHTML = "21";
                $("#timerInfo").text(loop + 1);
                countDownDate = Math.floor(Date.now() / 1000) + 21;
            } else if (climb === false) {
                document.getElementById("cycleTimer").innerHTML = "30";
                countDownDate = Math.floor(Date.now() / 1000) + 30;
                $("#timerInfo").text("CLIMB");
                $("#timerInfo").toggleClass("blink");
                climb = true;
            } else if (climb) {
                clearInterval(x);
                document.getElementById("cycleTimer").innerHTML = "00";
                $("#timerInfo").toggleClass("blink");
                $("#timerInfo").text("");

            }
        }


    }, 1000);
}