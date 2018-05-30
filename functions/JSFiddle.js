/*very simple functions that can be written on a single line, but it quickly
becomes unwieldy as we want to write longer functions.
There are a few solutions.
You can write your functions in Atom and then copy & paste into the
JavaScript console. Or you can try out JSFiddle, a useful tool for
experimenting with JavaScript. With JSFIddle, you can write code in the
JavaScript box and then execute it by clicking the Run button on the menu
bar at the top of the JSFiddle page.
*/

var saySomething = function(whatToSay)
{
  alert(whatToSay);
};
saySomething("hi");


var add = function(number1, number2)
{
  return number1 + number2;
};
add(3,5);

var result = add(3, 5);
alert(result);

/*  CHANGE ABOVE CODE TO THIS SECTION
var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var add = function(number1, number2) {
  return number1 + number2;
};

var result = add(3, 5);
var outputText = "The sum is " + result + ".";
saySomething(outputText);
*/



/*  CHANGE ABOVE CODE TO THIS SECTION
var saySomething = function(whatToSay) {
  alert(whatToSay);
};

var add = function(number1, number2) {
  return number1 + number2;
};

saySomething("The sum is " + add(3,5) + ".");
*/
