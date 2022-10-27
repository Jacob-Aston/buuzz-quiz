var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
var starUrl = 'https://swapi.dev/api/'
var answerButtons = document.getElementById('answers')
var questionText = document.getElementById('question')

var currentQuestion;

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


function startQuiz(question) {
  console.log(question)
  currentQuestion = 0
  questionText.textContent = question.question
  question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    // button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
    console.log("response");
  })
}

// question[nextQuestionIndex]

// function selectAnswer()

let questions = [{
  question: "When you're bored at night do you?",
  answers: [
    {text:"Watch a movie",
    nextQuestion:'' },
    {text:"Read a book",
    nextQuestion: ''},
    {text:"Grab the Gameboy",
    nextQuestion: ''},
    {text:"Play sudoku",
    nextQuestion: ''}
  ]
  },
  {
    question: "You want to talk to your best friend. Do you reach for your;",
    answers: [
      {text:"phone",
      nextQuestion: ''},
      {text:"telegraph",
      nextQuestion: ''},
      {text:"Email",
      nextQuestion: ''},
      {text:"Instagram",
      nextQuestion: ''}
    ]
  },
  {
    question: "Who was the president when you were young?",
    answers: [
      {text:"Nixon",
      nextQuestion: ''},
      {text:"Ronald Reagan",
      nextQuestion: ''},
      {text:"Bill Clinton",
      nextQuestion: ''},
      {text:"Donald Trump",
      nextQuestion: ''}
    ]
  },
  {
    question: "",
    answers: [
      {text:"",
      nextQuestion: ''},
      {text:"",
      nextQuestion: ''},
      {text:"",
      nextQuestion: ''},
      {text:"",
      nextQuestion: ''}
    ]
  },
  {
    question: "",
    answers: [
      {text:"",
      nextQuestion: ''},
      {text:"",
      nextQuestion: ''},
      {text:"",
      nextQuestion: ''},
      {text:"",
      nextQuestion: ''}
    ]
  },
]

startQuiz(questions[0]);



