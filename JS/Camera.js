var cameraStream1 = "http://10.47.74.11:5803/?action=stream"
var camera = 1;
var targetRange = 4;

$(document).ready(function () {
    $("#camera1").attr("src", cameraStream1);

function resetVideo() {

    if (camera === 1) {
        $("#camera").removeAttr("src").attr("src", cameraStream1);
}

function onValueChanged(key, value, isNew) {
    switch (key) {
        case "/SmartDashboard/camera":
            switchCamera(value)
            break;

        case "/SmartDashboard/reset_video":
            resetVideo()}
break;
}