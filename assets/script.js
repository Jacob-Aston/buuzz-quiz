var answerButtons = document.getElementById('answers')
var questionText = document.getElementById('question')

var currentQuestion = 1;
var maxQuestions = 10;

//Shuffle questions from array
function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    var randomPosition = Math.floor(Math.random() * (i + 1));
    var temp = questions[i];
    questions[i] = questions[randomPosition];
    questions[randomPosition] = temp;
  }
  return questions;
}

//when answer is clicked the result property of answer object is passed in
//clears question and displays next question
function selectAnswer(result) {
  console.log("I was selected")
  console.log(result)
  currentQuestion = currentQuestion + 1;
  answerButtons.innerHTML = '';


//takes you to results page when out of questions
  if(currentQuestion > maxQuestions) {
    window.location.href="./results.html"
  } else {
  displayQuestion(questions[currentQuestion]);
  }

    if(result === 'pokemon') {
      SCORE_POKE = incrementScore(SCORE_POKE);
      console.log(SCORE_POKE);
    } else {
      SCORE_DISNEY = incrementScore(SCORE_DISNEY);
      console.log(SCORE_DISNEY);
    }
}

 //displays question and builds answer buttons from questions array
function displayQuestion(question) {
  console.log(question)
  var progressTextEl = document.getElementById('progressText');  
  progressTextEl.innerHTML = "Question " + currentQuestion + " /" + maxQuestions;   
  questionText.textContent = question.question
  
//to change picture to current picture from questions array
  var questionImage = document.getElementById("questImage");
  questionImage.innerHTML = "<img src=" + questions[currentQuestion].imageUrl + ">"
  
   
//when answer is selected the status bar moves forward
function updateBar() {
  var progressStatus = document.getElementById('progressBarStatus');  
  progressStatus.style.width = (currentQuestion / maxQuestions) * 100 + "%";
 }


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
  displayQuestion(questions[0]);
  shuffleQuestions(questions);
  
  SCORE_POKE = 0;
  SCORE_DISNEY = 0;
}

 //array of objects each containing a question and an array of answers
