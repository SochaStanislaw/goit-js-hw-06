// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// 1. Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
const allCategories = document.querySelectorAll("li.item");
console.log("Number of categories: ", allCategories.length);

// 2. Dla każdego elementu li.item na liście ul#categories,
// znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>)
// i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

const categories = document.querySelectorAll(".item");
for (category of categories) {
  console.log(`Category: ${category.children[0].textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
}
