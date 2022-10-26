var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
var starUrl = 'https://swapi.dev/api/'

var responseText = document.getElementById('response-text');

function getApi(pokeUrl) {
  fetch(pokeUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}
getApi(pokeUrl);

function getApi(starUrl) {
  fetch(starUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}
getApi(starUrl);

const questions = [{
question: "When you're bored at night do you?",
answers: [
  {text:"Watch a movie"},
  {text:"Read a book"},
  {text:"Grab the Gameboy"},
  {text:"Play sudoku"}
]
},
]




