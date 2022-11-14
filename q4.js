var read=require('readline-sync')
var DOB=read.question("enter your date of birth as date/month/year:")
var currentyear=read.questionFloat("enter the current year:")
var arraydob=DOB.split("/")
var year=parseInt(arraydob[2])
var age=currentyear-year;
console.log("age in years:",age);
var month=age*12;
console.log("age in month:",month);
var weeks=age*12*4;
console.log("age in weeks",weeks);
var days=age*12*365;
console.log("age in days",days);
var hours=age*365*24;
console.log("age in hours",hours);
if(parseInt((year%4==0)&(year%100==0)||(year%400==0))){
    console.log(year + "is a leapyear")
}
else{
    console.log(year + "is a not a leapyear")
}


