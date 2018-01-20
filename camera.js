var cameraStream1 = "http://10.47.74.11:5803/?action=stream"

$(document).ready(function () {
    $("#camera1").attr("src", cameraStream1);

function resetVideo() {

    if (camera === 1) {
        $("#camera").removeAttr("src").attr("src", cameraStream1);
}
    