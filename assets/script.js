var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
var starUrl = 'https://swapi.dev/api/'
<<<<<<< HEAD
=======
var answerButtons = document.getElementById('answer-buttons')
var questionText = document.getElementById('question')

>>>>>>> 42439c5546a51c306fa974a47632637b64a07d69
var responseText = document.getElementById('response-text');

var currentQuestion;

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


function startQuiz(question) {
  currentQuestion = 0
  questionText.textContent = question.question
  questions.answers.forEach(answer => {
  var button = document.createElement("button")
  button.innerText = answer.text
  button.classList.add("btn")
  button.addEventListener('click', selectAnswer)
  answerButtons.appendChild(button)
  console.log("response");
  })
}
startQuiz();

question[nextQuestionIndex]

function selectAnswer()

const questions = [{
question: "When you're bored at night do you?",
answers: [
  {text:"Watch a movie",
  nextQuestion: 1 },
  {text:"Read a book",
  nextQuestion: 2 },
  {text:"Grab the Gameboy"
  },
  {text:"Play sudoku"}
]
},
{
  question: "You want to talk to your best friend. Do you reach for your;",
  answers: [
    {text:"phone",
    nextQuestion: },
    {text:"telegraph",
    nextQuestion: },
    {text:"Email"
    },
    {text:"Instagram"}
  ]
  },
  {
    question: "Who was the president when you were young?",
    answers: [
      {text:"Nixon",
      nextQuestion: },
      {text:"Ronald Reagan",
      nextQuestion: },
      {text:"Bill Clinton"
      },
      {text:"Donald Trump"}
    ]
    },
]




