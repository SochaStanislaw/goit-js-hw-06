// Napisz skrypt, który dla każdego elementu tablicy ingredients:
// 1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// 2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// 3. Doda do elementu klasę item.
// 4. Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pierwszy sposób:
// const list = document.querySelector("ul");
// const item = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// list.innerHTML = item;

// Drugi sposób z użyciem .createElement:
// const list = document.getElementById("ingredients");
// for (let i = 0; i < ingredients.length; i += 1) {
//   const item = document.createElement("li");
//   item.classList.add("item");
//   item.textContent = ingredients[i];
//   list.append(item);
// }

// Trzeci sposób:
let list = document.getElementById("ingredients");
const frag = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  frag.append(item);
});

list.append(frag);
