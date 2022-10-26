var reveal = document.querySelector("#btn");
var result = document.getElementById("result");

reveal.addEventListener("click", function(){
    console.log("Sup bro");
    console.log(result);
    result.style.display = "block";
    reveal.style.display = "none";
});

var title = document.getElementById("title1");
var type = document.getElementById("type");
var sprite = document.getElementById("img");


const getPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
        .then( res => {
            return res.json();
        })
        .then(data => {console.log(data);
        title.textContent = data.name;
        type.textContent = "#" + data.id;
        document.getElementById("img").src = data.sprites['front_default'];
        console.log()
    })    
};

getPokemon();
