var read=require('readline-sync')
var DOB=[]
for(let i=0;i<3;i++)
{
DOB[i]=read.question("enter your date of birth as date/month/year:")
}
console.log(DOB)
var currentyear=read.questionFloat("enter the current year:")
var array=[];

age(DOB,currentyear)

//age
function age(DOB,currentyear){
for(let j=0;j<10;j++){
    var arraydob=[];
    var a=DOB[j]
    arraydob=a.split("/")
    var year=arraydob[2];
    var age=currentyear-year;
    array[j]=age;
    
}
console.log(array)
for( let i=0;i<10;i++){
    if(array[i]<=10){
        console.log("age="+array[i]+ ":kid")
    }
    else if(array[i]>10 & array[i]<=30){
        console.log("age="+array[i]+ ":youth")
    }
    if(array[i]>30 & array[i]<=60){
        console.log("age="+array[i]+ ":adult")
    }
    if(array[i]>60){
        console.log("age="+array[i]+ ":older")
    }
    
}
}
