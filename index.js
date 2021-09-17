
//LAPPELØSNING på forsiden billeder
    //Lavet fordi jeg gerne vil afprøve javaScript
    //MEN - også fordi jeg ikke ORKER at ændre i HTML-strukturen! :D

let imgLinks = document.querySelectorAll(".front-img");

imgLinks.forEach(function(element){

    //Ændrer cursor til pil
    element.style.cursor = "default";
    element.addEventListener("click", function (event){

        //Fjerner standard-link egenskaber (åbner ikke som link)
        event.preventDefault();
        
    });

});