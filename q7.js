var passenger ={
}
var read = require('readline-sync');
passenger.Name=read.question("Enter your name: ");
passenger.Miles=read.questionFloat("Enter the miles travelled: ");
var Distance = parseInt(passenger.Miles);
var point=0;
if (Distance > 10000 & Distance <=20000)
{
    point+=10;
    console.log("Point=",point)
}
else if (Distance > 20000 & Distance <=50000)
{
    point+=20;
    console.log("name="+passenger.Name +"  Point=",point)
}
else if (Distance > 10000 & Distance <=20000)
{
    point+=30;
    console.log("name="+passenger.Name +" Point=",point)
}
else if (Distance > 100000)
{
    point+=50;
    console.log("name="+passenger.Name + " point=",point)
}
else{
    point=0;
    console.log("name="+passenger.Name + " Point=",point)
}
