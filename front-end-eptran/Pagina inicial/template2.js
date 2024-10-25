// elementos do html
var sideBar = document.getElementById("sideBar")
var overlay = document.getElementById("overlay")
var planet = document.getElementById("planet")

// esta mostrando a sidebar? (-1 = não, 1 = sim)
var showing = -1

function collapse(){
    showing *= -1;

    if (showing == 1){
        sideBar.style.left = "0%"; //coloca a sidebar em uma posição visivel
        overlay.style.opacity = "75%"; // aumenta a opacidade do overlay
        overlay.style.visibility = "visible" // faz o overlay ser visivel
        planet.style.left = "100vw"
        planet.style.top = "100vh"
        
    }
    else{
        sideBar.style.left = "-80%"; // tira a sidebar da tela
        overlay.style.opacity = "0%"; // zera a opacidade do overlay
        overlay.style.visibility = "hidden" // faz o overlay ser invisivel
        planet.style.left = "200vw"
        planet.style.top = "200vh"
    };
};