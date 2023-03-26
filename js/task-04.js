// Licznik składa się z elementu span i przycisków, które, po ich kliknięciu,
// powinny zwiększać i zmniejszać jego wartość o jednostkę.

// 1. Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika
// i nadaj jej początkową wartość wartość 0.

// 2. Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj
// i zmniejszaj wartość licznika.

// 3. Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue
// po każdej jej zmianie.

let counterValue = 0;

const value = document.querySelector("span");
console.log(value);
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

decBtn.addEventListener("click", function () {
  counterValue--;
  value.textContent = counterValue;
});
incBtn.addEventListener("click", function () {
  counterValue++;
  value.textContent = counterValue;
});
