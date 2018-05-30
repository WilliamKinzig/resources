48432.78.toExponential();
//"4.843278e+4"

4.587e2.toFixed();
//"459"

46.1.toFixed(2);
//"46.10"

8.12345.toPrecision(4);
//"8.123"

var myNumber = 8.12345;
myNumber.toPrecision(4);
//"8.123"


/************** STRING METHODS ********************/

> "supercalifragilisticexpialidocious".toUpperCase();
"SUPERCALIFRAGILISTICEXPIALIDOCIOUS"

var word = "foo";
word.concat("bar");
//"foobar"

"foo".concat("bar").toUpperCase();
"FOOBAR"


"I love" + " " + "Epicodus";
"I love Epicodus"

var sentiment = "I love ";
//undefined

var animal1 = "cats";
//undefined

var animal2 = "dogs;"
//undefined

sentiment + animal1;
//"I love cats"

sentiment + animal2;
//"I love dogs"

"caterpillar".charAt(5);
//"p"
