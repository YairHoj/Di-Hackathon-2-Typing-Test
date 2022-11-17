let passage = [];
let textInputDOM = document.getElementById("textinput");
let newTextInput = [];

function readText() {
  let textInput = textInputDOM.value;
  let textArray = textInput.split("");
  //   console.log(textArray);
}

function scoreCalc() {
  let score = 0;
  passage.forEach((value, index) => {
    if (value == newTextInput[index]) {
      score++;
    }
  });
  console.log(score);
}
