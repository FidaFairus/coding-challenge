var Flight_fare =[];
var read = require('readline-sync');
for( let i=0;i<10;i++)
{
    Flight_fare[i]=read.question("enter the fare: ")
        

}
var flightfare2=[]
for(i=0;i<10;i++){
flightfare2[i]=parseFloat(Flight_fare[i]);
}
console.log(flightfare2);
console.log("Options");
console.log("1.Display in ascending order");
console.log("2.Display in descending order");
console.log("3. Search");
console.log("4.Max and Min");
console.log("5.duplicate");
console.log("6.exit");
while(true){    
    var option = read.questionFloat("Enter the option: ");
    console.log(option);    
    if (option==1){
       var ascend=ascending(flightfare2);
       console.log(ascend)
       
    }
    else if(option==2){
       descending(flightfare2)
    }
    else if(option==3){
        search(flightfare2)
    }
    else if(option==4){
        MaxMin(flightfare2)
    }
    else if(option==5){
        duplicates(flightfare2)
    }    
    else{
    process.exit((0));
    }
    }

    //display in ascending order
    function ascending(flightfare2)
       {
        for( let j=0;j<=10;j++){
            for (let k=j+1;k<=10;k++){
                if(flightfare2[j]>flightfare2[k]){
                    let dup=flightfare2[j];
                    flightfare2[j]=flightfare2[k];
                    flightfare2[k]=dup;
                }
            }
        }
        return(flightfare2);
       }

//descending order
       function descending(flightfare2){
        for( let j=0;j<10;j++){
            for (let k=j+1;k<10;k++){
                if(flightfare2[j]<flightfare2[k]){
                    let dup=flightfare2[j];
                    flightfare2[j]=flightfare2[k];
                    flightfare2[k]=dup;
                }
            }
        }
        console.log(flightfare2)
       }


//search
function search(flightfare2){
    let fare = read.question("fare: ")
    var count=0;
    for(let i=0;i<10;i++){
        if(flightfare2[i]==fare){
            console.log("the searched fare is in the array",flightfare2[i])
            count+=1;
        }
    }
        if (count==0){
        console.log("searched fare is not present")
         }
}



//Duplicate
// function duplicates(Names){
//     var dupli=[];
//     for(let i=0;i<5;i++){
//         for(let j=i+1;j<5;j++)
//         {

//             if(Names[i]==Names[j])
//             {
//                 dupli[i]=Names[i];
//             }
//         }
//     }
//     console.log(dupli)
// }


//max and min
function MaxMin(flightfare2){
    var array=[]
    array=ascending(flightfare2);
    var min=array[0];
    var max=array[4];
    console.log("The minimum fare is:",min )
    console.log("The maximum fare is:",max )

    
}

//duplicates
function duplicates(){
    let vistited = [];
    let flag = 1;
    console.log("duplicate fares are :")
    for(let i = 0;i<10;i++){
        for(let j = i+1;j<10;j++){
            if(flightfare2[i] == flightfare2[j]){
                flag = 1;
                vistited.forEach(v =>{
                    if(flightfare2[i] == v){
                        flag = 0;
                    }
                })
                if(flag){
                    console.log(flightfare2[i]);
                    vistited.push(flightfare2[i]);
                }
            }
        }
    }
}





