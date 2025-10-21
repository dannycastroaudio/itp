# Midterm Project
## Danny Castro, LMSC-261-001

---
### Phase 1.1

OK SO FIRST I DRAW (INSERT SKETCH HERE)
I used a graph paper on my iPad and drew the image of a monkey-looking thing. my weird monkey.

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase1.1.jpg)

THEN I TRY TO MAKE MONKEY ON CONSOLE. 

---
### Phase 2.1

cant firgure out arc orientation. I look up youtube how. link to video. explains how orientation is mapped out in p5
now that i figure it out, i add ears  and top of head, as well as face. i have to test the location of my points and make sure I actually understand how to do it. I wasnt really using a scale here, just testing if it felt right. 

````javascript
function setup() 
{
  createCanvas(400, 400);
  noStroke();
}
function draw() //gonna draw monkey
{
  fill(0);
  arc (50, 75, 50, 50, PI/2, PI*1.5); // left ear
  fill (200);
  rect (50, 50, 50, 80); //face
  fill (200);
  arc (75, 50 , 50, 50, PI, 2*PI); //top of head
  fill (0);
  arc (100, 75, 50, 50, PI*1.5, PI/2); //right ear
  fill (0)
  triangle (50, 80, 60, 60, 70, 80); //left eye
  fill (30);
  triangle (80, 80, 90, 60, 100, 80); //right eye
  fill (255);
  ellipse (60,73,5);
  fill (255);
  ellipse (90, 73, 5);
  fill (0); 
  rect (60, 100, 30, 2);
  fill (130);
  arc (82, 102, 10, 25, 0, PI);
}
````

this is how my test sketch turns out:

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase2.1.png)

---
### Phase 1.2

At this point I had read all of the instructions, so I made sure to adjust my sketch to be scalable to a 400x400 canvas, and actually follow set x and y coordinates. Basically a 16x16 where each unit = 25 units if scaled. I thought that was the easiest way.

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase1.2.jpg)

You can see how much sense it makes now. Adjusting dimensions/making changes will be generally easier cause now I follow precise numbers.

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase2.2.png)


---
### Phase 2.2

Now, im gonna try to be more accurate on P5.js to my new sketch 

````javascript
function setup() 
{
  createCanvas(400, 400);
  noStroke();
}
function draw() //gonna draw monkey
{
  fill(0);
  arc (100, 175, 100, 100, PI/2, PI*1.5); // left ear
  fill (200);
  rect (100, 125, 125, 200); //face
  fill (200);
  arc (162.5, 125 , 125, 125, PI, 2*PI); //top of head
  fill (0);
  arc (225, 175, 100, 100, PI*1.5, PI/2); //right ear
  fill (0)
  triangle (100, 200, 125, 150, 150, 200); //left eye
  fill (0);
  triangle (175, 200, 200, 150, 225, 200); //right eye
  fill (255);
  ellipse (125, 185,10);//left pupil
  fill (255);
  ellipse (200, 185, 10);//right pupil
  fill (0); 
  rect (125, 250, 75, 5);//mouth
  fill (130);
  arc (187.5, 255, 25, 50, 0, PI); //tongue
}
````

here was the result! It doesnt look like much has changed, but I disagree. This P5 drawing sits a lot better.

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase2.2.png)

the code above is accurate in scale to my graph drawing, where each grid block = 25 units, and the entire canvas is 400 units total. I mapped out all the points on graph paper.

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase1.3.jpg)

---
### Phase 2.3

Now I wanna add color!!!

I thought that a traditional monkey colour scheme wouldnt work as well with this format, so I decided to colour my monkey as Mojo Jojo from the Powerpuff Girls

