// Define an array containing the 3 people defined below.
// Return an array of the people's names (hint: use map).
// Filter the people to return an array with the person younger than 28 years old (hint: use filter).

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

// ----------------------------------------------------------------

// Challenge 2:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function test(expected, actual) {
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      return false;
    }
  }
  return true;
}

function flattenedAndSort(array) {
  let newArray = array.flat().sort((a, b) => a - b);
  console.log(newArray);
  return newArray;
}

console.log(
  "Basic single digit case = " +
    test(
      flattenedAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    )
);

console.log(
  "Two digit number case = " +
    test(
      flattenedAndSort([[14, 2, 1], [4, 6, 5], [], [9, 7, 8]]),
      [1, 2, 4, 5, 6, 7, 8, 9, 14]
    )
);
