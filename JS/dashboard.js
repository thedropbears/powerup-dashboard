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

function onRobotConnection(connected){
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
        case "/SmartDashboard/default_height"{
            
        }
    }
}


function rotateCompass(heading) {
    heading = heading - offsetGyro;
    heading = Math.PI - heading; // gyro is the wrong way around
    var robot = document.getElementById("gyro");
    robot.style.transform = "rotate(" + heading + "rad)";
    
}
