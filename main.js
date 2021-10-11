function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDectector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects . . .";
}
img = "";
status = "";
function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}
function preload()
{
    img = loadImage('dog_cat.jpg');
}
function draw()
{
    image(img,0,0,640,420);
    fill("#62ff00");
    text("dog", 45, 75);
    noFill();
    stroke("cyan");
    rect(30, 60,450, 350);
    fill("#8cb4f5");
    text("cat", 320, 120);
    noFill();
    stroke("cyan");
    rect(300, 90, 300, 300);
}