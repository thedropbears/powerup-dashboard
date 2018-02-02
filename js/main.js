var currentGyro = 0
var offsetGyro = 0

$(document).ready(function () {

    // sets a function that will be called when the websocket connects/disconnects
    NetworkTables.addWsConnectionListener(onNetworkTablesConnection, true);

    // sets a function that will be called  when the robot connects/disconnects
    NetworkTables.addRobotConnectionListener(onRobotConnection, true);


    // sets a function that will be called when any NetworkTables key/value changes
    NetworkTables.addGlobalListener(onValueChanged, true);

    // hook up our SendableChoosers to combo boxes
    attachSelectToSendableChooser("#selector", "/SmartDashboard/Autonomous Mode");
});

function resetGyro() {

    offsetGyro = currentGyro;
    rotateCompass(currentGyro + Math.PI)
}


function onNetworkTablesConnection(connected) {
    // TODO
    if (connected) {

    } else {

    }
}

function onValueChanged(key, value, isNew) {
    switch (key) {
        case "/SmartDashboard/gyro":
            rotateCompass(value + Math.PI);
            currentGyro = value;
            break;
        case "/SmartDashboard/default_height":{
            
        }
        case "/robot/mode":
            if (value === "teleop") {
                    timerCycle();
            }
            if (value != "disabled") {

            }
            break;
    }
}


function rotateCompass(heading) {
    heading = heading - offsetGyro;
    heading = Math.PI - heading; // gyro is the wrong way around
    var robot = document.getElementById("gyro");
    robot.style.transform = "rotate(" + heading + "rad)";
    
}

function onRobotConnection(connected) {
    if (connected) {
        $("#connection").text("Connected");
        $("#connection").css({
            "color": "#4CAF50"
        });
    } else {
        $("#connection").text("Disconnected");
        $("#connection").css({
            "color": "rgb(223, 48, 48)"
        });

    }
}

function remove_form() {
    $(".checklist").hide()
    $(".hidden").show()
    $(".hiddengyro").show()
}

function timerCycle() {
    var countDownDate = Math.floor(Date.now() / 1000) + 135;
    var x = setInterval(function () {
        var now = Math.floor(Date.now() / 1000);
        var difference = countDownDate - now;

        if (difference <= 0) {
            document.getElementById("timer").innerHTML = "";
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

function rotateCompass(heading) {
    heading = heading - offsetGyro;
    heading = Math.PI - heading; // gyro is the wrong way around
    var robot = document.getElementById("compass");
    robot.style.transform = "rotate(" + heading + "rad)";

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
