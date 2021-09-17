let output = document.querySelector("#js-output");
let adress = window.location.href;
let adressObject = new URL(adress);

let searchQuery = adressObject.searchParams.get("search");

searchQuery = searchQuery.toLowerCase();

let searchTerms = [

    [
        ["eksotisk frugt", "kvalitet", "høj kvalitet", "samvittighed", "god samvittighed", "fairtrade", "bæredygtighed", "Velkommen", "frugt", "fly"],
        "index.html"
    ],
    [
        ["papaya", "cherimoya", "stjernefrugt", "jackfruit", "sharonfrugt", "mangosteen", "dragefrugt", "rambutan", "passionsfrugt", "durian"],
        "tilbud.html"
    ],
    [
        ["spørgsmål", "kontakt os", "besked", "skriv", "skrive en besked"],
        "kontakt.html"
    ],
    [
        ["kurv", "indkøbskurv", "købt", "lagt i kurv"],
        "kurv.html"
    ],

];


let noResults = true;

searchTerms.forEach(function(element, index) {

    element[0].forEach(function(elm) {

        if (elm == searchQuery) {
            output.innerHTML += "<p> Din søgning på " + searchQuery + " kan findes her: </p>";
            output.innerHTML += "<a href=' " + element[1] + " '> " + element[1] + "</a>";

            noResults = false;

        }

    })

});

if (noResults) {
    output.innerHTML = "Ingen resultater, do!"
}