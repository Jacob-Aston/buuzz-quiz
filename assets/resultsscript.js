var reveal = document.querySelector("#btn");
var result = document.getElementById("result");


reveal.addEventListener("click", function(){
    result.style.display = "block";
    reveal.style.display = "none";
});

var title = document.getElementById("title1");
var type = document.getElementById("type");
var sprite = document.getElementById("img");
//var finalCharacter = localStorage.getItem("result")



const getPokemon = () => {
    var finalCharacter = 153
    var pokeUrl = `https://pokeapi.co/api/v2/pokemon/${finalCharacter}`;
    fetch(pokeUrl)
        .then( res => {
            return res.json();
        })
        .then(data => {console.log(data);
        title.textContent = data.name;
        type.textContent = "#" + data.id;
        document.getElementById("img").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${finalCharacter}.png`
        
        var existing = localStorage.getItem(`character`);
        existing = existing ? JSON.parse(existing) : [];
        existing.push(data.name);
        localStorage.setItem(`character`, JSON.stringify(existing));


        //var namesArr = [];
        //var existing = localStorage.getItem(`character`);
        //namesArr.push(existing);
        //namesArr.push(data.name);
        //localStorage.setItem('character', JSON.stringify(namesArr));
        //console.log(namesArr);
        document.getElementById("info").href = `https://bulbapedia.bulbagarden.net/wiki/${data.name}_(Pok%C3%A9mon)`;
        //localStorage.setItem('character', data.name);
    })    
};

getPokemon();

// Set previous results from local storage to HTML and display
var previous = JSON.parse(localStorage.getItem("character"));
console.log("previous", previous);
const populate = previous.map(n => `
<li class="card is-size-3 has-text-centered py-4">` +  n + `</li>`);
console.log("populate", populate);
const html = populate.join(``) + `
<li><a href="index.html"><div class="box is-fullwidth is-size-3 has-text-centered has-text-white has-background-link">Take Quiz Again</div></a></li>`;
console.log("html", html);
document.getElementById("highScores").innerHTML = html;


const getDisney = () => {
    var finalCharacter = 21
    var disneyUrl = `https://api.disneyapi.dev/characters/${finalCharacter}`;
    fetch(disneyUrl)
        .then( res => {
            return res.json();
        })
        .then(data => {console.log(data);
        title.textContent = data.name;
        console.log(data.name);
        type.textContent = data.films;
        document.getElementById("img").src = data.imageUrl;
        document.getElementById("info").href = `https://disney.fandom.com/wiki/${data.name}`;
        //var namesArr = ["litwick", "squirtle"];
        //namesArr.push(data.name);
        //localStorage.setItem('character', JSON.stringify(namesArr));
        //console.log(namesArr);
        //localStorage.setItem('character', data.name);
    })    
};

//getDisney();