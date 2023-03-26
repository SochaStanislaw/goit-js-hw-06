// Napisz skrypt, który reaguje na zmianę wartości elementu
// input#font-size-control (zdarzenie input)
// i zmienia styl inline span#text aktualizując właściwość font-size.

// W rezultacie, podczas zmiany wartości suwakiem,
// ma zmieniać się rozmiar tekstu w elemencie span

let textInput = document.getElementById("font-size-control");
let spanEl = document.getElementById("text");
textInput.addEventListener("input", (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
});
