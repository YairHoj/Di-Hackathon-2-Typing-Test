let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");

let localstoragebutton = localStorage.getItem("activebutton");
if (localstoragebutton == "button1") {
  button1.setAttribute("class", "active");
} else if (localstoragebutton == "button2") {
  button2.setAttribute("class", "active");
} else if (localstoragebutton == "button3") {
  button3.setAttribute("class", "active");
}

button1.addEventListener("click", () => {
  button1.setAttribute("class", "active");
  button2.removeAttribute("class");
  button3.removeAttribute("class");
  localStorage.setItem("activebutton", "button1");
});

button2.addEventListener("click", () => {
  button1.removeAttribute("class");
  button2.setAttribute("class", "active");
  button3.removeAttribute("class");
  localStorage.setItem("activebutton", "button2");
});

button3.addEventListener("click", () => {
  button1.removeAttribute("class");
  button2.removeAttribute("class");
  button3.setAttribute("class", "active");
  localStorage.setItem("activebutton", "button3");
});
