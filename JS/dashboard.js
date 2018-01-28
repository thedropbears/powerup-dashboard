var loop = 1;
var currentGyro = 0;
var offsetGyro = 0;
var cameraStream1 = "http://10.47.74.11:5801/?action=stream";
var cameraStream2 = "http://10.47.74.11:5802/?action=stream";
var reverse = false;
var alliance = "red";
var currentState = "stationary";
var timerStart = false;
var firstReset = false;
var currentLifterHeight = "ground_height";

$(document).ready(function () {

    $("#camera1").attr("src", cameraStream1);
    $("#state").attr("src", "Images/cube.png");
    $("#up").attr("src", "Images/up.png");
    $("#down").attr("src", "Images/down.png");
    $("#compass").attr("src", '''change these to whatever image we are using''');
    $("#robotSVG").attr("xlink:href", '''change these to whatever image we are using''');


    // sets a function that will be called when the websocket connects/disconnects
    NetworkTables.addWsConnectionListener(onNetworkTablesConnection, true);

    // sets a function that will be called  when the robot connects/disconnects
    NetworkTables.addRobotConnectionListener(onRobotConnection, true);


    // sets a function that will be called when any NetworkTables key/value changes
    NetworkTables.addGlobalListener(onValueChanged, true);

    // hook up our SendableChoosers to combo boxes
    attachSelectToSendableChooser("#auto-select", "/SmartDashboard/Autonomous Mode");
});
//buttons
/*
function switchCamera(value) {
    if (value === "front") {
        $("#camera2").css("display", "none");
        $("#camera1").css("display", "inline");
        camera = 1
    } else if (value === "back") {
        $("#camera1").css("display", "none");
        $("#camera2").css("display", "inline")
        camera = 2
    }
}
*/
//function resetVideo() {

    //if (camera === 1) {
      //$("#camera").removeAttr("src").attr("src", cameraStream1);

    //} else if (camera === 2) {
        //$("#camera").removeAttr("src").attr("src", cameraStream2);


    //}
//}

function resetGyro() {

    offsetGyro = currentGyro;
    rotateCompass(currentGyro + Math.PI);
}

function resetLifterHeight() {
	var currentLifterHeight = "ground_height";
}


function onNetworkTablesConnection(connected) {
    // TODO
    if (connected) {

    } else {

    }
}

