var collapsed = -1
var sideBar = document.getElementById("sideBar")
var header = document.getElementById("header")
var footer = document.getElementById("footer")
var overlay = document.getElementById("overlay")
var left = document.getElementById("left")
var right = document.getElementById("right")

function collapse(){
	if (collapsed == 1){
		sideBar.style.width = "0vh";
		sideBar.style.fontSize = "0px";
		overlay.style.opacity = "0%";
		overlay.style.visibility = "hidden";
		
		left.style.opacity = "0%";
		left.style.visibility = "hidden";
		right.style.opacity = "0%";
		right.style.visibility = "hidden";
	} 
	else if (collapsed == -1){
		sideBar.style.width = "30vh";
		sideBar.style.fontSize = "16px";
		overlay.style.opacity = "50%";
		overlay.style.visibility = "visible";

		left.style.opacity = "100%";
		left.style.visibility = "visible";
		right.style.opacity = "100%";
		right.style.visibility = "visible";
	};



	collapsed = -collapsed
};