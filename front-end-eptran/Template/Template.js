var collapsed = -1
var sideBar = document.getElementById("sideBar")
var header = document.getElementById("header")
var footer = document.getElementById("footer")
var overlay = document.getElementById("overlay")

function collapse(){
	if (collapsed == 1){
		sideBar.style.width = "0px";
		sideBar.style.fontSize = "0px";
		overlay.style.opacity = "0%";
	} 
	else if (collapsed == -1){
		sideBar.style.width = "240px";
		sideBar.style.fontSize = "16px";
		overlay.style.opacity = "50%";
	};
	collapsed = -collapsed
};