// Q1
// var currentDate = new Date();
// document.write("<h1>Current Date and Time: " + currentDate + "</h1>");

// Q2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// alert("Current Month: " + months[currentMonth]);

// Q3
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// alert("Current Day: " + days[currentDay]);

// Q4
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
//     document.write("<h1>It’s Fun day</h1>");
// }

// Q5
// var currentDate = new Date();
// var date = currentDate.getDate();
// if (date < 16) {
//     document.write("<h1>First fifteen days of the month</h1>");
// } else {
//     document.write("<h1>Last days of the month</h1>");
// }

// Q6
// var currentDate = new Date();
// var minutesSinceMidnight = (currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / (1000 * 60);
// document.write("<h1>Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight + "</h1>");

// Q7
// var currentDate = new Date();
// var hours = currentDate.getHours();
// if (hours < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// Q8
// var laterDate = new Date(2020, 11, 31);
// document.write("<h1>Last day of the last month of 2020: " + laterDate + "</h1>");

// Q9
// var ramadanStart = new Date(2015, 5, 18); // June is represented by index 5
// var currentDate = new Date();
// var daysPast = (currentDate - ramadanStart) / (1000 * 60 * 60 * 24);
// alert("Number of days past since 1st Ramadan: " + Math.floor(daysPast));

// Q10
// var referenceDate = new Date("Jan 1, 2015");
// var currentDate = new Date();
// var secondsElapsed = (currentDate - referenceDate) / 1000;
// document.write("<h1>Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + "</h1>");

// Q11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("<h1>Current Date and Time: " + currentDate + "</h1>");

// Q12
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);

// Q13
// var age = prompt("Enter your age:");
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var birthYear = currentYear - age;
// document.write("<h1>Your birth year is: " + birthYear + "</h1>");

// Q14
// // Customer details
// var customerName = "John Doe";
// var currentMonth = "February";

// // Billing details
// var numberOfUnits = 150;
// var chargesPerUnit = 10;
// var latePaymentSurcharge = 50;

// // Calculate net amount payable within due date
// var netAmountPayable = numberOfUnits * chargesPerUnit;

// // Calculate gross amount payable after due date
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// // Display the bill
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<h2>Customer Name: " + customerName + "</h2>");
// document.write("<h2>Current Month: " + currentMonth + "</h2>");
// document.write("<h2>Number of Units: " + numberOfUnits + "</h2>");
// document.write("<h2>Charges Per Unit: " + chargesPerUnit + "</h2>");
// document.write("<h2>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</h2>");
// document.write("<h2>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</h2>");
// document.write("<h2>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</h2>");
