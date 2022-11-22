let passageText = document.getElementById("passage");
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
  let textInput = textInputDOM.value;
  if (e.code == "Backspace" && charCount > 0) {
    charCount = charCount - 2;
    correctIncorrectArr.pop();
    correctIncorrectArr.pop();
    deleteText();
  }
});

// NEEDS FIXING
let newPassage = document.getElementById("new-passage");
function deleteText() {
  let position = correctIncorrectArr.length;
  let charNeeded = text.charAt(position + 1);
  console.log(position);
  console.log(charCount);
  if (charNeeded == " ") {
    charNeeded = "_";
  }
  console.log(newPassage.innerText);
  newPassage.innerHTML = newPassage.innerHTML.replace(
    '<span class="incorrect-text">' + charNeeded + "</span>",
    ""
  );
  console.log(newPassage);
}

// Deletes the last value in the true false array

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
  if (correctIncorrectArr[i + 1] == true) {
    appendNewPassage(true);
    i++;
  } else if (correctIncorrectArr[i + 1] == false) {
    // Change color of text to red
    appendNewPassage(false);
    i++;
  } else {
  }
}
// });
function appendNewPassage(correct) {
  let position = correctIncorrectArr.length - 2;
  let charNeeded = text.charAt(position);
  if (correct == true) {
    newPassage.insertAdjacentHTML(
      "beforeend",
      '<span class="correct-text">' + charNeeded + "</span>"
    );
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

  let accuracy;
  passage.forEach((value, index) => {
    if (value == textArray[index]) {
      score++;
    }
  });
  accuracy = (score / passage.length) * 100;

  accuracyText.textContent = `Your accuracy was ${accuracy.toFixed(2)}%!`;

  wpmText.textContent = `Your typed with an average of ${wpm.toFixed(
    0
  )} words per minute!`;
  stopTimer = true;

  timeText.textContent = `Your time was ${finaltime.toFixed(2)}s!`;
}
