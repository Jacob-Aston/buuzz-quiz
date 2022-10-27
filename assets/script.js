var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
var starUrl = 'https://swapi.dev/api/'
var answerButtons = document.getElementById('answers')
var questionText = document.getElementById('question')

var currentQuestion = 0;

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

function selectAnswer(result) {
  console.log("I was selected")
  console.log(result)
  currentQuestion = currentQuestion + 1;
  answerButtons.innerHTML = '';
  displayQuestion(questions[currentQuestion]);
}

function displayQuestion(question) {
  console.log(question)
  questionText.textContent = question.question

  var progressElement = document.getElementById('progress')
  progressElement.innerHTML = currentQuestion + 1;

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

function startQuiz() {
  displayQuestion(questions[0])
}
// question[nextQuestionIndex]



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



