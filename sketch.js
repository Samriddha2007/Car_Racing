
var gameState = 0;                        
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;

var form,game,player;   


var car1,car2,car3,car4,car;


function preload()
{
   car1_Image = loadImage("images/car1.png");
   car2_Image = loadImage("images/car2.png");
   car3_Image = loadImage("images/car3.png");
   car4_Image = loadImage("images/car4.png");
   ground_Image = loadImage("images/ground.png");
   track_Image = loadImage("images/track.jpg");
}

function setup()
{
    createCanvas(displayWidth-30,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}    

function draw()
{
 //   background("white");
 
    
    if(playerCount === 4)   
    {
        game.update(1);
    }
    if(gameState == 1)
    {
        clear();
        game.play();
        
    }
    if(gameState == 2)
    {
        game.end();
    }
}
