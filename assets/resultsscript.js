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
//var finalCharacter = localStorage.getItem("result")



const getPokemon = () => {
    var finalCharacter = 607
    var pokeUrl = `https://pokeapi.co/api/v2/pokemon/${finalCharacter}`;
    fetch(pokeUrl)
        .then( res => {
            return res.json();
        })
        .then(data => {console.log(data);
        title.textContent = data.name;
        type.textContent = "#" + data.id;
        document.getElementById("img").src = data.sprites['front_default'];
        var namesArr = ["litwick", "squirtle"];
        namesArr.push(data.name);
        localStorage.setItem('character', JSON.stringify(namesArr));
        console.log(namesArr);
        //localStorage.setItem('character', data.name);
    })    
};

//getPokemon();

//var previous = JSON.parse(localStorage.getItem("character"));
//console.log(previous);
//var first = document.getElementById("1")
//first.textContent = "1. " + previous;

const getStarWars = () => {
    //var finalCharacter = 2
    var starUrl = `https://api.disneyapi.dev/characters/308`;
    fetch(starUrl)
        .then( res => {
            return res.json();
        })
        .then(data => {console.log(data);
        title.textContent = data.name;
        console.log(data.name);
        type.textContent = data.films;
        document.getElementById("img").src = data.imageUrl;
        //var namesArr = ["litwick", "squirtle"];
        //namesArr.push(data.name);
        //localStorage.setItem('character', JSON.stringify(namesArr));
        //console.log(namesArr);
        //localStorage.setItem('character', data.name);
    })    
};

getStarWars();