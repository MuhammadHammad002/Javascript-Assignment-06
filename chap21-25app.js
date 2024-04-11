// Chap 21-25
Q1

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome.");

Q2

// var favoriteMobileModel = prompt("Enter your favorite mobile phone model:");
// var length = favoriteMobileModel.length;

// document.write("Your favorite mobile phone model is: " + favoriteMobileModel + "<br>");
// document.write("The length of your favorite mobile phone model is: " + length);

Q3

// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("The index of 'n' in the word 'Pakistani' is: " + index);

Q4

// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");

// document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);

// Q5

// var word = "Pakistani";
// var character = word.charAt(3);

// document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

Q6
// var word = "Pakistani";
// var character = word.charAt(3);

// document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);
// Q7
// // Replace "Hyder" with "Islam" in the word "Hyderabad"
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write("After replacement: " + newCity + "<br>");

Q8

// Replace all occurrences of "and" with "&"
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write("After replacement: " + newMessage + "<br>");

// Q9

// var str = "472";
// var num = parseInt(str);
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num + "<br>");

// Q10

// // Task 10: Convert user input to uppercase
// var userInput = prompt("Enter a string:");
// var uppercaseInput = userInput.toUpperCase();
// document.write("Uppercase: " + uppercaseInput + "<br>");

// Q11

// // Task 11: Convert user input to title case
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// var titleCaseInput = toTitleCase(userInput);
// document.write("Title Case: " + titleCaseInput + "<br>");

// Q12

// // Task 12: Convert the variable num to string and remove the dot
// var num = 35.36;
// var numStr = num.toString().replace(".", "");
// document.write("Number as string without dot: " + numStr + "<br>");

Q13
// var username = prompt("Enter your username:");
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//     }
// }

// if (!isValid) {
//     alert("Please enter a valid username without special symbols like @, ., !");
// } else {
//     alert("Username is valid!");
// }

// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");

// // Perform case-insensitive search
// var found = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     alert("Item found in the list!");
// } else {
//     alert("Item not found in the list.");
// }

// Q15

// // Function to validate password
// function validatePassword(password) {
//     // Check if the password contains alphabets and numbers, does not start with a number, and is at least 6 characters long
//     if (/^[a-zA-Z]+[a-zA-Z0-9]{5,}$/.test(password)) {
//         return true; // Password is valid
//     } else {
//         return false; // Password is invalid
//     }
// }

// // Prompt user for password input
// var password = prompt("Enter your password:");

// // Validate the password
// if (validatePassword(password)) {
//     alert("Password is valid!");
// } else {
//     alert("Please enter a valid password. It should contain alphabets and numbers, not start with a number, and be at least 6 characters long.");
// }

// Q16

// var university = "University of Karachi";
// var array = university.split(" ");
// document.write("<h1>Array elements:</h1>");
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br>");
// }

// Q17

// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write("<h1>Last character:</h1>");
// document.write(lastCharacter);

// Q18

// var sentence = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var count = 0;
// var words = sentence.split(" ");
// for (var i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === word.toLowerCase()) {
//         count++;
//     }
// }
// document.write("<h1>Number of occurrences of 'the':</h1>");
// document.write(count);
