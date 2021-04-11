 canvas=document.getElementById("mycanvas");
 ctx=canvas.getcontext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";
images_array=["marsimage_1.jpeg", "marimage_2.jpeg", "marsimage_3.jpg"];
randomnumber=Math.floor(Math.random() *3);

background_image=image_array[randomnumber];


function add(){
    background_imgTag=new Image;
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

rover_img=new Image;
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_image;
    
}
function uploadbackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}
window.addEventlistener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed== "38"){
        up();
    }
    if(keyPressed== "40"){
        down();
    }
    if(keyPressed== "37"){
        left();
    }
    if(keyPressed== "39"){
        right();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
        
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}

