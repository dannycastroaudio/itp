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