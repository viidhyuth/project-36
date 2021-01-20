
var dog,Dog,happyDog;
var buttonAddFood,buttonFeedFood;
var database;
var food, foodS;
var fedTime, lastFed; 
var nameInput, nama, saveNameButton;
function preload(){
  Dog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  database = firebase.database(); 
  createCanvas(1000,400);
  dog=createSprite(800,200,150,150);
  dog.addImage(Dog);
  dog.scale=0.15;

  foodObject = new Food();
  food = database.ref('Food');
  food.on("value",readStonk);
 
  fedTime = database.ref("FeedTime");
  fedTime.on("value", function (data){
    lastFed = data.val();
  })

  buttonFeedFood = createButton("Feed Doggo!");
  buttonFeedFood.position(800,95);
  buttonFeedFood.mousePressed(feedDoge);

  buttonAddFood = createButton("Add Doggo's Food!");
  buttonAddFood.position(buttonFeedFood.x-140,95);
  buttonAddFood.mousePressed(addFood);

  nameInput = createInput("NAME THE DOG");
  nameInput.position(500,500);
  saveNameButton = createButton("SAVE NAME");
  saveNameButton.position(500,600);
  saveNameButton.mousePressed(named);
}

function draw() {
  
  background(46,139,87);
  
  foodObject.display();

  showFedTime(); 
  showFoodFed(); 
  drawSprites();
}