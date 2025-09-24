# F to C 

## Danny Castro, LMSC-261-001

---
### Coding process and debugging
1. For this assignment, I started out by studying the [code-along document](https://github.com/rdwrome/261fa25/blob/main/03Operators%26Bindings/codealong.js) we worked on during class. Particularly the section about finding the area based on pi and radius bindings. The homework is clearly an expression, so it made sense to study a different but similar expression.
2. Having done this, I looked at the homework instructions. We were given a starting value (99° Fahrenheit), 2 variables (f and c), and an equation (Celsius = (Fahrenheit-32)5/9). To me that clearly meant the following:

    * We had create 2 bindings named `F` and `C`. 
	
	* Then we had to give two separate definitions to each one. As was my understanding, these two definitions had to come from the initial value (99°F) and the equation (Celsius = (Fahrenheit-32)5/9). 
	
	* If the code knows what we mean by F and C, then you could just plug in a value at the `F` binding, and ask the console with `console.log` to print out the conversion of the `C` binding.
3. cool. I wrote this code based on those ascertations.
```
let Fahrenheit = 99;  
let Celsius = ((Fahrenheit - 32)5/9);
console.log(Celsius);
```  
I then tested that on the online [sandbox we used in class](https://eloquentjavascript.net/code/).   
It didnt work. Duh. The error I received was this:  
**SyntaxError: Unexpected number**  
Back to the workbench!  

4. It just so happened that at this moment, our office hour started. You looked at my code and told me line 2 was "too human". To me, a human, the lack of space between the parenthesis and the division clearly stated a multiplication. I pondered.
5. My ponderings led me conclude the usual: Puter stoopid. It wont know I need it to multiply if I dont give it a multiplication operator (`*`). I rewrote my code like this:
```
let Fahrenheit = 99;
let Celsius = ((Fahrenheit - 32)*5/9);
console.log(Celsisus);
```
I got an error.  
**ReferenceError: Celsisus is not defined (line 3 in function eval)**  
Another flop, but not with the code! my spelling! The puter does not tolerante imperfections. 

6. At that point I decided to safeguard myself from my possibly undiagnosed mild dyslexia, and renamed the bindings to `F` and `C`. This was the final product:
```javascript

let F = 99;
let C = ((F - 32)*5/9);
console.log(C);
```

It worked! [_Yipeeeeeeeeee_](https://www.youtube.com/shorts/Qu7KFMn54Bk)

The console printed the answer as 37.22222222222222. Which is correct. I proceeded to test the code with different values and cross-checked them on [google](https://www.google.com/search?q=google+celsius+to+fahrenheit&oq=google+celsius+to+f&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEIMjc3NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8), just to prove it wasnt just serendipitous coincidence. Indeed, I had succeeded. 