let questions = [{
    imageUrl: "./assets/images/charizard.jpg",
    question: "When you're bored at night do you?",
    answers: [
      { text:"Watch a Movie", result: 'disney' },
      { text:"Read a Book", result: 'disney' },
      { text:"Grab the GameBoy", result: 'pokemon' },
      { text:"Play Sudoku", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/princesses.jpg",
    question: "You want to talk to your best friend. What is your preferred way of communication?",
    answers: [
      { text:"Phone call", result: 'pokemon' },
      { text:"In person", result: 'disney' },
      { text:"Email", result: 'pokemon' },
      { text:"Instagram/Facebook", result: 'disney' }
    ]
  },
  {
    imageUrl: "./assets/images/feraligator.jpg",
    question: "What is your Zodiac sign?",
    answers: [
      { text:"Capricorn, Aquarius, Pisces", result: 'disney' },
      { text:"Aries, Taurus, Gemini", result: 'disney' },
      { text:"Cancer, Leo, Virgo", result: 'pokemon' },
      { text:"Libra, Scorpio, Sagittarius", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/frozen.jpg",
    question: "What is your favorite ice cream flavor?",
    answers: [
      { text:"Chocolate", result: 'pokemon' },
      { text:"Vanilla", result: 'disney' },
      { text:"Mint", result: 'disney' },
      { text:"Strawberry", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/giritina.jpg",
    question: "What word best describes you?",
    answers: [
      { text:"Adventurous", result: 'disney' },
      { text:"Loyal", result: 'disney' },
      { text:"Impatient", result: 'pokemon' },
      { text:"Stubborn", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/lilo-stitch.jpg",
    question: "What is your favorite color of the following?",
    answers: [
      { text:"Blue", result: 'disney' },
      { text:"Red", result: 'disney' },
      { text:"Yellow", result: 'pokemon' },
      { text:"Black", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/legendaries.jpg",
    question: "What is your favorite season?",
    answers: [
      { text:"Spring", result: 'disney' },
      { text:"Summer", result: 'disney' },
      { text:"Fall", result: 'pokemon' },
      { text:"Winter", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/encanto.jpeg",
    question: "What is your spirit animal?",
    answers: [
      { text:"Lion", result: 'pokemon' },
      { text:"Bird", result: 'pokemon' },
      { text:"Dolphin", result: 'disney' },
      { text:"Monkey", result: 'disney' }
    ]
  },
  {
    imageUrl: "./assets/images/lucario.jpg",
    question: "Which super power would you choose?",
    answers: [
      { text:"Invisibility", result: 'pokemon' },
      { text:"Super Strength", result: 'pokemon' },
      { text:"Flying", result: 'disney' },
      { text:"Time Travel", result: 'disney' }
    ]
  },
  {
    imageUrl: "./assets/images/mickey.jpg",
    question: "What is your favorite movie genre?",
    answers: [
      { text:"Comedy", result: 'disney' },
      { text:"Action", result: 'pokemon' },
      { text:"Romance", result: 'disney' },
      { text:"Horror", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/lugia.jpg",
    question: "If the chicken crosses the road, I:",
    answers: [
      { text:"Ignore it", result: 'pokemon' },
      { text:"Chase it", result: 'pokemon' },
      { text:"Ask it why", result: 'disney' },
      { text:"Stare up at the sky and think about it", result: 'disney' }
    ]
  },
  {
    imageUrl: "./assets/images/marvel.jpg",
    question: "What is your life anthem?",
    answers: [
      { text:"Don't Stop Believin, Journey", result: 'disney' },
      { text:"All You Need is Love, The Beatles", result: 'disney' },
      { text:"Eye of the Tiger, Survivor", result: 'pokemon' },
      { text:"We Are the Champions, Queen", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/pikachu.png",
    question: "What is your greatest fear?",
    answers: [
      { text:"Snakes", result: 'disney' },
      { text:"Heights", result: 'pokemon' },
      { text:"Tight spaces", result: 'pokemon' },
      { text:"Dark", result: 'disney' }
    ]
  },
  {
    imageUrl: "./assets/images/nemo.jpg",
    question: "Which do you prefer?",
    answers: [
      { text:"Sunny day", result: 'disney' },
      { text:"Snowy day", result: 'disney' },
      { text:"Rainy day", result: 'pokemon' },
      { text:"Windy day", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/rayquaza.jpg",
    question: "Which would you rather have?",
    answers: [
      { text:"Love", result: 'disney' },
      { text:"Beauty", result: 'disney' },
      { text:"Intelligence", result: 'pokemon' },
      { text:"Money", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/pixar.jpg",
    question: "What is your favorite school subject?",
    answers: [
      { text:"Art", result: 'disney' },
      { text:"Music", result: 'disney' },
      { text:"Math", result: 'pokemon' },
      { text:"Science", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/snorlax.jpg",
    question: "Which would you choose to go do?",
    answers: [
      { text:"Beach", result: 'disney' },
      { text:"Shopping", result: 'disney' },
      { text:"Museum", result: 'pokemon' },
      { text:"Amusement park", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/villians.jpg",
    question: "What is your favorite holiday?",
    answers: [
      { text:"Christmas", result: 'disney' },
      { text:"Easter", result: 'disney' },
      { text:"Halloween", result: 'pokemon' },
      { text:"Fourth of July", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/venusaur.jpg",
    question: "What is your choice of drink?",
    answers: [
      { text:"Water", result: 'disney' },
      { text:"Pumpkin Latte", result: 'disney' },
      { text:"Mtn-Dew", result: 'pokemon' },
      { text:"Anything with alcohol", result: 'pokemon' }
    ]
  },
  {
    imageUrl: "./assets/images/moana.jpg",
    question: "Would you rather...?",
    answers: [
      { text:"Speak to animals", result: 'disney' },
      { text:"Read people's thoughts", result: 'disney' },
      { text:"Speak 10 foreign languages", result: 'pokemon' },
      { text:"Have a sixth sense", result: 'pokemon' }
    ]
  },
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

const incrementScore = num => {
  num++
  return num
  console.log(score, num)
  return score
}




// Create array buckets of possible results based on api ID#

// Classics
const pokemonMaster /*10,0*/ = ["1", "4", "7", "25", "39", "52", "133", "149", "150"];
// Legendary
const pokemonDiamond /*9,1*/ = ["151", "144", "145", "146", "243", "244", "245", "251", "382", "383", "384", "385", "493"];
// Legit
const pokemonPlatinum /*8,2*/ = ["609", "612", "658", "724", "815", "6", "9", "38", "65", "78", "94", "230"];
// Meh
const pokemonGold /*7,3*/ = ["271", "281", "364", "391", "499", "502", "541", "578", "662"];
// Who's that pokemon?
const pokemonBronze /*6,4*/ = ["438", "415", "361", "351", "316", "223", "201", "129", "517"];
//Classic Characters
const disneyMaster /*0,10*/ = ["4703", "1947", "4704", "2755", "5371", "1944"];
// Princesses
const disneyDiamond /*1,9*/ = ["571", "1284", "3389", "5379", "5614", "6279", "2099", "373"];
// Villains
const disneyPlatinum /*2,8*/ = ["3347", "4180", "7026", "2572", "5986", "1044", "2930", "5542", "4120"];
// Sidekicks
const disneyGold /*3,7*/ = ["7473", "5149", "3045", "6030", "6768", "4771", "4706", "25"];
// Who's That?
const disneyBronze /*4,6*/ = ["7260", "4035", "2619", "7165", "3154", "1406", "304", "5621"];

let pokeMap = {
  "10" : pokemonMaster,
  "9" : pokemonDiamond,
  "8" : pokemonPlatinum,
  "7" : pokemonGold,
  "6" : pokemonBronze,
  "5" : []
}

let disneyMap = {
  "10" : disneyMaster,
  "9" : disneyDiamond,
  "8" : disneyPlatinum,
  "7" : disneyGold,
  "6" : disneyBronze,
  "5" : []
}

// export const getShouldUsePoke = () => {
//   return POKE_SCORE > DISNEY_SCORE;
// }

const getImageArray = () => {
  let shouldUsePoke = getShouldUsePoke();
  const useMap = shouldUsePoke ? pokeMap : disneyMap;
  const  key = shouldUsePoke ? `${POKE_SCORE}` : `${DISNEY_SCORE}`;
  const imageArray = useMap[key];
  return imageArray;
}

// export const randomImage = () => {
//   const imageArray = getImageArray();
//   return imageArray[Math.floor(Math.random() * imageArray.length)];
// }

startQuiz();

// module.exports = {
//   getShouldUsePoke, 
//   randomImage
// }

// generate ordered pair
// associate pair with array
// pull number from array
// push number to local storage
// key pair is result
// math.random
// photo editor for background
// bring up imageMap
// call getShouldUsePoke on result
// export randomImage and getShouldUsePoke
// randomImage is going to work for either disney or pokemon, and should use getShouldUsePoke to determine which api is used