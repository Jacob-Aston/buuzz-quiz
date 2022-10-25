console.log("Hello");

var reveal = document.querySelector("#btn");
var result = document.getElementById("result");

reveal.addEventListener("click", function(){
    console.log("Sup bro");
    console.log(result);
    result.style.display = "block";
    reveal.style.display = "none";
});