i quickyly looked up how to use colour in P5.js, which led me to this [website](https://p5js.org/reference/p5/color/)

ok. I'll just use RGB values. So I looked up a [RGB value chart with a colour picker](https://www.rapidtables.com/web/color/RGB_Color.html) and I went to town on my Mojo Jojo

````javascript
function setup() 
{
  createCanvas(400, 400);
  noStroke();
}
function draw() //gonna draw monkey
{
  fill(0);
  arc (100, 175, 100, 100, PI/2, PI*1.5); // left ear
  fill (128, 255, 0);
  rect (100, 125, 125, 200); //face
  fill (255, 51, 255);
  arc (162.5, 125 , 125, 150, PI, 2*PI); //top of head
  fill (0);
  arc (225, 175, 100, 100, PI*1.5, PI/2); //right ear
  fill (240, 198, 202);
  triangle (100, 200, 125, 150, 150, 200); //left eye
  fill (240, 198, 202);
  triangle (175, 200, 200, 150, 225, 200); //right eye
  fill (0);
  ellipse (125, 185,10);//left pupil
  fill (0);
  ellipse (200, 185, 10);//right pupil
  fill (0); 
  rect (125, 250, 75, 5);//mouth
  fill (255, 102, 255);
  arc (187.5, 255, 25, 50, 0, PI); //tongue
}
````

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase2.3.png)

I was getting there but then I realised I wanted to add some changes so my guy would look more like a monkey than a discarded pokemon

---
### Phase 2.4

I wanted to get the fur Mojo Jojo has, and also the monkey area around the mouth that doesn't typically have any fur. For this I divided the head in 2 rectangles, one that would be purely green (around the eyes), and one that would be black or dark brown (around the mouth). 

There would also be a green ellipses around the mouth and above the fur in order to be in agreeance with all monkey traditions. 

So I reworked my initial sketch, accounting for the Eu de Mojo Jojo, his essence, his life energy, even. In addition to fur on the lower face, I added fur at the edges of his ears, and in a section above his eyes. 

I also made the top of his head a teeny tiny bit taller to account for his magnificent brain, and adjusted the shape of his eyes to look a little angrier (2 right triangles instead of equilateral triangles). 

I reworked my graph drawing based on these changes. Why? Well, to keep records, prepare for the worst, and be able to understand how my Mojo Jojo is being drawn on P5.js

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase1.4.jpg)

Finally, I coloured him in accordance with the ancient texts of the Powerpuff Girls.

````javascript
function setup() 
{
  createCanvas(400, 400);
  noStroke();
}
function draw() //gonna draw biblically accurate Mojo Jojo
{
  fill(0);
  arc (100, 175, 100, 100, PI/2, PI*1.5); //outer left ear
  fill(128, 255, 0);
  arc (100, 175, 80, 80, PI/2, PI*1.5);// left ear
  fill(0);
  arc (225, 175, 100, 100, PI*1.5, PI/2); //outer right ear
  fill (128, 255, 0);
  arc (225, 175, 80, 80, PI*1.5, PI/2); //right ear
  fill (128, 255, 0);
  rect (100, 125, 125, 100); //upper face
  fill (0);
  rect (100, 225, 125, 100); //lower face with fur
  fill (255, 51, 255);
  arc (162.5, 125, 125, 175, PI, 2*PI); //top of head
  fill (240, 198, 202);
  triangle (110, 200, 110, 150, 155, 200); //left eye
  fill (240, 198, 202);
  triangle (170, 200, 215, 150, 215, 200); //right eye
  fill (0);
  ellipse (125, 185,10);//left pupil
  fill (0);
  ellipse (200, 185, 10);//right pupil
  fill (128, 255, 0);
  ellipse (162.5, 262.5, 125, 75);//area under mouth with no fur
  fill (0); 
  rect (125, 250, 75, 5);//mouth
  fill (255, 102, 255);
  arc (187.5, 255, 25, 50, 0, PI); //tongue
  fill (0);
  rect (100, 125, 10, 100);//left sideburn
  fill (0)
  rect (215, 125, 10, 100);//right sideburn
  fill (0);
  triangle (125, 125, 162.5, 175, 200, 125); //forehead fur patch
}
````

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase2.4.png)

---
### Phase 3

Finally! I have arrived at phase 3. First thing I do is re-read the instructions for this phase, look at the example given, and give it a try.

