//Implementare il codice necessario per:

// Recuperare il valore di ciascun campo di input e creare un oggetto person contenente le proprietà:
//  firstName, lastName e age.
// Infine recuperare l'elemento forme aggiungere l'attributo data-person contenente l'oggetto person
//  in formato json.
const addProduct = () => {
  const  firstName = document.getElementById("firstName");
  const  lastName = document.getElementById("lastName");
  const  age = document.getElementById("age")
};

const person = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value
}
console.log(person);

const form = document.querySelector("form");

form.setAttribute("data-person", JSON.stringify(person));
console.log(form);


