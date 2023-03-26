let textInput = document.getElementById("font-size-control");
let spanEl = document.getElementById("text");
textInput.addEventListener("input", (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
});
