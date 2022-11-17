let text =
  "An electronic device used to store, display, and process data is known as a computer. The computer has emerged a lot with the passing days with more modern updates and advancements. There are three types of computers, which include analog, digital and hybrid computers. The speed, as well as the accuracy of each computer, is classified. The computer has several functions other than processing and storing data. It helps control the machine, organize the business, sell services and products, and definitely for academic purposes. The computer has found its way in our daily lives with its great usefulness.";
let passage = text.split("");
let textInputDOM = document.getElementById("textinput");
let newTextInput = [];
let textArray;

function readText() {
  let textInput = textInputDOM.value;
  textArray = textInput.split("");
  console.log(textArray);
  scoreCalc();
}

function scoreCalc() {
  let score = 0;
  let accuracy;
  passage.forEach((value, index) => {
    if (value == textArray[index]) {
      score++;
    }
  });
  console.log(score);
  accuracy = (score / passage.length) * 100;
  console.log(`${accuracy}%`);
}
