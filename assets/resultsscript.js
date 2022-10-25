var results = document.getElementById("result");
var reveal = document.querySelector("#btn");

reveal.addEventListener("click", function() {
    console.log("Sup bro");
    results.style.display = "block";
    reveal.style.display = "none";

});