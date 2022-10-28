var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
var starUrl = 'https://swapi.dev/api/'
var answerButtons = document.getElementById('answers')
var questionText = document.getElementById('question')

var currentQuestion = 1;
var maxQuestions = 10;

//console logs data from pokeapi
function getApi(pokeUrl) {
  fetch(pokeUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        //responseText.textContent = response.status;
      }
      return response.json();
  });
}
getApi(pokeUrl);

//console logs data from star wars api
function getApi(starUrl) {
  fetch(starUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        //responseText.textContent = response.status;
      }
      return response.json();
  });
}
getApi(starUrl);

//when answer is clicked the result property of answer object is passed in
//clears question and displays next question
function selectAnswer(result) {
  console.log("I was selected")
  console.log(result)
  currentQuestion = currentQuestion + 1;
  answerButtons.innerHTML = '';
  displayQuestion(questions[currentQuestion]);
    if(result === 'pokemon') {
      incrementScore(SCORE_POKE);
      console.log(SCORE_DISNEY);
    } else {
      incrementScore(SCORE_DISNEY);
      console.log(SCORE_POKE);
    }
}
 
//when answer is selected the status bar moves forward
  function updateBar() {
    var progressStatus = document.getElementById('progressBarStatus');  
    progressStatus.style.width = (currentQuestion / maxQuestions) * 100 + "%";
   }

 //displays question and builds answer buttons from questions array
function displayQuestion(question) {
  console.log(question)
  var progressTextEl = document.getElementById('progressText');  
  progressTextEl.innerHTML = "Question " + currentQuestion + " /" + maxQuestions;   
  questionText.textContent = question.question

  //builds answer buttons from questions array
  question.answers.forEach(answer => {
    var list = document.createElement("li")
    var button = document.createElement("button")

    button.innerText = answer.text
    button.classList.add("btn")
    button.addEventListener('click', (event) => selectAnswer(answer.result))
    button.addEventListener('click', updateBar())

    list.appendChild(button);
    console.log(answerButtons)
    answerButtons.appendChild(list);
    console.log(answerButtons)

    console.log("response");
  })
}

 //starts quiz on the first question
function startQuiz() {
  displayQuestion(questions[0])
  SCORE_POKE = 0;
  SCORE_DISNEY = 0;
}


 //array of objects each containing a question and an array of answers
