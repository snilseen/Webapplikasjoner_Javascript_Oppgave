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

const placeholder = document.getElementById("placeholder");
const select = document.getElementById("select");
const text = document.getElementById("text");
const createButton = document.getElementById("create");

createButton.addEventListener("click", () => {
  const htmlElement = document.createElement(select.value);
  htmlElement.textContent = text.value;
  placeholder.appendChild(htmlElement);

  text.value = "";
});

// Oppgave 6

const listItem = document.getElementById("list");
const removeListItemButton = document.getElementById("remove-li");

removeListItemButton.addEventListener("click", () => {
  listItem.removeChild(listItem.lastElementChild);
});

// Oppgave 7

const inputNameField = document.getElementById("name");
const orderButton = document.getElementById("order");

inputNameField.addEventListener("input", () => {
  if (inputNameField.value.length > 4) {
    orderButton.disabled = true;
    orderButton.style.borderColor = "red";
  } else {
    orderButton.disabled = true;
    orderButton.style.borderColor = "";
  }
});

// Oppgave 8

const colorButton = document.getElementById("color");

colorButton.addEventListener("click", () => {
  document.querySelectorAll(".children li:nth-child(odd)").forEach((item) => {
    item.style.border = "2px solid green";
  });

  document.querySelectorAll(".children li:nth-child(even)").forEach((item) => {
    item.style.border = "2px solid pink";
  });
});
