let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let people = [person1, person2, person3];

let peoplesNames = people.map((person) => person.name);

let peopleYoungerThan28YearsOld = people.filter((person) => person.age < 28);

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Array defined with 3 people -> ",
  people[0] === person1 && people[1] === person2 && people[2] === person3
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Array containing the person names -> ",
  peoplesNames[0] === "Alice" &&
    peoplesNames[1] === "Bob" &&
    peoplesNames[2] === "John"
    ? "Passed :)"
    : "Not yet :("
);

console.log(
  "Array containing the people younger than 28 years old -> ",
  peopleYoungerThan28YearsOld[0] === person1 &&
    peopleYoungerThan28YearsOld[1] === person3
    ? "Passed :)"
    : "Not yet :("
);
