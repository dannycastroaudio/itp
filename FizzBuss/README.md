# FizzBuzz Homework
## Danny Castro, LMSC-261-001
## Debug Journal

---

### Attempt #1

Looking at the instructions, I visualised the following regarding the task:

* There had to be a counter that went from 0 to 100. Ergo, there should be a binding that represents the 0-100 range, a binding which added 1 to its current value until reaching the ceiling number.
* The increasing integer had to have a default value, it couldnt be zero because that it outside the range. 
* There were 3 exceptions or interruptions to the counter, and they had to meet 3 mathematical condition. 

I first wrote out a sentence in my head that represented the assignment:

"Count from 1 to 100, but on the numbers that result to be multiples of 3, 5, or 3 and 5, replace the numbers with the words "Fizz", "Buzz", and "FizzBuzz", in that respective order. Once 100 is reached, you can stop counting and evaluating which numbers are muultiples of the aforementioned numbers".

That was monkey brain. 

Computer brain translated that to "You must have a binding that establishes the range and behaviour of the integer, as well as a conditional statement that checks if any of the numbers meet the mathematical criteria while the counter kept counting. Such statements would also have to specify what to do once said numbers had been identified, AKA replacing the number with a string.

I quickly looked at my notes for what we'd done in class and referenced them while writing the code.

I figured we would have a `for` loop statement, with a binding inside it that set up the range, starting point, and behaviour of `i`. Inside that loop, we would be checking if any of the multiples were present.

This was the code I came up with: 

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

Did not work. it was printing "Fizz" and "Buzz" before every integer. I used the modulus sign (`%`) to signify division because thats how we did it in the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js)](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js#L38) during class, but I forgot to indicate that the remainder had to be 0 so that I would be actually be telling the code to divide/find the multiple. As a result it was finding remainders all over the place. Here is a screenshot of what the code was generating.

Below is what the [code sandbox](https://eloquentjavascript.net/code/) showed when it executed the code:

![alt text](https://github.com/dannycastroaudio/itp/blob/main/FizzBuss/img/1st%20attempt%20code.png)

---

### Attempt #2


Once I had figured out the correct way of indicating division using a modulus (`%`) operator, I reworked my code by changing the conditions inside the `if`statements.

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

Now this was actually better. It was printing "Fizz" or "Buzz" before every number that was either a multiple of 3 ("Fizz") and 5 ("Buzz"), but it wasnt replacing the number. It was at this point I remembered that we also had to include code that made every number divisible by 5 **and** 3 appear as the string "FizzBuzz". Looking back at the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js) document, I saw how on line 81 it showed us how to add 2 conditions that both had to be true (`&&`). Back to the workbench, I rewrote the code to test if, even without replacing the numbers, it would insert `"FizzBuzz"` before numbers divisible by 3 and 5. 

---

### Attempt #3

In this attempt I added the combined conditional I had forgotten about.


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

ok so. yea. it was able to execute the the `if` statements, but wasnt printing any "FizzBuzz" string. Its wasnt replacing the numbers with the words like I wanted. I asked you, and you told me it had something to do with the order of operations. This is what the code sandbox executed:

![alt text](https://eloquentjavascript.net/code/)


My first thought was that something was in the wrong order? And a comment you made regarding "whats the most complicated operation" made me think that maybe the `if (i % 3 ===0 && 1%5===0)` had to go at the top. So I tried that.

---

### Attempt #4

The 4th attempt involved me moving the `if (i % 3 === 0 && 1%5 === 0)` statement to the top of the code over the single conditionals.

````javascript
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

---

### Attempt #5

After attempt #4, I took a break because 1) I was stuck and needed to think, and 2) I had work. So I thought during my work, went over the class in my head, and looked at my notes and the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js). Something wasnt quite clicking, so I went back to the Eloquent Javascript book. In chapter 2, I found the "Dispatching on a value with switch" section, and noticed how, when combining various `if` statements, the second and onwards `if`s were preceded by an `else`, becoming an `else if` statement. 

That made sense. 

Also, I revisited the [code-along](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js) again and indeed, multiple conditions required the `else if` after the first `if`(the first condition) was established. Cool. I returned to version 3 of my code and added the `else if`. It went like so:

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
	console.log(i);
}
````

Same thing. It still wasnt doing what I wanted. I was extremely frustrated at this point and out of ideas...

What could i possibly be missing? OBVIOUSLY THE FINAL `else`. I can be a silly goose. One more fix:

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

It worked! mostly... Now it was replacing the numbers, but it wasnt inserting if "FizzBuzz" in the numbers that were multiples of both 3 and 5. I hadnt noticed this back when I did attempt 3. I dont know why I thought it was working. It was ignoring that part of the code completely, and labelling things as either "Fizz" or "Buzz", which is halfway there but meh.

---

###Attempt #6

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

###Attempt #7

ONE FINAL STROKE OF GENIUS HIT ME LIKE A TRUCK AND WOKE ME UP FROM MY NAP!!! **THE CONTROL FLOW** "Once code is effective it stops". Something like that. My code was replacing the numbers with "Fizz" and "Buzz" first, but by the time it reached my `else if (i % 3 ===0 && 1%5===0){console.log("FizzBuzz");}` statement, all possible numbers had already been replaced by "Fizz" or "Buzz", and there were no other numbers left that were multiples of both numbers. Why? cause they werent numbers anymore, they were strings. So lets make my code check for numbers that are multiples to 3 AND 5 first and THEN check for numbers who are either numltiples of 3 **or** 5.

````javascript
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





