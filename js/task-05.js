// Napisz skrypt, który przy wpisywaniu tekstu w polu input
// input#name-input (zdarzenie input) wstawia jego aktualną wartość
// do span#name-output.

// Jeśli pole input jest puste, w spanie powinien
// wyświetlić się tekst "Anonymous".

let textInput = document.querySelector("input");
let greeting = document.getElementById("name-output");

textInput.addEventListener("input", function (name) {
  if (name.target.value === "") {
    greeting.textContent = "Anonymous";
  } else {
    greeting.textContent = name.target.value;
  }
});
