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

let text = randomP();
console.log(text);

document.getElementById("paragraph").textContent = text;

let passage = text.split("");
let wordssplit = text.split(" ");
let wpmlength = wordssplit.length;
let textInputDOM = document.getElementById("textinput");
let newTextInput = [];
let correctIncorrectArr = [];
let textArray;
let live = false;
let time = 0;
let j = 0;
let i = 0;
let charCount = 0;
// Stops the timer after text is finished
let continues = true;
// Stops the timer for being reset

// Splits the text into an array
function readText() {
  charCount++;
  if (continues == true) {
    live = true;
    let textInput = textInputDOM.value;
    textArray = textInput.split("");
    // console.log(textArray);
    console.log(textInput.length);

    // Compares each character to see if it is right or wrong, and adds the value to an array.
    if (textInput[textInput.length - 1] == passage[textInput.length - 1]) {
      console.log("correct");
      correctIncorrectArr.push(true);
    } else if (
      textInput[textInput.length - 1] != passage[textInput.length - 1]
    ) {
      console.log("incorrect");
      correctIncorrectArr.push(false);
    } else {
      console.log("error");
    }
    timer();
  }
}

// Deletes the last value in the true false array
addEventListener("keydown", function (e) {
  charCount--;
  if (e.code == "Backspace" && charCount > 0) {
    correctIncorrectArr.pop();
    console.log(correctIncorrectArr);
    console.log("hi");
  }
});

// Timer for user, stops when length of passage and input are equal
function timer() {
  if (i == 0) {
    setInterval(function () {
      time = time + 1;
    }, 10);
    i++;
    // console.log(time / 100 + "s");
  }
  //   console.log(time / 100 + "s");
  if (text.length <= textArray.length) {
    live = false;
    continues = false;
    scoreCalc();
    return;
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
}
