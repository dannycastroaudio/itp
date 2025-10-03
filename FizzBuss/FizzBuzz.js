for (let i = 1; i<=100; i++)
{
	if (i % 3)
	{
		console.log("Fizz");
	}
	if (i % 5)
	{
		console.log("Buzz");
	}
	console.log(i);
	
}

//WTF NP THIS DOESNT WORK. IT JSUT PRINTS 

//second attempt

for (let i = 1; i<=100; i++)
{
	if (i % 3===0)
	{
		console.log("Fizz");
	}
	if (i % 5===0)
	{
		console.log("Buzz");
	}
	console.log(i);
	
}

//doesnt skip the numbers divisible by those. 

for (let i = 1; i<=100; i++)
{
	if (i % 3===0)
	{
		console.log("Fizz");
	}
	if (i % 5===0)
	{
		console.log("Buzz");
	}
	if (i % 3 ===0 && 1%5===0)
	{
		console.log("FizzBuzz");
	}
		
	console.log(i);
}


//it kinda workds, but its still printing the numbers after saying fizz and buzz. the programme stops working once its satisfied. has to do with the order of operations. the control flow.

for (let i = 1; i<=100; i++)
{
	if (i % 3 === 0 && 1%5 === 0)
	{
		console.log("FizzBuzz");
	}
	console.log(i);
	
	if (i % 3===0)
	{
		console.log("Fizz");
	}
	console.log(i);
	
	if (i % 5===0)
	{
		console.log("Buzz");
	}
	else console.log(i);

}
///wtf even is this girl. broke it completely. very funny moment


for (let i = 1; i <= 100; i++)
{
	if (i % 3===0)
	{
		console.log("Fizz");
	}
	else if (i % 5===0)
	{
		console.log("Buzz");
	}
	else if (i % 3 ===0 && 1%5===0)
	{
		console.log("fizzBuzz");
	}
		
	console.log(i);
}

//nOT WORKING BUT IT SHOULD WHY ISTN IT


for (let i = 1; i <= 100; i++)
{
	if (i % 3===0)
	{
		console.log("Fizz");
	}
	else if (i % 5===0)
	{
		console.log("Buzz");
	}
	else if (i % 3 ===0 && 1%5===0)
	{
		console.log("fizzBuzz");
	}
		
	else console.log(i);
}



//WORKED. YIPPPEEE. I FORGOT THAT THE FINAL CONSOLE ALSO NEEDED AN ELSE

for (let i = 1; i <= 100; i++)
{
	if (i % 3 === 0 && i % 5 === 0)	
	{
		console.log("FizzBuzz");
	}
	else if (i % 3 === 0)
	{
		console.log("Fizz");
	}
	else if (i % 5 === 0)
	{
		console.log("Buzz");
	}
	else 
	{
		console.log(i);
	}
}

//finally. FINALLY FINALLY. I realised I had mispelled line 125 and also I had to put the combined statement first, because the flow