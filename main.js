canvas = new fabric.Canvas ("myCanvas");
ctx = canvas.getContext("2d");

block_Width = 30;
block_Height = 30;

player_x = 10;
player_y = 10;

var player_object =" ";
var block_object = " ";

function player_update(){

fabric.Image.fromURL("player.png", function(Img){

    player_object=Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({

        top:player_y,
        left:player_x
    });
canvas.add(player_object);

});
}

function new_image(get_image){

    fabric.Image.fromURL( get_image, function(Img){
    
       block_object=Img;
    
        block_object.scaleToWidth(block_Width);
        block_object.scaleToHeight(block_Height);
        block_object.set({
    
            top:player_y,
            left:player_x
        });
    canvas.add(block_object);
    
    });
    }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e){
    keyPressed = e.keyCode;
if(keyPressed == "38")
{
up();

}
if(keyPressed == "37"){
left();


}
if(keyPressed == "39"){
    right();
    
    
    }
if(keyPressed == "40"){
    down();
        
        
}
if(keyPressed == "87"){
    new_image("wall.jpg");
    
    
    }
 if(keyPressed == "71"){
new_image("ground.png");
        
        
}
if(keyPressed == "76"){
new_image("light_green.png");
                        
}
if(keyPressed == "84"){
new_image("trunk.jpg");                
                
}
if(keyPressed == "82"){
new_image("roof.jpg");
                                        
}
if(keyPressed == "89"){
new_image("yellow_wall.png");
                                                
}
if(keyPressed == "68"){
new_image("dark_green.png");
                                                        
}
if(keyPressed == "85"){
new_image("unique.png");

}  
 if(keyPressed == "67"){
new_image("cloud.jpg");
                                                                      
 }

if(e.shiftKey == true && keyPressed == "80"){

block_Width = block_Width + 10;
block_Height = block_Height + 10;
document.getElementById("present_width").innerHTML =block_Width;
document.getElementById("present_height").innerHTML =block_Height;


    }

if(e.shiftKey == true && keyPressed == "77"){
    
block_Width = block_Width - 10;
block_Height = block_Height - 10;
document.getElementById("present_width").innerHTML =block_Width;
document.getElementById("present_height").innerHTML =block_Height;


    }}

 function up(){

if(player_y >=0)
 player_y = player_y - block_Height;
 canvas.remove(player_object);
 player_update();

}

function down(){
        
    if(player_y <=500)
    player_y = player_y + block_Height;
    canvas.remove(player_object);
     player_update();
            
 }

    function left(){
        
if(player_x >=0)
player_x = player_x - block_Width;
canvas.remove(player_object);
player_update();
                        
}
function right(){
        
if(player_x <=800)
player_x = player_x + block_Width;
canvas.remove(player_object);
player_update();
                                                
}