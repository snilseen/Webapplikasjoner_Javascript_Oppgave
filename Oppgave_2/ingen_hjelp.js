const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 },
];

// TODO: Hent HTML #id med getElementById
const list = document.getElementById("users");
const nameSearch = document.getElementById("name");
const ageSearch = document.getElementById("age");
const filterButton = document.getElementById("filter");
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const showUsers = (userList) => {
  list.innerHTML = "";
  userList.forEach((user) => {
    const liItems = document.createElement("li");
    liItems.innerText = `${user.name}, age: ${user.age}`;
    list.appendChild(liItems);
  });
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const handleSearch = () => {
  const searchInput = nameSearch.value.toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchInput)
  );

  showUsers(filteredUsers);
};
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret

const handleFilter = () => {
  const ageSearchInput = parseInt(ageSearch.value);
  const ageFilteredUsers = users.filter((user) => user.age >= ageSearchInput);
  showUsers(ageFilteredUsers);
};

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
nameSearch.addEventListener("input", handleSearch);

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButton.addEventListener("click", handleFilter);

showUsers(users);
