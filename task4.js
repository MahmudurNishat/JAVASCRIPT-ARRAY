let age = 21;
let numbers = [1, 25, 27, 28, 30];
let fruits = ["a", "b"];
let fruitsArray = Array.isArray(fruits);
let numbersArray = Array.isArray(numbers);
let ageArray = Array.isArray(age);

// print message //
if (numbersArray) {
  console.log("yes, its an array");
} else {
  console.log("its not an array");
}

if (fruitsArray) {
  console.log("yes, its also an array");
} else {
  console.log("its not an array");
}

if (ageArray) {
  console.log("yes, its an array");
} else {
  console.log("its not an array");
}
