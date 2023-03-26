// Napisz skrypt, który zmienia kolor tła elementu <body>
// (poprzez style inline) po kliknięciu na button.change-color
// i wyświetla wartość koloru w span.color.

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

const bodyBg = document.body;
const colorEl = document.querySelector(".color");
const colorChangeEl = document.querySelector(".change-color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
colorChangeEl.addEventListener("click", () => {
  bodyBg.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
});
