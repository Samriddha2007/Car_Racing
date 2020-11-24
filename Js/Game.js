class Game
{
    constructor()
    {

    }
    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>
        {
            gameState = data.val();
        }
        );
    }
    update(state)
    {
         database.ref('/').update({ 
           gameState: state
         });
    }
   async start()
    {
        if(gameState == 0)
        {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage("car_1",car1_Image);
        car2 = createSprite(300,200);
        car2.addImage("car_2",car2_Image);
        car3 = createSprite(500,200);
        car3.addImage("car_3",car3_Image);
        car4 = createSprite(700,200);
        car4.addImage("car_4",car4_Image);

        car = [car1,car2,car3,car4];
    }
    play()
    {
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined)
        {
            background(rgb(198,135,103));
            image(track_Image,0,-displayHeight*5,displayWidth,displayHeight*8);
            var index = 0;
            var x = 100;
            var y;
            for(var i in allPlayers)
            {
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[i].distance;
                car[index-1].x = x;
                car[index-1].y = y;
                console.log(index,player.index);
                if(index == player.index)
                {
                stroke(10);
                fill("red");
                ellipse(x,y,80,80);
                car[index-1].shapeColor  = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = car[index-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null)
        {
            player.distance = player.distance + 50;
            player.update();
        }
        if(player.distance > 4000)
        {
            gameState = 2;
        }
        drawSprites();
    }
    end()
    {
        console.log("Game Over!");
    }
}