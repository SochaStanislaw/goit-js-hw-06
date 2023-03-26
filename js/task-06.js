// 1. Napisz skrypt, który przy utracie fokusu na polu
// input (zdarzenie blur) sprawdza czy wartość wprowadzona
// przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)

// 2. Informacja o liczbie symboli, która powinna znajdować
// się w polu input, zawarta się w jego atrybucie data-length.

// 3. Jeśli wprowadzono odpowiednią liczbę symboli,
// to border pola input staje się zielony,
// a jeśli liczba jest nieprawidłowa - czerwony.

// 4. Aby dodać style, używaj klas CSS valid i invalid,
// które już dodaliśmy do plików źródłowych zadania.

// let textInput = document.getElementById('validation-input');
// textInput.addEventListener('blur', () => {
//   textInput.value.length === +textInput.dataset.length
//     ? (textInput.className = 'valid')
//     : (textInput.className = 'invalid');
// });

let textInput = document.getElementById("validation-input");
let inputLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === +inputLength) {
    textInput.className = "valid";
  } else {
    textInput.className = "invalid";
  }
});
