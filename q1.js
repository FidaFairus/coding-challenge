Names =[];
var read = require('readline-sync');
for( let i=0;i<10;i++){
        Names[i]=read.question("enter the name: ")

}
// console.log(Names);
console.log("Options");
console.log("1.Display in ascending order");
console.log("2.Display in descending order");
console.log("3. Search");
console.log("4.Find length");
console.log("5.Print duplicate entries");
console.log("6.split names");
console.log("7.exit");
while(true){    
    var option = read.question("Enter the option: ");
    console.log(option);    
    if (option==1){
       ascending(Names)
    }
    else if(option==2){
       descending(Names)
    }
    else if(option==3){
        search(Names)
    }
    else if(option==4){
        length(Names)
    }
    else if(option==5){
        duplicates(Names)
    }
    else if(option==6){
        splitting(Names)
    }
    
    else{
    process.exit((0));
    }
    }

    //display in ascending order
    function ascending(Names)
       {
        for( let j=0;j<10;j++){
            for (let k=j+1;k<10;k++){
                if(Names[j]>Names[k]){
                    let dup=Names[j];
                    Names[j]=Names[k];
                    Names[k]=dup;
                }
            }
        }
        console.log(Names)
       }

//descending order
       function descending(Names){
        for( let j=0;j<10;j++){
            for (let k=j+1;k<10;k++){
                if(Names[j]<Names[k]){
                    let dup=Names[j];
                    Names[j]=Names[k];
                    Names[k]=dup;
                }
            }
        }
        console.log(Names)
       }


//search
function search(Names){
    let searchname = read.question("Name: ")
    var count=0;
    for(let i=0;i<10;i++){
        if(Names[i]==searchname){
            console.log("the searched names is in the array",Names[i])
            count+=1;
        }
    }
        if (count==0){
        console.log("searched name is not present")
         }
}


//length
function length(){
let Namelength=[];
for( let i=0;i<10;i++){
    a=Names[i];
    let j=0;
    var count2=0;
    while(a[j]!= undefined)
    {
        count2+=1;
        j++;
    }
    Namelength[i]=count2;
}
console.log(Namelength)
}

//Duplicate
// function duplicates(Names){
//     var dupli=[];
//     for(let i=0;i<10;i++){
//         for(let j=i+1;j<10;j++)
//         {

//             if(Names[i]==Names[j])
//             {
//                 dupli[i]=Names[i];
//             }
//         }
//     }
//     console.log(dupli)
// }
function duplicates(Names){
let count = {};
Names.forEach((x) => {
  count[x] = (count[x] || 0) + 1;
});
console.log(count);
}

//splitting
function splitting(Names){
    console.log("split passenger name ");
      for (let i = 1; i <= 10; i++) {
        let name = Names[i - 1];
        let nameArray = name.split(" ");
        console.log(`${nameArray}`);
      }
    }