let questions = [{
    question: "When you're bored at night do you?",
    answers: [
      { text:"Watch a Movie", result: 'disney' },
      { text:"Read a Book", result: 'disney' },
      { text:"Grab the GameBoy", result: 'pokemon' },
      { text:"Play Sudoku", result: 'pokemon' }
    ]
  },
  {
    question: "You want to talk to your best friend. What is your preferred way of communication?;",
    answers: [
      { text:"Phone call", result: 'pokemon' },
      { text:"In person", result: 'disney' },
      { text:"Email", result: 'pokemon' },
      { text:"Instagram/Facebook", result: 'disney' }
    ]
  },
  {
    question: "What is your Zodiac sign?",
    answers: [
      { text:"Capricorn, Aquarius, Pisces", result: 'disney' },
      { text:"Aries, Taurus, Gemini", result: 'disney' },
      { text:"Cancer, Leo, Virgo", result: 'pokemon' },
      { text:"Libra, Scorpio, Sagittarius", result: 'pokemon' }
    ]
  },
  {
    question: "What is your favorite ice cream flavor?",
    answers: [
      { text:"Chocolate", nextQuestion: '' },
      { text:"Vanilla", nextQuestion: '' },
      { text:"Mint", nextQuestion: '' },
      { text:"Strawberry", nextQuestion: '' }
    ]
  },
  {
    question: "What word best describes you?",
    answers: [
      { text:"Adventurous", result: 'disney' },
      { text:"Loyal", result: 'disney' },
      { text:"Impatient", result: 'pokemon' },
      { text:"Stubborn", result: 'pokemon' }
    ]
  },
  {
    question: "What is your favorite color of the following?",
    answers: [
      { text:"Blue", result: 'disney' },
      { text:"Red", result: 'disney' },
      { text:"Yellow", result: 'pokemon' },
      { text:"Black", result: 'pokemon' }
    ]
  },
  {
    question: "What is your favorite season?",
    answers: [
      { text:"Spring", result: 'disney' },
      { text:"Summer", result: 'disney' },
      { text:"Fall", result: 'pokemon' },
      { text:"Winter", result: 'pokemon' }
    ]
  },
  {
    question: "What is your spirit animal?",
    answers: [
      { text:"Lion", result: 'pokemon' },
      { text:"Bird", result: 'pokemon' },
      { text:"Dolphin", result: 'disney' },
      { text:"Monkey", result: 'disney' }
    ]
  },
  {
    question: "Which super power would you choose?",
    answers: [
      { text:"Invisibility", result: 'pokemon' },
      { text:"Super Strength", result: 'pokemon' },
      { text:"Flying", result: 'disney' },
      { text:"Time Travel", result: 'disney' }
    ]
  },
  {
    question: "What is your favorite movie genre?",
    answers: [
      { text:"Comedy", result: 'disney' },
      { text:"Action", result: 'pokemon' },
      { text:"Romance", result: 'disney' },
      { text:"Horror", result: 'pokemon' }
    ]
  },
  {
    question: "If the chicken crosses the road, I:",
    answers: [
      { text:"Ignore it", result: 'pokemon' },
      { text:"Chase it", result: 'pokemon' },
      { text:"Ask it why", result: 'disney' },
      { text:"Stare up at the sky and think about it", result: 'disney' }
    ]
  },
  {
    question: "What is your life anthem?",
    answers: [
      { text:"Don't Stop Believin, Journey", result: 'disney' },
      { text:"All You Need is Love, The Beatles", result: 'disney' },
      { text:"Eye of the Tiger, Survivor", result: 'pokemon' },
      { text:"We Are the Champions, Queen", result: 'pokemon' }
    ]
  },
  {
    question: "What is your greatest fear?",
    answers: [
      { text:"Snakes", result: 'disney' },
      { text:"Heights", result: 'pokemon' },
      { text:"Tight spaces", result: 'pokemon' },
      { text:"Thunder & Lightning", result: 'disney' }
    ]
  },
  {
    question: "Which do you prefer?",
    answers: [
      { text:"Sunny day", result: 'disney' },
      { text:"Snowy day", result: 'disney' },
      { text:"Rainy day", result: 'pokemon' },
      { text:"Windy day", result: 'pokemon' }
    ]
  },
  {
    question: "Which would you rather have?",
    answers: [
      { text:"Love", result: 'disney' },
      { text:"Beauty", result: 'disney' },
      { text:"Intelligence", result: 'pokemon' },
      { text:"Money", result: 'pokemon' }
    ]
  },
  {
    question: "What is your favorite school subject?",
    answers: [
      { text:"Art", result: 'disney' },
      { text:"Music", result: 'disney' },
      { text:"Math", result: 'pokemon' },
      { text:"Science", result: 'pokemon' }
    ]
  },
  {
    question: "Which would you choose to go do?",
    answers: [
      { text:"Beach", result: 'disney' },
      { text:"Shopping", result: 'disney' },
      { text:"Museum", result: 'pokemon' },
      { text:"Amusement park", result: 'pokemon' }
    ]
  },
  {
    question: "What is your favorite holiday?",
    answers: [
      { text:"Christmas", result: 'disney' },
      { text:"Easter", result: 'disney' },
      { text:"Halloween", result: 'pokemon' },
      { text:"Fourth of July", result: 'pokemon' }
    ]
  },
  {
    question: "What is your choice of drink?",
    answers: [
      { text:"Water", result: 'disney' },
      { text:"Pumpkin Latte", result: 'disney' },
      { text:"Mtn-Dew", result: 'pokemon' },
      { text:"Anything with alcohol", result: 'pokemon' }
    ]
  },
  // {
  //   question: "",
  //   answers: [
  //     { text:"", result: 'disney' },
  //     { text:"", result: 'disney' },
  //     { text:"", result: 'pokemon' },
  //     { text:"", result: 'pokemon' }
  //   ]
  // },
]

let SCORE_POKE = 1;
let SCORE_DISNEY = 1;
let MAX_QUESTIONS = 10;
//
// button.forEach(choice => {
//   // choice.addEventListener('click', e => {

    
//     const selectedChoice = e.target;
//     const selectAnswer = selectedChoice.dataset[button]

//     let classToApply = selectAnswer == currentQuestion ? 'pokemon' : 'disney';

//     if(result === 'pokemon') {
//       incrementScore(SCORE_POKE);
//     } else {
//       incrementScore(SCORE_DISNEY);
//     }

//     selectedChoice.parentElement.classList.add(classToApply);

//     setTimeout(() => {
//       selectedChoice.parentElement.classList.remove(classToApply);
//       getNewQuestion();

//     }, 1000)

//   })

// });

incrementScore = num => {
  // score += num;
}



startQuiz();

// Create array buckets of possible results based on api ID#

// Classics
const pokemonMaster = ["1", "4", "7", "25", "39", "52", "133", "149", "150"];
// Legendary
const pokemonDiamond = ["151", "144", "145", "146", "243", "244", "245", "251", "382", "383", "384", "385", "493"];
// Legit
const pokemonPlatinum = ["609", "612", "658", "724", "815", "6", "9", "38", "65", "78", "94", "230"];
// Meh
const pokemonGold = ["271", "281", "364", "391", "499", "502", "541", "578", "662"];
// Who's that pokemon?
const pokemonBronze = ["438", "415", "361", "351", "316", "223", "201", "129", "517"];
//Classic Characters
const disneyMaster = ["4703", "1947", "4704", "2755", "5371", "1944"];
// Princesses
const disneyDiamond = ["571", "1284", "3389", "5379", "5614", "6279", "2099", "373"];
// Villains
const disneyPlatinum = ["3347", "4180", "7026", "2572", "5986", "1044", "2930", "5542", "4120"];
// Sidekicks
const disneyGold = ["7473", "5149", "3045", "6030", "6768", "4771", "4706", "25"];
// Who's That?
const disneyBronze = ["7260", "4035", "2619", "7165", "3154", "1406", "304", "5621"];

// generate ordered pair
// associate pair with array
// pull number from array
// push number to local storage
// key pair is result
// math.random
//