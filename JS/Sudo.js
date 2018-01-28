Connection = Networktable;

function Refresh(){
    if(Connection = true){
        document.getElementById("Connection").innerText = "Connected";
    }
    else{
        document.getElementById("Connection").innerText = "Disconnected";
    }
}
