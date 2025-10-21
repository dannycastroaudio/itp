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