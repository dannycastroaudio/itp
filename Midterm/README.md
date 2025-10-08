OK SO FIRST I DRAW (INSERT SKETCH HERE)


THEN I TRY TO MAKE MONKEY ON CONSOLE. 
cant firgure out arc orientation. I look up youtube how. link to video. explains how orientation is mapped out in p5

now that i figure it out, i add ears  and top of head, as well as face. i have to test the location of my points

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