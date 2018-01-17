var Task1 = "Netflix";
var Task2 = "";
var Task3 = "";
var Task4 = "";
var Task5 = "";
var Task6 = "";
var Task7 = "";
var Task8 = "";
var Task9 = "";
var Task10 = "";

var TaskNm = 0;
function NextT(){
    if(TaskNm == 0){
        document.getElementById("CL").innerHTML = Task1;
    }
    if(TaskNm == 1){
        document.getElementById("CL").innerHTML = Task2;
    }
    if(TaskNm == 2){
        document.getElementById("CL").innerHTML = Task3;
    }
    if(TaskNm == 3){
        document.getElementById("CL").innerHTML = Task4;
    }
    if(TaskNm == 4){
        document.getElementById("CL").innerHTML = Task5;
    }
    if(TaskNm == 5){
        document.getElementById("CL").innerHTML = Task6;
    }
    if(TaskNm == 6){
        document.getElementById("CL").innerHTML = Task7;
    }
    if(TaskNm == 7){
        document.getElementById("CL").innerHTML = Task8;
    }
    if(TaskNm == 8){
        document.getElementById("CL").innerHTML = Task9;
    }
    if(TaskNm == 9){
        document.getElementById("CL").innerHTML = Task10;
    }
    else{
        return null;
    }
}