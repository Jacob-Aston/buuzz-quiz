var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
var starUrl = 'https://swapi.dev/api/'
var answerButtons = document.getElementById('answers')
var questionText = document.getElementById('question')

var currentQuestion = 0;

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

//displays question and builds answer buttons from questions array
function displayQuestion(question) {
  console.log(question)
  questionText.textContent = question.question

  var progressElement = document.getElementById('progress')
  progressElement.innerHTML = currentQuestion + 1;

  //builds answer buttons from questions array
  question.answers.forEach(answer => {
    var list = document.createElement("li")
    var button = document.createElement("button")

    button.innerText = answer.text
    button.classList.add("btn")
    button.addEventListener('click', (event) => selectAnswer(answer.result))

    list.appendChild(button);
    console.log(answerButtons)
    answerButtons.appendChild(list);
    console.log(answerButtons)

    console.log("response");
  })
}

//starts quis on the first question
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

startQuiz();



