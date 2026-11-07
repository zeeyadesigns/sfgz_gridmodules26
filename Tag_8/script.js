/*window.alert("Hallo");*/

let schritt = 0;

//console.log(document);

function changeColor(){
let titel = document.getElementById("titel");
titel.style.color = "rgb(255, 0, 10)"
console.log(titel);

}

function create(){
    let element = document.createElement("div");
element.textContent("NeuesElement");

document.body.appendChild(element);

}
