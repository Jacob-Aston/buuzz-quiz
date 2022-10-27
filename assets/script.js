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
}


 //array of objects each containing a question and an array of answers
let questions = [{
    question: "When you're bored at night do you?",
    answers: [
      { text:"Watch a movie", result: 'disney' },
      { text:"Read a book", result: 'disney' },
      { text:"Grab the Gameboy", result: 'pokemon' },
      { text:"Play sudoku", result: 'pokemon' }
    ]
  },
  {
    question: "You want to talk to your best friend. Do you reach for your;",
    answers: [
      { text:"phone", nextQuestion: '' },
      { text:"telegraph", nextQuestion: '' },
      { text:"Email", nextQuestion: '' },
      { text:"Instagram", nextQuestion: '' }
    ]
  },
  {
    question: "Who was the president when you were young?",
    answers: [
      { text:"Nixon", nextQuestion: '' },
      { text:"Ronald Reagan", nextQuestion: '' },
      { text:"Bill Clinton", nextQuestion: '' },
      { text:"Donald Trump", nextQuestion: '' }
    ]
  },
  {
    question: "",
    answers: [
      { text:"", nextQuestion: '' },
      { text:"", nextQuestion: '' },
      { text:"", nextQuestion: '' },
      { text:"", nextQuestion: '' }
    ]
  },
  {
    question: "",
    answers: [
      { text:"", nextQuestion: '' },
      { text:"", nextQuestion: '' },
      { text:"", nextQuestion: '' },
      { text:"", nextQuestion: '' }
    ]
  },
]

const SCORE_POKE = 1;
const SCORE_DISNEY = 1;
const MAX_QUESTIONS = 10;

startQuiz = () => {
  score = 0;
}

answers.forEach(choice => {
  choice.addEventListener('click', e => {

    
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset[answers]

    let classToApply = selectedAnswer == currentQuestion ? 'pokemon' : 'disney';

    if(classToApply === 'pokemon') {
      incrementScore(SCORE_POKE);
    } else {
      incrementScore(SCORE_DISNEY);
    }

    selectedChoice.parentElement.classList.add(classToApply);


  })

});

incrementScore = num => {
  score += num;
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