function onValueChanged(key, value, isNew) {
    switch (key) {
        case "/robot/mode":
            if (value === "teleop"){
            if (!timerStart) {
                timerCycle();
            }}
            /*if (value != "disabled"){
                if (!started){
                resetGyro();
                started = true;
            }}*/

            break;

        case "/SmartDashboard/gyro":
            rotateCompass(value + Math.PI);
            currentGyro = value;
            break;

        case "/FMSInfo/GameSpecificMessage":
        	if (getInstance().gameSpecificMessage(0); === "R"){
        		//set right code for switch
        	}
        	else if (getInstance().gameSpecificMessage(0); === "L"){
        		//set left code for switch
        	}
        	else if (getInstance().gameSpecificMessage(1); === "R"){
        		//set right code for scale
        	}
        	else if (getInstance().gameSpecificMessage(1); === "L"){
        		//set left code for scale
        	}
        	break;

        case "/components/intake/cube_inside":
        	//unfinished because intake code has yet to be pushed to master
            if (cube_inside = true ) {
                $("#cube").attr("src", "Images/cube.png")
            }
            else {
                $("#nocube").attr("src", "Images/no_cube.png")
            }
        	break;

        case "/components/lifter/get_pos":
        	if (components.getInstance().get_pos = "exchange_height" && var currentLifterHeight === "ground_height") {
        		//going up
                $("#goingup").attr("src", "Images/Going_Up.png")
        	}
        	else if (get_pos = "switch_height" && currentLifterHeight === "ground_height") {
        		//going up
                $("#goingup").attr("src", "Images/Going_Up.png")
        	}
        	else if (get_pos = "scale_height" && currentLifterHeight === "ground_height") {
        		//going up
                $("#goingup").attr("src", "Images/Going_Up.png")
        	} 
        	else if (get_pos = "switch_height" && currentLifterHeight === "exchange_height") {
        		//going up
                $("#goingup").attr("src", "Images/Going_Up.png")
        	}
        	else if (get_pos = "scale_height" && currentLifterHeight === "exchange_height") {
        		//going up
                $("#goingup").attr("src", "Images/Going_Up.png")
        	} 
        	else if (get_pos = "scale_height" && currentLifterHeight === "switch_height") {
        		//going up
                $("#goingup").attr("src", "Images/Going_Up.png")
        	}  
        	else if (get_pos = "ground_height" && currentLifterHeight === "scale_height") {
        		//down
                $("#goingdown").attr("src", "Images/Going_Down.png")
        	}      
        	else if (get_pos = "exchange_height" && currentLifterHeight === "scale_height") {
        		//down
                $("#goingdown").attr("src", "Images/Going_Down.png")
        	}  
        	else if (get_pos = "switch_height" && currentLifterHeight === "scale_height") {
        		//down
                $("#goingdown").attr("src", "Images/Going_Down.png")
        	}     
        	else if (get_pos = "exchange_height" && currentLifterHeight === "switch_height") {
        		//down
                $("#goingdown").attr("src", "Images/Going_Down.png")
        	}   
        	else if (get_pos = "ground_height" && currentLifterHeight === "switch_height") {
        		//down
                $("#goingdown").attr("src", "Images/Going_Down.png")
        	}
        	else if (get_pos = "ground_height" && currentLifterHeight === "exchange_height") {
        		//down
                $("#goingdown").attr("src", "Images/Going_Down.png")
        	}
            break;  	


       //case "/SmartDashboard/rail_pos":
         //   var railPos = value + 1;
            // XXX wtf does this do
           // railPos = railPos * 50;
            //railPos = railPos * 0.9;
            //document.getElementById("railRect").setAttribute("x", railPos + "%");
            //break;
         

        case "/SmartDashboard/alliance":
            if (isRedAlliance === true) {
                alliance = "red";
                document.documentElement.style.setProperty('--accent-colour', '#C62828')
            } else if (isRedAlliance === false) {
                alliance = "blue";
                document.documentElement.style.setProperty('--accent-colour', '#3565bf')
            }
            $("#compass").attr("src", "img/robot" + alliance + ".png");
            $("#robotSVG").attr("src", "img/robot" + alliance + ".png");
            $("#state").attr("src", "img/icons/" + currentState + alliance + ".png")
            $("#robotSVG").attr("xlink:href", "img/robot" + alliance + ".png");

            break;

        case "/SmartDashboard/state":
            currentState = value;
            $("#state").attr("src", "img/icons/" + value + alliance + ".png");
            break;

        case "/SmartDashboard/range":
            if (currentState === "unloadingGear") {
            changeRobotRange(value);
            }
            break;
        
        case "/SmartDashboard/camera":
            switchCamera(value);
            break;

        case "/SmartDashboard/reset_video":
            resetVideo();
            break;
        
    }
}

function changeRobotRange(dist) {
    var ypos = (dist - targetRange) / targetRange;
    if (ypos >= 1.0) {
        ypos = 1.0;
    }
    ypos += 1; // value from -1 to 1
    ypos = ypos * 50;
    ypos = (ypos / 100) * 15;
    ypos = ypos + "em";
    document.getElementById("robotSVG").setAttribute("y", ypos);

}

function changeRobotStrafePos(visionX) {
    visionX = -visionX;
    if (visionX >= -1.0 && visionX <= 1.0) {
        var robot = document.getElementById("robotSVG");

        var xpos = visionX + 1; // -1 -to 1 now 0 to 2
        xpos = xpos * 50; // percentage 
        xpos = xpos * 0.65; // width of picture  
        document.getElementById("robotSVG").setAttribute("x", xpos + "%");

    }
}


function rotateCompass(heading) {
    heading = heading - offsetGyro;
    heading = Math.PI - heading; // gyro is the wrong way around
    var robot = document.getElementById("compass");
    robot.style.transform = "rotate(" + heading + "rad)";

}
function onRobotConnection(connected) {
    if (connected) {
        $("#Connection").text("Connected");
        $("#Connection").css({
            "color": "lime"
        });
    } else {
        $("#Connection").text("Disconnected");
        $("#Connection").css({
            "color": "red"
        });

    }
}