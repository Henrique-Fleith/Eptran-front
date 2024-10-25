var collapsed = -1
var sideBar = document.getElementById("sideBar")
var header = document.getElementById("header")
var footer = document.getElementById("footer")
var overlay = document.getElementById("overlay")
var planet = document.getElementById("planet")

function collapse(){
	if (collapsed == 1){
		sideBar.style.width = "0px";
		sideBar.style.fontSize = "0px";
		overlay.style.opacity = "0%";
		//planet.style.left = "100vw";
	} 
	else if (collapsed == -1){
		sideBar.style.width = "240px";
		sideBar.style.fontSize = "16px";
		overlay.style.opacity = "50%";
		//planet.style.left = "77vw";
	};



	collapsed = -collapsed
};