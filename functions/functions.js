/*
alert() opens a dialog box and returns undefined.

confirm() opens a dialog box and returns a boolean.

prompt() opens a dialog box and returns a string.
*/
alert("Hello world!");

prompt("What is the air-speed velocity of an unladen swallow?");  // I'm going to type "African or European?"
"African or European?"

var favoriteColor = prompt("What is your favorite color?"); // I'm going to type "green"

favoriteColor;

prompt("Type something in lowercase:").toUpperCase(); // I'm going to type "lowercase"
"LOWERCASE"

confirm("Are you sure?"); // I'm going to press the OK button


function sayHi()
{
  alert('Hello from Epicodus!');
};
sayHi();


function saySomething(whatToSay)
{
  alert(whatToSay);
};
saySomething("hello");


function add(number1, number2)
{
  return number1 + number2;
};
add(3, 5);


var add = function(number1, number2)
{
  return number1 +number2;
}
