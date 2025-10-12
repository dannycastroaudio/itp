#Midterm Project
##Danny Castro, LMSC-261-001

---
###Phase 1.1

OK SO FIRST I DRAW (INSERT SKETCH HERE)
I used a graph paper on my iPad and drew the image of a monkey-looking thing. my weird monkey.

![alt text]()

THEN I TRY TO MAKE MONKEY ON CONSOLE. 

---
### Phase 2.1

cant firgure out arc orientation. I look up youtube how. link to video. explains how orientation is mapped out in p5
now that i figure it out, i add ears  and top of head, as well as face. i have to test the location of my points and make sure I actually understand how to do it. I wasnt really using a scale here, just testing if it felt right. 

````
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

---
### Phase 1.2

At this point I had read all of the instructions, so I made sure to adjust my sketch to be scalable to a 400x400 canvas, and actually follow set x and y coordinates. Basically a 16x16 where each unit = 25 units if scaled.  I thought that was the easiest way.

---
### Phase 2.2

Now, im gonna try to be more accurate on P5.js to my new sketch 

````
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

the code above is accurate ion scale to my sketch, where each grid block = 25 units, and the entire canvas is 400 units total. I mapped out all the points on graph paper.

---
### Phase 2.3

Now I wanna add color!!!
I thought that a traditional monkey colour scheme wouldnt work as well with this format, so I decided to colour my monkey as Mojo Jojo from the Powerpuff Girls

i quickyly looked up how to use colour in P5.js, which led me to this [website](https://p5js.org/reference/p5/color/)

ok. I'll just use RGB values. So I looked up a [RGB value chart with a colour picker](https://www.rapidtables.com/web/color/RGB_Color.html) and I went to town on my Mojo Jojo

````
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

I was getting there but then I realised I wanted to add some changes so my guy would look more like a monkey than a discarded pokemon
I wanted to get the fur mojo jojo has, and also the monkey area around the mouth that doestn typically have any fur. For this I devided the head in 2 rectangles, one that would be purely green (around the eyes), and one that would be black or dark brown (around the mouth). There would also be a green ellipses around the mouth and above the fur in order to be in agreeance with all monkey traditions. 
So I reworked my initial sketch, accounting for the Eu de Mojo Jojo, his essence, his life energy, even. In addition to fur on the lower face, I added fur at the edges of his ears, and in a section above his eyes. I also made the top of his head a teeny tiny bit taller to account for his magnificent brain, and adjusted the shape of his eyes to look a little angrier (2 right triangles instead of equilateral triangles). I also coloured him in accordance with the ancient texts of the Powerpuff Girls.

````
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
  triangle (125, 125, 162.5, 175, 200, 125); //forehear fur patch
}
````