````javascript
function setup() 
{
  createCanvas(2000,2000);//made canvas bigger so I can fit several Mojo Jojos 
  noStroke();
}
function drawObject(x, y, s)//this functions "saves" the base dimensions/blueprint of my Mojo Jojo so it can later be transformed and/or moved around. Like, a Franz Kafka function that helps me decide the size of the cockroach and where it should appear, but it'll always be a cockroach.
{
  push ();
  translate (x, y);//where in the canvas should this be drawn 
  scale (s);//change size og my Mojo
  fill(0);//black
  arc (100, 175, 100, 100, PI/2, PI*1.5); //outer left ear
  fill(128, 255, 0);
  arc (100, 175, 80, 80, PI/2, PI*1.5);// left ear
  fill(0);//black
  arc (225, 175, 100, 100, PI*1.5, PI/2); //outer right ear
  fill (128, 255, 0);//Mojo Jojo green
  arc (225, 175, 80, 80, PI*1.5, PI/2); //right ear
  fill (128, 255, 0);//Mojo Jojo green
  rect (100, 125, 125, 100); //upper face
  fill (0);//black
  rect (100, 225, 125, 100); //lower face with fur
  fill (255, 51, 255);//a beautiful shade of brain pink
  arc (162.5, 125 , 125, 175, PI, 2*PI); //top of head
  fill (240, 198, 202);//light red bc he is so tired 
  triangle (110, 200, 110, 150, 155, 200); //left eye
  fill (240, 198, 202);//again some light red but he might also be a lil high
  triangle (170, 200, 215, 150, 215, 200); //right eye
  fill (0);//black
  ellipse (125, 185,10);//left pupil
  fill (0);//black
  ellipse (200, 185, 10);//right pupil
  fill (128, 255, 0);//Mojo Jojo green
  ellipse (162.5, 262.5, 125, 75);//area under mouth with no fur
  fill (0); //black
  rect (125, 250, 75, 5);//mouth
  fill (255, 102, 255);//a different shade of pink as the brain
  arc (187.5, 255, 25, 50, 0, PI); //tongue 
  fill (0);// black
  rect (100, 125,10, 100);//left sideburn
  fill (0)//black
  rect (215, 125,10, 100);//right sideburn
  fill (0);//black
  triangle (125, 125, 162.5, 175, 200, 125);//forehead fur patch
  pop ();
}
function draw()//here is where you actually scale. This functions calls on drawObject for the Mojo Jojo blueprints, takes those base values, and lets us move and scale him.
{
  drawObject (0, 0, 1);
  drawObject (0, 200, 2);
}
````
If I'm being honest, that was quite easy. The instructions were clear, and I understood the purpose of using the original blueprint as a reference for a new function that was able to take all the original instructions and scale and transform them. Simple. It also worked on the first try, which gave me joy I had yet to experience.

Here is how my Mojo Jojos were transformed!

![alt text](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase3.png)

---
### Phase 4

Ok, I am starting phase 4 and dont really know how to do it. I'll re-read the instructions.

Ok, I see now i have to make a grid. First step was figuring it out mojo Jojo's original size. I looked at my graph, and by measureing the total height and total widtt (as well as the sizes I put down on my code), I determined original Mojo Jojo is 225px wide and 287.5px tall. That would make the grid much too big for the 2000x2000 canvas, I could only fit like 7 Mojo Jojos in it. Not enough for my personal taste. So I decided to halve the size with the `s` parameter in the `drawObject` function. 

That would make my Mojo Jojo 112.5px wide and 143.75px tall. That fits at LEAST 17.77 Mojos in the x axis and 13.91 mojos in the y axis. Those numbers are much more satisfactory than the previous Mojo predictions. 

I decided to start with a 10x10 grid, which would make each cell 200x200px. That way theres some wiggle room for my Mojo Jojos, but also those numbers are easier to work with than the actual Mojo Jojo measurements.

I had to research tiling in P5.js. I honestly didn't know where to put the `for` loop, or where to declare certain values like the grid size. I first looked at this [link](https://editor.p5js.org/ericalimsongyi/sketches/lggQwPZ0D) and saw how this person had structured their tiling, based on that, I declared values `cellsX` and `cellsY`. Now those 2 values are visible to every function. You really can't spell function without fun.

Here is my first attempt at the loop, it actualy crashed the page.

