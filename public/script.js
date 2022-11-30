let h1 = document.getElementById("h1");
let psize = localStorage.getItem("psize");
h1.textContent = psize + " Paragraph";
let textJSON = localStorage.getItem("texts");
let textObj = JSON.parse(textJSON);

function randomP() {
  let random = Math.floor(Math.random() * 5);
  let randomP = textObj[psize][random].text;
  return randomP;
}

let randomParagraph = randomP();

document.getElementById("paragraph").textContent = randomParagraph;

const passageText = document.getElementById("paragraph");
const inputText = document.getElementById("textinput");
const text = passageText.innerText;
let myString = text.toString();
let passage = text.split("");
let wordssplit = text.split(" ");
let wpmlength = wordssplit.length;
console.log(passageText.innerHTML);
let textInputDOM = document.getElementById("textinput");
let newTextInput = [];
let correctIncorrectArr = [true];
let textArray;
let live = false;
let time = 0;
let j = 0;
let i = -1;
let charCount = 0;
// Stops the timer after text is finished
let continues = true;
// Stops the timer for being reset

let updateArray = true;

renderNewQuote();
// Replaces text for its color corresponding
// Credit to WebDevSimplified
inputText.addEventListener("input", () => {
  const arrayQuote = passageText.querySelectorAll("span");
  const arrayValue = inputText.value.split("");

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct-text");
      characterSpan.classList.remove("incorrect-text");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct-text");
      characterSpan.classList.remove("incorrect-text");
    } else {
      characterSpan.classList.remove("correct-text");
      characterSpan.classList.add("incorrect-text");
      correct = false;
    }
  });
  if (correct) renderNewQuote();
});

// Gets new quote and spans each character
function renderNewQuote() {
  passageText.innerHTML = "";
  text.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    passageText.appendChild(characterSpan);
  });
  inputText.value = null;
}

// Splits the text into an array
function readText() {
  charCount++;
  if (continues == true) {
    live = true;
    let textInput = textInputDOM.value;
    textArray = textInput.split("");
    updateArray = true;
    if (updateArray == true) {
      timer();
    }
  }
}

addEventListener("keydown", function (e) {
  if (e.code == "Backspace") {
    e.preventDefault();
  }
});
window.onload = () => {
  textInputDOM.onpaste = (e) => e.preventDefault();
};

let timeText = document.getElementById("time-text");
let t = 0;
// Timer for user, stops when length of passage and input are equal
function timer() {
  if (t == 0) {
    setInterval(function () {
      time = time + 1;
      if (live == true) {
        timeText.textContent = "Time: " + time / 100 + "s";
        document.getElementById("startyping").style.display = "none";
        document.getElementById("paragraph").style.marginTop = "93px";
        document.getElementById("buttondiv").style.marginTop = "-707px";
      }
    }, 10);
    t++;
  }
  if (text.length <= textArray.length) {
    live = false;
    continues = false;
    scoreCalc();
    return;
  }
}
let accuracyText = document.getElementById("accuracy-text");
let wpmText = document.getElementById("WPM-text");

const staticText = passageText;

// Calculates the accuracy, WPM, and time
function scoreCalc() {
  let score = 0;
  let finaltime = time / 100;
  let mins = finaltime / 60;
  let wpm = wpmlength / mins;

  let accuracy;
  passage.forEach((value, index) => {
    if (value == textArray[index]) {
      score++;
    }
  });
  accuracy = (score / passage.length) * 100;

  console.log(`Your accuracy was ${accuracy.toFixed(2)}%!`);
  console.log(
    `Your typed with an average of ${wpm.toFixed(0)} words per minute!`
  );
  console.log(`Your time was ${finaltime.toFixed(2)}s!`);

  accuracyText.innerText = `Accuracy: ${accuracy.toFixed(2)}%`;

  wpmText.innerText = `WPM: ${wpm.toFixed(0)}`;
  stopTimer = true;

  timeText.textContent = `Time: ${finaltime.toFixed(2)}s`;
}
