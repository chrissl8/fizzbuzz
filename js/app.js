/*
FizzBuzz App
Chris Slaight, 2015
*/

//On document load
$(document).ready(function() {

	//Center content for cleaner look
	document.write("<style> body { text-align: center; } </style>");
	//Add header text with title and name
	document.write("<h1>FizzBuzz App</h1>");
	document.write("<p>Chris Slaight, 2015</p>");
	//Define loop that initializes 'number' as 1, counts until it hits 100 and increments by one
	for(var number = 1;number < 101;number++)
	{
		//If the  number is divisible by 3 and 5
		if( ((number % 3) == 0 ) && ((number % 5) == 0 ))
		{
			//Output FizzBuzz
			document.write("<p>FizzBuzz</p>");
		}
		//If the number is only divisible by 3
		else if( (number % 3) == 0)
		{
			//Output Fizz
			document.write("<p>Fizz</p>");
		}
		//If the number is only divisible by 5
		else if( (number % 5 ) == 0)
		{
			//Output Buzz
			document.write("<p>Buzz</p>");
		}
		//Finally, if the number is neither divisible by 3 or 5
		else
		{
			//Output the number only
			document.write("<p>" + number + "</p>");
		}
	}

});