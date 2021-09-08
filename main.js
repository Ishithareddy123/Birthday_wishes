var canvas = new fabric.Canvas('my_Canvas');
 var x= document.getElementById("myAudio");
img=""
function new_image()
{
    fabric.Image.fromURL("birthdayImage.jpg",function(img){
    block_image_object=img;
    block_image_object.scaleToWidth(canvas.width);
    block_image_object.scaleToHeight(canvas.height);
    block_image_object.set({
        top:0,
        left:0
    })
    canvas.add(block_image_object);
    })		
	
}

function playSound(){
x.play();
}
