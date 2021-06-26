//Create variables here

var dog,dogImg,happyDog,database,foodS,foodStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogimg.png")
  happyDog = loadImage("images/dogimg1.png")
}

function setup() {
  database = firebase.database();

	createCanvas(500,500);

    dog = createSprite(250,250,10,10);
    dog.addImage(dogImg)
    dog.scale = 0.2;

     foodStock = database.ref('Food');
     foodStock.on("value",readStock)
}


function draw() {  
   background( 46, 139, 87) 
   if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  text(foodStock,100,100)
  fill("blue")
  textSize(20);


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('ball/position').update({Food:X})
}