````javascript
let cellsX = 5;
let cellsY = 5;
function setup() 
{
  createCanvas(2000,2000);//made canvas bigger so I can fit several Mojo Jojos 
  noStroke();
}
function drawObject(x, y, s)//this functions "saves" the base dimensions/blueprint of my Mojo Jojo so it can later be transformed and/or moved around. Like, a Franz Kafka function that helps me decide the size of the cockroach and where it should appear, but it'll always be a cockroach.
{
  push ();
  translate (x, y);//where in the canvas should this be drawn 
  scale (s);//change size og my Mojo
  fill(0);//black
  arc (100, 175, 100, 100, PI/2, PI*1.5); //outer left ear
  fill(128, 255, 0);
  arc (100, 175, 80, 80, PI/2, PI*1.5);// left ear
  fill(0);//black
  arc (225, 175, 100, 100, PI*1.5, PI/2); //outer right ear
  fill (128, 255, 0);//Mojo Jojo green
  arc (225, 175, 80, 80, PI*1.5, PI/2); //right ear
  fill (128, 255, 0);//Mojo Jojo green
  rect (100, 125, 125, 100); //upper face
  fill (0);//black
  rect (100, 225, 125, 100); //lower face with fur
  fill (255, 51, 255);//a beautiful shade of brain pink
  arc (162.5, 125 , 125, 175, PI, 2*PI); //top of head
  fill (240, 198, 202);//light red bc he is so tired 
  triangle (110, 200, 110, 150, 155, 200); //left eye
  fill (240, 198, 202);//again some light red but he might also be a lil high
  triangle (170, 200, 215, 150, 215, 200); //right eye
  fill (0);//black
  ellipse (125, 185,10);//left pupil
  fill (0);//black
  ellipse (200, 185, 10);//right pupil
  fill (128, 255, 0);//Mojo Jojo green
  ellipse (162.5, 262.5, 125, 75);//area under mouth with no fur
  fill (0); //black
  rect (125, 250, 75, 5);//mouth
  fill (255, 102, 255);//a different shade of pink as the brain
  arc (187.5, 255, 25, 50, 0, PI); //tongue 
  fill (0);// black
  rect (100, 125,10, 100);//left sideburn
  fill (0)//black
  rect (215, 125,10, 100);//right sideburn
  fill (0);//black
  triangle (125, 125, 162.5, 175, 200, 125);//forehead fur patch
  pop ();
}
function draw()//here is where you actually scale. This functions calls on drawObject for the Mojo Jojo blueprints, takes those base values, and lets us move and scale him.
{
  for (let i = 0; i < cellsX; i++)
    {
      drawObject (112.5, 0 , 0.5);
      for (let j = 0; j < cellsY; j++)
        {
          drawObject(0, 143.75, 0.5);
        }
    }
}
````
It did the same thing as in Phase 3. So that was useles.

