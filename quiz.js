const Q = [
  { Q: "What is the color of the sky?", options: ["Blue","Red","Yellow","Green"], answer: 0 },
  { Q: "What is the name of the yummy, sweet treat that grows on trees?", options: ["Apple","Banana","Orange","Carrot"], answer: 0 },
  { Q: "How many legs does a cat have?", options: ["2","4","6","8"], answer: 1 },
  { Q: "What is the name of the big, fluffy animal that says roar?", options: ["Lion","Elephant","Monkey","Giraffe"], answer: 0 },
  { Q: "What is the shape of a ball?", options: ["Square", "circle", "rectangle", "cylinder"], answer: 1 }
];

let currentQ = 0;
let score = 0;

function showQuestion() {
  const questionElement = document.getElementById("Q");
  const optionsElement = document.getElementById("options");
  questionElement.innerText = Q[currentQ].Q;
  optionsElement.innerHTML = "";
  Q[currentQ].options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(index) {
  if (index === Q[currentQ].answer) {
    score++;
  }
  currentQ++;
  if (currentQ < Q.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = 'You scored ' + score + ' out of 5';

}

