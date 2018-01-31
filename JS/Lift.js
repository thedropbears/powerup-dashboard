var x = "null";
var Change = function(){
	if(x == "Low")
	{
		document.getElementById('Low').setAttribute("class","LiftB")
	}
	else if(x == "Mid")
	{
		document.getElementById('Mid').setAttribute("class","LiftB")
	}
	else if(x == "Top")
	{
		document.getElementById('Top').setAttribute("class","LiftB")
	}
}