<p align="center"><a><img src ="/array.png"></a></p>

🔗Array :
Enabels storing a collection of multiple items in a single variable name. <br>

Example : <br>
<br>
let numbers = [12,13,14,16,118] // its a example of array // numbers <br>
let names = ['abul', "kabul","ravul"] // string array <br>
let passed = [true , false , true] // boolean array<br>

🔗why array important ? <br>
<br>
if we dont use array for multiple items we need to use variable every time as we need . so this is terrible .but important things is use number items in one array , string in one array , boolean in one array dont mix it.

🔗how to measure numbers of items in a array ? <br>
<br>
let numbers = [ 1,2,3,4,5,6] <br>
console.log(numbers.length) // output : 6 <br>
that means use variable name then dot and use length . <br>

🔗index :

let numbers = [ 1,2,3,4,5] <br>
usually all the programing language use index that means serial number is starting from o that means oindex means 1 , <br>
1index means 2 , <br>
3index 4 , <br>
but again if u asked number2items is index 1 <br>

🔗Example how to use :

let numbers = [88,89,52,75,74,65] <br>
console.log(numbers[3]) // output 3index means : 75. <br>
if u want to use the index number use varible name and then third bracket and index number .

🔗use index in a varaible :

let numbers = [15,25,26,24,23,2334,45] <br>
let fourth = numbers[4] <br>
console.log (fourth) // output :23

🔗can set or update index value : <br>
let name = [amin , rahim,karim ,sabir ] <br>
name[2] = 25; <br>
console.log(name[2])//output : 25 <br>
console.log (name) // output : [amin , rahim , 25 ,sabir] // understand <br>

🔗Push<br>
It means it will add a element in last . <br>

Example : <br>

let numbers = [22.25.92.100,455] <br>
numbers.push(78) // <br>
numbers.push (85,89) <br>
console.log(numbers)//output : [22.25.92.100,455,78,85,89] // you can add any element or multiple element <br>

you can not use push pop shift unshift in the console.

🔗Pop <br>
It means you can remove element from last .

Example : <br>

let numbers = [22,95,87,75,61] <br>
numbers.pop() // u can not write anything in pop <br>
console.log (numbers) // output : [22,95,87,75] <br>

🔗Shift <br>
It's a cousing of pop // just it remove element from first <br>

Example : <br>

let name = [1.2.3,4,5] <br>
name.shift() // u can not write anything in pop or shift <br>
console.log(name) // output : [2,3,4,5] <br>

🔗Unshift : <br>
Its a cousin of push but it add element from first . <br>

Example: <br>
let name = [1,2,3,4,5,6] <br>
name.unshift(0) <br>
console.log(name ) // [0,1,2,3,4,5,6] <br>

🔗Includes : <br>
It detect whether you document is locate on your array . is element is in your arrary then it gives true othewise false.

Example :<br>
let numbers = [1,2,3,54,5,6] <br>
consol.log(numbers.includes(6)) // output // true <br>

let numbers = [1,2,3,54,5,6,7]<br>
consol.log(numbers.includes(8)) // output // false <br>

🔗why includes important ?
<br>
cause u can use it in the if else condition like <br>

Example :<br>

let numbers = [1.2.35,25,45,75] <br>

if(numbers.includes(75)){ <br>
console.log("party") /// output true that means party<br>
}<br>
else {<br>
console.log("goman")<br>
}<br>

🔗Index of : <br>
if u want to know about the index number u can use index of like

Example:<br>

let name = ['a','b','c']<br>
console.log(name.indexof("c")) // output : 2 /// that means the index number is two<br>
console.log (name.indexof(""d)) // output : -1 /// that means it did not exis on the array cause array number start from 0 to infinity<br>

🔗IsArray : <br>
its detect whether a variable is a array if its array then its return true otherwise false .<br>

Example:<br>

let numbers = [1,2,3,4,5,6,7,8,9,10] <br>
let age = 21 ;<br>
let sub = [1,2,3,4]<br>

console.log(Array.isArray(age)) // output : false <br>

console.log(Array.isArray(sub)) // output : true // cause its an array <br>

console.log(Array.isArray(numbers)) // output : true // cause its an array <br>

🔗Join <br>
if u want to remove third bracket and full row u can use join()<br>

Example : <br>

let numbers =[1,2,3,4,5]<br>

console.log(numbers.join()) // output // 1,2,3,4,5 // by default comma <br>
console.log(numbers.join("|")); output // 1|2|3|4|5|6 // by default comma or u can use any symbol using "" <br>

🔗concat <br>
if u want to use two array in one array u can use it

Example: <br>

let data1 = [1, 2, 3, 4, 5, 6]; <br>
let data2 = [7, 8, 98, 20]; <br>

console.log(data1.concat(data2)); // output : [1,2,3,4,5,6,7,8,98,20] <br>
// if u want to add two array in ane array use concat // <br>

🔗slice <br>
if u want to need specific multple element in one row you can use it<br>

Example:

let numbers = [1,2,3,4,5,6] <br>
console.log(numbers.slice(2,4)) // output : 3,4 <br>

🔗Spilce <br>
check it yourself :<br>

Task :<br>

1. Declare an array
   Declare an array with 5 elements containing fruits
   console log the 3rd index element
   change the value of the 2nd index element to jambura
   console log the final array
   ..

2. Add or remove elements
   Declare an array of 3 tourist destinations
   Add a new tourist destination to your tourist array
   Add two more to your array
   Remove the last tourist destination you have added
   display the final array as output
   ..

3. Checking Array Membership with ‘includes’
   Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
..

4. Checking if it's an Array
   Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
..

5. Combining Arrays
   Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
..

#HappyCoding