I had a little panic, but after than I continued researching. I ran into this [video](https://www.youtube.com/watch?v=0yte0DqWCow&t=817s) where this person was explaining circular tile animation. Whatever she's doing is obviously too complicated and im not even going to attempt it (maybe later), but I wanted to see how she was going to establish basic tiling. By watching the [video](https://www.youtube.com/watch?v=0yte0DqWCow&t=817s), I realised I hadnt declared a grid size! 

I also realised there was no need to have 2 `drawObject`, only have one inside the inner loop. What was interesting is she connected the x and y locations the size of the circles she was drawing in the [video](https://www.youtube.com/watch?v=0yte0DqWCow&t=817s). That gave me an idea. I declared another value at the beginning: `cellSize`, where I established how big I wanted the grid to be. This alowed me to, through the nested loops, draw Mojo Jojos evenly spaced according to the grid size. So, if my grid was 200px, the Mojos were going to be repeated every 200px.

This is the code I wrote:

````javascript
let cellsX = 6;
let cellsY = 4;
let cellSize;
function setup() 
{
  createCanvas(2000,2000);//made canvas bigger so I can fit several Mojo Jojos 
  noStroke();
}
function drawObject(x, y, s)//this functions "saves" the base dimensions/blueprint of my Mojo Jojo so it can later be transformed and/or moved around. Like, a Franz Kafka function that helps me decide the size of the cockroach and where it should appear, but it'll always be a cockroach.
{
  push ();
  translate (x, y);//where in the canvas should this be drawn 
  scale (s);//change size og my Mojo
  fill(0);//black
  arc (100, 175, 100, 100, PI/2, PI*1.5); //outer left ear
  fill(128, 255, 0);
  arc (100, 175, 80, 80, PI/2, PI*1.5);// left ear
  fill(0);//black
  arc (225, 175, 100, 100, PI*1.5, PI/2); //outer right ear
  fill (128, 255, 0);//Mojo Jojo green
  arc (225, 175, 80, 80, PI*1.5, PI/2); //right ear
  fill (128, 255, 0);//Mojo Jojo green
  rect (100, 125, 125, 100); //upper face
  fill (0);//black
  rect (100, 225, 125, 100); //lower face with fur
  fill (255, 51, 255);//a beautiful shade of brain pink
  arc (162.5, 125 , 125, 175, PI, 2*PI); //top of head
  fill (240, 198, 202);//light red bc he is so tired 
  triangle (110, 200, 110, 150, 155, 200); //left eye
  fill (240, 198, 202);//again some light red but he might also be a lil high
  triangle (170, 200, 215, 150, 215, 200); //right eye
  fill (0);//black
  ellipse (125, 185,10);//left pupil
  fill (0);//black
  ellipse (200, 185, 10);//right pupil
  fill (128, 255, 0);//Mojo Jojo green
  ellipse (162.5, 262.5, 125, 75);//area under mouth with no fur
  fill (0); //black
  rect (125, 250, 75, 5);//mouth
  fill (255, 102, 255);//a different shade of pink as the brain
  arc (187.5, 255, 25, 50, 0, PI); //tongue 
  fill (0);// black
  rect (100, 125,10, 100);//left sideburn
  fill (0)//black
  rect (215, 125,10, 100);//right sideburn
  fill (0);//black
  triangle (125, 125, 162.5, 175, 200, 125);//forehead fur patch
  pop ();
}
function draw()//here is where you actually scale. This functions calls on drawObject for the Mojo Jojo blueprints, takes those base values, and lets us move and scale him.
{
  cellSize = 150; //size of my grid
  for (let i = 0; i < cellsX; i++)//controls x axis
    {
      for (let j = 0; j < cellsY; j++)//controls y axis
        {
          drawObject(i * cellSize, j * cellSize, 0.5);//x and y axis are going to be the size times the cellSize. AKA its gonna space them according to the cell size.
        }
    }
}
````

This definitely tiled him! I could make however many tiles I wanted, whether a 5x5 or a 10 x 20, it worked! I was also able to change the grid size, so if I wanted to mojos to be closer together, for them to be 100x100px apart, it would do that. The issue was that this wasnt scaling the Mojo Jojos according to the tile size. Regardless of the tile size, the Mojos stayed 112.5px by 143.75px large. 

Im guessing its something inside the last draw function, so I got to work on it.

I tried adding translate, to see if that would scale the mojos along with the tiling, and that instead kept the Mojos the same size but changed the tiling distances in x and y. I went a read the translate page and realised it is only for changing the object's x and y coordinates, so that makes sense. Here is what I tried that failed:

````javascript
function draw()//here is where you actually scale. This functions calls on drawObject for the Mojo Jojo blueprints, takes those base values, and lets us move and scale him.
{
  cellSize = 150; //size of my grid
  let w = width/cellsX;
  let h = height/cellsY;
  for (let i = 0; i < cellsX; i++)//controls x axis
    {
      for (let j = 0; j < cellsY; j++)//controls y axis
        {
          drawObject(i * cellSize, j * cellSize, 0.5);//x and y axis are going to be the size times the cellSize. AKA its gonna space them according to the cell size.
          translate(w/2, h/2);
        }
    }
}
````

It was a cool loop, but not what i want. I need to connect the size of the Mojo Jojos to the grid size.

I went back to my code and opened the midterm instructions again. My rows and columns are working, thats good. But my Mojo Jojo isnt scaling. I keep trying to make it half its original size to make it a bit workable, but perhaps thats the issue. I can give no instructions related to the cell scaling if im concerning myself with resizing my monkey boy. So whatever, instead of halving the original size, I am going to use  `s` to connect the scale to the grid. 

Given the original Mojo Jojo size (225px wide and 287.5px), I imagined the each cell had to be at least 300x300 pixels. I changed the `s` variable and made it the `cellSize` divided by the Mojo Jojo size:


Success????


````javascript
let cellsX = 10; //# of rows
let cellsY = 10; //# of columns
let cellSize = 100; //establishes size of the cell. height and width
function setup() 
{
  createCanvas(2000, 2000);//made canvas bigger so I can fit several Mojo Jojos 
  noStroke();
}
function drawObject(x, y, s)//this functions "saves" the base dimensions/blueprint of my Mojo Jojo so it can later be transformed and/or moved around. Like, a Franz Kafka function that helps me decide the size of the cockroach and where it should appear, but it'll always be a cockroach.
{
  push ();
  translate (x, y);//where in the canvas should this be drawn 
  scale (s);//change size og my Mojo
  fill(0);//black
  arc (100, 175, 100, 100, PI/2, PI*1.5); //outer left ear
  fill(128, 255, 0);
  arc (100, 175, 80, 80, PI/2, PI*1.5);// left ear
  fill(0);//black
  arc (225, 175, 100, 100, PI*1.5, PI/2); //outer right ear
  fill (128, 255, 0);//Mojo Jojo green
  arc (225, 175, 80, 80, PI*1.5, PI/2); //right ear
  fill (128, 255, 0);//Mojo Jojo green
  rect (100, 125, 125, 100); //upper face
  fill (0);//black
  rect (100, 225, 125, 100); //lower face with fur
  fill (255, 51, 255);//a beautiful shade of brain pink
  arc (162.5, 125 , 125, 175, PI, 2*PI); //top of head
  fill (240, 198, 202);//light red bc he is so tired 
  triangle (110, 200, 110, 150, 155, 200); //left eye
  fill (240, 198, 202);//again some light red but he might also be a lil high
  triangle (170, 200, 215, 150, 215, 200); //right eye
  fill (0);//black
  ellipse (125, 185,10);//left pupil
  fill (0);//black
  ellipse (200, 185, 10);//right pupil
  fill (128, 255, 0);//Mojo Jojo green
  ellipse (162.5, 262.5, 125, 75);//area under mouth with no fur
  fill (0); //black
  rect (125, 250, 75, 5);//mouth
  fill (255, 102, 255);//a different shade of pink as the brain
  arc (187.5, 255, 25, 50, 0, PI); //tongue 
  fill (0);// black
  rect (100, 125,10, 100);//left sideburn
  fill (0)//black
  rect (215, 125,10, 100);//right sideburn
  fill (0);//black
  triangle (125, 125, 162.5, 175, 200, 125);//forehead fur patch
  pop ();
}
function draw()//here is where you actually scale. This functions calls on drawObject for the Mojo Jojo blueprints, takes those base values, and lets us move and scale him.
{
  for (let i = 0; i < cellsX; i++)//controls x axis
    {
      for (let j = 0; j < cellsY; j++)//controls y axis
        {
          drawObject(i * cellSize, j * cellSize, cellSize/300); //x and y axis are going to be the size times the cellSize. AKA its gonna space them accrding to the cell size.
        }
    }
}
````

The result? it changes the monkey size, but it can only fit so many rows and columns in the given cell size. If i want 30 rows and columns, the `cellSize` would have to be at least 300px, it cant stay any any other value, otherwise its not gonna print all the rows and columns, only the ones that fit in the given size (related to cell size and canvas size). Whats possible is that my code doesnt know that the window must always be the same size. 

I am actually unsure if the window is changing at all, so I'll test it really quick by adding a tint to the `canvasSize` and making it smaller, small enough that it fits inside the preview window and allows me to see the white borders (800x800px is big enough as a canvas size). 

````javascript
function draw()//here is where you actually scale. This functions calls on drawObject for the Mojo Jojo blueprints, takes those base values, and lets us move and scale him.
{
  background (220);
  for (let i = 0; i < cellsX; i++)//controls x axis
    {
      for (let j = 0; j < cellsY; j++)//controls y axis
        {
          drawObject(i * cellSize, j * cellSize, cellSize/300); //x and y axis are going to be the size times the cellSize. AKA its gonna space them accrding to the cell size.
        }
    }
}
````

I ran my last code with the change above (the tint) and turns out the window size was not changing. Thats encouraging.

I changed my approach again. I did away with x and y rows and columns, and combined them into a single variable: `gridDivision`. 

I also cooked dinner and while I was making this incredible pan-seared salmon, I thought about how, if the window wasnt changing, then it was the cell size that wasnt changing accordingly. "but how???" I thought. well. thats cause the `cellSize` was static. That doesnt make sense, I want everything about my Mojo Jojo to be scalable. 

How to do that? Think. 

The scalable cell size is a product of the canvas size AND the grid division (number of rows and columns desired). I understood that I had to remove the static `cellSize` variable and replace it with a scalable equivalent that was related to the grid division and the canvas size. UGH. 

When in distress, I call my friend Nic.

I called my friend Nic.

I needed to bounce it off of someone who would understand programming, so none of my roomates would do. and so i asked Nic, "Nic, my sweet petunia, how do you figure I can make the cell size scalable in relation to the canvas size and the grid division?"

He replied, "how many times can you fit your monkey into the canvas?" **WHAT A GENIUS**

Divide the canvas size by the grid division!!! if the `cellSize` is always as big as the height andd width of the canvas divided by the number of grids, then the `cellSize` is going to change accordingly.
I left the `cellSize` variabele blank, and defined what it means in the setup function (I dont know if it really matters where you put it, since functions can reference each other). New code looked like this:

````javascript
let gridDivision = 10; //# of rows and columns
let cellSize; //establishes size of the cell containing the Mojo Jojo. height and width
function setup() 
{
  createCanvas(800, 800);//made canvas bigger so I can fit several Mojo Jojos 
  noStroke();
  cellSize = (width/gridDivision, height/gridDivision);//the cellSize is as big as the height and width of the canvas divided by the gridDivision. thanks to this it can scale the iamge up and down.
}
function drawObject(x, y, s)//this functions "saves" the base dimensions/blueprint of my Mojo Jojo so it can later be transformed and/or moved around. Like, a Franz Kafka function that helps me decide the size of the cockroach and where it should appear, but it'll always be a cockroach.
{
  push ();
  translate (x, y);//where in the canvas should this be drawn 
  scale (s);//change size og my Mojo
  fill(0);//black
  arc (100, 175, 100, 100, PI/2, PI*1.5); //outer left ear
  fill(128, 255, 0);
  arc (100, 175, 80, 80, PI/2, PI*1.5);// left ear
  fill(0);//black
  arc (225, 175, 100, 100, PI*1.5, PI/2); //outer right ear
  fill (128, 255, 0);//Mojo Jojo green
  arc (225, 175, 80, 80, PI*1.5, PI/2); //right ear
  fill (128, 255, 0);//Mojo Jojo green
  rect (100, 125, 125, 100); //upper face
  fill (0);//black
  rect (100, 225, 125, 100); //lower face with fur
  fill (255, 51, 255);//a beautiful shade of brain pink
  arc (162.5, 125 , 125, 175, PI, 2*PI); //top of head
  fill (240, 198, 202);//light red bc he is so tired 
  triangle (110, 200, 110, 150, 155, 200); //left eye
  fill (240, 198, 202);//again some light red but he might also be a lil high
  triangle (170, 200, 215, 150, 215, 200); //right eye
  fill (0);//black
  ellipse (125, 185,10);//left pupil
  fill (0);//black
  ellipse (200, 185, 10);//right pupil
  fill (128, 255, 0);//Mojo Jojo green
  ellipse (162.5, 262.5, 125, 75);//area under mouth with no fur
  fill (0); //black
  rect (125, 250, 75, 5);//mouth
  fill (255, 102, 255);//a different shade of pink as the brain
  arc (187.5, 255, 25, 50, 0, PI); //tongue 
  fill (0);// black
  rect (100, 125,10, 100);//left sideburn
  fill (0)//black
  rect (215, 125,10, 100);//right sideburn
  fill (0);//black
  triangle (125, 125, 162.5, 175, 200, 125);//forehead fur patch
  pop ();
}
function draw()//here is where you actually scale. This functions calls on drawObject for the Mojo Jojo blueprints, takes those base values, and lets us move and scale him.
{
    background(200);//tints the canvas to see borders
  for (let i = 0; i < gridDivision; i++)//controls x axis
    {
      for (let j = 0; j < gridDivision; j++)//controls y axis
        {
          drawObject(i * cellSize, j * cellSize, cellSize/288); //spaces x and y according to the cell size. also tells programme that the scale is the size of the cell divided by the real size of the mojo jojo without scaling(288 is the total height, and plenty space for the width of the original mojo jojo)
        }
    }
}
````

This final iteration was completely succesful, it met all of the requirements and worked as expected. The window was never resized, the Mojo Jojos scaled in size depending on the number of grids. 

My midterm project was finally complete. Here is photo evidence my tiling Mojo Jojos!

[!alttext](https://github.com/dannycastroaudio/itp/blob/main/midterm/Phase4.jpg)
