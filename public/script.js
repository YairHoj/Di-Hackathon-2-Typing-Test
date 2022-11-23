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

let passageText = document.getElementById("paragraph");
let text = passageText.innerText;
let myString = text.toString();
let passage = text.split("");
let wordssplit = text.split(" ");
let wpmlength = wordssplit.length;

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

// Splits the text into an array
function readText() {
  charCount++;
  if (continues == true) {
    live = true;
    let textInput = textInputDOM.value;
    textArray = textInput.split("");
    updateArray = true;
    // Compares each character to see if it is right or wrong, and adds the value to an array.
    if (updateArray == true) {
      if (textInput[textInput.length - 1] == passage[textInput.length - 1]) {
        correctIncorrectArr.push(true);
      } else if (
        textInput[textInput.length - 1] != passage[textInput.length - 1]
      ) {
        correctIncorrectArr.push(false);
      } else {
        console.log("error");
      }
    }
    timer();
    greenRed();
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
// NEEDS FIXING
let newPassage = document.getElementById("new-passage");

let timeText = document.getElementById("time-text");
// Timer for user, stops when length of passage and input are equal
function timer() {
  if (i == 0) {
    setInterval(function () {
      time = time + 1;
      if (live == true) {
        timeText.textContent = "Time: " + time / 100;
      }
    }, 10);
    i++;
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

// Replaces text for its color corresponding
const staticText = passageText;
function greenRed() {
  console.log(correctIncorrectArr[i]);
  if (correctIncorrectArr[j + 1] == true) {
    appendNewPassage(true);
    j++;
  } else if (correctIncorrectArr[j + 1] == false) {
    // Change color of text to red
    appendNewPassage(false);
    j++;
  } else {
    alert("error");
  }
}
// });
function appendNewPassage(correct) {
  let position = correctIncorrectArr.length - 2;
  let charNeeded = text.charAt(position);
  if (correct == true) {
    if (charNeeded == " ") {
      newPassage.insertAdjacentHTML(
        "beforeend",
        '<span class="correct-text">' + "_" + "</span>"
      );
    } else {
      newPassage.insertAdjacentHTML(
        "beforeend",
        '<span class="correct-text">' + charNeeded + "</span>"
      );
    }
  }
  if (correct == false) {
    if (charNeeded == " ") {
      newPassage.insertAdjacentHTML(
        "beforeend",
        '<span class="incorrect-text">' + "_" + "</span>"
      );
    } else {
      newPassage.insertAdjacentHTML(
        "beforeend",
        '<span class="incorrect-text">' + charNeeded + "</span>"
      );
    }
  }
}

// Calculates the accuracy, WPM, and time
function scoreCalc() {
  let score = 0;
  let finaltime = time / 100;
  let mins = finaltime / 60;
  let wpm = wpmlength / mins;

  let accuracy2 = document.getElementById("h3-1");
  let wpm2 = document.getElementById("h3-2");
  let typingtime = document.getElementById("h3-3");

  let accuracy;
  passage.forEach((value, index) => {
    if (value == textArray[index]) {
      score++;
    }
  });
  accuracy = (score / passage.length) * 100;

  console.log(`Your accuracy was ${accuracy.toFixed(2)}%!`);
  accuracy2.textContent = `Accuracy: ${accuracy.toFixed(2)}%`;
  console.log(
    `Your typed with an average of ${wpm.toFixed(0)} words per minute!`
  );
  wpm2.textContent = `WPM: ${wpm.toFixed(0)}`;
  console.log(`Your time was ${finaltime.toFixed(2)}s!`);
  typingtime.textContent = `Time: ${finaltime.toFixed(2)}s`;

  accuracyText.textContent = `Your accuracy was ${accuracy.toFixed(2)}%!`;

  wpmText.textContent = `Your typed with an average of ${wpm.toFixed(
    0
  )} words per minute!`;
  stopTimer = true;

  timeText.textContent = `Your time was ${finaltime.toFixed(2)}s!`;
}
