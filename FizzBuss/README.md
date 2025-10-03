First attempt at code. Looking at the instructions, I figured we would have a `for' loop statement, as we would be counting from 0 to 100. hundred AND doing some identifying simultaneously. 

````javascript
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
````

did not work. it was printing "Fizz" and "Buzz" before every integer. I used the modulus sign (`%`) to signify division because thats how we did it in the [[code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js)](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js#L38) during class, but I forgot to indicate that the remainder had to be 0 so that I would be actually be telling the code to divide/find the multiple. As a result it was finding remainders all over the place. I reworked it and this was my second attempt.

````javascript
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
````

now this was actually better. It was printing "Fizz" or "Buzz" before every number that was either a multiple of 3 ("Fizz") and 5 ("Buzz"), but it wasnt replacing the number. It was at this point I remembered that we also had to include code that made every number divisible by 5 **and** 3 appear as the string "FizzBuzz". Looking back at the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js) document, I saw how on line 81 it showed us how to add 2 conditions that both had to be true (`&&`). Back to the workdbench, I rewrote the code to test if, even without replacing the numbers, it would inserf FizzBuzz before numbers divisible by 3 and 5. This was my rewrite:

````javascript
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
````

ok so. yea. it was able to execute the the `if` statements. But still, its want replacing the numbers with the words like I wanted. I asked you, and you told me it had something to do with the order of operations. My first thought was that something was in the wrong order? And a comment you made regarding "whats the most complicated operation" made me think that maybe the `if (i % 3 ===0 && 1%5===0)` had to go at the top. I also So I tried that.

````
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
````

now that completely broke my code, lmao. i dont even know what happened. I added the `else` at the end before console because I remembered that typical syntax for `if` statements were followed by an `else`. I went back to the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js) doc to double check, and on line 22, I saw that indeed, the `if` was followed by an `else`. Thinking back, I dont know why I put it right before `console.log` instead of making it a statment and opening brackets like so: `else {console.log(1;)}`. The number one of being crazy is not knowing you're crazy. I suspect something similar was occuring within me. I digress.

After that, I took a break because 1) I was stuck and needed to think, and 2) I had work. So I thought during my work, went over the class in my head, and looked at my notes and the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js). Something wasnt quite clicking, so I went back to the Eloquent Javascript book. In chapter 2, I found the "Dispatching on a value with switch" section, and noticed how, when combining various `if` statements, the second and onwards `if`s were preceded by an `else`, becoming an `else if` statement. That made sense. Also, I revisited the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js) again and indeed, multiple conditions required the `else if` after the first `if`(the first condition) was established. Cool. I returned to version 3 of my code and added the `else if`. It went like so:

````
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
````

Same thing. It still wasnt doing what I wanted. What could i possibly be missing? OBVIOUSLY THE FINAL `else`. I can be a silly goose. One more fix:

````
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
		console.log("FizzBuzz");
	}
	else console.log(i);
}
````
It worked! mostly... Now it was replacing the numbers, but it wasnt inserting if "FizzBuzz" in the numbers that were multiples of both 3 and 5. I hadnt noticed this back when I did attempt 3. I dont know why I thought it was working. It was ignoring that part of the code completely, and labelling things as either "Fizz" or "Buzz", which is halfway there but meh.

By rubbing my 2 braincells together, I spotted the typo in my code, line 119, I wrote `1%5===0` instead of `i%5===0`. So my bad. Also I fixed the final else in my code. I opened up brackets after `else` and put `console.log(i)` inside. The result? 

````javascript
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
		console.log("FizzBuzz");
	}
	else console.log(i);
}
````





TRASH. Well not actually, but it was still ignoring the "FizzBuzz". Anyway, I took a nap.

ONE FINAL STROKE OF GENIUS HIT ME LIKE A TRUCK AND WOKE ME UP FROM MY NAP!!! **THE CONTROL FLOW** "Once code is effective it stops". Something like that. My code was replacing the numbers with "Fizz" and "Buzz" first, but by the time it reached my `else if (i % 3 ===0 && 1%5===0){console.log("FizzBuzz");}` statement, all possible numbers had already been replaced by "Fizz" or "Buzz", and there were no other numbers left that were multiples of both numbers. Why? cause they werent numbers anymore, they were strings. So lets make my code check for numbers that are multiples to 3 AND 5 first and THEN check for numbers who are either numltiples of 3 **or** 5.

````
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
```
**WITNESS ME**
yup it workeddddd!!! I tested it one more time on the Eloquent Javascript online console





