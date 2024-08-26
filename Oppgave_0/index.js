const removeTextButton = document.getElementById("remove-btn");

//Oppgave 1

removeTextButton.addEventListener("click", () => {
  document.getElementById("remove").remove();
});

// Oppgave 2

let changeTextButton = document.getElementById("change-btn");
let changeText = document.getElementById("change");

changeTextButton.addEventListener("click", () => {
  changeText.innerHTML = `<p id="change">
Denne teksten er nå endret til noe annet enn det som originalt stod der </p>
`;
});

// Oppgave 3

const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

input.addEventListener("input", () => {
  inputText.textContent = input.value;
});

// Oppgave 4

const myList = ["item one", "item two", "item three"];

const ulList = document.getElementById("ul");
const writeListButton = document.getElementById("write-list");

writeListButton.addEventListener("click", () => {
  myList.forEach((listItem) => {
    const li = document.createElement("li");

    li.textContent = listItem;
    ulList.appendChild(li);
  });
});

// Oppgave 5
