// Napisz skrypt, który dla każdego elementu tablicy ingredients:
// 1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// 2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// 3. Doda do elementu klasę item.
// 4. Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

const list = document.querySelector("ul");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const item = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.innerHTML = item;
