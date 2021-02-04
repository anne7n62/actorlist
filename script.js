let filter = "alle";
let personer;

document.addEventListener("DOMContentLoaded", loadJSON);
const popop = document.querySelector("#popop");

async function loadJSON() {
    const respons = await fetch("actors.json");
    personer = await respons.json();
    addEventListenersToButtons();
    visPersoner();
}

function visPersoner(){
    const list = document.querySelector("#liste");
    const menuTemplate = document.querySelector("template");
    list.innerHTML = "";

    personer.forEach(actor => {
        if (filter == "alle" || filter == actor.movie) {
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
    console.log (filterBTNs);
    filter = this.dataset.movie;
    visPersoner();

    document.querySelectorAll(".filter").forEach((btn) => {
        btn.classList.remove("valgt");
        btn.classList.remove("red");
    })
    this.classList.add("valgt");
    this.classList.add("red");

    loadJSON();
}