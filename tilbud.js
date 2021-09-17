
//VARIABLER DER INDEHOLDER DOM-ELEMENTER

//Erklæring af variabel, der tilgår alle sektioners billeder
let imgLinks = document.querySelectorAll(".section a");

//Erklæring af variabel, der tilgår den div, der dækker hele skærmen (gennesigtig)
let imgOuter = document.querySelector(".img-outer");

//Erklæring af variabel der tilgår billedet, der skal være "pop-up"
let imgView = document.querySelector(".image-view");

//Erklæring af variabel der tilgår knappen der skal lukke billedet
let closeImg = document.querySelector(".close-img");



//EKSPERIMENT: Lave funktion, der viser billeders individuelle paragrafer

    //Tilgår paragrafen UNDER billede (.image-view AKA. imgView)
let textView = document.querySelector(".text-view");

let textHead = document.querySelector(".text-head");

//Vi LOOPER igennem alle links
//for hvert link afvikles call-back funktionen (med parametret "element" i parantes)

//"Element" peger på det link, hvis tur det er i loopet
imgLinks.forEach(function (element) {

    //Vi propper en click-event på hvert element
    element.addEventListener("click", function (event) {

        event.preventDefault();

        imgView.setAttribute("src", element.href);
        textHead.innerHTML = element.dataset.head;
        textView.innerHTML = element.dataset.desc;
        imgOuter.classList.add("open");

    })

});

closeImg.addEventListener("click", function(){
    imgOuter.classList.remove("open");

});


