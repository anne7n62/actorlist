let filter = "alle";
let retter;

document.addEventListener("DOMContentLoaded", loadJSON);
const popop = document.querySelector("#popop");

async function loadJSON() {
    const respons = await fetch("actors.json");
    const json = await respons.json();
    addEventListenersToButtons();
    vis(json);
}

function vis(json) {
    const list = document.querySelector("#liste");
    const menuTemplate = document.querySelector("template");
    list.innerHTML = "";

    json.forEach(actor => {
        if (filter == "alle") {
            let klon = menuTemplate.cloneNode(true).content;
            klon.querySelector(".fullname").textContent = actor.fullname;
            klon.querySelector(".movie").textContent = actor.movie;
    
            klon.querySelector("article").addEventListener("click", () => visDetaljer(actor));

            list.appendChild(klon);
            console.log(klon);

        }
    })
}

function visDetaljer(actor) {
    console.log(actor);
    popop.querySelector(".fullname").textContent = actor.fullname;
    popop.querySelector(".movie").textContent = actor.movie;
    popop.style.display = "block";

}


document.querySelector("#luk").addEventListener("click", () => popop.style.display = "none");

function addEventListenersToButtons() {
    console.log (addEventListenersToButtons);
    document.querySelectorAll(".filter").forEach((btn) => {
        btn.addEventListener("click", filterBTNs);
    });
}


function filterBTNs() {

    filter = this.dataset.movie;

    document.querySelectorAll(".filter").forEach((btn) => {
        btn.classList.remove("valgt");
        btn.classList.remove("valgt");


    })
    this.classList.add("valgt");
    this.classList.add("red");


    loadJSON();
}