var collapsed = -1
var sideBar = document.getElementById("sideBar")
var header = document.getElementById("header")
var footer = document.getElementById("footer")
var overlay = document.getElementById("overlay")
var planet = document.getElementById("planet")
var car = document.getElementById("car")


function collapse(){
	if (collapsed == 1){
		sideBar.style.width = "0px";
		sideBar.style.fontSize = "0px";
		overlay.style.opacity = "0%";
		planet.style.left = "100vw";
		car.style.left = "100vw";
		planet.style.opacity = "0%";
		car.style.opacity = "0%";
	} 
	else if (collapsed == -1){
		sideBar.style.width = "240px";
		sideBar.style.fontSize = "16px";
		overlay.style.opacity = "50%";
		planet.style.left = "77vw";
		car.style.left = "75vw";
		planet.style.opacity = "100%";
		car.style.opacity = "100%";
	};



	collapsed = -collapsed
};